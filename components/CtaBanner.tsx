import { ArrowRight } from "lucide-react";
import { socialLinks, socialHref } from "@/data/social";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function CtaBanner() {
  const fiverrHref = socialHref(socialLinks.fiverr);
  const external = fiverrHref.startsWith("http");

  return (
    <section aria-labelledby="cta-title" className="relative scroll-mt-24 py-10 md:py-14">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-white/[0.1] px-6 py-14 text-center sm:px-10 md:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(110%_130%_at_50%_0%,rgba(255,45,120,0.32),rgba(12,12,19,0.92)_55%,rgba(12,12,19,0.98))]"
            />
            <div
              aria-hidden="true"
              className="grid-bg absolute inset-0 opacity-60"
            />
            <div
              aria-hidden="true"
              className="noise absolute inset-0 opacity-[0.06]"
            />

            <div className="relative">
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-soft">
                Ready when you are
              </span>
              <h2
                id="cta-title"
                className="mx-auto mt-5 max-w-[18ch] text-[clamp(1.9rem,4.4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white"
              >
                Have an idea? Let&apos;s build it.
              </h2>
              <p className="mx-auto mt-5 max-w-[56ch] text-[16px] leading-relaxed text-mist md:text-[17px]">
                Whether you need AI automation, a business website, a custom
                tool, or an AI-powered workflow, let&apos;s turn the idea into
                something real.
              </p>
              <div className="mt-9">
                <a
                  href={fiverrHref}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group/btn inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-[15px] font-semibold text-ink shadow-[0_20px_50px_-20px_rgba(255,255,255,0.35)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-accent-soft hover:text-white"
                >
                  Work With Me
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
