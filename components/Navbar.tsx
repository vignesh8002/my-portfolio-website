"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { socialProfiles } from "@/data/socials";

const NAV = [
  { label: "ABOUT",      href: "#about"      },
  { label: "SKILLS",     href: "#skills"     },
  { label: "PROJECTS",   href: "#projects"   },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROOF",      href: "#proof"      },
  { label: "CONTACT",    href: "#contact"    },
];

export default function Navbar() {
  const [open,  setOpen]  = useState(false);
  const [solid, setSolid] = useState(false);
  const menuRef           = useRef<HTMLDivElement>(null);
  const btnRef            = useRef<HTMLButtonElement>(null);

  const navSocials = socialProfiles.filter((s) =>
    ["github", "linkedin", "youtube", "instagram"].includes(s.id)
  );

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); btnRef.current?.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      role="banner"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-[#050508]/85 backdrop-blur-md border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="sc flex items-center justify-between h-20"
      >
        {/* Minimal Logo */}
        <Link
          href="/"
          aria-label="Vignesh K — go to homepage"
          className="text-sm font-bold tracking-[0.24em] uppercase text-white
                     hover:text-blue-400 transition-colors duration-200
                     focus-visible:outline-none focus-visible:ring-2
                     focus-visible:ring-blue-400 rounded px-1"
        >
          VK<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-7" role="list">
            {NAV.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[11px] font-semibold tracking-[0.22em] uppercase
                             text-gray-400 hover:text-white transition-colors duration-150
                             focus-visible:outline-none focus-visible:ring-2
                             focus-visible:ring-blue-400 rounded px-1 py-0.5"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="w-px h-4 bg-white/15" aria-hidden="true" />

          {/* Social shortcut icons in Navbar */}
          <div className="flex items-center gap-3.5 text-gray-400">
            {navSocials.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.name} ${s.badge ? `(${s.badge})` : ""} — opens in new tab`}
                className="hover:text-white hover:scale-110 transition-all p-1 text-xs"
                title={`${s.name}${s.badge ? ` (${s.badge})` : ""}`}
              >
                {s.id === "github" && (
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                )}
                {s.id === "linkedin" && (
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                )}
                {s.id === "youtube" && (
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="hover:text-red-500">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                )}
                {s.id === "instagram" && (
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-pink-400">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          ref={btnRef}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg
                     text-gray-400 hover:text-white hover:bg-white/[0.05]
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
                     transition-colors gap-[5px]"
        >
          <span aria-hidden="true" className="block w-5 h-[1.5px] bg-current transition-all duration-200"
                style={{ transform: open ? "rotate(45deg) translate(0, 6.5px)" : "none" }} />
          <span aria-hidden="true" className="block w-5 h-[1.5px] bg-current transition-all duration-200"
                style={{ opacity: open ? 0 : 1 }} />
          <span aria-hidden="true" className="block w-5 h-[1.5px] bg-current transition-all duration-200"
                style={{ transform: open ? "rotate(-45deg) translate(0, -6.5px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        ref={menuRef}
        id="mobile-nav"
        aria-hidden={!open}
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
                    bg-[#050508]/98 backdrop-blur-xl border-t border-white/[0.08]
                    ${open ? "max-h-[32rem] opacity-100 py-4" : "max-h-0 opacity-0 pointer-events-none"}`}
      >
        <ul className="flex flex-col px-6 gap-1" role="list">
          {NAV.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-sm font-semibold tracking-wider text-gray-300
                           hover:text-white hover:bg-white/[0.05] rounded-xl
                           transition-colors focus-visible:outline-none
                           focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-3 mt-2 border-t border-white/[0.08] flex flex-wrap items-center gap-4 px-3">
            {navSocials.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-white flex items-center gap-1.5"
              >
                {s.name}
                {s.badge ? ` (${s.badge})` : ""} ↗
              </a>
            ))}
          </li>
        </ul>
      </div>
    </header>
  );
}