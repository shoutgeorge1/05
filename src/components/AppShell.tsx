"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Suspense, useState } from "react";
import {
  DEMO_PATH,
  LANDING_LINK_PROPS,
  NAV_ITEMS,
  isLandingHref,
} from "@/lib/nav";

function isActivePath(pathname: string, href: string) {
  const base = href.split("#")[0];
  if (base === "/") return pathname === "/";
  return pathname === base || pathname.startsWith(`${base}/`);
}

function ShellInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const search = useSearchParams();
  const [open, setOpen] = useState(false);

  const demo = search.get("demo") === "1" || pathname.startsWith("/demo");
  const isLandingDemo = pathname.startsWith("/feed/landing");

  if (isLandingDemo) {
    return <>{children}</>;
  }

  const demoIndex = DEMO_PATH.findIndex((d) => isActivePath(pathname, d.href));

  return (
    <div className="min-h-screen bg-[var(--content)] text-[var(--ink)]">
      <div className="flex min-h-screen">
        {!demo && (
          <aside className="hidden w-[240px] shrink-0 flex-col bg-[var(--shell)] lg:flex">
            <div className="border-b border-[var(--shell-border)] px-4 py-5">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
                Paid Search & Shopping
              </p>
              <p className="mt-1 text-lg font-semibold tracking-tight text-[var(--shell-text)]">
                O5 · Follow-up notes
              </p>
            </div>
            <nav className="flex-1 space-y-0.5 px-2 py-4" aria-label="Primary">
              {NAV_ITEMS.map((item) => {
                const active = isActivePath(pathname, item.href);
                const landing = isLandingHref(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    {...(landing ? LANDING_LINK_PROPS : {})}
                    className={`block rounded-md px-2.5 py-2 text-sm transition ${
                      active
                        ? "bg-[var(--shell-elevated)] font-medium text-white"
                        : "text-[var(--shell-muted)] hover:bg-[var(--shell-elevated)] hover:text-[var(--shell-text)]"
                    }`}
                  >
                    {item.label}
                    {landing ? " ↗" : ""}
                  </Link>
                );
              })}
            </nav>
            <div className="border-t border-[var(--shell-border)] px-3 py-4">
              <Link
                href="/?demo=1"
                className="block rounded-md border border-[var(--accent)]/50 bg-[var(--accent)]/10 px-3 py-2 text-center text-sm font-medium text-[var(--shell-text)] hover:bg-[var(--accent)]/20"
              >
                2-min follow-up path →
              </Link>
              <p className="mt-3 text-xs leading-relaxed text-[var(--shell-muted)]">
                Paid search for four brands — product feeds, Shopping ads,
                focused landings, Looker-ready numbers.
              </p>
            </div>
          </aside>
        )}

        <div className="flex min-w-0 flex-1 flex-col">
          {demo && (
            <div className="border-b border-[var(--line)] bg-[var(--shell)] px-4 py-3 text-[var(--shell-text)]">
              <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--accent)]">
                    Follow-up path · ~2 minutes
                  </p>
                  <p className="text-base font-medium">
                    {demoIndex >= 0
                      ? `${DEMO_PATH[demoIndex].seconds} — ${DEMO_PATH[demoIndex].label}`
                      : "Partnering on paid search → brand scope → Quiksilver landing."}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {DEMO_PATH.map((step, i) => {
                    const landing = isLandingHref(step.href);
                    const href = landing
                      ? step.href
                      : `${step.href.split("#")[0]}?demo=1${
                          step.href.includes("#")
                            ? "#" + step.href.split("#")[1]
                            : ""
                        }`;
                    return (
                      <Link
                        key={step.href}
                        href={href}
                        {...(landing ? LANDING_LINK_PROPS : {})}
                        className={`rounded px-2.5 py-1.5 text-sm ${
                          isActivePath(pathname, step.href)
                            ? "bg-white text-[var(--shell)]"
                            : "border border-white/20 text-white/80 hover:border-white/50"
                        }`}
                      >
                        {i + 1}. {step.label}
                        {landing ? " ↗" : ""}
                      </Link>
                    );
                  })}
                  <Link
                    href={pathname}
                    className="rounded border border-white/20 px-2.5 py-1.5 text-sm text-white/70"
                  >
                    Exit
                  </Link>
                </div>
              </div>
            </div>
          )}

          {!demo && (
            <header className="sticky top-0 z-30 flex items-center justify-between border-b border-[var(--line)] bg-[var(--panel)]/95 px-4 py-3 backdrop-blur lg:hidden">
              <div>
                <p className="text-base font-semibold">O5 · Paid Search</p>
                <p className="text-sm text-[var(--muted)]">Follow-up notes</p>
              </div>
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="rounded-md border border-[var(--line)] p-2"
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </header>
          )}

          {open && !demo && (
            <div className="border-b border-[var(--line)] bg-[var(--shell)] px-3 py-3 lg:hidden">
              {NAV_ITEMS.map((item) => {
                const landing = isLandingHref(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    {...(landing ? LANDING_LINK_PROPS : {})}
                    onClick={() => setOpen(false)}
                    className="block rounded px-2 py-2 text-sm text-[var(--shell-text)]"
                  >
                    {item.label}
                    {landing ? " ↗" : ""}
                  </Link>
                );
              })}
              <Link
                href="/?demo=1"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded border border-[var(--accent)]/40 px-2 py-2 text-sm text-[var(--accent)]"
              >
                2-min path
              </Link>
            </div>
          )}

          <main
            className={`flex-1 px-4 py-6 sm:px-6 ${demo ? "lg:px-10 lg:py-10" : "lg:px-10 lg:py-8"}`}
          >
            {children}
          </main>

          {!demo && (
            <footer className="border-t border-[var(--line)] px-4 py-4 text-center text-sm text-[var(--muted)]">
              Unofficial follow-up prototype · Illustrative models labeled · Not
              an O5 audit
            </footer>
          )}
        </div>
      </div>
    </div>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[var(--content)]" />}>
      <ShellInner>{children}</ShellInner>
    </Suspense>
  );
}
