const express = require("express");

const auth = require("./utils/auth");

const app = express();
require("dotenv").config();

// Auth middleware
const authMiddleware = async (req, res, next) => {
  req.client = await auth();
  next();
};

// Initialize Middleware
app.use(express.json({ extended: false }));
app.use(authMiddleware);

app.get("/", (req, res) => res.send("API Running..."));

app.use("/api/pets", require("./routes/pets"));
app.use("/api/data", require("./routes/data"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
