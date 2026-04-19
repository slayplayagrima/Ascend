import { ShieldCheck } from "lucide-react";

function riskAnalysis() {
  return (
    <section className="w-full mt-6 py-5 px-8">
      <div
        className="
          flex items-center justify-between
          rounded-xl
          bg-[var(--bg-secondary)]/20
          backdrop-blur-md
          border border-white/5
          px-6 py-5
        "
      >
        {/* LEFT CONTENT */}
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div
            className="
              w-10 h-10 rounded-xl
              bg-[var(--accent-primary)]/15
              flex items-center justify-center
              text-[var(--accent-primary)]
            "
          >
            <ShieldCheck size={20} />
          </div>

          {/* Text */}
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-sm font-semibold text-white">
                Risk & Discipline Analysis
              </h3>

              <span
                className="
                  px-2 py-0.5
                  rounded-full
                  text-[11px] font-medium
                  bg-[var(--accent-primary)]/15
                  text-[var(--accent-primary)]
                "
              >
                RISK SCORE: LOW
              </span>
            </div>

            <p className="mt-2 text-sm text-[var(--bg-light)] max-w-2xl leading-relaxed">
              Great job diversifying your positions. Your current exposure to
              high-beta stocks is within safe limits (15%). Avoid over-leveraging
              on single stocks to maintain this score.
            </p>
          </div>
        </div>

        {/* RIGHT CTA */}
        <button
          className="
            text-sm font-medium
            text-[var(--accent-primary)]
            hover:text-[var(--accent-secondary)]
            transition
          "
        >
          View Full Analysis →
        </button>
      </div>
    </section>
  );
}

export default riskAnalysis;
