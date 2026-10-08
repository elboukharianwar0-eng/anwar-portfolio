export type ChatEntry = {
  id: string;
  match: string[];
  answer: string;
};

export const chatEntries: ChatEntry[] = [
  {
    id: "who",
    match: [
      "who are you",
      "who is anwar",
      "about you",
      "about yourself",
      "tell me about",
      "introduce yourself",
      "your story",
      "what kind of person",
    ],
    answer:
      "I'm Anwar — an AI automation and web developer. I build AI agents, business websites, custom software, and automation workflows. I skip the fluff: you tell me the outcome, I figure out the fastest honest way to get there.",
  },
  {
    id: "skills",
    match: [
      "what can you do",
      "what do you do",
      "your skills",
      "what are you good at",
      "skills",
      "stack",
      "technologies",
      "languages",
      "tools",
      "tech you use",
    ],
    answer:
      "Core skills: AI agents, AI automation, LLM integration, chatbots, and prompt engineering — plus real development with Python, JavaScript/TypeScript, React, Next.js, Tailwind, REST APIs, and databases. Round it out with Git, GitHub, Linux, and Windows tooling.",
  },
  {
    id: "services",
    match: [
      "services",
      "service",
      "offer",
      "what can you build",
      "build for me",
      "help me with",
      "what do you offer",
    ],
    answer:
      "What I do: AI agents, AI automation, web development, custom software, API integration, and AI assistants. In plain terms — systems that work for you instead of workflows you have to babysit.",
  },
  {
    id: "process",
    match: [
      "how do you work",
      "how you work",
      "your process",
      "process",
      "how does it work",
      "how do we work",
      "workflow",
      "how do you do it",
    ],
    answer:
      "Discover → Plan → Build → Test → Launch → Improve. You bring the idea, I bring the build. No hand-waving: we define what 'done' means, I build the whole thing, test it, launch it, and keep improving it after.",
  },
  {
    id: "price",
    match: [
      "price",
      "pricing",
      "cost",
      "costs",
      "how much",
      "budget",
      "charge",
      "rate",
      "expensive",
      "fees",
    ],
    answer:
      "Honest answer: it depends on scope, and I'd rather tell you that than quote a fake number. Tell me what you're building and roughly what you can spend — the budget field in the contact form exists exactly for that.",
  },
  {
    id: "projects",
    match: [
      "project",
      "projects",
      "what have you built",
      "portfolio",
      "your work",
      "examples",
      "show me",
      "what did you build",
    ],
    answer:
      "Built so far: an AI business agent, an AI personal assistant for PC workflows, an AI website generator, and custom automation tools — all in the Projects section below, each with a working UI demo you can poke at.",
  },
  {
    id: "github",
    match: ["github", "code", "source", "repository", "source code"],
    answer:
      "GitHub → https://github.com/elboukharianwar0-eng/anwar-portfolio — including the source of the site you're on right now.",
  },
  {
    id: "fiverr",
    match: ["fiverr", "freelance", "upwork", "gig", "hire me"],
    answer:
      "Fiverr → https://www.fiverr.com/elboukhari_ — and I take direct projects too, so the contact form below works just as well.",
  },
  {
    id: "contact",
    match: [
      "contact",
      "email",
      "reach",
      "message",
      "talk",
      "discuss",
      "work with me",
      "work together",
      "collaborate",
      "get in touch",
      "call",
      "contact you",
    ],
    answer:
      "Reach me through the contact form below — you'll get an honest reply, not an autoresponder runaround — or email elboukharianwar0@gmail.com directly.",
  },
  {
    id: "availability",
    match: [
      "available",
      "busy",
      "taking on",
      "accepting",
      "slots",
      "free now",
      "when are you available",
      "are you available",
    ],
    answer:
      "Currently taking on new projects. The fastest honest start: hit the contact form below with what you want built and roughly what you can spend.",
  },
  {
    id: "interests",
    match: [
      "hobbies",
      "interests",
      "gaming",
      "games",
      "pc",
      "linux",
      "hardware",
      "what are you into",
      "what do you like",
    ],
    answer:
      "Into AI, coding, PCs, gaming, Linux/WSL, hardware, and building things myself instead of just watching tutorials. One day it's AI agents, next it's a random technical rabbit hole at 2 AM.",
  },
  {
    id: "ambition",
    match: ["ambitious", "goals", "goal", "future", "dream", "plan", "where are you going"],
    answer:
      "Straight up: not lacking ambition, lacking structure. Tons of ideas, enough curiosity to learn almost anything. The plan is picking a direction, staying locked in, and turning all that energy into something real.",
  },
  {
    id: "dangerous",
    match: ["dangerous", "chaotic", "chaos", "execution", "builder mindset"],
    answer:
      "Builder mindset, chaotic execution. Fix the structure part and I'm dangerous.",
  },
  {
    id: "greet",
    match: ["hi", "hey", "hello", "yo", "sup", "salam", "how are you", "how's it going", "welcome"],
    answer:
      "Hey! What do you want to know — who I am, what I build, how I work, or how to reach me?",
  },
  {
    id: "thanks",
    match: ["thank", "thanks", "thx", "appreciated", "cheers"],
    answer:
      "Anytime. When you're ready to build something, the contact form is right there.",
  },
];

export const chatFallback =
  "Good question — one I haven't pre-written an answer for. Ask me directly via email (elboukharianwar0@gmail.com) or the contact form and you'll get the real answer, no chatbot script.";

export const chatSuggestions = [
  "Who are you?",
  "What do you build?",
  "How do you work?",
  "How much does it cost?",
  "How do I reach you?",
];

export function getChatReply(input: string): string {
  const q = input.toLowerCase().replace(/[?!.,]+/g, "");
  let best: ChatEntry | null = null;
  let bestScore = 0;

  for (const entry of chatEntries) {
    let score = 0;
    for (const pattern of entry.match) {
      if (q.includes(pattern)) {
        const words = pattern.split(" ").length;
        score += words > 1 ? words * 3 : 1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }

  return best ? best.answer : chatFallback;
}