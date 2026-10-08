export type ProjectVisual =
  | "business-agent"
  | "assistant"
  | "generator"
  | "automation";

export type Project = {
  id: string;
  index: string;
  title: string;
  description: string;
  points: string[];
  tech: string[];
  visual: ProjectVisual;
};

export const projects: Project[] = [
  {
    id: "ai-business-agent",
    index: "01",
    title: "AI Business Agent",
    description:
      "An AI-powered business automation system designed to identify potential businesses, analyze their online presence, and assist with generating modern websites and digital solutions.",
    points: [
      "Finds potential businesses automatically",
      "Analyzes each business's online presence",
      "Assists with generating modern websites",
    ],
    tech: ["Python", "AI / LLMs", "Automation", "APIs", "Web Development"],
    visual: "business-agent",
  },
  {
    id: "ai-personal-assistant",
    index: "02",
    title: "AI Personal Assistant",
    description:
      "A PC-based AI assistant concept capable of understanding natural language, interacting with applications, using tools, and assisting with computer workflows.",
    points: [
      "Understands natural language requests",
      "Uses tools and interacts with applications",
      "Assists with everyday computer workflows",
    ],
    tech: [
      "Python",
      "AI / LLMs",
      "Speech Recognition",
      "Text-to-Speech",
      "Computer Automation",
    ],
    visual: "assistant",
  },
  {
    id: "ai-website-generator",
    index: "03",
    title: "AI Business Website Generator",
    description:
      "A workflow for generating professional business websites from business information, helping local businesses establish a modern online presence.",
    points: [
      "Turns business information into a full site",
      "Generates structured, professional sections",
      "Built for local businesses going online",
    ],
    tech: ["AI", "Next.js", "Web Development", "APIs", "Automation"],
    visual: "generator",
  },
  {
    id: "custom-automation-tools",
    index: "04",
    title: "Custom Automation Tools",
    description:
      "Python-based tools and automation workflows designed to reduce repetitive tasks and connect different services and applications.",
    points: [
      "Removes repetitive manual work",
      "Connects services and applications",
      "Scheduled and event-driven workflows",
    ],
    tech: ["Python", "APIs", "Automation", "Scripting"],
    visual: "automation",
  },
];
