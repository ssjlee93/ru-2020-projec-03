const axios = require("axios");
const db = require("../models");

// Defining methods for the googleController

// findAll searches the Google Books API and returns only the entries we haven't already saved

// It also makes sure that the books returned from the API all contain a title, author, link, description, and image
module.exports = {
  getIndex: function(req, res) {
    const APIkey = "?api_key=x1vEiGNCDZ7dN85mViLU&column_index=3";
    // need to pass "country" from req
    axios
      .get("https://www.quandl.com/api/v3/datasets/ECONOMIST/BIGMAC_" + country + APIkey)
      .then(results =>
        results.dataset.filter(
          result =>
            result.data[0]
        )
      )
      .then(index =>
        db.Budget.find().then(userBudget => {
            for (const property in userBudget) {
                userBudget[property] * index;
            }
        }
            
        )
      )
      .then(userBudget => res.json(userBudget))
      .catch(err => res.status(422).json(err));
  }
};
