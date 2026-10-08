import {
  CodeXml,
  Hammer,
  MessageSquare,
  SearchCheck,
  Target,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const reasons: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Practical solutions",
    text: "I build what solves the problem — not what looks good in a pitch.",
    icon: Hammer,
  },
  {
    title: "Clear communication",
    text: "You always know what is being built, what is next, and why.",
    icon: MessageSquare,
  },
  {
    title: "Modern technology",
    text: "Current tools and frameworks, chosen to fit the actual task.",
    icon: Zap,
  },
  {
    title: "Clean implementation",
    text: "Structured, readable code that is easy to extend later.",
    icon: CodeXml,
  },
  {
    title: "Attention to detail",
    text: "Spacing, states, edge cases — the small things get finished too.",
    icon: SearchCheck,
  },
  {
    title: "Results-focused",
    text: "The measure of the work is whether it works for your business.",
    icon: Target,
  },
];

export function WhyMe() {
  return (
    <Section id="why" labelledBy="why-title">
      <Container>
        <SectionHeading
          id="why-title"
          eyebrow="Why Me"
          title="Why work with me"
          description="No inflated claims — just focused, dependable development work."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={(index % 3) * 0.06}>
                <div className="group h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-400 hover:-translate-y-0.5 hover:border-accent/35 hover:bg-accent/[0.05]">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-accent/30 bg-accent/10 text-accent-soft transition-colors duration-300 group-hover:bg-accent/20">
                    <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 text-[15.5px] font-semibold tracking-[-0.01em] text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-mist">
                    {reason.text}
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
