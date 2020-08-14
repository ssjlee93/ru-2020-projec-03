const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
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
)

const User = mongoose.model("user", UserSchema);

module.exports = User;