import prisma from "../config/prisma.js";

export const getPortfolio = async (req, res) => {
  try {
    const userId = req.user.id;

    let portfolio = await prisma.portfolio.findUnique({
      where: { userId },
      include: {
        holdings: true,
      },
    });

    // 🔥 If portfolio doesn't exist → create it
    if (!portfolio) {
      portfolio = await prisma.portfolio.create({
        data: {
          userId,
        },
        include: {
          holdings: true,
        },
      });
    }

    res.json(portfolio);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching portfolio" });
  }
};