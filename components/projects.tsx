import { MotionDiv } from "@/components/motion";
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
    <MotionDiv delay={0.3} id="projects" className="flex flex-col gap-5">
      <Subheading id="projects">Projects</Subheading>
      <div className="flex flex-col">
        {projects.map((project, idx) => (
          <MotionDiv key={project.name} delay={idx * 0.05}>
            <ProjectItem {...project} />
          </MotionDiv>
        ))}
      </div>
    </MotionDiv>
  );
}
