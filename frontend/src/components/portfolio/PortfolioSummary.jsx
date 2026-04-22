import { usePortfolioStore } from "../../store/usePortfolioStore";
import {
  calculateTotalValue,
  calculatePnL,
} from "../../utils/portfolioUtils";

export default function PortfolioSummary() {
  const { portfolio } = usePortfolioStore();

  if (!portfolio) return null;

  const totalValue = calculateTotalValue(portfolio.holdings);
  const pnl = calculatePnL(totalValue, portfolio.invested);

  return (
    <div className="grid grid-cols-4 gap-4">
      <Card title="TOTAL PORTFOLIO VALUE" value={totalValue} />
      <Card title="TOTAL INVESTED" value={portfolio.invested} />
      <Card title="UNREALIZED P&L" value={pnl} highlight />
      <Card title="DAY'S P&L" value={12500} highlight />
    </div>
  );
}

function Card({ title, value, highlight }) {
  return (
    <div
      className="p-4 bg-[var(--bg-secondary)]/20 rounded-xl border border-white/10"
      
    >
      <p className="text-xs opacity-60 mb-2">{title}</p>

      <h2
        className={`text-xl font-bold ${
          highlight ? "text-green-400" : ""
        }`}
      >
        ₹{value.toLocaleString()}
      </h2>
    </div>
  );
}