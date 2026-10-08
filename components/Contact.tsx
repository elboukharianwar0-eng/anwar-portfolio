"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Loader2, Send } from "lucide-react";
import { socialList, socialHref, isExternalUrl } from "@/data/social";
import { submitContact, type ContactResult } from "@/lib/contact";
import { SocialIcon } from "@/components/SocialIcon";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const budgetOptions = [
  "Not sure yet",
  "Under $500",
  "$500 – $1,500",
  "$1,500 – $5,000",
  "$5,000+",
];

type Errors = Partial<Record<"name" | "email" | "description", string>>;

const fieldClasses =
  "w-full rounded-xl border border-white/[0.1] bg-ink/70 px-4 py-3 text-[15px] text-white placeholder:text-white/25 transition-colors duration-300 focus:border-accent/60 focus:outline-none focus-visible:outline-2 focus-visible:outline-accent-soft";

const labelClasses =
  "mb-2 block font-mono text-[10.5px] uppercase tracking-[0.16em] text-faint";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | ContactResult["status"]>(
    "idle",
  );
  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const description = String(data.get("description") ?? "").trim();
    const budget = String(data.get("budget") ?? "Not sure yet");

    const nextErrors: Errors = {};
    if (name.length < 2) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = "Please enter a valid email address.";
    if (description.length < 10)
      nextErrors.description = "Please describe your project in a bit more detail.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    const result = await submitContact({ name, email, description, budget });

    if (result.status === "success") {
      form.reset();
      setStatus("success");
    } else {
      setStatus(result.status);
    }
  }

  return (
    <Section id="contact" labelledBy="contact-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              id="contact-title"
              eyebrow="Contact"
              title="Have an idea worth building?"
              description="Let's turn it into something real."
            />

            <Reveal delay={0.05}>
              <p className="mt-6 max-w-[46ch] text-[15.5px] leading-relaxed text-mist">
                Tell me what you are trying to build. You will get honest
                thoughts on the approach, scope, and the most sensible next
                step.
              </p>

              <ul className="mt-9 space-y-2.5">
                {socialList.map((link) => {
                  const href = socialHref(link);
                  const external = isExternalUrl(href);
                  return (
                    <li key={link.key}>
                      <a
                        href={href}
                        {...(external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="group flex items-center gap-3.5 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/[0.06]"
                      >
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-mist transition-colors group-hover:text-accent-soft">
                          <SocialIcon name={link.key} className="h-4 w-4" />
                        </span>
                        <span className="text-[14.5px] font-medium text-white">
                          {link.label}
                        </span>
                        <ArrowUpRight
                          aria-hidden="true"
                          className="ml-auto h-4 w-4 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-soft"
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-white/[0.08] bg-surface/60 p-6 shadow-card md:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClasses} htmlFor="contact-name">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    required
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    className={cn(fieldClasses, errors.name && "border-red-400/60")}
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="mt-1.5 text-[12.5px] text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className={labelClasses} htmlFor="contact-email">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    required
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    className={cn(fieldClasses, errors.email && "border-red-400/60")}
                  />
                  {errors.email && (
                    <p id="contact-email-error" className="mt-1.5 text-[12.5px] text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className={labelClasses} htmlFor="contact-description">
                    Project description
                  </label>
                  <textarea
                    id="contact-description"
                    name="description"
                    rows={5}
                    placeholder="What are you trying to build? What should it do?"
                    required
                    aria-invalid={Boolean(errors.description)}
                    aria-describedby={
                      errors.description ? "contact-description-error" : undefined
                    }
                    className={cn(
                      fieldClasses,
                      "resize-y",
                      errors.description && "border-red-400/60",
                    )}
                  />
                  {errors.description && (
                    <p
                      id="contact-description-error"
                      className="mt-1.5 text-[12.5px] text-red-400"
                    >
                      {errors.description}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className={labelClasses} htmlFor="contact-budget">
                    Budget <span className="normal-case tracking-normal">(optional)</span>
                  </label>
                  <select
                    id="contact-budget"
                    name="budget"
                    defaultValue="Not sure yet"
                    className={cn(fieldClasses, "appearance-none")}
                  >
                    {budgetOptions.map((option) => (
                      <option key={option} value={option} className="bg-ink">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group/btn inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 text-[15px] font-medium text-white shadow-[0_16px_38px_-16px_rgba(255,45,120,0.95)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-[#ff4d8f] disabled:pointer-events-none disabled:opacity-70"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                      />
                    </>
                  )}
                </button>

                <p
                  aria-live="polite"
                  className={cn(
                    "text-[13.5px] leading-snug",
                    status === "success" && "text-emerald-300",
                    status === "error" && "text-red-400",
                    status === "not-configured" && "text-amber-200/90",
                    (status === "idle" || status === "sending") && "text-faint",
                  )}
                >
                  {status === "success" &&
                    "Thanks — your message has been sent. I will get back to you soon."}
                  {status === "error" &&
                    "Something went wrong while sending. Please try again."}
                  {status === "not-configured" &&
                    "This form is not connected to an email service yet — please use the contact links on the left."}
                  {(status === "idle" || status === "sending") &&
                    "Fill in the form and I will reply as soon as I can."}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
