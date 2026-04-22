export default function CapitalUsage() {
  return (
    <div
      className="p-5 bg-[var(--bg-secondary)]/20 rounded-xl border border-white/10"

    >
      <h3 className="font-semibold mb-4">Capital Usage</h3>

      {/* Bars */}
      <div className="flex gap-4 mb-4">
        {/* Used */}
        <div className="flex-1">
          <div className="h-20 rounded bg-green-500/20 flex items-end overflow-hidden">
            <div
              className="w-full h-[65%]"
              style={{ background: "var(--accent-primary)" }}
            />
          </div>
          <p className="text-xs mt-2 text-center opacity-70">USED MARGIN</p>
        </div>

        {/* Available */}
        <div className="flex-1">
          <div className="h-20 rounded bg-white/10 flex items-end overflow-hidden">
            <div
              className="w-full h-[35%] bg-green-800/40"
            />
          </div>
          <p className="text-xs mt-2 text-center opacity-70">AVAILABLE</p>
        </div>
      </div>

      {/* Exposure */}
      <div className="flex justify-between items-center mt-3">
        <span className="text-sm opacity-70">Exposure</span>
        <span className="text-lg font-semibold">65%</span>
      </div>
    </div>
  );
}