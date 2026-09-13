const FOCUS_ITEMS = [
  {
    label: "Currently studying",
    value: "B.E. Electronics & Communication Engineering",
  },
  {
    label: "Programming & DSA",
    value: "C, C++, and Python problem solving and data structures",
  },
  {
    label: "Electronics & Embedded",
    value: "Circuit analysis, communication systems, and signal processing",
  },
  {
    label: "Backend & Systems",
    value: "FastAPI, Pydantic, and Python",
  },
  {
    label: "Approach",
    value: "Real work over claims. Document the progress. Build honest foundations.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="sp bg-[#050508] border-t border-white/[0.06] relative overflow-hidden"
    >
      {/* Subtle atmospheric ambient light */}
      <div
        className="absolute top-0 right-0 w-[450px] h-[450px] bg-blue-950/15 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="sc relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <p className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              About the Engineer
            </p>
            <h2 id="about-heading" className="section-title mb-6">
              Engineering the gap between<br className="hidden sm:block" />
              hardware and software.
            </h2>
            <div className="w-12 h-px bg-blue-500 mb-8" aria-hidden="true" />
            <p className="text-gray-400 leading-relaxed mb-5 text-base sm:text-lg">
              I am an Electronics and Communication Engineering student building
              a strong foundation across hardware, software, and backend systems —
              from circuit fundamentals to backend development with Python, C++, and FastAPI.
            </p>
            <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
              This portfolio documents what I am actively learning, building, and exploring.
              An honest engineering record of my real projects, problem solving, and technical progress.
            </p>
          </div>

          {/* Right Column — Focus Areas */}
          <div className="lg:col-span-6 space-y-6" role="list" aria-label="Current focus areas">
            {FOCUS_ITEMS.map((item) => (
              <div
                key={item.label}
                role="listitem"
                className="group border-l-2 border-white/10 hover:border-blue-500 pl-6
                           transition-all duration-300 py-1"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-400/90 mb-1.5">
                  {item.label}
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}