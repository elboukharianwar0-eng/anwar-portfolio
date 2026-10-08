import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { WhyMe } from "@/components/WhyMe";
import { CtaBanner } from "@/components/CtaBanner";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Process />
      <WhyMe />
      <CtaBanner />
      <Contact />
    </main>
  );
}
