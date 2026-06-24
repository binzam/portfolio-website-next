import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
// import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Binyam",
      jobTitle: "Frontend Web Developer",
      url: "https://binii.dev",
      sameAs: [
        "https://github.com/binzam",
        "https://www.linkedin.com/in/binyam-techan-280017279",
      ],
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <Hero />
      <AboutMe />
      {/* <Portfolio /> */}
      <Contact />
    </>
  );
}
