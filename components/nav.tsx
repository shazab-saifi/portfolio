"use client";

import { LinkText } from "@/components/typography";
import { useHeadingsData } from "@/hooks/use-headings-data";
import useIntersectionObserver from "@/hooks/use-interaction-observer";
import { motion } from "motion/react";
import { useLenis } from "lenis/react";
import { useState } from "react";

const TOP_MARGIN = 188;

function isInsideFixedContainer(el: HTMLElement) {
  let node = el.parentElement;
  while (node) {
    if (window.getComputedStyle(node).position === "fixed") return true;
    node = node.parentElement;
  }
  return false;
}

export function Nav() {
  const [activeNav, setActiveNav] = useState("");
  const { headingsData } = useHeadingsData();
  useIntersectionObserver(setActiveNav, activeNav);

  const lenis = useLenis();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);

    if (el) {
      const top = isInsideFixedContainer(el)
        ? document.documentElement.scrollHeight
        : window.scrollY + el.getBoundingClientRect().top - TOP_MARGIN;
      lenis?.scrollTo(top, { duration: 1.5 });
      history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <div className="sticky top-47 z-20 hidden w-fit -translate-x-64 lg:block">
      <ul className="space-y-2">
        {headingsData.map((heading) => (
          <li key={heading.textContent} className="relative overflow-visible">
            {activeNav.toLowerCase() === heading.id && (
              <motion.span
                layoutId="nav-active-indicator"
                className="absolute top-1 -left-6 size-4 rounded-full bg-orange-600 will-change-transform"
                transition={{
                  type: "spring",
                  stiffness: 700,
                  damping: 40,
                  mass: 0.6,
                }}
              />
            )}
            <LinkText
              onClick={(e) => handleClick(e, heading.id)}
              className={`cursor-pointer transition-all ${
                activeNav.toLowerCase() === heading.id
                  ? "text-base font-semibold"
                  : "text-neutral-600"
              }`}
            >
              {heading.id.charAt(0).toUpperCase() + heading.id.slice(1)}
            </LinkText>
          </li>
        ))}
      </ul>
    </div>
  );
}
