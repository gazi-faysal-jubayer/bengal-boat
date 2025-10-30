import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type HomeContent = {
  title: string;
  subtitle?: string;
  cta?: { label: string; href: string };
  highlights?: { title: string; text: string }[];
  body: string;
};

function readMarkdown(filePath: string) {
  const full = path.join(process.cwd(), filePath);
  const raw = fs.readFileSync(full, "utf8");
  const parsed = matter(raw);
  return { data: parsed.data as Record<string, unknown>, content: parsed.content };
}

export function getHomeContent(): HomeContent {
  const { data, content } = readMarkdown("content/home.md");
  const title = typeof data.title === "string" ? data.title : "";
  const subtitle = typeof data.subtitle === "string" ? data.subtitle : undefined;
  const cta = (typeof data.cta === "object" && data.cta !== null
    && typeof (data.cta as Record<string, unknown>).label === "string"
    && typeof (data.cta as Record<string, unknown>).href === "string")
    ? {
        label: (data.cta as Record<string, string>).label,
        href: (data.cta as Record<string, string>).href,
      }
    : undefined;
  const highlights = Array.isArray(data.highlights)
    ? data.highlights
        .filter((h: unknown): h is { title: string; text: string } =>
          !!h && typeof h === "object"
          && typeof (h as Record<string, unknown>).title === "string"
          && typeof (h as Record<string, unknown>).text === "string"
        )
    : [];

  return {
    title,
    subtitle,
    cta,
    highlights,
    body: content.trim(),
  };
}

export function getPageContent(relativePath: string) {
  const { data, content } = readMarkdown(relativePath);
  return { frontmatter: data, body: content.trim() };
}
