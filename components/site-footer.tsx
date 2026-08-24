"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  EnvelopeSimpleIcon,
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
        className="bg-brand fixed inset-x-0 bottom-0 z-0 grid min-h-44 overflow-hidden"
      >
        <Image
          src="/footer.svg"
          alt=""
          width={1280}
          height={364}
          aria-hidden
          loading="eager"
          className="col-start-1 row-start-1 block w-full self-end select-none"
        />
        <h2
          id="socials"
          className="col-start-1 row-start-1 mx-auto flex w-full max-w-136.5 flex-wrap items-center justify-between gap-x-10 gap-y-3 self-start px-6 pt-5 lg:w-136.5 lg:px-0 lg:pt-[2.656%]"
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
      </footer>
    </>
  );
}
