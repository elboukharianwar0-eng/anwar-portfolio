import { skillGroups } from "@/data/skills";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TechIcon } from "@/components/ui/TechIcon";

export function Skills() {
  return (
    <Section id="skills" labelledBy="skills-title">
      <Container>
        <SectionHeading
          id="skills-title"
          eyebrow="Capabilities"
          title="Skills & Technologies"
          description="The tools I use to design, build, and ship AI-powered systems, automations, and modern web products."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.06}>
              <div className="group h-full rounded-2xl border border-white/[0.08] bg-surface/60 p-6 transition-all duration-500 hover:border-white/[0.14] md:p-7">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[11px] text-faint transition-colors group-hover:text-accent-soft">
                    {group.index}
                  </span>
                  <h3 className="text-[16.5px] font-semibold tracking-[-0.01em] text-white">
                    {group.title}
                  </h3>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="inline-flex cursor-default items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-[13px] text-mist transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/[0.07] hover:text-white">
                        <TechIcon
                          name={item}
                          className="h-3.5 w-3.5 text-white/55"
                        />
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
