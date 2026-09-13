import { socialProfiles } from "@/data/socials";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-white/[0.06] bg-[#050508] py-10"
    >
      <div className="sc flex flex-col sm:flex-row items-center justify-between gap-5 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <strong className="text-white font-semibold tracking-wider">VK.</strong>
          <span className="text-gray-600">|</span>
          <span className="text-gray-400 font-medium">Vignesh K</span>
          <span className="hidden sm:inline text-gray-600">·</span>
          <span className="hidden sm:inline text-gray-500">Electronics &amp; Software Engineering</span>
        </div>

        <ul className="flex flex-wrap items-center gap-4 sm:gap-6" role="list">
          {socialProfiles.map((s) => (
            <li key={s.id}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${s.name} ${s.badge ? `(${s.badge})` : "profile"} (opens in new tab)`}
                className="hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                <span>{s.name}</span>
                {s.badge && (
                  <span className="text-[9px] text-blue-400 font-mono tracking-wider">
                    ({s.badge})
                  </span>
                )}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:vigneshkumar0813@gmail.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}