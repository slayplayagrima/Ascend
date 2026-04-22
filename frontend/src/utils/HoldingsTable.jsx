import { usePortfolioStore } from "../store/usePortfolioStore";

function HoldingsTable({ maxHeight = "420px" }) {
  const { portfolio } = usePortfolioStore();

  // 🔥 REAL DATA FROM BACKEND
  const holdings = portfolio.holdings || [];

  return (
    <div
      className="
        rounded-2xl
        bg-[var(--bg-secondary)]/20
        backdrop-blur-xl
        border border-white/10
        p-6
        flex flex-col
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8 ">
        <h2 className="text-3xl font-bold text-white">Holdings</h2>
        <span className="text-sm font-semibold text-white">
          {holdings.length} Positions
        </span>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-6 text-xs px-5 uppercase tracking-wide text-[var(--bg-light)] font-semibold border-b border-white/10 pb-2">
        <span className="col-span-2">Stock</span>
        <span>Qty</span>
        <span>Avg</span>
        <span>LTP</span>
        <span className="text-right">P&L</span>
      </div>

      {/* Scrollable Table */}
      <div
        className="mt-2 overflow-y-auto pr-2 bg-[var(--accent-primary)] custom-scrollbar p-1 pl-5 pr-6 rounded-lg"
        style={{ maxHeight }}
      >
        {holdings.map((h, i) => {
          const ltp = h.currentPrice || h.avgPrice; // fallback
          const pnl = (ltp - h.avgPrice) * h.quantity;
          const isPositive = pnl >= 0;

          return (
            <div
              key={h.id || i}
              className="
                grid grid-cols-6 items-center
                py-3
                border-b border-white/5
                last:border-none
              "
            >
              <div className="col-span-2">
                <p className="text-[var(--bg-primary)] font-medium">{h.symbol}</p>
               
              </div>

              <span className="text-[var(--bg-primary)]">{h.quantity}</span>

              <span className="text-[var(--bg-primary)]">
                ₹{h.avgPrice.toLocaleString("en-IN")}
              </span>

              <span className="text-[var(--bg-primary)]">
                ₹{ltp.toLocaleString("en-IN")}
              </span>

              <span
                className={`text-right font-medium ${
                  isPositive
                    ? "text-green-900"
                    : "text-rose-400"
                }`}
              >
                {isPositive ? "+" : "-"}₹
                {Math.abs(pnl).toLocaleString("en-IN")}
              </span>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <button
        className="
          mt-4 text-sm text-[var(--bg-primary)]
          hover:underline self-center
        "
      >
        View Detailed Portfolio
      </button>
    </div>
  );
}

export default HoldingsTable;