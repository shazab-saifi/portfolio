"use client";

import { LinkText } from "@/components/typography";
import { useHeadingsData } from "@/hooks/use-headings-data";
import useIntersectionObserver from "@/hooks/use-interaction-observer";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const TOP_MARGIN = 164;
const LIFT_OFFSET = 160;

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
  const [lift, setLift] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);
  const { headingsData } = useHeadingsData();
  useIntersectionObserver(setActiveNav, activeNav);

  useEffect(() => {
    const update = () => {
      const nav = navRef.current;
      const container = nav?.parentElement;
      if (!nav || !container) return;

      const navBottom = TOP_MARGIN + nav.offsetHeight;
      const containerBottom = container.getBoundingClientRect().bottom;
      setLift(Math.max(0, navBottom + LIFT_OFFSET - containerBottom));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);

    if (el) {
      const top = isInsideFixedContainer(el)
        ? document.documentElement.scrollHeight
        : window.scrollY + el.getBoundingClientRect().top - TOP_MARGIN;
      window.scrollTo({ top, behavior: "smooth" });
      history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <div
      ref={navRef}
      style={{ transform: `translateY(${-lift}px)` }}
      className="fixed top-41 left-1/12 z-20 hidden lg:block xl:left-1/8 2xl:left-1/5"
    >
      <ul className="space-y-2">
        {headingsData.map((heading) => (
          <li key={heading.textContent} className="relative overflow-visible">
            {activeNav.toLowerCase() === heading.id && (
              <motion.span
                layoutId="nav-active-indicator"
                className="bg-accent absolute top-1 -left-6 size-4 rounded-full will-change-transform"
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
              className={`transition-all ${
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
