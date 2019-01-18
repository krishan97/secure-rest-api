"use strict";

/**
 * Module dependencies.
 */

const mongoose = require("mongoose");
const view = require("../view/responseDTO");
const jwt = require("jsonwebtoken");
const message = require("../message/index");
const errorHandler = require("./errors.controller");
// User Create Profile
module.exports.create = function(req, res, next) {
  try {
    var user = mongoose.model("users");
    var doc = new user(req.body);
    doc.save(function(err) {
      if (err) {
        view._view(
          {
            code: 400,
            flag: message._flag.params.flag,
            message: errorHandler.getErrorMessage(err)
          },
          res,
          next
        );
      } else {
        view._view(
          {
            code: 200,
            flag: message._dataGetSuccess,
            message: "User Created Successfully !!"
          },
          res,
          next
        );
      }
    });
  } catch (err) {
    view._view(
      {
        code: 500,
        flag: message._flag.database.flag,
        message: err.message
      },
      res,
      next
    );
  }
};

// Login User
module.exports.login = function(req, res, next) {
  var user = mongoose.model("users");
  user.findOne(
    {
      email: req.body.email,
      password: req.body.password
    },
    function(err, doc) {
      if (err) {
        view._view(
          {
            code: 400,
            flag: message._flag.params.flag,
            message: errorHandler.getErrorMessage(err)
          },
          res,
          next
        );
        return false;
      } else {
        res.userinfo = doc;
        next();
      }
    }
  );
};

// User View Profile
module.exports.getProfile = function(req, res, next) {
  try {
    view._view(
      {
        code: 200,
        flag: message._dataGetSuccess,
        message: message._dataGetSuccess,
        token: res.token,
        userInfo: {
          firstName: res.userinfo.firstName,
          lastName: res.userinfo.lastName,
          email: res.userinfo.email,
          password: res.userinfo.password
        }
      },
      res,
      next
    );
  } catch (err) {
    view._view(
      {
        code: 500,
        flag: message._flag.database.flag,
        message: err.message
      },
      res,
      next
    );
  }
};

// User Update Profile
module.exports.update = function(req, res, next) {
  try {
    var users = mongoose.model("users");
    users.updateOne(
      {
        _id: mongoose.Types.ObjectId(res.userId)
      },
      req.body,
      function(err) {
        if (err) {
          view._view(
            {
              code: 400,
              flag: message._flag.params.flag,
              message: errorHandler.getErrorMessage(err)
            },
            res,
            next
          );
        } else {
          view._view(
            {
              code: 200,
              flag: message._dataGetSuccess,
              message:
                res.message == void 0 ? message._dataGetSuccess : res.message
            },
            res,
            next
          );
        }
      }
    );
  } catch (err) {
    view._view(
      {
        code: 500,
        flag: message._flag.database.flag,
        message: err.message
      },
      res,
      next
    );
  }
};

// Check User information

module.exports.userCheck = function(req, res, next) {
  try {
    var user = mongoose.model("users");
    user.findOne(
      {
        _id: res.userId
      },
      function(err, doc) {
        if (err) {
          view._view(
            {
              code: 400,
              flag: message._flag.params.flag,
              message: errorHandler.getErrorMessage(err)
            },
            res,
            next
          );
          return false;
        }
        if (doc == null || doc.length == 0) {
          view._view(
            {
              code: 400,
              flag: message._flag.noexist.flag,
              message: message._flag.noexist.msg
            },
            res,
            next
          );
          return false;
        } else {
          res.userinfo = doc;
          next();
        }
      }
    );
  } catch (err) {
    view._view(
      {
        code: 500,
        flag: message._flag.database.flag,
        message: err.message
      },
      res,
      next
    );
  }
};
