const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findUser: function(req, res) {
    db.Budget
      .findOne({ uid: req.params.uid})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Budget
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Budget
      .findOneAndUpdate({ uid: req.params.uid }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Budget
      .findOneAndDelete({uid: req.params.uid})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
