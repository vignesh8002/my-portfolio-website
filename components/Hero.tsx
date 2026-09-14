import Image from "next/image";
import Link from "next/link";
import { socialProfiles } from "@/data/socials";

export default function Hero() {
  const heroSocials = socialProfiles.filter((s) =>
    ["github", "linkedin", "youtube", "instagram"].includes(s.id)
  );

  return (
    <section
      aria-labelledby="hero-headline"
      className="relative w-full h-auto lg:min-h-[100svh] flex items-center bg-[#050508] overflow-hidden pt-24 sm:pt-28 pb-4 sm:pb-6 lg:py-0"
    >
      {/* ── ATMOSPHERIC BACKGROUND LIGHTING & WATERMARKS ───────────────────── */}
      {/* Cool blue atmospheric bloom behind the subject */}
      <div
        className="absolute top-1/4 right-0 lg:right-24 w-[520px] h-[520px] bg-gradient-to-br from-blue-600/20 via-indigo-800/10 to-transparent rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      {/* Deep ambient fill glow */}
      <div
        className="absolute bottom-12 -left-24 w-[480px] h-[480px] bg-blue-950/20 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Giant ultra-subtle editorial watermark text in background (matching reference motif) */}
      <div
        className="absolute inset-0 flex items-start justify-center pt-20 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-serif font-black text-[clamp(4rem,14vw,14rem)] tracking-[0.18em] text-white/[0.02] uppercase leading-none whitespace-nowrap">
          VIGNESH K
        </span>
      </div>

      <div className="sc w-full py-2 sm:py-4 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative">
          {/* ── LEFT 7 COLS: Editorial Typography & Narrative ─────────────────── */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 relative z-20">
            {/* Category / Pre-title with subtle pulse indicator */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5 lg:mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] sm:tracking-[0.28em] text-blue-400/90 max-w-[65%] sm:max-w-none">
                ELECTRONICS ENGINEERING × BACKEND × AI PRODUCTS
              </p>
            </div>

            {/* Main Headline — High-contrast editorial serif */}
            <h1
              id="hero-headline"
              className="font-serif font-black leading-[0.98] sm:leading-[0.96] lg:leading-[0.93] tracking-tight text-white
                         text-[clamp(2.65rem,7.5vw,5.75rem)]
                         mb-5 sm:mb-6 lg:mb-6 animate-slide-up"
              style={{ animationDelay: "0.15s" }}
            >
              Learn<span className="text-blue-500 font-sans">..</span>
              <br />
              Train<span className="text-blue-500 font-sans">..</span>
              <span className="block mt-2.5 sm:mt-3 lg:mt-3 text-[0.62em] text-gray-300/90 font-normal italic font-serif tracking-normal">
                Ascend the Brain.
              </span>
            </h1>

            {/* Description & Reference-inspired Credo */}
            <div
              className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 mb-6 sm:mb-8 lg:mb-8 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              {/* Vertical manifesto element directly drawn from the reference image */}
              <div
                className="hidden sm:flex flex-col gap-1.5 pl-4 border-l border-white/15 text-[10px] font-semibold uppercase tracking-[0.26em] text-gray-500 shrink-0 select-none"
                aria-hidden="true"
              >
                <span>IDEAS</span>
                <span>DISCIPLINE</span>
                <span>PROGRESS</span>
                <span className="text-gray-400">A BETTER ME</span>
              </div>

              <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-[1.75] sm:leading-[1.7] lg:leading-relaxed max-w-[65%] sm:max-w-md lg:max-w-lg">
                Building at the intersection of electronics, software, and AI —
                documenting the work behind the progress.
              </p>
            </div>

            {/* Buttons */}
            <div
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-6 sm:mb-8 lg:mb-10 animate-slide-up relative z-30"
              style={{ animationDelay: "0.45s" }}
            >
              <Link
                href="#experience"
                className="btn-primary"
                aria-label="Read the journey — view my experience and internships"
              >
                Read the journey
                <span aria-hidden="true" className="text-base leading-none">→</span>
              </Link>
              <Link
                href="#about"
                className="btn-ghost"
                aria-label="About me — learn more about Vignesh K"
              >
                About me
              </Link>
            </div>

            {/* Social Links Row in Hero */}
            <div
              className="pt-5 sm:pt-6 lg:pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-3 sm:gap-4 text-xs animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <span className="text-gray-500 uppercase tracking-widest text-[10px] font-semibold">
                Connect:
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {heroSocials.map((s) => (
                  <a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.name} ${s.badge ? `(${s.badge})` : ""} — opens in new tab`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-blue-500/40 text-gray-300 hover:text-white transition-all text-[11px]"
                  >
                    <span>{s.name}</span>
                    {s.badge && (
                      <span className="px-1.5 py-0.2 rounded-full text-[9px] font-mono tracking-wider uppercase bg-blue-950/80 text-blue-400 border border-blue-800/60">
                        {s.badge}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Scroll cue */}
            <div
              aria-hidden="true"
              className="mt-8 hidden lg:flex items-center gap-3 text-gray-600 text-[10px] font-semibold tracking-[0.25em] uppercase"
            >
              <span className="w-8 h-px bg-current" />
              Scroll to explore
            </div>
          </div>

          {/* ── RIGHT 5 COLS: Portrait Emerging from Atmosphere (NO BOX) ────── */}
          <div className="absolute top-1 sm:top-4 right-0 w-[58vw] sm:w-[46vw] max-w-[270px] sm:max-w-[350px] aspect-[4/5] sm:aspect-[1/1] pointer-events-none z-10 lg:pointer-events-auto lg:static lg:col-span-5 lg:w-full lg:max-w-none lg:aspect-auto lg:flex lg:justify-end lg:items-center lg:order-2 lg:z-10">
            <div
              className="relative w-full h-full max-w-lg lg:max-w-xl aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] flex items-center justify-center animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              {/* Backlight halo behind subject to create rim separation */}
              <div
                className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[220px] sm:w-[300px] lg:w-[380px] h-[220px] sm:h-[300px] lg:h-[380px] bg-gradient-to-br from-blue-600/25 via-indigo-600/15 to-transparent rounded-full blur-[65px] lg:blur-[90px] pointer-events-none"
                aria-hidden="true"
              />

              {/* Seamless atmospheric portrait container — 100% sharp face, gentle perimeter feathering */}
              <div className="relative w-full h-full [mask-image:linear-gradient(to_right,transparent_0%,black_40%,black_85%,transparent_100%)] lg:[mask-image:radial-gradient(ellipse_92%_86%_at_53%_38%,black_68%,rgba(0,0,0,0.85)_80%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_40%,black_85%,transparent_100%)] lg:[-webkit-mask-image:radial-gradient(ellipse_92%_86%_at_53%_38%,black_68%,rgba(0,0,0,0.85)_80%,transparent_100%)]">
                {/* Master cinematic portrait */}
                <Image
                  src="/images/cinematic-portrait.png"
                  alt="Vignesh K — electronics and communication engineering student"
                  fill
                  priority
                  quality={95}
                  className="object-cover object-[53%_22%] contrast-[1.03] brightness-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />

                {/* Bottom torso dissolve into dark background */}
                <div
                  className="absolute inset-x-0 bottom-0 h-24 sm:h-32 lg:h-40 bg-gradient-to-t from-[#050508] via-[#050508]/85 to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Left atmospheric soft fade toward the text column */}
                <div
                  className="absolute inset-y-0 left-0 w-28 sm:w-36 lg:w-28 bg-gradient-to-r from-[#050508] via-[#050508]/80 to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}