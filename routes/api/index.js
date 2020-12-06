const router = require("express").Router();
const booksRoutes = require("./books");

// SavedBook routes
router.use("/books", booksRoutes);

module.exports = router;
