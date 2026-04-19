import { useState, useMemo } from "react";
import { ArrowUpRight, ArrowDownRight, Zap } from "lucide-react";
import { usePortfolioStore } from "../store/usePortfolioStore";

function QuickTradePanel() {
  const { portfolio, buyStock, sellStock } = usePortfolioStore();

  const [side, setSide] = useState("BUY");
  const [stock, setStock] = useState("");
  const [orderType, setOrderType] = useState("MARKET");
  const [qty, setQty] = useState(0);

  const balance = portfolio.balance || 0;
  const holdings = portfolio.holdings || [];

  // Stocks user can select
  const selectableStocks = useMemo(() => {
    if (side === "SELL") return holdings;

    return [
      { symbol: "RELIANCE", price: 2456.75 },
      { symbol: "TCS", price: 3892.1 },
      { symbol: "HDFCBANK", price: 1645.5 },
      { symbol: "INFY", price: 1523.8 },
      { symbol: "ICICIBANK", price: 1087.25 },
    ];
  }, [side, holdings]);

  const selectedStock = selectableStocks.find(s => s.symbol === stock);
  const price = selectedStock?.price || 0;
  const estimatedValue = qty * price;

  async function submitOrder() {
    if (!stock || qty <= 0) return;

    const token = localStorage.getItem("token");

    if (side === "BUY") {
      await buyStock(
        {
          symbol: stock,
          quantity: qty,
          price,
        },
        token
      );
    } else {
      await sellStock(
        {
          symbol: stock,
          quantity: qty,
          price,
        },
        token
      );
    }

    // optional reset
    setQty(0);
    setStock("");
  }

  return (
    <section className="w-full rounded-2xl bg-[var(--bg-secondary)]/20 backdrop-blur-xl border border-white/10 p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 text-white">
        <Zap size={18} className="text-[var(--accent-primary)]" />
        <h3 className="font-semibold">Quick Trade</h3>
      </div>

      {/* Buy / Sell Toggle */}
      <div className="flex bg-[var(--bg-primary)] rounded-xl p-1 mb-5">
        <button
          onClick={() => setSide("BUY")}
          className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2
            ${side === "BUY"
              ? "bg-[var(--accent-primary)] text-black"
              : "text-[var(--bg-light)]"}
          `}
        >
          <ArrowUpRight size={16} />
          Buy
        </button>

        <button
          onClick={() => setSide("SELL")}
          className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2
            ${side === "SELL"
              ? "bg-rose-400  text-black"
              : "text-[var(--bg-light)]"}
          `}
        >
          <ArrowDownRight size={16} />
          Sell
        </button>
      </div>

      {/* Stock */}
      <label className="text-xs text-[var(--bg-light)]">STOCK</label>
      <select
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        className="w-full mt-1 mb-4 px-4 py-3 rounded-xl bg-[var(--bg-primary)] text-white border border-white/10"
      >
        <option value="">Select stock</option>
        {selectableStocks.map(s => (
          <option key={s.symbol} value={s.symbol}>
            {s.symbol} — ₹{s.price || s.avgPrice}
          </option>
        ))}
      </select>

      {/* Order Type */}
      <label className="text-xs text-[var(--bg-light)]">ORDER TYPE</label>
      <select
        value={orderType}
        onChange={(e) => setOrderType(e.target.value)}
        className="w-full mt-1 mb-4 px-4 py-3 rounded-xl bg-[var(--bg-primary)] text-white border border-white/10"
      >
        <option value="MARKET">Market Order</option>
        <option value="LIMIT">Limit Order</option>
      </select>

      {/* Quantity */}
      <label className="text-xs text-[var(--bg-light)]">QUANTITY</label>
      <input
        type="number"
        value={qty}
        onChange={(e) => setQty(Number(e.target.value))}
        className="w-full mt-1 mb-4 px-4 py-3 rounded-xl bg-[var(--bg-primary)] text-white border border-white/10"
      />

      {/* Summary */}
      <div className="rounded-xl bg-[var(--bg-primary)] p-4 text-sm text-[var(--bg-light)] mb-6">
        <div className="flex justify-between">
          <span>Price</span>
          <span>₹{price}</span>
        </div>
        <div className="flex justify-between">
          <span>Est. Value</span>
          <span>₹{estimatedValue}</span>
        </div>
        <div className="flex justify-between">
          <span>Available</span>
          <span>₹{balance}</span>
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={submitOrder}
        className={`w-full py-3 rounded-xl font-medium hover:bg-[var(--bg-secondary)]/80 transition-colors
          ${side === "BUY"
            ? "bg-[var(--accent-primary)] text-black"
            : "bg-rose-400 text-black"}
        `}
      >
        {side} {stock || ""}
      </button>
    </section>
  );
}

export default QuickTradePanel;