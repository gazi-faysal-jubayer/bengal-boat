import { getPageContent } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";

export default async function AboutPage() {
  const { frontmatter, body } = getPageContent("content/about-us.md");
  const html = await markdownToHtml(body);
  return (
    <div className="relative min-h-screen hero-orange text-white">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-20">
        <h1 className="text-5xl leading-[1.15] tracking-tight font-extrabold mb-5">{typeof frontmatter.title === "string" ? frontmatter.title : "About Us"}</h1>
        <div className="prose prose-invert prose-lg" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
