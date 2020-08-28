const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const budgetSchema = new Schema(
  {
    uid: {
      type: String,
      unique: true,
      required: true
    },
    administrative: {
      type: Number,
    },
    tickets: {
      type: Number,
    },
    auto: {
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
    childcare: {
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