"use strict";

/**
 * authorizations Schema
 */
module.exports = function(mongoose) {
  var Schema = mongoose.Schema,
    validation = require("./validationModel"),
    AuthSchema = new Schema({
      contentType: {
        type: String,
        trim: true,
        default: "application/json",
        required: "content-type cannot be blank"
      },
      authorizationkey: {
        type: String,
        trim: true,
        unique: true,
        required: "authorization-key cannot be blank"
      },
      created: {
        type: Date,
        default: Date.now
      }
    });
  mongoose.model("authorizations", AuthSchema);
};
