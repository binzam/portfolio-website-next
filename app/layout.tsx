import type { Metadata } from "next";
import { Roboto, Space_Grotesk, Bebas_Neue } from "next/font/google";
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
export const metadata: Metadata = {
  metadataBase: new URL("https://binii.dev"),
  title: {
    default: "Binyam | Professional Website Developer & Frontend Engineer",
    template: "%s | Binyam - Web Developer",
  },
  description:
    "Hire a professional website developer to build modern, high-performance web applications. Specializing in custom website creation, interactive UIs, and robust architectures.",
  keywords: [
    "Website Developer",
    "Freelance Web Developer",
    "Frontend Web Developer",
    "Web Application Developer",
    "React Developer",
    "Next.js Expert",
    "Interactive Web Design",
    "Custom Website Builder",
    "Software Localization",
    "Addis Ababa Web Developer",
  ],
  openGraph: {
    title: "Binyam | Professional Website Developer",
    description:
      "Hire a professional website developer for modern, high-performance web applications.",
    url: "https://binii.dev",
    siteName: "Binyam Portfolio",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${spaceGrotesk.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#e8dfd1] text-[#131132] flex flex-col">
        {children}
      </body>
    </html>
  );
}
