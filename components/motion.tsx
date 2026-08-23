"use client";

import { motion } from "motion/react";
import type { ComponentProps } from "react";

type MotionDivProps = ComponentProps<typeof motion.div> & {
  delay?: number;
};

export function MotionDiv({ delay = 0, ...props }: MotionDivProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      {...props}
    />
  );
}
