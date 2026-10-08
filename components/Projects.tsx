import { ArrowRight, CircleCheck } from "lucide-react";
import type { ComponentType } from "react";
import { projects, type Project, type ProjectVisual } from "@/data/projects";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TechBadge } from "@/components/ui/TechBadge";
import { BusinessAgentMock } from "@/components/projects/mockups/BusinessAgentMock";
import { AssistantMock } from "@/components/projects/mockups/AssistantMock";
import { GeneratorMock } from "@/components/projects/mockups/GeneratorMock";
import { AutomationMock } from "@/components/projects/mockups/AutomationMock";
import { cn } from "@/lib/utils";

const visuals: Record<ProjectVisual, ComponentType> = {
  "business-agent": BusinessAgentMock,
  assistant: AssistantMock,
  generator: GeneratorMock,
  automation: AutomationMock,
};

function ProjectCard({
  project,
  flip,
}: {
  project: Project;
  flip: boolean;
}) {
  const Mock = visuals[project.visual];

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-surface/50 p-5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-accent/30 hover:bg-surface/70 hover:shadow-[0_50px_90px_-55px_rgba(255,45,120,0.7)] sm:p-7 lg:p-9">
      <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-12">
        <div
          className={cn(
            "min-w-0",
            flip ? "lg:order-2" : "lg:order-1",
          )}
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-soft">
              Project {project.index}
            </span>
            <span
              aria-hidden="true"
              className="h-px flex-1 bg-white/[0.09]"
            />
          </div>

          <h3 className="mt-4 text-[clamp(1.45rem,2.3vw,1.95rem)] font-semibold leading-tight tracking-[-0.02em] text-white">
            {project.title}
          </h3>

          <p className="mt-3.5 max-w-[54ch] text-[15px] leading-relaxed text-mist">
            {project.description}
          </p>

          <ul className="mt-5 space-y-2">
            {project.points.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <CircleCheck
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft"
                  strokeWidth={1.75}
                />
                <span className="text-[14px] leading-snug text-white/75">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li key={tech}>
                <TechBadge label={tech} />
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-accent-soft transition-colors hover:text-white"
          >
            Build something like this
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        <div
          className={cn(
            "min-w-0",
            flip ? "lg:order-1" : "lg:order-2",
          )}
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-ink shadow-[0_30px_60px_-40px_rgba(0,0,0,1)] transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-[0_40px_80px_-40px_rgba(255,45,120,0.5)]">
            <div className="h-[330px] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.015] sm:h-[360px] lg:h-[390px]">
              <Mock />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-transparent"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section id="work" labelledBy="work-title">
      <Container>
        <SectionHeading
          id="work-title"
          eyebrow="Selected Work"
          title="Projects built like real products"
          description="A closer look at the systems I design and build — AI agents, assistants, generators, and automation workflows."
        />

        <div className="mt-14 space-y-6 md:space-y-8">
          {projects.map((project, index) => (
            <Reveal key={project.id}>
              <ProjectCard project={project} flip={index % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
