import { socialProfiles, directChannels } from "@/data/socials";

function SocialIcon({ id }: { id: string }) {
  switch (id) {
    case "github":
      return (
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    case "leetcode":
      return (
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.704l3.855-4.126 4.908-5.244a1.376 1.376 0 0 0-.003-1.956A1.366 1.366 0 0 0 13.483 0zm-2.88 7.218a1.38 1.38 0 0 0-.979.404l-2.399 2.4a1.38 1.38 0 1 0 1.954 1.953l2.399-2.4a1.38 1.38 0 0 0-.974-2.357zm6.786 3.197H8.384a1.38 1.38 0 1 0 0 2.76h9.005a1.38 1.38 0 1 0 0-2.76z" />
        </svg>
      );
    case "kaggle":
      return (
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.182c0 .158-.052.28-.157.366-.104.085-.236.128-.396.128H4.996c-.156 0-.289-.043-.396-.128-.104-.086-.156-.208-.156-.366V.395c0-.158.052-.28.156-.367.107-.087.24-.13.396-.13h2.738c.16 0 .292.043.396.13.105.087.157.209.157.367v14.596l6.326-6.284c.143-.16.307-.24.492-.24h3.351c.148 0 .241.049.278.148.04.113.011.21-.085.292l-6.732 6.545 7.027 8.165c.088.093.111.19.067.288z" />
        </svg>
      );
    case "youtube":
      return (
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case "instagram":
      return (
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    default:
      return null;
  }
}

function DirectChannelIcon({ id }: { id: string }) {
  switch (id) {
    case "email":
      return (
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8 2.53 1.09 2.53.73 2.99.69.45-.04 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.17-.47-.3" />
        </svg>
      );
    case "phone":
      return (
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="sp bg-[#050508] border-t border-white/[0.06] relative"
    >
      <div className="sc">
        <div className="max-w-2xl mb-12">
          <p className="section-label">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Direct Communication
          </p>
          <h2 id="contact-heading" className="section-title mb-4">
            Get in touch.
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Open to conversations about engineering, projects, collaboration, and opportunities.
          </p>
        </div>

        {/* ── Direct Communication Actions ───────────────────────────────── */}
        <div className="grid sm:grid-cols-3 gap-4 mb-14">
          {directChannels.map((c) => (
            <a
              key={c.id}
              href={c.href}
              {...(c.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="card p-6 flex flex-col justify-between group hover:border-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
                  <DirectChannelIcon id={c.id} />
                </span>
                <span className="text-gray-600 group-hover:text-white text-xs font-semibold transition-colors">
                  ↗
                </span>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold mb-1">
                  {c.label}
                </p>
                <p className="text-white text-sm sm:text-base font-medium break-all group-hover:text-blue-300 transition-colors">
                  {c.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* ── Social Profiles Grid ────────────────────────────────────────── */}
        <div>
          <h3 className="text-xs uppercase tracking-[0.24em] font-semibold text-gray-500 mb-6">
            Social Channels &amp; Platforms
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {socialProfiles.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${s.name} ${s.badge ? `(${s.badge})` : "profile"} (opens in new tab)`}
                className="card p-5 flex flex-col items-center text-center group hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300 relative"
              >
                {/* Optional status badge (e.g. Coming soon) */}
                {s.badge && (
                  <span className="absolute top-2.5 right-2.5 px-1.5 py-0.5 rounded-full text-[9px] font-mono font-semibold tracking-wide bg-blue-950/80 text-blue-300 border border-blue-800/60">
                    {s.badge}
                  </span>
                )}

                <div className="text-gray-400 group-hover:text-blue-400 transition-colors mb-3 mt-1 group-hover:scale-110 duration-200">
                  <SocialIcon id={s.id} />
                </div>
                <span className="text-xs font-semibold text-white mb-0.5 group-hover:text-blue-300 transition-colors">
                  {s.name}
                </span>
                <span className="text-[11px] text-gray-500 truncate max-w-full">
                  {s.handle}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}