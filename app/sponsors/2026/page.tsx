import { getPageContent } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";

export default async function Sponsors2026Page() {
  const { frontmatter, body } = getPageContent("content/sponsors/2026.md");
  const html = await markdownToHtml(body);
  const tiers: { name: string; sponsors?: { name: string; logo?: string; url?: string }[] }[] =
    Array.isArray(frontmatter.tiers) ? frontmatter.tiers : [];
  return (
    <div className="relative min-h-screen hero-soft text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">{frontmatter.title ?? "Sponsors 2026"}</h1>
        <div className="grid gap-8">
        {tiers.map((t, i) => (
          <div key={i}>
            <h2 className="text-xl font-semibold mb-3">{t.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {(t.sponsors ?? []).map((s, j) => (
                <a key={j} href={s.url ?? '#'} className="rounded-2xl glass-soft border border-white/15 p-4 hover:bg-white/10 transition">
                  <div className="font-medium text-white">{s.name}</div>
                </a>
              ))}
            </div>
          </div>
        ))}
        </div>
        {/* eslint-disable-next-line react/no-danger */}
        <div className="prose prose-invert mt-10" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
