"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRightIcon,
  CaretDownIcon,
  DotOutlineIcon,
} from "@phosphor-icons/react";
import { MotionDiv } from "@/components/motion";
import { Body, Caption, LinkText, Subheading } from "@/components/typography";

const experiences = [
  {
    company: "Quarlatis LLP",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQFRdrIZue68hA/company-logo_200_200/B56Zcq041lHoAM-/0/1748770197624?e=1788998400&v=beta&t=LdItwZhQa_B_n8isvTycvZGZfostFqvkkEx8mouzoP8",
    role: "Full-Stack Intern",
    period: "Oct 2025 - Nov 2025",
    href: "https://www.linkedin.com/company/quarlatis/?originalSubdomain=in",
    highlights: [
      "Developed an MVP for a Figma-to-server workflow using Codex, exploring AI-assisted product development and automation.",
      "Implemented Figma designs into responsive, production-ready interfaces with a strong focus on visual fidelity and usability.",
      "Added delightful animations, micro-interactions, and motion details to make interfaces feel more responsive and engaging.",
    ],
  },
];

export function Experience() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <MotionDiv delay={0.1} id="experience" className="flex flex-col gap-5">
      <Subheading id="experience">Experience</Subheading>
      <div className="flex flex-col border-y border-neutral-300 py-3">
        {experiences.map((experience) => {
          const open = openId === experience.company;
          return (
            <div key={experience.company} className="flex flex-col">
              <button
                type="button"
                aria-expanded={open}
                aria-controls={`experience-${experience.company}`}
                onClick={() => setOpenId(open ? null : experience.company)}
                className="flex cursor-pointer items-center justify-between pr-2 text-left"
              >
                <div className="flex flex-col gap-2">
                  <a
                    href={experience.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/company flex w-fit flex-wrap items-center gap-x-2 gap-y-1"
                  >
                    <Image
                      src={experience.logo}
                      alt=""
                      width={18}
                      height={18}
                      className="rounded-sm"
                    />
                    <LinkText
                      as="span"
                      className="font-semibold text-neutral-800 group-hover/company:underline"
                    >
                      {experience.company}
                    </LinkText>
                    <ArrowUpRightIcon
                      size={16}
                      weight="bold"
                      className="text-neutral-500 transition-transform duration-300 group-hover/company:translate-x-0.5 group-hover/company:-translate-y-0.5 group-hover/company:text-neutral-800"
                      aria-hidden
                    />
                  </a>
                  <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <DotOutlineIcon
                      size={18}
                      className="shrink-0 text-neutral-700"
                      aria-hidden
                    />
                    <Body as="span" className="text-neutral-800">
                      {experience.role}
                    </Body>
                    <Body as="span">—</Body>
                    <Caption>{experience.period}</Caption>
                  </span>
                </div>
                <span
                  className={`flex items-center justify-center rounded-full p-1 transition-all hover:bg-neutral-300 ${
                    open ? "rotate-180 bg-neutral-300" : ""
                  }`}
                >
                  <CaretDownIcon size={12} aria-hidden />
                </span>
              </button>
              <div
                id={`experience-${experience.company}`}
                className={`grid transition-all duration-300 ${
                  open ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr]"
                }`}
              >
                <ul className="flex flex-col gap-4 overflow-hidden">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2.5 pl-7">
                      <Body as="span">—</Body>
                      <Body>{highlight}</Body>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </MotionDiv>
  );
}
