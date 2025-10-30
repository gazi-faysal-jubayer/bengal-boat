"use client";

import Script from "next/script";

export default function AdminButton() {
  const handleClick = () => {
    const w = window as Window & { netlifyIdentity?: unknown };
    const ni = w?.netlifyIdentity as {
      currentUser?: () => unknown;
      on?: (event: string, callback: () => void) => void;
      close?: () => void;
      open?: (mode: string) => void;
    } | undefined;
    const goAdmin = () => { window.location.href = "/admin"; };
    if (!ni) { goAdmin(); return; }
    const user = ni.currentUser?.();
    if (user) { goAdmin(); return; }
    ni.on?.("login", () => { ni.close?.(); goAdmin(); });
    ni.open?.("login");
  };

  return (
    <>
      {/* Load Identity widget on the client */}
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" strategy="afterInteractive" />
      <button
        onClick={handleClick}
        aria-label="Open Admin"
        className="fixed bottom-4 right-4 z-50 rounded-full px-4 py-2 text-sm font-medium bg-white/15 border border-white/20 backdrop-blur hover:bg-white/25 transition-colors"
      >
        Admin
      </button>
    </>
  );
}
