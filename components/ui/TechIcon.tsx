import type { ComponentType, SVGProps } from "react";
import {
  Bot,
  Braces,
  Brain,
  Cable,
  CodeXml,
  Database,
  Globe,
  MessageSquare,
  Mic,
  Monitor,
  PenLine,
  ShieldCheck,
  Sparkles,
  Terminal,
  Volume2,
  Workflow,
  Zap,
} from "lucide-react";
import {
  siCss,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siLinux,
  siNextdotjs,
  siPython,
  siReact,
  siTypescript,
} from "simple-icons";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { strokeWidth?: number | string }>;

const brandIcons: Record<string, string> = {
  Python: siPython.path,
  JavaScript: siJavascript.path,
  TypeScript: siTypescript.path,
  React: siReact.path,
  "Next.js": siNextdotjs.path,
  HTML: siHtml5.path,
  CSS: siCss.path,
  Git: siGit.path,
  GitHub: siGithub.path,
  Linux: siLinux.path,
};

const glyphIcons: Record<string, IconComponent> = {
  "AI Agents": Bot,
  "AI Automation": Workflow,
  "LLM Integration": Brain,
  Chatbots: MessageSquare,
  "AI APIs": Braces,
  "Prompt Engineering": PenLine,
  "REST APIs": Braces,
  "API Integration": Cable,
  Databases: Database,
  Authentication: ShieldCheck,
  "Automation Workflows": Workflow,
  Automation: Zap,
  Windows: Monitor,
  "VS Code": CodeXml,
  AI: Sparkles,
  "Web Development": Globe,
  "Speech Recognition": Mic,
  "Text-to-Speech": Volume2,
  "Computer Automation": Monitor,
  Scripting: Terminal,
};

export function TechIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const brandPath = brandIcons[name];
  if (brandPath) {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={className}
        fill="currentColor"
      >
        <path d={brandPath} />
      </svg>
    );
  }

  const Glyph = glyphIcons[name];
  if (Glyph) {
    return (
      <Glyph
        aria-hidden="true"
        className={className}
        strokeWidth={1.75}
        fill="none"
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={className + " block h-1.5 w-1.5 rounded-[2px] bg-white/40"}
    />
  );
}
