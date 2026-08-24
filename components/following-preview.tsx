"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  MotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface FollowingPrevieewProps {
  children: React.ReactNode;
  className?: string;
  videoUrl?: string;
  imageUrl?: string;
}

export const FollowingPreview = ({
  children,
  className,
  videoUrl,
  imageUrl,
}: FollowingPrevieewProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [isInside, setIsInside] = useState<boolean>(false);
  const [isFinePointer, setIsFinePointer] = useState<boolean>(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setIsFinePointer(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isFinePointer) return;
    x.set(e.clientX);
    y.set(e.clientY);
  };

  const handleMouseLeave = () => {
    if (!isFinePointer) return;
    setIsInside(false);
  };

  const handleMouseEnter = () => {
    if (!isFinePointer) return;
    setIsInside(true);
  };

  const hasPreview = Boolean(videoUrl || imageUrl);

  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      ref={ref}
      className={cn("relative", isInside && "z-50", className)}
    >
      {children}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isInside && isFinePointer && hasPreview && (
              <FollowPointer
                x={x}
                y={y}
                videoUrl={videoUrl}
                imageUrl={imageUrl}
              />
            )}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
};

export const FollowPointer = ({
  x,
  y,
  videoUrl,
  imageUrl,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
  videoUrl?: string;
  imageUrl?: string;
}) => {
  return (
    <motion.div
      className="fixed z-9999 h-4 w-4 rounded-full"
      style={{
        top: y,
        left: x,
        pointerEvents: "none",
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      <motion.div
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.5,
          opacity: 0,
        }}
        className={
          "aspect-video min-w-max translate-y-5 overflow-hidden rounded-2xl bg-neutral-200/20 p-2 text-xs whitespace-nowrap shadow-2xl backdrop-blur-xs"
        }
      >
        {videoUrl ? (
          <video
            src={videoUrl}
            className="aspect-video w-94 rounded-xl"
            autoPlay
            muted
            playsInline
          />
        ) : imageUrl ? (
          <Image
            src={imageUrl}
            alt=""
            width={200}
            height={200}
            className="aspect-video w-94 rounded-xl"
          />
        ) : null}
      </motion.div>
    </motion.div>
  );
};
