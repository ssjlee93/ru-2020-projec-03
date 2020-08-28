const router = require("express").Router();
const economistController = require("../../controllers/economistController");

// Matches with "/api/economist"
router
  .route("/")
  .get(economistController.getIndex);

module.exports = router;
