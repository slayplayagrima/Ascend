import { usePortfolioStore } from "../../store/usePortfolioStore";
import { calculateStockPnL } from "../../utils/portfolioUtils";

export default function HoldingsTable() {
  const { portfolio } = usePortfolioStore();

  return (
    <div
      className="rounded-xl border border-white/10 p-5"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* HEADER */}
      <div className="flex justify-between mb-4">
        <h2 className="font-semibold text-lg">Current Holdings</h2>
        <span className="text-sm opacity-60">Filter</span>
      </div>

      {/* TABLE */}
      <table className="w-full text-sm">
        <thead className="text-white/50 text-xs">
          <tr>
            <th className="text-left">STOCK</th>
            <th>QUANTITY</th>
            <th>AVG PRICE</th>
            <th>LTP</th>
            <th className="text-right">UNREALIZED P&L</th>
          </tr>
        </thead>

        <tbody>
          {portfolio.holdings.map((h) => {
            const pnl = calculateStockPnL(h);

            return (
              <tr
                key={h.symbol}
                className="border-t border-white/10 hover:bg-white/5 transition"
              >
                <td className="py-4">
                  <p className="font-medium">{h.symbol}</p>
                  <p className="text-xs opacity-50">{h.sector}</p>
                </td>

                <td className="text-center">{h.quantity}</td>
                <td className="text-center">₹{h.avgPrice}</td>
                <td className="text-center">₹{h.currentPrice}</td>

                <td className="text-right">
                  <span
                    className={`px-3 py-1 rounded-md text-sm ${
                      pnl >= 0
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    ₹{pnl.toLocaleString()}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}