import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Books from "@/components/Books";
import Music from "@/components/Music";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { education, experience, profile } from "@/lib/resume-data";

export default function Page() {
  const current = experience.find((e) => e.current);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressCountry: "IN",
    },
    ...(current && {
      worksFor: { "@type": "Organization", name: current.company },
    }),
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: education.school,
    },
    sameAs: [profile.github, profile.linkedin],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Nav />
      <ScrollProgress />
      <main id="top" className="flex-1">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Books />
        <Music />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
