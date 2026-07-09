import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Binyam",
      jobTitle: "Professional Website Developer & Frontend Engineer",
      url: "https://binii.dev",
      image: "https://binii.dev/profile-square.jpg",
      description:
        "Professional website developer offering custom web applications, high-performance sites, and interactive web experiences.",
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
      <Portfolio />
      <Contact />
    </>
  );
}
