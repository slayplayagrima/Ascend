export const calculateTotalValue = (holdings) => {
  return holdings.reduce(
    (sum, h) => sum + h.quantity * h.currentPrice,
    0
  );
};

export const calculatePnL = (totalValue, invested) => {
  return totalValue - invested;
};

export const calculateStockPnL = (stock) => {
  return (stock.currentPrice - stock.avgPrice) * stock.quantity;
};

export const calculateStockValue = (stock) => {
  return stock.currentPrice * stock.quantity;
};

export const calculateSectorDistribution = (holdings) => {
  const sectorMap = {};
  const totalValue = calculateTotalValue(holdings);

  holdings.forEach((h) => {
    const value = h.quantity * h.currentPrice;
    sectorMap[h.sector] = (sectorMap[h.sector] || 0) + value;
  });

  return Object.entries(sectorMap).map(([sector, value]) => ({
    sector,
    percent: totalValue ? (value / totalValue) * 100 : 0,
  }));
};

export const calculateReturnPercent = (totalValue, invested) => {
  if (invested === 0) return 0;
  return ((totalValue - invested) / invested) * 100;
};

export const formatCurrency = (num) => {
  return `₹${num.toLocaleString()}`;
};