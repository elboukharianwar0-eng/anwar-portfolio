import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px] px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  labelledBy,
  className,
  divider = true,
}: {
  id?: string;
  children: ReactNode;
  labelledBy?: string;
  className?: string;
  divider?: boolean;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "relative scroll-mt-24 py-24 md:py-32",
        divider && "border-t border-white/[0.06]",
        className,
      )}
    >
      {children}
    </section>
  );
}
