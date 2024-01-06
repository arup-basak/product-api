import express from "express";
import "dotenv/config";
import authorization from "./middleware/authorization.js";

// route imports
import getDataRouter from "./routes/getProduct.js";
import insertRouter from "./routes/insertProduct.js";
import deleteRouter from "./routes/deleteProduct.js";

const app = express();

const PORT = process.env.PORT || 4000;

// Middlewares
app.use(authorization);

// routes
app.use("/insert", insertRouter);
app.use("/search", getDataRouter);
app.use("/delete", deleteRouter);

app.use((req, res) => {
  res.send("Welcome To Product")
})

app.listen(PORT, () => {
  console.log(` > LISTEN TO PORT ${PORT}`);
});
