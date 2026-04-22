export default function RiskSnapshot() {
  return (
    <div
      className="p-5 bg-[var(--bg-secondary)]/20 rounded-xl border border-white/10 relative"
    >
      {/* Title */}
      <h3 className="font-semibold mb-4">Risk Snapshot</h3>

      {/* Risk Score */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm opacity-70">Risk Score</span>
        <span className="text-xs px-2 py-1 rounded bg-yellow-500/20 text-yellow-400">
          MEDIUM
        </span>
      </div>

      {/* Metrics */}
      <div className="space-y-2 text-sm opacity-80 mb-4">
        <div className="flex justify-between">
          <span>Max Drawdown</span>
          <span>-4.2%</span>
        </div>

        <div className="flex justify-between">
          <span>Volatility (Beta)</span>
          <span>1.12</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 rounded bg-white/10">
        <div
          className="h-2 rounded"
          style={{
            width: "70%",
            background: "var(--accent-primary)",
          }}
        />
      </div>
    </div>
  );
}