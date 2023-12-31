import express from "express";
import "dotenv/config";
import getDataRouter from "./routes/getProduct.js";
import insertRouter from "./routes/insertProduct.js";
import deleteRouter from "./routes/deleteProduct.js";

const app = express();

const PORT = process.env.PORT || 4000;

app.use("/", insertRouter);
app.use("/", getDataRouter);
app.use("/delete", deleteRouter);

app.listen(PORT, () => {
  console.log(` > LISTEN TO PORT ${PORT}`);
});
