import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function MockWindow({
  title,
  right,
  children,
}: {
  title: string;
  right?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col bg-ink">
      <div className="flex h-7 shrink-0 items-center gap-2 border-b border-white/[0.07] bg-white/[0.03] px-3 sm:h-8">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
        </span>
        <span className="ml-1 truncate font-mono text-[9px] text-faint sm:text-[10px]">
          {title}
        </span>
        <span className="ml-auto flex items-center gap-2">{right}</span>
      </div>
      <div className="min-h-0 flex-1">{children}</div>
    </div>
  );
}

const tones: Record<string, string> = {
  neutral: "border-white/[0.08] bg-white/[0.04] text-mist",
  accent: "border-accent/30 bg-accent/10 text-accent-soft",
  green: "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",
  amber: "border-amber-400/25 bg-amber-400/10 text-amber-200/90",
};

export function MockPill({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: keyof typeof tones | string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 font-mono text-[8px] leading-tight sm:text-[8.5px]",
        tones[tone] ?? tones.neutral,
        className,
      )}
    >
      {children}
    </span>
  );
}

export function MockField({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="font-mono text-[7.5px] uppercase tracking-[0.14em] text-faint sm:text-[8px]">
        {label}
      </p>
      <p className="mt-0.5 truncate rounded-md border border-white/[0.07] bg-white/[0.02] px-2 py-1 text-[9px] text-white/85 sm:text-[10px]">
        {value}
      </p>
    </div>
  );
}
