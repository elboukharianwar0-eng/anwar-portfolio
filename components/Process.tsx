import { processSteps } from "@/data/process";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  return (
    <Section id="process" labelledBy="process-title">
      <Container>
        <SectionHeading
          id="process-title"
          eyebrow="Process"
          title="How I Work"
          description="A straightforward path from the first conversation to a finished, working product."
        />

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[22px] hidden h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent lg:block"
          />

          <ol className="flex flex-col gap-7 lg:grid lg:grid-cols-6 lg:gap-5">
            {processSteps.map((step, index) => (
              <li key={step.index} className="group relative">
                <div className="flex gap-4 lg:block">
                  <div className="relative shrink-0">
                    <span
                      aria-hidden="true"
                      className={
                        index < processSteps.length - 1
                          ? "absolute left-[21px] top-11 h-[calc(100%+1.75rem)] w-px bg-white/[0.1] lg:hidden"
                          : undefined
                      }
                    />
                    <span className="relative z-10 grid h-11 w-11 place-items-center rounded-full border border-white/[0.12] bg-ink font-mono text-[13px] text-accent-soft transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent/10">
                      {step.index}
                    </span>
                  </div>
                  <div className="min-w-0 lg:mt-5">
                    <h3 className="text-[15.5px] font-semibold tracking-[-0.01em] text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-mist">
                      {step.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-12 max-w-[62ch] border-l border-accent/40 pl-5 text-[15px] leading-relaxed text-mist">
            Every project follows the same standard: understand the problem
            first, build with clean structure, test thoroughly, and keep
            communication clear from start to finish.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
