import { getPageContent } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";

export default async function TeamPage() {
  const { frontmatter, body } = getPageContent("content/our-team.md");
  const html = await markdownToHtml(body);
  const orgs: { name: string }[] = Array.isArray(frontmatter.organizations)
    ? frontmatter.organizations
    : [];
  return (
    <div className="relative min-h-screen hero-orange text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold mb-2">{frontmatter.title ?? "Our Team"}</h1>
        {frontmatter.intro && (
          <p className="text-white/80 mb-6">{frontmatter.intro as string}</p>
        )}
      {orgs.length > 0 && (
        <div className="mb-8">
          <h2 className="font-semibold mb-2">Participating Organizations</h2>
          <ul className="list-disc pl-6">
            {orgs.map((o, i) => (
              <li key={i}>{o.name}</li>
            ))}
          </ul>
        </div>
      )}
        {/* eslint-disable-next-line react/no-danger */}
        <div className="prose prose-invert" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
