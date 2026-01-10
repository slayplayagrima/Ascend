function DashboardStats() {
  const marketOpen = true; // dynamic later
  const currentValue = 112500;
  const invested = 100000;
  const pnl = currentValue - invested;
  const pnlPercent = ((pnl / invested) * 100).toFixed(1);

  return (
    <section className="w-full px-12 pt-15 pb-4">
      <div className="flex bg-[var(--accent-)] items-center justify-between">

        {/* LEFT: Market Status */}
        <div className="flex items-center gap-2">
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              marketOpen ? "bg-green-400" : "bg-red-400"
            }`}
          />
          <div className="flex text-center flex-col leading-tight">
            <span className="pb-1.5 text-xs text-[var(--bg-light)]">
              MARKET STATUS
            </span>
            <span className="text-m text-white font-medium">
              {marketOpen ? "NSE/BSE OPEN" : "NSE/BSE CLOSED"}
            </span>
          </div>
        </div>

        {/* CENTER STATS */}
        <div className="flex items-center gap-16">

          {/* Available Margin */}
          <Stat
            label="AVAILABLE MARGIN"
            value="₹1,00,000.00"
          />

          {/* Current Value */}
          <div className="flex text-center flex-col gap-1">
            <span className="text-xs text-[var(--bg-light)]">
              CURRENT VALUE
            </span>
            <div className="flex items-center gap-2">
              <span className="text-white text-lg font-semibold">
                ₹{currentValue.toLocaleString("en-IN")}
              </span>
              <span className="px-2 py-0.5 text-xs rounded-full bg-green-500/20 text-green-400">
                +{pnlPercent}%
              </span>
            </div>
          </div>

          {/* Total Invested */}
          <Stat
            label="TOTAL INVESTED"
            value={`₹${invested.toLocaleString("en-IN")}`}
          />

          {/* Total P/L */}
          <div className="flex text-center flex-col gap-1">
            <span className="text-xs text-[var(--bg-light)]">
              TOTAL P/L
            </span>
            <span
              className={`text-lg font-semibold ${
                pnl >= 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              {pnl >= 0 ? "+" : "-"}₹{Math.abs(pnl).toLocaleString("en-IN")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardStats;

// Reusable Stat Component
function Stat({ label, value }) {
  return (
    <div className="flex text-center flex-col gap-1">
      <span className="text-xs text-[var(--bg-light)]">
        {label}
      </span>
      <span className="text-white text-lg font-semibold">
        {value}
      </span>
    </div>
  );
}
