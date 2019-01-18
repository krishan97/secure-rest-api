 'use strict';
 var mongoose = require('mongoose'),
   message = require('../message/index'),
   view = require('../view/responseDTO');
   require('./generateAuth').generateAuth(mongoose);
module.exports = {
 isAuthenticated: function (req, res, next) {
   var authorization = mongoose.model('authorizations');
      let authKey= req.headers['authorization-key'].split(' ');
      if (authKey[0] !== 'Bearer') {
        view._view({
          code: 401,
          flag: message._flag.authorization.flag,
          message: message._flag.authorization.msg
        }, res, next)
      } else {
      authorization.findOne({
         authorizationkey: authKey[1],
         contentType: { $regex: req.headers['content-type'], $options: 'i' }
       }, function (err, doc) {
         if (err) {
           view._view({
             code: 400,
             flag: message._flag.params.flag,
             message: errorHandler.getErrorMessage(err)
           }, res, next);
         } else if (doc != null) {
           next();
         } else {
            view._view({
             code: 401,
             flag: message._flag.authorization.flag,
             message: message._flag.authorization.msg
           }, res, next);
         }
       });
      }
   }
 };
