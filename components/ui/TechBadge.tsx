import { cn } from "@/lib/utils";
import { TechIcon } from "@/components/ui/TechIcon";

export function TechBadge({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 font-mono text-[11px] tracking-[0.06em] text-mist",
        className,
      )}
    >
      <TechIcon name={label} className="h-3.5 w-3.5 text-white/55" />
      {label}
    </span>
  );
}
