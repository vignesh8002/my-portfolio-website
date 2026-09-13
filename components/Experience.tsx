import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="exp-heading"
      className="sp bg-[#050508]/90 border-t border-white/[0.06] relative"
    >
      <div className="sc">
        <p className="section-label">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          Career &amp; Internships
        </p>
        <h2 id="exp-heading" className="section-title mb-14">
          Where I have worked.
        </h2>

        <ol
          className="relative border-l border-white/10 space-y-14 ml-2"
          role="list"
          aria-label="Work experience timeline"
        >
          {experience.map((e) => (
            <li key={e.id} className="relative pl-8 sm:pl-10" role="listitem">
              {/* Timeline dot */}
              <span
                aria-hidden="true"
                className="absolute -left-[6px] top-[6px] w-3 h-3
                           rounded-full bg-blue-500
                           ring-4 ring-[#050508]
                           shadow-[0_0_14px_rgba(59,130,246,0.8)]"
              />

              {/* Type + index */}
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-400/90 mb-2">
                {e.type} · {String(e.index).padStart(2, "0")}
              </p>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">{e.title}</h3>

              {/* Org */}
              <p className="text-sm sm:text-base text-gray-300 font-medium mb-1">{e.organization}</p>

              {/* Duration */}
              <p className="text-xs font-mono text-gray-500 mb-4">{e.duration}</p>

              {/* Context */}
              {e.context && (
                <p className="text-sm text-gray-500 italic mb-3">{e.context}</p>
              )}

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl">
                {e.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}