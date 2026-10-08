export const site = {
  name: "Anwar",
  title: "AI Automation & Web Developer",
  headline: "AI Automation & Web Developer",
  description:
    "Anwar is an AI automation and web developer building AI agents, business websites, custom software, and intelligent automation solutions.",
  keywords: [
    "AI automation developer",
    "AI agent developer",
    "web developer",
    "business websites",
    "custom software",
    "API integration",
    "Python developer",
    "TypeScript developer",
    "LLM integration",
    "freelance developer",
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  announcement:
    "I'm the kind of person that if I don't know something, I would say I don't — but I promise that I can find the answer.",
} as const;

export const contactEndpoint =
  process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "";
