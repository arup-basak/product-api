import express from "express";
import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});

app.listen(PORT, () => {
  console.log(` > LISTEN TO PORT ${PORT}`);
});
