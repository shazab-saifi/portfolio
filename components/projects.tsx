import { MotionDiv } from "@/components/motion";
import { Subheading } from "@/components/typography";
import { ProjectItem } from "@/components/project-item";

const projects = [
  {
    name: "Cluster",
    description:
      "Cluster is a modern, real-time chat app inspired by Discord. It features role-based access control, hierarchical permissions, and collaborative tools.",
    icon: "/projects/cluster.svg",
    href: "#",
    inDevelopment: true,
  },
  {
    name: "Quartz UI",
    description:
      "Quartz UI is a modern animated UI library for Next.js, with easy integration and a CLI for adding components.",
    icon: "/projects/quartz-ui.svg",
    href: "https://quartzui.shazab.site/",
    videoUrl:
      "https://res.cloudinary.com/dlpjh3fcx/video/upload/v1771162566/quartzui_xzwwdg.mp4",
  },
  {
    name: "Pixory",
    description:
      "Pixory is a modern platform to explore, download, and share high-quality photos and videos. Features include search, authentication, and personalized collections.",
    icon: "/projects/pixory.svg",
    href: "https://pixory.shazab.site/",
    videoUrl:
      "https://res.cloudinary.com/dlpjh3fcx/video/upload/v1771162714/pixory_ij9myc.mp4",
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
