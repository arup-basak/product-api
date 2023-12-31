import express from "express";
import prisma from "../utils/prisma.js";

const router = express.Router();

router.use(express.json());

router.post("/", async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({ err: "No body", success: false });
  }

  const storeData = body.data;
  if (!storeData) {
    return res.status(400).json({ err: "No data", success: false });
  }

  try {
    const resp = await prisma.product.create({
      data: {
        data: storeData,
      },
    });

    return res.status(201).json({ ...resp, success: true });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ err: "Internal Server Error", success: false });
  }
});

export default router;
