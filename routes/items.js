const express = require("express");
const validateItem = require("../middleware/validateItem");

const router = express.Router();

const items = [
  {
    id: 1,
    name: "Brown Leather Sofa",
    category: "Sofa",
    price: 899,
    available: true
  },
  {
    id: 2,
    name: "Wooden Dining Table",
    category: "Table",
    price: 499,
    available: true
  }
];

let nextId = 3;

// Retrieve all items
router.get("/", (req, res) => {
  res.json(items);
});

// Retrieve one item by ID
router.get("/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const item = items.find((item) => item.id === id);

  if (!item) {
    const error = new Error("Furniture item not found");
    error.status = 404;
    return next(error);
  }

  res.json(item);
});

// Create a new item after validation
router.post("/", validateItem, (req, res) => {
  const { name, category, price, available } = req.body;

  const newItem = {
    id: nextId++,
    name: name.trim(),
    category: category.trim(),
    price,
    available
  };

  items.push(newItem);

  res.status(201).json(newItem);
});


// Delete an item by ID
router.delete("/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const index = items.findIndex((item) => item.id === id);

  if (index === -1) {
    const error = new Error("Furniture item not found");
    error.status = 404;
    return next(error);
  }

  const deletedItem = items.splice(index, 1)[0];

  res.json({
    message: "Furniture item deleted",
    item: deletedItem
  });
});


module.exports = router;