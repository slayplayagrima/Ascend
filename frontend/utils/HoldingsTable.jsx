function HoldingsTable({ maxHeight = "420px" }) {
  const holdings = [
    {
      stock: "RELIANCE",
      company: "Reliance Industries",
      qty: 50,
      avg: 2400,
      ltp: 2450.5,
      pnl: 2525,
    },
    {
      stock: "HDFCBANK",
      company: "HDFC Bank Ltd",
      qty: 100,
      avg: 1500,
      ltp: 1480,
      pnl: -2000,
    },
    {
      stock: "TATASTEEL",
      company: "Tata Steel",
      qty: 200,
      avg: 145,
      ltp: 148.2,
      pnl: 640,
    },
    {
      stock: "INFY",
      company: "Infosys Ltd",
      qty: 80,
      avg: 1480,
      ltp: 1523.8,
      pnl: 3500,
    },
    {
      stock: "ICICIBANK",
      company: "ICICI Bank",
      qty: 120,
      avg: 950,
      ltp: 1087.25,
      pnl: 16470,
    },
    {
      stock: "SBIN",
      company: "State Bank of India",
      qty: 150,
      avg: 520,
      ltp: 575.8,
      pnl: 8370,
    },
    {
      stock: "ITC",
      company: "ITC Ltd",
      qty: 300,
      avg: 410,
      ltp: 445,
      pnl: 10500,
    },
    {
      stock: "TCS",
      company: "Tata Consultancy Services",
      qty: 60,
      avg: 3950,
      ltp: 3892.1,
      pnl: -3450,
    },
  ];

  return (
    <div
      className="
        rounded-2xl
        bg-[var(--accent-primary)]
        backdrop-blur-xl
        border border-white/10
        p-6
        flex flex-col
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8 ">
        <h2 className="text-3xl font-bold text-[var(--bg-primary)]">Holdings</h2>
        <span className="text-sm font-semibold text-[var(--bg-primary)]">
          {holdings.length} Positions
        </span>
      </div>
      {/* Table Header */}
      <div className="grid grid-cols-6 text-xs px-5 uppercase tracking-wide text-[var(--bg-primary)] font-semibold border-b border-white/10 pb-2">
        <span className="col-span-2">Stock</span>
        <span>Qty</span>
        <span>Avg</span>
        <span>LTP</span>
        <span className="text-right">P&L</span>
      </div>

      {/* Scrollable Table */}
      <div
        className="mt-2 overflow-y-auto pr-2 bg-[var(--bg-primary)] custom-scrollbar p-4 pl-6 pr-6 rounded-lg"
        style={{ maxHeight }}
      >
        {holdings.map((h, i) => {
          const isPositive = h.pnl >= 0;
          return (
            <div
              key={i}
              className="
                grid grid-cols-6 items-center
                py-3
                border-b border-white/5
                last:border-none
              "
            >
              <div className="col-span-2">
                <p className="text-white font-medium">{h.stock}</p>
                <p className="text-xs text-[var(--bg-light)]">
                  {h.company}
                </p>
              </div>

              <span className="text-white">{h.qty}</span>
              <span className="text-[var(--bg-light)]">
                ₹{h.avg.toLocaleString()}
              </span>
              <span className="text-white">
                ₹{h.ltp.toLocaleString()}
              </span>

              <span
                className={`text-right font-medium ${
                  isPositive
                    ? "text-green-400"
                    : "text-rose-400"
                }`}
              >
                {isPositive ? "+" : "-"}₹
                {Math.abs(h.pnl).toLocaleString()}
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

/* ---------- Sub Components ---------- */
