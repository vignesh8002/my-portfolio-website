import { experience } from "@/data/experience";
import type { ExperienceEntry } from "@/data/experience";

const TYPE_LABEL: Record<string, string> = {
  internship:    "Internship",
  hackathon:     "Hackathon",
  achievement:   "Achievement",
  certification: "Certification",
  workshop:      "Workshop",
  competition:   "Competition",
};

function CertButton({ entry }: { entry: ExperienceEntry }) {
  if (!entry.certificate) {
    return (
      <span
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg
                   text-xs font-medium text-gray-700
                   border border-gray-800 bg-gray-900/40
                   cursor-not-allowed select-none"
        aria-label="Certificate not uploaded yet"
      >
        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Certificate not uploaded
      </span>
    );
  }

  return (
    <a
      href={`/certificates/${entry.certificate}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View certificate for ${entry.title} — opens in new tab`}
      className="group btn-outline"
    >
      <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" strokeWidth="1.5"
           className="text-blue-400">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      View certificate
      <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" strokeWidth="2"
           className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  );
}

export default function ProofOfWork() {
  return (
    <section
      id="proof"
      aria-labelledby="proof-heading"
      className="sp bg-[#050508] border-t border-white/[0.06] relative"
    >
      <div className="sc">
        {/* Header */}
        <div className="mb-14">
          <p className="section-label">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Proof of the work.
          </p>
          <h2 id="proof-heading" className="section-title mb-4">
            Evidence behind the experience.
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-lg">
            Real work, documented. Certificates and verifiable proof where
            available. Nothing fabricated.
          </p>
        </div>

        {/* Entries */}
        <div className="grid gap-5">
          {experience.map((e, i) => (
            <article
              key={e.id}
              aria-labelledby={`pow-${e.id}`}
              className="card p-6 sm:p-8 flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-7
                         hover:border-blue-500/40 hover:-translate-y-0.5 transition-all duration-300 group"
            >
              {/* Index bubble */}
              <div
                aria-hidden="true"
                className="hidden sm:flex shrink-0 w-11 h-11
                           items-center justify-center rounded-xl
                           border border-white/10 bg-white/[0.02]
                           text-gray-500 text-xs font-mono font-bold
                           group-hover:border-blue-500/50 group-hover:text-blue-400
                           transition-colors"
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Body */}
              <div className="flex-1 min-w-0">
                {/* Type badge + duration */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-bold
                               uppercase tracking-widest
                               text-blue-300 bg-blue-950/50 border border-blue-800/60"
                  >
                    {TYPE_LABEL[e.type] || e.type} · {String(e.index).padStart(2, "0")}
                  </span>
                  <span className="text-gray-500 text-xs font-mono">{e.duration}</span>
                </div>

                {/* Title */}
                <h3
                  id={`pow-${e.id}`}
                  className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors"
                >
                  {e.title}
                </h3>

                {/* Org */}
                <p className="text-sm sm:text-base text-gray-300 font-medium mb-1">{e.organization}</p>

                {/* Context */}
                {e.context && (
                  <p className="text-xs sm:text-sm text-gray-500 italic mb-4">{e.context}</p>
                )}

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6 max-w-2xl">
                  {e.description}
                </p>

                {/* Proof links */}
                <div className="flex flex-wrap gap-3">
                  <CertButton entry={e} />

                  {e.githubUrl && (
                    <a
                      href={e.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${e.title} on GitHub (opens in new tab)`}
                      className="btn-outline"
                    >
                      GitHub ↗
                    </a>
                  )}

                  {e.link && (
                    <a
                      href={e.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`External link for ${e.title} (opens in new tab)`}
                      className="btn-outline"
                    >
                      Website ↗
                    </a>
                  )}
                </div>

                {/* Privacy note */}
                {e.type === "internship" && (
                  <p className="mt-4 text-[11px] text-gray-600 italic">
                    Personal identifiers such as registration numbers are not
                    displayed publicly. The certificate can be opened as proof
                    of the internship.
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}