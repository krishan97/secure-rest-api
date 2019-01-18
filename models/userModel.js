"use strict";
/**
 * User Schema
 */

module.exports = function (mongoose) {
  var Schema = mongoose.Schema,
    validation = require("./validationModel"),
    UserSchema = new Schema({
      firstName: {
        type: String,
        trim: true,
        required: "First name cannot be blank"
      },
      lastName: {
        type: String,
        trim: true,
        required: "Last name cannot be blank"
      },
      password: {
        type: String,
        trim: true,
        required: "Password cannot be blank"
      },
      email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: "Email address is required",
        validate: [
          validation.validateEmail,
          "Please fill a valid email address"
        ]
      },
      created: {
        type: Date,
        default: Date.now
      },

    });
  mongoose.model("users", UserSchema);
};
