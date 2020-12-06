const router = require("express").Router();
const savedBooksRoutes = require("./savedBooks");

// SavedBook routes
router.use("/savedBooks", savedBooksRoutes);

module.exports = router;
