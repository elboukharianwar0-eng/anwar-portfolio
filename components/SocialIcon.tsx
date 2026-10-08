import { Mail } from "lucide-react";
import { siFiverr, siGithub } from "simple-icons";
import type { SocialKey } from "@/data/social";

export function SocialIcon({
  name,
  className = "h-4 w-4",
}: {
  name: SocialKey;
  className?: string;
}) {
  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
        <path d={siGithub.path} />
      </svg>
    );
  }

  if (name === "fiverr") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
        <path d={siFiverr.path} />
      </svg>
    );
  }

  return <Mail aria-hidden="true" className={className} strokeWidth={1.75} />;
}
