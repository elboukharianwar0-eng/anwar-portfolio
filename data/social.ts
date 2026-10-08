export type SocialKey = "github" | "fiverr" | "email";

export type SocialLink = {
  key: SocialKey;
  label: string;
  url: string;
};

export const socialLinks: Record<SocialKey, SocialLink> = {
  github: {
    key: "github",
    label: "GitHub",
    url: "https://github.com/elboukharianwar0-eng",
  },
  fiverr: { key: "fiverr", label: "Fiverr", url: "" },
  email: {
    key: "email",
    label: "Email",
    url: "mailto:elboukharianwar0@gmail.com",
  },
};

export const socialList: SocialLink[] = [
  socialLinks.github,
  socialLinks.fiverr,
  socialLinks.email,
];

export function socialHref(link: SocialLink): string {
  const url = link.url.trim();
  return url === "" ? "#contact" : url;
}

export function isExternalUrl(url: string): boolean {
  return /^https?:\/\//.test(url);
}
