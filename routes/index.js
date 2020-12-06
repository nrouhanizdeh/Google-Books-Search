const router = require("express").Router();
const apiRoutes = require("./api");
const path = require("path");
const searchBooksController = require("../controllers/googleBooksController");

// app API routes
router.use("/api", apiRoutes);

//Google API routes
router
  .route("/googleBooks/:selectValue/:inputValue")
  .get(searchBooksController.getBooks);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
