import { About } from "@/components/about";
import { Designs } from "@/components/designs";
import { Experience } from "@/components/experience";
import { Nav } from "@/components/nav";
import ProgessiveBlur from "@/components/progressive-blur";
import { Projects } from "@/components/projects";
import { SiteFooter } from "@/components/site-footer";
import { TechStack } from "@/components/tech-stack";
import ReactLenis from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root options={{ duration: 1.5 }}>
      <div id="page" className="z-10 mx-auto w-full flex-1 bg-neutral-200">
        <ProgessiveBlur />
        <main className="mx-auto flex w-full flex-col px-6 pb-20 lg:px-0 lg:pb-40">
          <div className="relative mx-auto">
            <Nav />
            <div className="flex max-w-136.5 flex-col gap-16">
              <About />
              <Experience />
              <TechStack />
              <Projects />
              <Designs />
            </div>
          </div>
        </main>
      </div>
      <SiteFooter />
    </ReactLenis>
  );
}
