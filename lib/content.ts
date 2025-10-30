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
  return { data: parsed.data as Record<string, any>, content: parsed.content };
}

export function getHomeContent(): HomeContent {
  const { data, content } = readMarkdown("content/home.md");
  return {
    title: data.title ?? "",
    subtitle: data.subtitle ?? "",
    cta: data.cta ?? undefined,
    highlights: Array.isArray(data.highlights) ? data.highlights : [],
    body: content.trim(),
  };
}

export function getPageContent(relativePath: string) {
  const { data, content } = readMarkdown(relativePath);
  return { frontmatter: data, body: content.trim() };
}
