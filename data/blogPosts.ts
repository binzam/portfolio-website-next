export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; level?: 2 | 3 }
  | { type: "code"; code: string; language?: string; filename?: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "callout"; text: string; variant?: "tip" | "warning" | "note" }
  | { type: "quote"; text: string; author?: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  emoji: string;
  content: BlogContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "local-https-mern-pwa-android",
    title: "Localhost Lies: Testing Your PWA the Way Your Users Actually Will",
    excerpt:
      "You built a slick PWA. It's flawless on your laptop. Then you open it on your phone and half the features quietly vanish. The fix? fake certificates, a homemade Certificate Authority, and 20 minutes of your life.",
    date: "2026-07-20",
    readTime: "8 min read",
    tags: ["Local Dev", "HTTPS", "PWA", "Vite", "DX"],
    emoji: "🔐",
    content: [
      {
        type: "paragraph",
        text: "Here's a scenario I lived through way too many times before I fixed it. You're building a web app, or a PWA with all the trimmings: service worker, geolocation, maybe camera access for a QR scanner. On your laptop, at `http://localhost:5173`, it's perfect. Buttery animations, install prompt working, everything green in the console. You feel like a genius.",
      },
      {
        type: "paragraph",
        text: "Then you grab your phone, connect it to the same Wi-Fi, type in your laptop's IP address, and suddenly your app is a different, worse app. No install prompt. No location permission dialog. The service worker refuses to register and just silently gives up like a coworker who stopped caring around 4:45pm. You didn't break anything. You just found out localhost has been lying to you the whole time.",
      },
      {
        type: "heading",
        text: "Why this happens",
        level: 2,
      },
      {
        type: "paragraph",
        text: "A bunch of powerful browser APIs (service workers, geolocation, camera and mic access) only work in what browsers call a **secure context**. A secure context is either `https://` or, as a special exception, `localhost` itself. That exception is exactly what's been hiding this problem from you.",
      },
      {
        type: "paragraph",
        text: "On your laptop, `localhost` gets a free pass. The instant your phone hits your laptop's IP address instead (which it has to, because phones don't know what your `localhost` is), you're on plain `http://`, over a network, with none of the secure-context exceptions. So the exact features that matter most for a PWA are the first ones to disappear, and they disappear silently. No error banner. No helpful message. Just missing behavior, which is somehow worse.",
      },
      {
        type: "callout",
        variant: "note",
        text: "Secure context = `https://` **or** `localhost`. Your phone loading your laptop's IP address over plain http is neither, so anything that requires a secure context just quietly opts out.",
      },
      {
        type: "heading",
        text: "What I tried before I fixed it properly",
        level: 2,
      },
      {
        type: "list",
        items: [
          '**Ignoring it.** Told myself I\'d "test properly before deploying." I did not test properly before deploying.',
          "**Tunneling with ngrok.** Works, but you get a new random URL every restart, an extra hop of latency, and a free-tier warning page your test users have to click through first.",
          "**Deploying to a staging URL for every tiny check.** Technically solves it. Also turns a 30-second UI tweak into a 4-minute feedback loop, which is a great way to lose an afternoon.",
        ],
      },
      {
        type: "paragraph",
        text: "None of these were actually solving the problem: they were all just working around not having HTTPS locally. Here's what I actually did instead, running Vite + React on a Linux machine, testing against an Android phone on the same Wi-Fi.",
      },
      {
        type: "heading",
        text: "Step 1: Find your actual local IP",
        level: 2,
      },
      {
        type: "paragraph",
        text: "This is the address your phone will use to reach your laptop. On Linux:",
      },
      {
        type: "code",
        language: "bash",
        code: "hostname -I",
      },
      {
        type: "paragraph",
        text: "You'll probably get more than one address back, something like `192.168.124.85 172.17.0.1 172.18.0.1`, especially if Docker is installed:",
      },
      {
        type: "list",
        items: [
          "`192.168.x.x` → your actual local network IP. **Use this one.**",
          "`172.x.x.x` → Docker's internal network, minding its own business. Ignore it: your phone can't see it and never will.",
        ],
      },
      {
        type: "paragraph",
        text: "So the address I actually want is `192.168.124.85`, and eventually I want to be opening `https://192.168.124.85:5173` on my phone.",
      },
      {
        type: "heading",
        text: "Step 2: Let Vite actually listen on the network",
        level: 2,
      },
      {
        type: "paragraph",
        text: "By default, Vite only exposes your dev server to `localhost`; your phone, sitting on the same Wi-Fi, still can't reach it. Fix that first, before worrying about certificates at all:",
      },
      {
        type: "code",
        language: "ts",
        filename: "vite.config.ts",
        code: "export default defineConfig({\n  server: {\n    // Allow access from other devices on the network\n    host: true,\n    port: 5173,\n  },\n});",
      },
      {
        type: "paragraph",
        text: "At this point `http://192.168.124.85:5173` loads on your phone. Progress! But it's still plain `http://`, which means it's still not a secure context, which means the service worker and geolocation prompts are still ghosting you. This step only solved reachability, not security. Time for certificates.",
      },
      {
        type: "heading",
        text: "Step 3: Install mkcert",
        level: 2,
      },
      {
        type: "paragraph",
        text: '`mkcert` is the tool that fixes this properly. Instead of a self-signed certificate that every browser screams at you about, mkcert creates a local Certificate Authority (CA) and installs it into your machine\'s trust store. Any certificate that CA issues afterward is trusted automatically, no "Your connection is not private" wall, no clicking through red warnings.',
      },
      {
        type: "code",
        language: "bash",
        code: "sudo apt install libnss3-tools\nsudo apt install mkcert",
      },
      {
        type: "callout",
        variant: "note",
        text: "If `mkcert` isn't in your distro's package manager, grab the binary directly from its GitHub releases page instead, same tool, just a different install path.",
      },
      {
        type: "heading",
        text: "Step 4: Create your local Certificate Authority",
        level: 2,
      },
      {
        type: "code",
        language: "bash",
        code: "mkcert -install",
      },
      {
        type: "paragraph",
        text: "Then find where mkcert keeps that CA:",
      },
      {
        type: "code",
        language: "bash",
        code: "mkcert -CAROOT",
      },
      {
        type: "paragraph",
        text: "Inside that folder you'll find two files: `rootCA.pem` and `rootCA-key.pem`.",
      },
      {
        type: "callout",
        variant: "warning",
        text: "`rootCA.pem` is the public certificate other devices need to trust: that's the one you'll copy to your phone. `rootCA-key.pem` is the **private key** for your CA. Never move that one anywhere. If it leaks, someone could mint certificates your machine trusts.",
      },
      {
        type: "heading",
        text: "Step 5: Get rootCA.pem onto your phone",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The doc says to \"copy rootCA.pem to your phone\" like it's obvious, but doesn't say how. Easiest way: send the file to yourself over WhatsApp or Telegram. If you'd rather skip an app, spin up a one-line file server instead and grab the cert over Wi-Fi:",
      },
      {
        type: "code",
        language: "bash",
        code: 'cd "$(mkcert -CAROOT)"\npython3 -m http.server 8000\n# then on your phone, visit:\n# http://192.168.124.85:8000/rootCA.pem',
      },
      {
        type: "heading",
        text: "Step 6: Install the CA certificate on Android",
        level: 2,
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Go to **Settings → Security → More Security Settings → Install from Device Storage → CA Certificate**.",
          "Select the `rootCA.pem` you just downloaded.",
          "Tap through Android's dramatic warning about trusting third-party certificates, and confirm.",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        text: "The exact wording and depth of this menu shifts depending on your phone's manufacturer. Samsung especially enjoys hiding it one folder deeper than everyone else. After installing, Android shows a permanent notification that a certificate authority is installed on the device. That's expected: you did just tell your phone to trust an authority you invented in your terminal five minutes ago.",
      },
      {
        type: "paragraph",
        text: "From this point on, your phone trusts any certificate mkcert creates.",
      },
      {
        type: "heading",
        text: "Step 7: Generate the certificate for your local IP",
        level: 2,
      },
      {
        type: "code",
        language: "bash",
        code: "mkcert 192.168.124.85 localhost",
      },
      {
        type: "paragraph",
        text: "Swap in your own IP from Step 1. This creates two files:",
      },
      {
        type: "list",
        items: [
          "`192.168.124.85+1.pem` → the certificate",
          "`192.168.124.85+1-key.pem` → the private key",
        ],
      },
      {
        type: "heading",
        text: "Step 8: Wire the certificates into Vite",
        level: 2,
      },
      {
        type: "code",
        language: "ts",
        filename: "vite.config.ts",
        code: 'import { defineConfig } from "vite";\nimport react from "@vitejs/plugin-react";\nimport fs from "fs";\n\nexport default defineConfig({\n  plugins: [react()],\n\n  server: {\n    // Allow access from other devices\n    host: true,\n\n    // Enable HTTPS using mkcert certificates\n    https: {\n      key: fs.readFileSync("./192.168.124.85+1-key.pem"),\n      cert: fs.readFileSync("./192.168.124.85+1.pem"),\n    },\n  },\n});',
      },
      {
        type: "callout",
        variant: "tip",
        text: "If your backend API needs HTTPS too so your app is secure end-to-end, the same certificate files work there: swap `app.listen(...)` for `https.createServer({ key, cert }, app).listen(...)` using the exact same `key`/`cert` pair.",
      },
      {
        type: "heading",
        text: "Step 9: Start it up",
        level: 2,
      },
      {
        type: "code",
        language: "bash",
        code: "npm run dev",
      },
      {
        type: "paragraph",
        text: "You should see something like:",
      },
      {
        type: "code",
        code: "Local:   https://localhost:5173\nNetwork: https://192.168.124.85:5173",
      },
      {
        type: "paragraph",
        text: "Open the **Network** URL on your phone, still on the same Wi-Fi.",
      },
      {
        type: "heading",
        text: "The actual payoff",
        level: 2,
      },
      {
        type: "paragraph",
        text: 'Padlock icon, no warnings, secure context achieved. The service worker registers. "Add to Home Screen" shows up unprompted. Location and camera permission dialogs actually fire. Everything behaves exactly like it will in production, hours before you\'ve deployed anything, from your own couch. The whole setup ends up looking like this:',
      },
      {
        type: "code",
        code: "Linux Machine\n      │\n      │ HTTPS\n      ▼\nVite React App\n192.168.124.85:5173\n      │\n      ▼\nPhone Browser",
      },
      {
        type: "quote",
        text: "You're not testing a simulation of the real experience anymore. You're testing the real experience, just early.",
      },
      {
        type: "heading",
        text: "A few closing notes",
        level: 2,
      },
      {
        type: "list",
        items: [
          "If you switch Wi-Fi networks, your laptop's local IP changes, so you'll need to regenerate the leaf certificate for the new IP (no need to redo `mkcert -install` or reinstall anything on your phone; the CA stays valid).",
          "This same setup works for literally any local project, not just one app; set it up once per machine and reuse it everywhere.",
          "It costs you about 20 minutes, once, in exchange for never again being surprised by a feature that only breaks on real devices.",
        ],
      },
      {
        type: "paragraph",
        text: "That's it. No tunnels, no staging deploys just to check a button, no more finding out your PWA doesn't quite work the way you thought after you've already told a client it does.",
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
