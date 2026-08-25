import { MotionDiv } from "@/components/motion";
import { Body, LinkText, Subheading } from "@/components/typography";
import { ProjectItem } from "@/components/project-item";
import { FigmaLogoIcon } from "@phosphor-icons/react/dist/ssr";

const designs = [
  {
    name: "Cluster",
    description:
      "Cluster is a modern, real-time chat app inspired by Discord. It features role-based access control, hierarchical permissions, and collaborative tools.",
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
      <Body className="flex items-center gap-1">
        You can find more of my design work on my{" "}
        <LinkText
          href="https://www.figma.com/@shazabsaifi"
          className="mr-0.5 inline-flex items-center text-neutral-600 underline transition-colors hover:text-neutral-800"
        >
          <FigmaLogoIcon size={18} />
          Figma
        </LinkText>{" "}
        cummunity profile.
      </Body>
    </MotionDiv>
  );
}
