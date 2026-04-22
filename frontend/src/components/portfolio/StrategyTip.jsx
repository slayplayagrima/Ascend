export default function StrategyTip() {
  return (
    <div
      className="p-5 bg-[var(--bg-secondary)]/20 rounded-xl border border-green-500/20"
    >
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-white font-semibold text-sm">
          Portfolio Strategy Tip
        </h3>
      </div>

      <p className="text-sm opacity-70 leading-relaxed">
        Your volatility is 12% higher than NIFTY 50. Hedging with options or
        diversifying into debt instruments could lower systemic risk.
      </p>
    </div>
  );
}