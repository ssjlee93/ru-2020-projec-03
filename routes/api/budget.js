const router = require("express").Router();
const budgetController = require("../../controllers/budgetController");

// Matches with "/api/books"
router
  .route("/")
  .post(budgetController.create)
// Matches with "/api/books/:id"
router
  .route("/:uid")
  .get(budgetController.findUser)
  .put(budgetController.update)
  .delete(budgetController.remove);

module.exports = router;
