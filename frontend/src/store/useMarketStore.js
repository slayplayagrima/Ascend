import { create } from "zustand";

export const useMarketStore = create((set) => ({
  prices: {},
  prevPrices: {},

  updatePrices: (updates) =>
    set((state) => {
      const newPrices = { ...state.prices };
      const newPrev = { ...state.prevPrices };

      updates.forEach((u) => {
        newPrev[u.symbol] = newPrices[u.symbol] || u.price;
        newPrices[u.symbol] = u.price;
      });

      return {
        prices: newPrices,
        prevPrices: newPrev,
      };
    }),
}));