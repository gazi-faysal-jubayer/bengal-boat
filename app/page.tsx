import Image from "next/image";
import Link from "next/link";
import { getHomeContent } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";

export default async function Home() {
  const home = getHomeContent();
  const bodyHtml = await markdownToHtml(home.body);
  return (
    <div className="min-h-screen flex flex-col bg-orange-500 text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-extrabold text-lg tracking-tight">
            <span className="inline-block bg-white text-black px-2 py-0.5 rounded">BENGAL</span>
            <span>BOAT</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white/80">
            <Link className="hover:text-white hover:underline underline-offset-4" href="/about-us">About</Link>
            <Link className="hover:text-white hover:underline underline-offset-4" href="/our-team">Team</Link>
            <Link className="hover:text-white hover:underline underline-offset-4" href="/roboboat/2026">RoboBoat 2026</Link>
            <Link className="hover:text-white hover:underline underline-offset-4" href="/sponsors/2026">Sponsors</Link>
            <Link className="hover:text-white hover:underline underline-offset-4" href="/contact-us">Contact</Link>
          </nav>
          <div className="md:hidden text-sm text-white/80">Menu</div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative min-h-[75vh] min-w-full overflow-hidden hero-orange text-white">
          {/* Floating pill nav */}
          <div className="relative z-20 mx-auto max-w-5xl px-6 pt-10">
            <div className="mx-auto w-full max-w-3xl rounded-full glass-soft backdrop-blur flex items-center justify-between px-6 py-3 text-base">
              <Link href="/" className="px-4 py-2.5 rounded-full hover:bg-white/10 transition-base">Home</Link>
              <Link href="/about-us" className="px-4 py-2.5 rounded-full hover:bg-white/10 transition-base">About</Link>
              <Link href="/roboboat/2026" className="px-4 py-2.5 rounded-full hover:bg-white/10 transition-base">Notice</Link>
              <Link href="/sponsors/2026" className="px-4 py-2.5 rounded-full hover:bg-white/10 transition-base">Results</Link>
              <Link href="/contact-us" className="px-4 py-2.5 rounded-full hover:bg-white/10 transition-base">Contact</Link>
            </div>
          </div>

          {/* Background accent halo */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          {/* Hero content */}
          <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-28 flex items-center justify-center">
            <div className="max-w-4xl text-center fade-in">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
                <span className="block">Bengal Boat</span>
                <span className="block text-white">RoboBoat 2026</span>
              </h1>
              {home.subtitle && (
                <div className="mx-auto mt-6 inline-flex items-center rounded-2xl glass px-6 py-3 text-base md:text-lg">
                  <p className="text-white/90">{home.subtitle}</p>
                </div>
              )}
              <div className="mt-8 flex items-center justify-center gap-3">
                {home.cta && (
                  <Link href={home.cta.href} className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-black font-semibold shadow hover:bg-white/90">
                    {home.cta.label}
                  </Link>
                )}
                <Link href="/about-us" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-base">
                  Learn more
                </Link>
              </div>

              {/* Stats cards */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                {[
                  { label: "Universities", value: "8+" },
                  { label: "Students", value: "200+" },
                  { label: "Awards", value: "10+" },
                  { label: "Partners", value: "15+" },
                ].map((s, i) => (
                  <div key={i} className="rounded-2xl glass-soft p-5 text-center border border-white/10">
                    <div className="text-2xl font-bold text-white">{s.value}</div>
                    <div className="mt-1 text-white/70">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 -mt-10 relative z-10">
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/about-us" className="group overflow-hidden rounded-2xl glass-soft border border-white/20 shadow-sm hover:shadow-md transition will-change-transform text-white">
              <div className="relative h-44">
                <Image src="/card-1.svg" alt="About Us" fill className="object-cover opacity-70 group-hover:opacity-80 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-purple-500/10 to-indigo-500/10" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <div className="font-semibold">About Us</div>
                  <div className="text-xs text-white/70">Know our mission</div>
                </div>
                <span className="text-xs px-3 py-1 rounded bg-black text-white">Explore</span>
              </div>
            </Link>
            <Link href="/our-team" className="group overflow-hidden rounded-2xl glass-soft border border-white/20 shadow-sm hover:shadow-md transition will-change-transform text-white">
              <div className="relative h-44">
                <Image src="/card-2.svg" alt="Our Team" fill className="object-cover opacity-70 group-hover:opacity-80 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-purple-500/10 to-indigo-500/10" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <div className="font-semibold">Our Team</div>
                  <div className="text-xs text-white/70">Universities & schools</div>
                </div>
                <span className="text-xs px-3 py-1 rounded bg-black text-white">Explore</span>
              </div>
            </Link>
            <Link href="/contact-us" className="group overflow-hidden rounded-2xl glass-soft border border-white/20 shadow-sm hover:shadow-md transition will-change-transform text-white">
              <div className="relative h-44">
                <Image src="/card-3.svg" alt="Contact Us" fill className="object-cover opacity-70 group-hover:opacity-80 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-purple-500/10 to-indigo-500/10" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <div className="font-semibold">Contact Us</div>
                  <div className="text-xs text-white/70">Partnerships & media</div>
                </div>
                <span className="text-xs px-3 py-1 rounded bg-black text-white">Explore</span>
              </div>
            </Link>
          </div>
        </section>

        <section className="mt-14">
          <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-3 gap-6">
            {home.highlights?.map((h, i) => (
              <div key={i} className="rounded-2xl glass-soft border border-white/15 p-5 shadow-sm text-white">
                <h3 className="font-semibold mb-2">{h.title}</h3>
                <p className="text-sm text-white/80">{h.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-16">
          <div className="prose prose-invert">
            <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/20 bg-orange-600/60">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-white/70 flex flex-wrap items-center justify-between gap-4">
          <p> {(process.env.NEXT_PUBLIC_BUILD_YEAR ?? "2025")} Bengal Boat — Bangladesh RoboBoat 2026</p>
          <div className="flex gap-4">
            <Link href="/support-us" className="hover:underline underline-offset-4">Support Us</Link>
            <Link href="/contact-us" className="hover:underline underline-offset-4">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
