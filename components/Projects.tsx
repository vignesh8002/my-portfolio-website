import { projects } from "@/data/projects";
import Image from "next/image";
import type { ProjectStatus } from "@/data/projects";

const STATUS_LABEL: Record<ProjectStatus, string> = {
  completed: "Completed",
  "in-progress": "In progress",
  planned: "Planned",
};
const STATUS_STYLE: Record<ProjectStatus, string> = {
  completed: "text-emerald-400 bg-emerald-950/50 border-emerald-900",
  "in-progress": "text-amber-400 bg-amber-950/50 border-amber-900",
  planned: "text-gray-500 bg-gray-900/50 border-gray-800",
};

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="sp bg-[#050508] border-t border-white/[0.06] relative"
    >
      <div className="sc">
        <p className="section-label">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          Featured Work
        </p>
        <h2 id="projects-heading" className="section-title mb-4">
          What I have built.
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mb-12 max-w-lg">
          Real engineering repositories and functional prototypes. No fictional claims or dummy links.
        </p>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p) => (
            <article
              key={p.id}
              aria-labelledby={`proj-${p.id}`}
              className="card overflow-hidden flex flex-col hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Image / Blueprint banner */}
              {p.image ? (
                <div className="relative h-48 bg-gray-900 shrink-0 overflow-hidden">
                  <Image
                    src={`/projects/${p.image}`}
                    alt={`${p.title} — project screenshot`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-60" />
                </div>
              ) : (
                <div
                  aria-hidden="true"
                  className="h-28 bg-gradient-to-br from-white/[0.04] via-blue-950/10 to-transparent border-b border-white/[0.06] flex items-end justify-between px-6 pb-4"
                >
                  <span className="text-[11px] text-gray-500 font-mono flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60" />
                    repo: {p.id}
                  </span>
                  <span className="text-[11px] text-gray-600 font-mono">{p.year}</span>
                </div>
              )}

              <div className="p-6 sm:p-7 flex flex-col gap-4 flex-1">
                {/* Status + year */}
                <div className="flex items-center justify-between">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${STATUS_STYLE[p.status]}`}
                  >
                    {STATUS_LABEL[p.status]}
                  </span>
                  {p.image && <span className="text-gray-500 text-xs font-mono">{p.year}</span>}
                </div>

                {/* Title + tagline */}
                <div>
                  <h3 id={`proj-${p.id}`} className="text-xl font-bold text-white mb-1.5 group-hover:text-blue-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-blue-400/90 font-medium">{p.tagline}</p>
                </div>

                {/* Problem / solution */}
                <dl className="space-y-2.5 text-sm text-gray-400 leading-relaxed">
                  <div>
                    <dt className="inline text-gray-500 text-xs uppercase tracking-wider font-semibold">
                      Problem —{" "}
                    </dt>
                    <dd className="inline text-gray-300">{p.problem}</dd>
                  </div>
                  <div>
                    <dt className="inline text-gray-500 text-xs uppercase tracking-wider font-semibold">
                      Solution —{" "}
                    </dt>
                    <dd className="inline text-gray-300">{p.solution}</dd>
                  </div>
                </dl>

                {/* Tech tags */}
                <ul
                  className="flex flex-wrap gap-1.5 mt-auto pt-2"
                  role="list"
                  aria-label="Technologies"
                >
                  {p.technologies.map((t) => (
                    <li
                      key={t}
                      className="px-2.5 py-0.5 rounded text-[11px] bg-white/[0.03] text-gray-300 border border-white/[0.08]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {/* Links */}
                {(p.githubUrl || p.demoUrl) && (
                  <div className="flex gap-4 pt-4 border-t border-white/[0.06] mt-2">
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${p.title} source code on GitHub (opens in new tab)`}
                        className="text-xs text-gray-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded flex items-center gap-1.5 font-medium"
                      >
                        GitHub ↗
                      </a>
                    )}
                    {p.demoUrl && (
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${p.title} (opens in new tab)`}
                        className="text-xs text-blue-400 hover:text-blue-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded flex items-center gap-1.5 font-medium"
                      >
                        Live demo ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}