import { Router } from "express";
import prisma from "../utils/prisma.js";

const router = Router();

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const existingProduct = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });

    if (!existingProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    const deletedProduct = await prisma.product.delete({
      where: {
        id: id,
      },
    });

    if (!deletedProduct) {
      return res
        .status(500)
        .json({ success: false, message: "Failed to delete product" });
    }

    res.json({
      ...deletedProduct,
      success: true,
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

export default router;
