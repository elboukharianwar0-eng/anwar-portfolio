import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  className,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn(align === "center" && "text-center", className)}>
      <div
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
        <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-soft">
          {eyebrow}
        </span>
      </div>
      <h2
        id={id}
        className="mt-5 text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-white"
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-[58ch] text-[16px] leading-relaxed text-mist",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
