"use client";

import { useEffect, useRef, useState } from "react";
import {
  EnvelopeSimpleIcon,
  FigmaLogoIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";

const socials = [
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/",
    Icon: LinkedinLogoIcon,
  },
  {
    label: "Figma",
    href: "",
    Icon: FigmaLogoIcon,
  },
  { label: "Twitter", href: "https://x.com/", Icon: XLogoIcon },
  {
    label: "Email",
    href: "mailto:shazabdev@gmail.com",
    Icon: EnvelopeSimpleIcon,
  },
  { label: "Github", href: "https://github.com/", Icon: GithubLogoIcon },
];

export function SiteFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const update = () => setHeight(el.offsetHeight);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div aria-hidden style={{ height }} />
      <footer
        ref={footerRef}
        className="bg-accent fixed inset-x-0 bottom-0 z-0 overflow-hidden"
      >
        <h2
          id="socials"
          className="mx-auto flex w-full max-w-136.5 flex-wrap items-center justify-between gap-x-10 gap-y-3 px-6 pt-9 lg:w-136.5 lg:px-0"
        >
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-neutral-100 transition-opacity"
            >
              <Icon size={18} />
              <span className="text-sm leading-4.5 font-medium group-hover:underline">
                {label}
              </span>
            </a>
          ))}
        </h2>
        <div
          aria-hidden
          className="pointer-events-none mt-7 translate-y-[12%] text-center text-[18vw] leading-none font-bold tracking-tight whitespace-nowrap text-neutral-200 select-none"
        >
          Shazab Saifi
        </div>
      </footer>
    </>
  );
}
