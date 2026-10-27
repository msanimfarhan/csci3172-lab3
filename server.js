const express = require("express");
const itemRoutes = require("./routes/items");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger);
app.use(express.json());

app.use("/api/items", itemRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Furniture Inventory API is running!" });
});

// This must come after all routes
app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});