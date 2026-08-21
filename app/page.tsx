import { About } from "@/components/about";
import { Designs } from "@/components/designs";
import { Experience } from "@/components/experience";
import { Nav } from "@/components/nav";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
  return (
    <div className="relative mx-auto w-full max-w-7xl flex-1">
      <Nav />
      <main className="mx-auto flex w-full max-w-136.5 flex-col gap-16 px-6 pt-12 pb-40 lg:w-136.5 lg:px-0 lg:pt-41">
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Designs />
      </main>
    </div>
  );
}
