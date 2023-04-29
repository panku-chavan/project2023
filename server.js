const express = require("express");
const connectDB = require("./Backend/config/db.js");
const crudRoute = require("./Backend/Route/crudeRouter.js");
require("dotenv").config();
const port = process.env.PORT;
connectDB();
const app = express();

app.use(express.json());

app.use("/api/v1/crud", crudRoute);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Server is started at ${port}`);
});
