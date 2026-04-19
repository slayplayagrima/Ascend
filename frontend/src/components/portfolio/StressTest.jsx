export default function StressTest() {
  return (
    <div>
      <h2 className="mb-4 font-semibold text-lg flex items-center gap-2">
        📊 Portfolio Stress Test
      </h2>

      <div className="grid grid-cols-3 gap-5">
        <StressCard
          title="Systemic Shock"
          tag="-5% DROP"
          desc="If NIFTY 50 drops by 5% suddenly due to macro events."
          impact="-4,200"
          type="loss"
          border="border-red-500/30"
        />

        <StressCard
          title="Sector Meltdown"
          tag="-10% DROP"
          desc="If the Banking sector (your largest holding) drops by 10%."
          impact="-8,100"
          type="loss"
          border="border-yellow-500/30"
        />

        <StressCard
          title="Bull Continuation"
          tag="+3% RISE"
          desc="If the market maintains its trajectory and breaks resistance."
          impact="+3,150"
          type="gain"
          border="border-green-500/30"
        />
      </div>
    </div>
  );
}

function StressCard({ title, tag, desc, impact, type, border }) {
  return (
    <div
      className={`p-5 rounded-xl border ${border}`}
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* HEADER */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">{title}</h3>

        <span className="text-xs px-2 py-1 rounded bg-white/10">
          {tag}
        </span>
      </div>

      {/* DESC */}
      <p className="text-sm opacity-60 mb-4 leading-relaxed">{desc}</p>

      {/* IMPACT */}
      <div>
        <p className="text-xs opacity-50 mb-1">EST. IMPACT</p>

        <p
          className={`text-lg font-bold ${
            type === "gain" ? "text-green-400" : "text-red-400"
          }`}
        >
          ₹{impact}
        </p>
      </div>
    </div>
  );
}