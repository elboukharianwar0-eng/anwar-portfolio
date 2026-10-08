export type SkillGroup = {
  index: string;
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    index: "01",
    title: "AI & Automation",
    items: [
      "AI Agents",
      "AI Automation",
      "LLM Integration",
      "Chatbots",
      "AI APIs",
      "Prompt Engineering",
    ],
  },
  {
    index: "02",
    title: "Development",
    items: [
      "Python",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "HTML",
      "CSS",
    ],
  },
  {
    index: "03",
    title: "Backend / Integration",
    items: [
      "REST APIs",
      "API Integration",
      "Databases",
      "Authentication",
      "Automation Workflows",
    ],
  },
  {
    index: "04",
    title: "Tools",
    items: ["Git", "GitHub", "Linux", "Windows", "VS Code"],
  },
];
