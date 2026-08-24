import Image from "next/image";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { DotOutlineIcon } from "@phosphor-icons/react/dist/ssr/DotOutline";
import { Body, LinkText } from "@/components/typography";
import { Badge } from "./ui/badge";
import { FollowingPreview } from "./following-preview";

type ProjectItemProps = {
  name: string;
  description: string;
  icon: string;
  inDevelopment?: boolean;
  href: string;
  videoUrl?: string;
  imageUrl?: string;
};

export function ProjectItem({
  name,
  description,
  icon,
  inDevelopment,
  href,
  videoUrl,
  imageUrl,
}: ProjectItemProps) {
  return (
    <FollowingPreview videoUrl={videoUrl} imageUrl={imageUrl}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col gap-2 border-b border-neutral-300 py-3"
      >
        <span className="flex items-center gap-2">
          <Image src={icon} alt="" width={18} height={18} />
          <LinkText
            as="span"
            className="font-semibold text-neutral-800 group-hover:underline"
          >
            {name}
          </LinkText>
          <ArrowUpRightIcon
            size={16}
            weight="bold"
            className="text-neutral-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-800"
            aria-hidden
          />
          {inDevelopment && <Badge variant="outline">In Development</Badge>}
        </span>
        <span className="flex gap-2">
          <DotOutlineIcon
            size={18}
            weight="bold"
            className="shrink-0 text-neutral-700"
            aria-hidden
          />
          <Body>{description}</Body>
        </span>
      </a>
    </FollowingPreview>
  );
}
