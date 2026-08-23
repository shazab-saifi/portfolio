import { Subheading } from "@/components/typography";
import { ProjectItem } from "@/components/project-item";

const designs = [
  {
    name: "Cluster",
    description:
      "A Realtime Chat app inspired from discord, With permissions, role hierarchy and many more features.",
    icon: "/projects/cluster.svg",
    href: "#",
  },
  {
    name: "Lunar IDE",
    description:
      "Lunar is an AI-Powered IDE build for new era of software development. It harnesses the power of all frontier LLMs to bring intelligence at your finger tips.",
    icon: "/projects/lunar.svg",
    href: "#",
  },
];

export function Designs() {
  return (
    <section id="designs" className="flex flex-col gap-5">
      <Subheading id="designs">Designs</Subheading>
      <div className="flex flex-col">
        {designs.map((design) => (
          <ProjectItem key={design.name} {...design} />
        ))}
      </div>
    </section>
  );
}
