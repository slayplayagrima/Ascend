import prisma from "../config/prisma.js";

export const getProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        fullName: true,
        email: true,
        phone: true,
        employmentStatus: true,
        createdAt: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch profile" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { fullName, email, phone, employmentStatus } = req.body;

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        ...(fullName && { fullName }),
        ...(email && { email }),
        ...(phone && { phone }),
        ...(employmentStatus && { employmentStatus }),
      },
    });

    res.json(updatedUser);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update profile" });
  }
};