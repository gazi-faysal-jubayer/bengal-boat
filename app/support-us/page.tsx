import { getPageContent } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";

export default async function SupportUsPage() {
  const { frontmatter, body } = getPageContent("content/support-us.md");
  const html = await markdownToHtml(body);
  return (
    <div className="relative min-h-screen hero-soft text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">{frontmatter.title ?? "Support Us"}</h1>
        {/* eslint-disable-next-line react/no-danger */}
        <div className="prose prose-invert" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
