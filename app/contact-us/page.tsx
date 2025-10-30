import { getPageContent } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";

export default async function ContactPage() {
  const { frontmatter, body } = getPageContent("content/contact-us.md");
  const html = await markdownToHtml(body);
  return (
    <div className="relative min-h-[70vh] hero-orange text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold mb-2">{frontmatter.title ?? "Contact Us"}</h1>
        {frontmatter.email && (
          <p className="text-white/80 mb-6">Email: <a className="underline hover:text-white" href={`mailto:${frontmatter.email as string}`}>{frontmatter.email as string}</a></p>
        )}
        {/* eslint-disable-next-line react/no-danger */}
        <div className="prose prose-invert" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
