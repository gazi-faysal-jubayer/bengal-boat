import { getPageContent } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";

export default async function RoboBoat2026Page() {
  const { frontmatter, body } = getPageContent("content/roboboat/2026.md");
  const html = await markdownToHtml(body);
  return (
    <div className="relative min-h-screen hero-soft text-white">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-20">
        <h1 className="text-5xl leading-[1.15] tracking-tight font-extrabold mb-4">{typeof frontmatter.title === "string" ? frontmatter.title : "RoboBoat 2026"}</h1>
        <div className="text-base md:text-lg leading-relaxed text-white/80 mb-6">
        {frontmatter.location && <span>Location: {frontmatter.location as string}</span>}
        {frontmatter.location && frontmatter.dates && <span> · </span>}
        {frontmatter.dates && <span>Dates: {frontmatter.dates as string}</span>}
        </div>
        <div className="prose prose-invert prose-lg" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
