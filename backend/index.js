require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ status: 200, message: "Welcome To API NeoKom" });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
