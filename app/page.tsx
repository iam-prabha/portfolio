import { Hero } from "@/components/hero";
import { Contributions } from "@/components/contributions";
import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Contributions />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
}
