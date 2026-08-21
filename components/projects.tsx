import { Subheading } from "@/components/typography";
import { ProjectItem } from "@/components/project-item";

const projects = [
  {
    name: "Cluster",
    description:
      "A Realtime Chat app inspired from discord, With permissions, role hierarchy and many more features.",
    icon: "/projects/cluster.svg",
    href: "#",
  },
  {
    name: "Quartz UI",
    description:
      "Quartz UI is a modern animated UI library for Next.js, with easy integration and a CLI for adding components.",
    icon: "/projects/quartz-ui.svg",
    href: "#",
  },
  {
    name: "Pixory",
    description:
      "Pixory is a modern platform to explore, download, and share high-quality photos and videos. Features include search, authentication, and personalized collections.",
    icon: "/projects/pixory.svg",
    href: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-5">
      <Subheading>Projects</Subheading>
      <div className="flex flex-col">
        {projects.map((project) => (
          <ProjectItem key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}
