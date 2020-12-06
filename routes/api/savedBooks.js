const router = require("express").Router();
const savedBooksController = require("../../controllers/savedBooksController");

// Get all books
// Post (create) a book
router
  .route("/")
  .get(savedBooksController.findAll)
  .post(savedBooksController.create);

// Get book with an specific id
// Delete a book with an specific id
router
  .route("/:id")
  .get(savedBooksController.findById)
  .delete(savedBooksController.remove);

module.exports = router;
