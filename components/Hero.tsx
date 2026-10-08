"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Bot, Braces, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Section";

const stackLine = ["Python", "TypeScript", "LLM APIs", "Next.js", "Automation"];

const floatingChips = [
  { label: "AI Agents", icon: Bot, position: "-right-3 top-10", delay: "0s" },
  { label: "Python", icon: Sparkles, position: "-left-4 top-1/2", delay: "1.4s" },
  { label: "APIs", icon: Braces, position: "-right-2 bottom-24", delay: "2.6s" },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.09, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="grid-bg absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="absolute -right-[18%] -top-[22%] h-[620px] w-[820px] rounded-full bg-[radial-gradient(closest-side,rgba(255,45,120,0.3),transparent_72%)] blur-[40px]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-[16%] bottom-[-10%] h-[520px] w-[640px] rounded-full bg-[radial-gradient(closest-side,rgba(255,92,157,0.18),transparent_72%)] blur-[40px]"
      />
      <div
        aria-hidden="true"
        className="noise absolute inset-0 opacity-[0.05]"
      />

      <Container className="relative pb-24 pt-36 md:pb-32 md:pt-44 lg:pt-48">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16"
        >
          <div>
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.1] bg-white/[0.03] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-mist">
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-emerald-400" />
                </span>
                Open to freelance projects
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-7 text-[clamp(2.7rem,8.2vw,5.5rem)] font-semibold uppercase leading-[0.95] tracking-[-0.035em] text-white"
            >
              <span className="block">AI Automation</span>
              <span className="block">that actually</span>
              <span className="text-gradient block">works.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-[54ch] text-[16.5px] leading-[1.75] text-mist md:text-[17.5px]"
            >
              I&apos;m Anwar, an AI automation and web developer focused on
              turning ideas into intelligent tools, automated workflows, and
              modern digital experiences.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
              <a
                href="#work"
                className="group/btn inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-[15px] font-medium text-white shadow-[0_16px_38px_-16px_rgba(255,45,120,0.95)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-[#ff4d8f]"
              >
                View My Work
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                />
              </a>
              <a
                href="#contact"
                className="group/btn inline-flex h-12 items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.04] px-6 text-[15px] font-medium text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08]"
              >
                Let&apos;s Work Together
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                />
              </a>
            </motion.div>

            <motion.ul
              variants={item}
              className="mt-11 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-faint"
            >
              {stackLine.map((tech, index) => (
                <li key={tech} className="flex items-center gap-3">
                  {index > 0 && (
                    <span aria-hidden="true" className="text-white/20">
                      /
                    </span>
                  )}
                  {tech}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            variants={item}
            className="relative mx-auto w-full max-w-[420px] lg:justify-self-end"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[44px] bg-accent/20 blur-[70px]"
            />

            <div className="relative rounded-[30px] bg-gradient-to-b from-white/25 via-accent/40 to-white/[0.07] p-[1.5px] shadow-[0_50px_110px_-45px_rgba(255,45,120,0.6)]">
              <div className="relative overflow-hidden rounded-[29px] bg-surface">
                <Image
                  src="/portrait.jpg"
                  alt="Anwar, AI automation and web developer"
                  width={1000}
                  height={1000}
                  priority
                  sizes="(max-width: 1024px) 78vw, 40vw"
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink via-ink/70 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                  <div>
                    <p className="text-[17px] font-semibold tracking-[-0.01em] text-white">
                      Anwar
                    </p>
                    <p className="mt-0.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-mist">
                      AI Automation &amp; Web Developer
                    </p>
                  </div>
                  <span className="mb-1 hidden h-2 w-2 rounded-full bg-emerald-400 animate-pulse-soft sm:block" aria-hidden="true" />
                </div>
              </div>
            </div>

            {floatingChips.map(({ label, icon: Icon, position, delay }) => (
              <span
                key={label}
                className={`absolute ${position} z-10 hidden animate-float items-center gap-2 rounded-full border border-white/[0.1] bg-ink/85 px-3.5 py-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-mist shadow-[0_18px_40px_-24px_rgba(0,0,0,1)] backdrop-blur-md sm:inline-flex`}
                style={{ animationDelay: delay }}
              >
                <Icon aria-hidden="true" className="h-3.5 w-3.5 text-accent-soft" strokeWidth={1.75} />
                {label}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      <div className="relative">
        <Container>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
        </Container>
      </div>
    </section>
  );
}
