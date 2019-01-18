"use strict";

module.exports = function (mongoose) {
  require("./authModel")(mongoose);
  require("./userModel")(mongoose);
};
