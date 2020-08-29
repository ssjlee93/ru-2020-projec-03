const router = require("express").Router();
const budgetController = require("../../controllers/budgetController");

// Matches with "/api/books"

// Matches with "/api/books/:id"
router
  .route("/:uid")
  .post(budgetController.create)
  .get(budgetController.findUser)
  .put(budgetController.update)
  .delete(budgetController.remove);

module.exports = router;
