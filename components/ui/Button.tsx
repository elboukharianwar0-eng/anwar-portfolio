import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  className?: string;
  arrow?: boolean;
  ariaLabel?: string;
};

const baseClasses =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-60";

const sizes: Record<string, string> = {
  sm: "h-9 px-4 text-[13.5px]",
  md: "h-12 px-6 text-[15px]",
};

const variants: Record<string, string> = {
  primary:
    "bg-accent text-white shadow-[0_14px_34px_-16px_rgba(255,45,120,0.9)] hover:bg-[#ff4d8f] hover:shadow-[0_18px_40px_-16px_rgba(255,45,120,1)]",
  secondary:
    "border border-white/[0.14] bg-white/[0.04] text-white hover:border-white/25 hover:bg-white/[0.08]",
  ghost:
    "border border-transparent bg-transparent text-mist hover:text-white",
};

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-1"
    >
      →
    </span>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  arrow = true,
  ariaLabel,
}: BaseProps) {
  return (
    <span
      className={cn(baseClasses, sizes[size], variants[variant], className)}
      aria-label={ariaLabel}
    >
      {children}
      {arrow && <Arrow />}
    </span>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  arrow = true,
  ariaLabel,
  external = false,
}: BaseProps & { href: string; external?: boolean }) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(baseClasses, sizes[size], variants[variant], className)}
    >
      {children}
      {arrow && <Arrow />}
    </a>
  );
}

export function ButtonActionButton({
  onClick,
  children,
  variant = "primary",
  size = "md",
  className,
  arrow = false,
  type = "button",
  disabled = false,
  ariaLabel,
}: BaseProps & {
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={cn(baseClasses, sizes[size], variants[variant], className)}
    >
      {children}
      {arrow && <Arrow />}
    </button>
  );
}
