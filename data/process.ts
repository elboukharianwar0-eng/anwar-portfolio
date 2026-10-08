export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Discover",
    description: "Understand the idea, business, and problem.",
  },
  {
    index: "02",
    title: "Plan",
    description: "Define the architecture, tools, and workflow.",
  },
  {
    index: "03",
    title: "Build",
    description: "Develop the actual solution.",
  },
  {
    index: "04",
    title: "Test",
    description: "Test functionality, responsiveness, and edge cases.",
  },
  {
    index: "05",
    title: "Launch",
    description: "Deploy and deliver the final product.",
  },
  {
    index: "06",
    title: "Improve",
    description: "Refine based on feedback.",
  },
];
