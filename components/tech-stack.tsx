import { Body, Subheading } from "@/components/typography";
import { MotionDiv } from "./motion";

const techStack = [
  { label: "Languages", items: ["Typescript", "Python"] },
  {
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Shadcn UI",
      "Tailwind CSS",
      "Motion.dev",
      "Animate.css",
      "React Native",
    ],
  },
  { label: "Design", items: ["Figma", "Paper", "Canva", "Relume"] },
  {
    label: "Backend",
    items: [
      "Express.js",
      "Node.js",
      "Bun",
      "Hono",
      "Cloudflare Workers",
      "BetterAuth",
      "Supabase",
      "Postgresql",
      "MongoDB",
      "Prisma",
      "Drizzle",
    ],
  },
  {
    label: "DevOps",
    items: ["Docker", "CI/CD", "AWS", "GCP", "Digital Ocean", "Kubernetes"],
  },
  {
    label: "Workflow",
    items: ["Git", "GitHub", "Cursor", "Codex", "Claude Code", "OpenCode"],
  },
];

export function TechStack() {
  return (
    <MotionDiv delay={0.2} className="flex flex-col gap-5">
      <Subheading id="skills">Skills</Subheading>
      <div className="flex flex-col">
        {techStack.map((row, idx) => (
          <MotionDiv
            key={idx}
            delay={idx * 0.05}
            className={`flex items-start border-neutral-300 py-3 ${idx === 0 ? "border-y" : "border-b"}`}
          >
            <Body
              as="span"
              className="w-19 shrink-0 font-semibold text-neutral-800"
            >
              {row.label}
            </Body>
            <Body
              as="span"
              className="mx-2 h-fit font-semibold text-neutral-800"
            >
              —
            </Body>
            <Body>{row.items.join(", ")}</Body>
          </MotionDiv>
        ))}
      </div>
    </MotionDiv>
  );
}
