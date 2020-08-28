const router = require("express").Router();
const budgetController = require("../../controllers/budgetController");

// Matches with "/api/books"

// Matches with "/api/books/:id"
router
  .route("/:id")
  .post(budgetController.create)
  .get(budgetController.findById)
  .put(budgetController.update)
  .delete(budgetController.remove);

module.exports = router;
