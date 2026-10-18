import type { Metadata } from "next";
import type { Graph } from "schema-dts";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";
import Services from "@/components/Services";
import BlogTeaser from "@/components/blog/BlogTeaser";
import { JsonLd } from "@/components/JsonLd";
import {
  AUTHOR_NAME,
  PERSON_ID,
  SITE_NAME,
  SITE_URL,
  WEBSITE_ID,
} from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const jsonLd: Graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: AUTHOR_NAME,
      jobTitle: "Frontend Engineer",
      url: SITE_URL,
      image: `${SITE_URL}/profile-square.jpg`,
      description:
        "Binyam Techan is a frontend engineer specializing in React, TypeScript, and modern web applications. Explore his projects, technical articles, and development experience.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Addis Ababa",
        addressCountry: "ET",
      },
      knowsAbout: [
        "Web Development",
        "Frontend Engineering",
        "Web Applications",
        "Website Design",
        "React.js",
        "Next.js",
        "UI/UX Animation",
        "Web3 Integrations",
      ],
      sameAs: [
        "https://github.com/binzam",
        "https://www.linkedin.com/in/binyam-techan-280017279",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: SITE_URL,
      isPartOf: { "@id": WEBSITE_ID },
      mainEntity: { "@id": PERSON_ID },
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Nav />
      <main>
        <Hero />
        <AboutMe />
        <Services />
        <Portfolio />
        <BlogTeaser />
        <Contact />
      </main>
    </>
  );
}
