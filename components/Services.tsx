import {
  Bot,
  Boxes,
  Cable,
  Globe,
  MessagesSquare,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/services";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const serviceIcons: Record<string, LucideIcon> = {
  agent: Bot,
  automation: Workflow,
  web: Globe,
  software: Boxes,
  api: Cable,
  assistant: MessagesSquare,
};

export function Services() {
  return (
    <Section id="services" labelledBy="services-title">
      <Container>
        <SectionHeading
          id="services-title"
          eyebrow="Services"
          title="What I Can Build"
          description="Focused work for founders, small businesses, and teams that need modern software — from AI systems to complete websites."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon] ?? Bot;
            return (
              <Reveal key={service.title} delay={(index % 3) * 0.06}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-surface/50 p-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-accent/35 hover:bg-surface/70 hover:shadow-[0_40px_80px_-50px_rgba(255,45,120,0.8)] lg:p-7">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-6 top-0 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-accent to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[11px] tracking-[0.14em] text-faint transition-colors duration-300 group-hover:text-accent-soft">
                      {service.index}
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-mist transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent-soft">
                      <Icon aria-hidden="true" className="h-4.5 w-4.5" strokeWidth={1.75} />
                    </span>
                  </div>
                  <h3 className="mt-8 text-[17px] font-semibold tracking-[-0.01em] text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-mist">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
