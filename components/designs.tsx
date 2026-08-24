import { MotionDiv } from "@/components/motion";
import { Subheading } from "@/components/typography";
import { ProjectItem } from "@/components/project-item";

const designs = [
  {
    name: "Cluster",
    description:
      "A Realtime Chat app inspired from discord, With permissions, role hierarchy and many more features.",
    icon: "/projects/cluster.svg",
    href: "https://www.figma.com/design/MIKKK2XA1I6bf35XGxKmrp/Cluster?node-id=0-1&t=6S2hpZechKtNEwCQ-1",
    imageUrl:
      "https://res.cloudinary.com/dlpjh3fcx/image/upload/v1787573084/cluster-thumbnail_xl9lvz.svg",
  },
  {
    name: "Lunar IDE",
    description:
      "Lunar is an AI-Powered IDE build for new era of software development. It harnesses the power of all frontier LLMs to bring intelligence at your finger tips.",
    icon: "/projects/lunar.svg",
    href: "https://www.figma.com/design/8I5NrlYUTzFJVBX0dtghMA/Lunar-IDE?node-id=6-2&t=6S2hpZechKtNEwCQ-1",
    imageUrl:
      "https://res.cloudinary.com/dlpjh3fcx/image/upload/v1787573113/luner-thumbnail_z4hbza.svg",
  },
];

export function Designs() {
  return (
    <MotionDiv delay={0.4} id="designs" className="flex flex-col gap-5">
      <Subheading id="designs">Designs</Subheading>
      <div className="flex flex-col">
        {designs.map((design, idx) => (
          <MotionDiv key={design.name} delay={idx * 0.05}>
            <ProjectItem {...design} />
          </MotionDiv>
        ))}
      </div>
    </MotionDiv>
  );
}
