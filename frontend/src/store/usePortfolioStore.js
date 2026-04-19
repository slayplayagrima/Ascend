import { create } from "zustand";

export const usePortfolioStore = create((set, get) => ({
  portfolio: {
    balance: 0,
    invested: 0,
    holdings: [],
  },

  loading: false,
  error: null,

  // 🔹 FETCH PORTFOLIO (Dashboard + Portfolio page)
  fetchPortfolio: async (token) => {
    set({ loading: true, error: null });

    try {
      const res = await fetch("http://localhost:5000/api/portfolio", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      set({
        portfolio: data,
        loading: false,
      });

    } catch (err) {
      console.log("Fetch error:", err);
      set({ error: "Failed to fetch portfolio", loading: false });
    }
  },

  // 🔹 BUY STOCK (backend driven)
  buyStock: async ({ symbol, quantity, price }, token) => {
    set({ loading: true, error: null });

    try {
      await fetch("http://localhost:5000/api/order/buy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          symbol,
          quantity,
          price,
        }),
      });

      // 🔥 Refresh portfolio after buy
      await get().fetchPortfolio(token);

    } catch (err) {
      console.log("Buy error:", err);
      set({ error: "Buy failed", loading: false });
    }
  },

  // 🔹 SELL STOCK (backend driven)
  sellStock: async ({ symbol, quantity, price }, token) => {
    set({ loading: true, error: null });

    try {
      await fetch("http://localhost:5000/api/order/sell", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          symbol,
          quantity,
          price,
        }),
      });

      // 🔥 Refresh portfolio after sell
      await get().fetchPortfolio(token);

    } catch (err) {
      console.log("Sell error:", err);
      set({ error: "Sell failed", loading: false });
    }
  },
}));