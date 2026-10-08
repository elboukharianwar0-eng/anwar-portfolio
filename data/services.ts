export type Service = {
  index: string;
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    index: "01",
    title: "AI Agents",
    description:
      "Custom AI systems capable of reasoning, using tools, and automating workflows.",
    icon: "agent",
  },
  {
    index: "02",
    title: "AI Automation",
    description:
      "Intelligent workflows that eliminate repetitive work and connect your tools and services.",
    icon: "automation",
  },
  {
    index: "03",
    title: "Web Development",
    description:
      "Modern responsive websites designed around real business goals.",
    icon: "web",
  },
  {
    index: "04",
    title: "Custom Software",
    description:
      "Purpose-built software designed around specific problems and workflows.",
    icon: "software",
  },
  {
    index: "05",
    title: "API Integration",
    description:
      "Connect AI models, third-party services, databases, and applications.",
    icon: "api",
  },
  {
    index: "06",
    title: "AI Assistants",
    description:
      "Intelligent assistants designed around specific business or personal use cases.",
    icon: "assistant",
  },
];
