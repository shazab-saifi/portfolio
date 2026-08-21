import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type BodyProps = ComponentProps<"p"> & { as?: "p" | "span" };

export function Body({ as: Tag = "p", className, ...props }: BodyProps) {
  return (
    <Tag
      className={cn(
        "text-sm leading-4.5 font-medium text-neutral-600",
        className,
      )}
      {...props}
    />
  );
}

export function Caption({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "text-xs leading-4 font-medium text-neutral-500",
        className,
      )}
      {...props}
    />
  );
}

type SubheadingProps = ComponentProps<"h2"> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
};

export function Subheading({
  as: Tag = "h2",
  className,
  ...props
}: SubheadingProps) {
  return (
    <Tag
      className={cn(
        "text-base leading-5 font-semibold text-neutral-800",
        className,
      )}
      {...props}
    />
  );
}

type LinkTextProps = ComponentProps<"a"> & { as?: "a" | "span" };

export function LinkText({
  as: Tag = "a",
  className,
  ...props
}: LinkTextProps) {
  return (
    <Tag
      className={cn(
        "text-sm leading-4.5 font-medium text-neutral-500 transition-colors hover:text-neutral-800",
        className,
      )}
      {...props}
    />
  );
}
