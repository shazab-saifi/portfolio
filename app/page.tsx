import { About } from "@/components/about";
import { Designs } from "@/components/designs";
import { Experience } from "@/components/experience";
import { Nav } from "@/components/nav";
import ProgessiveBlur from "@/components/progressive-blur";
import { Projects } from "@/components/projects";
import { SiteFooter } from "@/components/site-footer";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
  return (
    <>
      <div className="relative z-10 mx-auto w-full flex-1 bg-neutral-200 shadow-[0_24px_48px_rgba(0,0,0,0.18)]">
        <Nav />
        <ProgessiveBlur />
        <main className="mx-auto flex w-full max-w-136.5 flex-col gap-16 px-6 pt-12 pb-40 lg:px-0 lg:pt-41">
          <About />
          <Experience />
          <TechStack />
          <Projects />
          <Designs />
        </main>
      </div>
      <SiteFooter />
    </>
  );
}
