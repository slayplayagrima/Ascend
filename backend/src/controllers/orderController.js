import prisma from "../config/prisma.js";

// 🔥 BUY STOCK
export const buyStock = async (req, res) => {
  try {
    const userId = req.user.id;
    const { symbol, quantity, price } = req.body;

    const portfolio = await prisma.portfolio.findUnique({
      where: { userId },
      include: { holdings: true },
    });

    const cost = quantity * price;

    if (portfolio.balance < cost) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    let existing = portfolio.holdings.find(h => h.symbol === symbol);

    if (existing) {
      const totalQty = existing.quantity + quantity;

      await prisma.holding.update({
        where: { id: existing.id },
        data: {
          quantity: totalQty,
          avgPrice:
            (existing.avgPrice * existing.quantity + price * quantity) / totalQty,
        },
      });
    } else {
      await prisma.holding.create({
        data: {
          portfolioId: portfolio.id,
          symbol,
          quantity,
          avgPrice: price,
        },
      });
    }

    await prisma.portfolio.update({
      where: { id: portfolio.id },
      data: {
        balance: portfolio.balance - cost,
        invested: portfolio.invested + cost,
      },
    });

    await prisma.order.create({
      data: {
        userId,
        symbol,
        type: "BUY",
        quantity,
        price,
      },
    });

    res.json({ message: "Stock bought successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Buy failed" });
  }
};

export const sellStock = async (req, res) => {
  try {
    const userId = req.user.id;
    const { symbol, quantity, price } = req.body;

    const portfolio = await prisma.portfolio.findUnique({
      where: { userId },
      include: { holdings: true },
    });

    const existing = portfolio.holdings.find(h => h.symbol === symbol);

    if (!existing || existing.quantity < quantity) {
      return res.status(400).json({ message: "Not enough stock" });
    }

    const revenue = quantity * price;
    const newQty = existing.quantity - quantity;

    if (newQty === 0) {
      await prisma.holding.delete({ where: { id: existing.id } });
    } else {
      await prisma.holding.update({
        where: { id: existing.id },
        data: { quantity: newQty },
      });
    }

    await prisma.portfolio.update({
      where: { id: portfolio.id },
      data: {
        balance: portfolio.balance + revenue,
        invested: portfolio.invested - existing.avgPrice * quantity,
      },
    });

    await prisma.order.create({
      data: {
        userId,
        symbol,
        type: "SELL",
        quantity,
        price,
      },
    });

    res.json({ message: "Stock sold successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Sell failed" });
  }
}; 