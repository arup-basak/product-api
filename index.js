import express from "express";
import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import getDataRouter from "./routes/getdata.js";
import insertRouter from "./routes/insert.js";

const app = express();

const PORT = process.env.PORT || 4000;

app.use("/", insertRouter);
app.use("/", getDataRouter);

app.listen(PORT, () => {
  console.log(` > LISTEN TO PORT ${PORT}`);
});
