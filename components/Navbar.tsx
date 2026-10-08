"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { navLinks, trackedSections } from "@/data/nav";
import { socialList, socialHref, isExternalUrl } from "@/data/social";
import { SocialIcon } from "@/components/SocialIcon";
import { Container } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = trackedSections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="pt-3 md:pt-4">
        <nav
          aria-label="Main"
          className={cn(
            "flex h-14 items-center justify-between rounded-2xl border px-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:px-5",
            scrolled || open
              ? "border-white/[0.1] bg-ink/85 shadow-[0_20px_50px_-30px_rgba(0,0,0,1)] backdrop-blur-xl"
              : "border-white/[0.06] bg-ink/40 backdrop-blur-lg",
          )}
        >
          <a
            href="#top"
            className="flex items-center gap-2.5"
            aria-label="Anwar — home"
            onClick={() => setOpen(false)}
          >
            <span
              aria-hidden="true"
              className="grid h-6 w-6 place-items-center rounded-md bg-gradient-to-br from-[#ff5c9d] to-[#ff2d78] text-[11px] font-bold text-white"
            >
              A
            </span>
            <span className="text-[13px] font-semibold tracking-[0.2em] text-white">
              ANWAR
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "rounded-full px-3.5 py-2 text-[13.5px] transition-colors duration-300",
                      isActive
                        ? "bg-white/[0.07] text-white"
                        : "text-mist hover:text-white",
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="group/btn inline-flex h-9 items-center gap-2 rounded-full bg-accent px-4 text-[13.5px] font-medium text-white shadow-[0_14px_34px_-16px_rgba(255,45,120,0.9)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-[#ff4d8f]"
            >
              Let&apos;s Talk
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover/btn:translate-x-1"
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-white transition-colors hover:bg-white/[0.06] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-40 flex flex-col bg-ink/97 pt-24 backdrop-blur-2xl md:hidden"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Container className="flex flex-1 flex-col justify-between pb-10">
              <ul className="flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.05 + index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="border-b border-white/[0.06]"
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 py-5"
                    >
                      <span className="font-mono text-[11px] text-faint">
                        0{index + 1}
                      </span>
                      <span className="text-[2rem] font-medium tracking-[-0.02em] text-white">
                        {link.label}
                      </span>
                      <ArrowRight className="ml-auto h-5 w-5 self-center text-faint" />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="space-y-6">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex h-12 items-center justify-center gap-2 rounded-full bg-accent text-[15px] font-medium text-white shadow-[0_14px_34px_-16px_rgba(255,45,120,0.9)]"
                >
                  Let&apos;s Talk
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <ul className="flex items-center justify-center gap-5">
                  {socialList.map((link) => (
                    <li key={link.key}>
                      <a
                        href={socialHref(link)}
                        {...(isExternalUrl(socialHref(link))
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        aria-label={link.label}
                        className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-faint transition-colors hover:text-white"
                      >
                        <SocialIcon name={link.key} className="h-4 w-4" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
