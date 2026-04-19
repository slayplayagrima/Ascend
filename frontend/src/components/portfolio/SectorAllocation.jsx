import { usePortfolioStore } from "../../store/usePortfolioStore";
import { calculateSectorDistribution } from "../../utils/portfolioUtils";

export default function SectorAllocation() {
  const { portfolio } = usePortfolioStore();
  const sectors = calculateSectorDistribution(portfolio.holdings);

  return (
    <div
      className="p-5 rounded-xl border border-white/10"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">Sector Allocation</h2>

        <span className="text-xs px-3 py-1 rounded bg-yellow-500/20 text-yellow-400">
          ⚠ Warning: Banking sector exceeds 40%
        </span>
      </div>

      {/* BAR */}
      <div className="flex h-5 rounded-full overflow-hidden mb-4">
        {sectors.map((s, i) => (
          <div
            key={s.sector}
            style={{
              width: `${s.percent}%`,
              background:
                i === 0
                  ? "var(--accent-primary)"
                  : i === 1
                  ? "#1f7a63"
                  : i === 2
                  ? "#155e4b"
                  : "#0f3f33",
            }}
          />
        ))}
      </div>

      {/* LEGEND */}
      <div className="flex flex-wrap gap-6 text-sm mb-3">
        {sectors.map((s, i) => (
          <div key={s.sector} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{
                background:
                  i === 0
                    ? "var(--accent-primary)"
                    : i === 1
                    ? "#1f7a63"
                    : i === 2
                    ? "#155e4b"
                    : "#0f3f33",
              }}
            />
            <span className="opacity-80">
              {s.sector} ({Math.round(s.percent)}%)
            </span>
          </div>
        ))}
      </div>

      {/* FOOT NOTE */}
      <p className="text-xs opacity-60 leading-relaxed">
        Highly concentrated portfolios are susceptible to sector-specific
        downturns. Consider rebalancing into IT or Consumer Goods.
      </p>
    </div>
  );
}