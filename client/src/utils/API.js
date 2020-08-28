import axios from "axios";

export default {
  // Gets index from API
  getIndex: function (country) {
      return axios.get("/api/economist", country);
    },
  // Gets all saved budget
  getBudget: function(uid) {
    return axios.get("/api/budget/" + uid);
  },
  // Deletes the budget related to the user
  deleteBudget: function(uid) {
    return axios.delete("/api/budget/" + uid);
  },
  // Create and save the budget for a user
  createBudget: function(amountObject) {
    return axios.post("/api/budget", amountObject);
  },
  // Updates all values of the colelction
  updateBudget: function(uid, amountObject) {
    return axios.put("/api/budget/" + uid, amountObject);
  },
};
