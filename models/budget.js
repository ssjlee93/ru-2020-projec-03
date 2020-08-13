const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const budgetSchema = new Schema(
  {
    user: [
      {
        email: {
          type: String,
          trim: true,
          match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
          unique: true,
          required: "E-mail is required"
        },
        password: {
          type: String,
          trim: true,
          required: "Password is Required",
          validate: [({ length }) => length >= 8, "Password should be longer."]
        }
      }
    ],
    budget: [
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
      }
    ],
    adjusted: [
      {
        newAdministrative: {
          type: Number,
        },
        newTickets: {
          type: Number,
        },
        newLodging: {
          type: Number,
        },
        newFood: {
          type: Number,
        },
        newEntertainment: {
          type: Number
        },
        newShopping: {
          type: Number
        },
        newCare: {
          type: Number
        }
      }
    ]
  },
);

workoutSchema.methods.sumWeight = function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.weight;
  });
}

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;