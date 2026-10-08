import { site } from "@/lib/site";

export function TopBanner() {
  if (!site.announcement) return null;

  return (
    <div className="bg-gradient-to-r from-[#ff5c9d] via-[#ff2d78] to-[#ff5c9d] text-[var(--color-ink)]">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2.5 px-4 py-2.5 text-center">
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-ink)]"
        />
        <p className="text-[12.5px] font-medium leading-snug tracking-wide sm:text-[13.5px]">
          {site.announcement}
        </p>
      </div>
    </div>
  );
}