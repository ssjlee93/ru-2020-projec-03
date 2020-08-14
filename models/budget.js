const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const budgetSchema = new Schema(
  {
    administrative: {
      type: Number,
    },
    tickets: {
      type: Number,
    },
    lodging: {
      type: Number,
    },
    food: {
      type: Number,
    },
    entertainment: {
      type: Number
    },
    shopping: {
      type: Number
    },
    care: {
      type: Number
    }
  },
);

// In case we need to process the data and log it to the database, Steve left this code block.
// budgetSchema.methods.sumWeight = function () {
//   return this.exercises.reduce((total, exercise) => {
//     return total + exercise.weight;
//   });
// }

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;