import { navLinks } from "@/data/nav";
import { socialList, socialHref, isExternalUrl } from "@/data/social";
import { SocialIcon } from "@/components/SocialIcon";
import { Container } from "@/components/ui/Section";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.8fr_0.9fr]">
          <div>
            <a href="#top" className="inline-flex items-center gap-3" aria-label="Anwar — home">
              <span
                aria-hidden="true"
                className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-[#ff5c9d] to-[#ff2d78] text-[12px] font-bold text-white"
              >
                A
              </span>
              <span className="text-[15px] font-semibold tracking-[0.22em] text-white">
                ANWAR
              </span>
            </a>
            <p className="mt-4 text-[14.5px] text-mist">
              AI Automation &amp; Web Developer
            </p>
            <p className="mt-1 max-w-[34ch] text-[13.5px] leading-relaxed text-faint">
              AI agents, automations, business websites, and custom software
              built from the ground up.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-faint">
              Navigation
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[14.5px] text-mist transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-faint">
              Elsewhere
            </h2>
            <ul className="mt-4 space-y-2.5">
              {socialList.map((link) => {
                const href = socialHref(link);
                return (
                  <li key={link.key}>
                    <a
                      href={href}
                      {...(isExternalUrl(href)
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="inline-flex items-center gap-2.5 text-[14.5px] text-mist transition-colors hover:text-white"
                    >
                      <SocialIcon
                        name={link.key}
                        className="h-4 w-4 text-faint"
                      />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-faint">
            © 2026 Anwar. All rights reserved.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
            Designed &amp; developed by Anwar
          </p>
        </div>
      </Container>
    </footer>
  );
}
