"use client";

import { motion } from "motion/react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type MotionTextProps = ComponentProps<"span"> & {
  children: string;
};

export function MotionText({ children, className, ...props }: MotionTextProps) {
  const chars = Array.from(children);

  return (
    <span aria-label={children} className={cn(className)} {...props}>
      {chars.map((char, idx) => (
        <motion.span
          key={idx}
          aria-hidden
          className="inline-block will-change-[opacity,transform,filter]"
          initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: idx * 0.05 }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}
