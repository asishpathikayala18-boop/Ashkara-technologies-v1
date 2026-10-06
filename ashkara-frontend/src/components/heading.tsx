import type { ElementType } from "react";
import type { PolymorphicProps } from "../types/component";
import { cn } from "../utils/cn";

type HeadingProps<TElement extends ElementType> = PolymorphicProps<TElement> & {
  size?: "display" | "xl" | "lg" | "md";
};

const sizes = {
  display: "text-display font-semibold tracking-normal",
  xl: "text-4xl font-semibold leading-tight sm:text-5xl",
  lg: "text-3xl font-semibold leading-tight sm:text-4xl",
  md: "text-2xl font-semibold leading-snug",
};

export function Heading<TElement extends ElementType = "h1">({
  as,
  className,
  size = "lg",
  ...props
}: HeadingProps<TElement>) {
  const Component = as ?? "h1";

  return (
    <Component
      className={cn("text-balance text-ink-50", sizes[size], className)}
      {...props}
    />
  );
}
