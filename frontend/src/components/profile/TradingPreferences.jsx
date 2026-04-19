import { ShieldCheck, TrendingUp } from "lucide-react";
import { useState } from "react";

function TradingPreferences() {
  const [level, setLevel] = useState("INTERMEDIATE");
  const [exposure, setExposure] = useState(20);
  const [stopLossEnabled] = useState(true);

  return (
    <section className="w-full mb-10 px-4">
      {/* Section Title */}
      <h3 className="text-sm uppercase tracking-wide text-[var(--bg-light)] mb-4">
        Trading Preferences
      </h3>

      <div className="rounded-2xl bg-[var(--bg-secondary)]/20 backdrop-blur-xl border border-white/10 p-6 space-y-6">
        
        {/* Expertise Mode */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h4 className="text-sm font-medium text-white mb-1">
              Trading Expertise Mode
            </h4>
            <p className="text-xs text-[var(--bg-light)] max-w-md">
              Adjusts interface complexity and simulation guardrails.
            </p>
          </div>

          <div className="flex bg-[var(--bg-primary)] rounded-lg p-1">
            <button
              onClick={() => setLevel("BEGINNER")}
              className={`px-4 py-2 rounded-md text-sm transition
                ${level === "BEGINNER"
                  ? "bg-[var(--accent-primary)] text-black"
                  : "text-[var(--bg-light)]"}
              `}
            >
              Beginner
            </button>

            <button
              onClick={() => setLevel("INTERMEDIATE")}
              className={`px-4 py-2 rounded-md text-sm transition
                ${level === "INTERMEDIATE"
                  ? "bg-[var(--accent-primary)] text-black"
                  : "text-[var(--bg-light)]"}
              `}
            >
              Intermediate
            </button>
          </div>
        </div>

        {/* Max Exposure */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-[var(--bg-light)] flex items-center gap-2">
              <TrendingUp size={14} />
              MAX EXPOSURE LIMIT
            </span>
            <span className="text-xs text-[var(--accent-primary)]">
              {exposure}%
            </span>
          </div>

          <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full bg-[var(--accent-primary)] transition-all"
              style={{ width: `${exposure}%` }}
            />
          </div>
        </div>

        {/* Mandatory Stop Loss */}
        <div className="flex items-center justify-between rounded-xl bg-[var(--bg-primary)]/60 p-4 border border-white/10">
          <div className="flex items-start gap-3">
            <ShieldCheck className="text-[var(--accent-primary)] mt-0.5" size={18} />
            <div>
              <p className="text-sm font-medium text-white">
                Mandatory Stop-Loss
              </p>
              <p className="text-xs text-[var(--bg-light)]">
                Enforcing a 2% stop-loss per trade in simulation.
              </p>
            </div>
          </div>

          <span className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--accent-primary)]/20 text-[var(--accent-primary)]">
            ACTIVE
          </span>
        </div>
      </div>
    </section>
  );
}

export default TradingPreferences;
