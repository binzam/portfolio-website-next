import type { Metadata, Viewport } from "next";
import { Roboto, Space_Grotesk, Bebas_Neue } from "next/font/google";
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const DESCRIPTION =
  "Hire a professional website developer to build modern, high-performance web applications. Specializing in custom website creation, interactive UIs, and robust architectures.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Binyam | Professional Website Developer & Frontend Engineer",
    template: "%s | Binyam",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
  creator: AUTHOR_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Binyam | Professional Website Developer",
    description:
      "Hire a professional website developer for modern, high-performance web applications.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Binyam | Professional Website Developer",
    description:
      "Hire a professional website developer for modern, high-performance web applications.",
  },
};

export const viewport: Viewport = {
  themeColor: "#e8dfd1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${spaceGrotesk.variable} ${bebasNeue.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full bg-[#e8dfd1] text-[#131132] flex flex-col">
        {children}
      </body>
    </html>
  );
}
