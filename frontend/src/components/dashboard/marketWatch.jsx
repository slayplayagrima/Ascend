import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import { useMarketStore } from "../../store/useMarketStore";

/* ---------------- WATCHLIST META ---------------- */

const watchlist = [
  { symbol: "RELIANCE", name: "Reliance Industries" },
  { symbol: "TCS", name: "Tata Consultancy Services" },
  { symbol: "HDFCBANK", name: "HDFC Bank Ltd" },
  { symbol: "INFY", name: "Infosys Ltd" },
  { symbol: "ICICIBANK", name: "ICICI Bank Ltd" },
];

/* ---------------- TEMP CHART DATA ---------------- */

const chartData = [
  { time: "04:09 pm", price: 2410 },
  { time: "05:24 pm", price: 2500 },
  { time: "05:39 pm", price: 2480 },
  { time: "06:54 pm", price: 2565 },
  { time: "07:29 pm", price: 2710 },
  { time: "08:09 pm", price: 2680 },
  { time: "09:24 pm", price: 2760 },
  { time: "10:39 pm", price: 2638 },
];

/* ---------------- COMPONENT ---------------- */

function MarketWatch() {
  const [selectedStock, setSelectedStock] = useState(watchlist[0]);

  const { prices, prevPrices } = useMarketStore();

  // selected stock data
  const selectedPrice = prices[selectedStock.symbol] || 0;
  const selectedPrev = prevPrices[selectedStock.symbol] || selectedPrice;

  const selectedChange = selectedPrice - selectedPrev;
  const selectedPercent = selectedPrev
    ? (selectedChange / selectedPrev) * 100
    : 0;

  const isSelectedUp = selectedChange >= 0;

  return (
    <section className="w-full p-9 pt-13 grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-6">
      
      {/* ================= LEFT : WATCHLIST ================= */}
      <div className="rounded-xl px-5 bg-[var(--accent-primary)] backdrop-blur-xl border border-white/5 p-5">
        
        <div className="flex justify-between p-2 mb-4">
          <h1 className="text-[var(--bg-primary)] font-medium text-xl">
            Market Watchlist
          </h1>
          <a href="" className="text-[var(--bg-primary)] font-medium hover:text-[var(--bg-secondary)] text-m">
            Show all →
          </a>
        </div>

        <div className="space-y-2">
          {watchlist.map((stock) => {
            const price = prices[stock.symbol] || 0;
            const prev = prevPrices[stock.symbol] || price;

            const change = price - prev;
            const percent = prev ? (change / prev) * 100 : 0;

            const isUp = change >= 0;

            return (
              <button
                key={stock.symbol}
                onClick={() => setSelectedStock(stock)}
                className={`
                  w-full text-left p-4 rounded-xl transition bg-[var(--bg-primary)]/90
                  ${
                    selectedStock.symbol === stock.symbol
                      ? "bg-[var(--bg-secondary)] border border-[rgba(140,220,160,0.35)]"
                      : "hover:bg-[var(--bg-secondary)]"
                  }
                `}
              >
                <div className="flex justify-between items-center">
                  
                  {/* LEFT */}
                  <div>
                    <p className="text-white font-medium text-sm">
                      {stock.symbol}
                    </p>
                    <p className="text-xs text-[var(--bg-light)]">
                      {stock.name}
                    </p>
                  </div>

                  {/* RIGHT */}
                  <div className="text-right">
                    <p className="text-white text-sm">
                      ₹{price.toFixed(2)}
                    </p>
                    <p
                      className={`text-xs ${
                        isUp ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {isUp ? "↗" : "↘"} {percent.toFixed(2)}%
                    </p>
                  </div>

                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ================= RIGHT : CHART ================= */}
      <div className="rounded-xl bg-[var(--bg-secondary)]/20 backdrop-blur-xl border border-white/5 p-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-white text-xl font-semibold">
              {selectedStock.symbol}
            </h2>

            <p className="text-2xl font-bold text-white">
              ₹{selectedPrice.toFixed(2)}{" "}
              <span
                className={`text-sm font-medium ${
                  isSelectedUp ? "text-green-400" : "text-red-400"
                }`}
              >
                {isSelectedUp ? "+" : ""}
                {selectedPercent.toFixed(2)}%
              </span>
            </p>
          </div>

          {/* Time Range */}
          <div className="flex gap-2 text-xs">
            {["1D", "1W", "1M"].map((t) => (
              <button
                key={t}
                className="px-3 py-1 rounded-lg bg-black/30 text-[var(--bg-light)] hover:bg-white/10"
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div style={{ padding: "5px", width: "100%", height: 320 }}>
          <ResponsiveContainer>
            <LineChart data={chartData}>
              <XAxis dataKey="time" stroke="#6b7f73" tick={{ fontSize: 12 }} />
              <YAxis stroke="#6b7f73" tick={{ fontSize: 12 }} domain={["auto", "auto"]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(10,30,20,0.95)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#fff",
                }}
                labelStyle={{ color: "#a8d8b0" }}
                cursor={{ stroke: "#8ddf9b", strokeWidth: 1 }}
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#8ddf9b"
                strokeWidth={2.5}
                dot={false}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Volume */}
        <div className="mt-3 text-center text-xs text-[var(--bg-light)]">
          Volume
        </div>
      </div>
    </section>
  );
}

export default MarketWatch;