const validateItem = (req, res, next) => {
  const body = req.body;

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    const error = new Error("Request body must be a JSON object");
    error.status = 400;
    return next(error);
  }

  const { name, category, price, available } = body;

  if (
    typeof name !== "string" || name.trim() === "" ||
    typeof category !== "string" || category.trim() === "" ||
    typeof price !== "number" || !Number.isFinite(price) || price < 0 ||
    typeof available !== "boolean"
  ) {
    const error = new Error(
      "Provide a non-empty name and category, a valid non-negative price, and a boolean available"
    );
    error.status = 400;
    return next(error);
  }

  next();
};

module.exports = validateItem;