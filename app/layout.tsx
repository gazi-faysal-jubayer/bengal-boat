import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bengal Boat — Bangladesh RoboBoat 2026",
  description: "Engineering autonomous surface vessels. Bangladesh team for US Navy RoboBoat 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased text-white min-h-screen`}
      >
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
        <main className="pt-0">{children}</main>
      </body>
    </html>
  );
}
