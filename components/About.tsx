import { Bot, Cable, Globe, Terminal, Workflow } from "lucide-react";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const whatIDo = [
  { label: "AI Development", icon: Bot },
  { label: "Automation", icon: Workflow },
  { label: "Web Development", icon: Globe },
  { label: "API Integration", icon: Cable },
];

const satellites = [
  { label: "AI Systems", x: 14, y: 26 },
  { label: "Automation", x: 250, y: 26 },
  { label: "Web Apps", x: 14, y: 216 },
  { label: "APIs", x: 250, y: 216 },
];

export function About() {
  return (
    <Section id="about" labelledBy="about-title" className="overflow-hidden">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              id="about-title"
              eyebrow="About"
              title="About Me"
            />

            <Reveal delay={0.05}>
              <p className="mt-7 max-w-[58ch] text-[16.5px] leading-[1.8] text-mist">
                Hi! I&apos;m Anwar, a developer focused on AI automation,
                websites, and practical software solutions. I build AI-powered
                tools, business websites, automations, and custom applications
                using Python, JavaScript, and AI/LLM APIs. Whether you need an
                AI assistant, automated workflow, professional website, or help
                turning an idea into a working project, I can build it from the
                ground up. I focus on clean work, clear communication, and
                reliable results.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-soft">
                  What I Do
                </h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {whatIDo.map(({ label, icon: Icon }) => (
                    <li key={label}>
                      <div className="group flex items-center gap-3.5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/[0.06]">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/[0.08] bg-accent/10 text-accent-soft transition-colors group-hover:bg-accent/20">
                          <Icon aria-hidden="true" className="h-4.5 w-4.5" strokeWidth={1.75} />
                        </span>
                        <span className="text-[14.5px] font-medium text-white">
                          {label}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="lg:pt-4">
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-surface/70 p-6 shadow-card md:p-8">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_0%,rgba(255,45,120,0.1),transparent_70%)]"
              />
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-faint">
                  system overview
                </span>
                <span className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-emerald-300/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-soft" aria-hidden="true" />
                  online
                </span>
              </div>

              <svg
                viewBox="0 0 400 300"
                role="img"
                aria-label="Diagram: an idea connected to AI systems, automation, web apps, and APIs"
                className="relative mt-4 h-auto w-full"
              >
                <defs>
                  <linearGradient id="node-line" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ff2d78" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#ff5c9d" stopOpacity="0.6" />
                  </linearGradient>
                </defs>

                <g stroke="url(#node-line)" strokeWidth="1.5" fill="none">
                  <path className="animate-dash" strokeDasharray="6 8" d="M200 150 C 150 130, 110 90, 90 55" />
                  <path className="animate-dash" strokeDasharray="6 8" style={{ animationDelay: "0.4s" }} d="M200 150 C 250 130, 290 90, 310 55" />
                  <path className="animate-dash" strokeDasharray="6 8" style={{ animationDelay: "0.8s" }} d="M200 150 C 150 170, 110 210, 90 245" />
                  <path className="animate-dash" strokeDasharray="6 8" style={{ animationDelay: "1.2s" }} d="M200 150 C 250 170, 290 210, 310 245" />
                </g>

                {satellites.map((node) => (
                  <g key={node.label}>
                    <rect
                      x={node.x}
                      y={node.y}
                      width="136"
                      height="40"
                      rx="12"
                      fill="#111118"
                      stroke="rgba(255,255,255,0.12)"
                    />
                    <circle cx={node.x + 18} cy={node.y + 20} r="3.5" fill="#ff80b7" />
                    <text
                      x={node.x + 32}
                      y={node.y + 24}
                      fill="#d5d5de"
                      fontFamily="var(--font-geist-mono), monospace"
                      fontSize="12"
                      letterSpacing="1"
                    >
                      {node.label.toUpperCase()}
                    </text>
                  </g>
                ))}

                <g>
                  <rect
                    x="144"
                    y="128"
                    width="112"
                    height="44"
                    rx="14"
                    fill="rgba(255,45,120,0.14)"
                    stroke="rgba(255,128,183,0.7)"
                  />
                  <text
                    x="200"
                    y="155"
                    textAnchor="middle"
                    fill="#ffd6e7"
                    fontFamily="var(--font-geist-mono), monospace"
                    fontSize="13"
                    letterSpacing="1.5"
                  >
                    YOUR IDEA
                  </text>
                </g>
              </svg>

              <div className="relative mt-4 flex items-center gap-3 rounded-xl border border-white/[0.07] bg-ink/60 px-4 py-3 font-mono text-[11px] text-mist">
                <Terminal aria-hidden="true" className="h-3.5 w-3.5 text-accent-soft" />
                <span>
                  python · typescript · llm apis · rest · next.js
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
