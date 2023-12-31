import { Router } from "express";
import prisma from "../utils/prisma.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const id = req.query.id;
    const data = await prisma.product.findFirst({
      where: {
        id: id,
      },
    });

    if (data) {
      res.json({ ...data, success: true });
    } else {
      res.status(404).json({ success: false, message: "Product not found" });
    }
  } catch (error) {
    console.error("Error retrieving product:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

export default router;
