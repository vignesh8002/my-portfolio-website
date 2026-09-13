import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="sp bg-[#050508]/80 border-t border-white/[0.06] relative"
    >
      <div className="sc">
        <p className="section-label">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          Technical Stack &amp; Focus
        </p>
        <h2 id="skills-heading" className="section-title mb-4">
          What I work with.
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mb-12 max-w-lg">
          Skills marked &ldquo;learning&rdquo; are in active development.
          I value technical honesty over inflated claims.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat) => (
            <article
              key={cat.id}
              aria-labelledby={`skill-${cat.id}`}
              className="card p-6 sm:p-7 hover:border-blue-500/40 transition-all duration-300 group"
            >
              <h3
                id={`skill-${cat.id}`}
                className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-400/90 mb-5 group-hover:text-blue-300 transition-colors"
              >
                {cat.label}
              </h3>
              <ul className="flex flex-wrap gap-2" role="list">
                {cat.skills.map((s) => (
                  <li
                    key={s}
                    className="px-3 py-1.5 rounded-full text-xs font-medium
                               bg-white/[0.04] text-gray-300 group-hover:text-white
                               border border-white/[0.08] group-hover:border-white/20
                               transition-all duration-200"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}