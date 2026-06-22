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
    default: "Binyam | Frontend Web Developer",
    template: "%s | Binyam",
  },
  description:
    "Portfolio of Binyam, a Frontend Web Developer specializing in React, Next.js, and modern web architectures.",
  openGraph: {
    title: "Binyam | Frontend Web Developer",
    description: "Portfolio of Binyam, a Frontend Web Developer.",
    url: "https://binii.dev",
    siteName: "Binyam Portfolio",
    locale: "en_US",
    type: "website",
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
