const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");

const port = process.env.PORT || 5000;

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.get("*", (req, res) => {
  res.status(404).json({ message: "not found" });
});

app.listen(port, () => {
  console.log(`\n Server listening on port ${port}`);
});
