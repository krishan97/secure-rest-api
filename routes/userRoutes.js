'use strict';
module.exports = function(app) {
 const Joi = require('joi');
 const users = require('../controllers/users.controller');
 const jwtAuth = require('../middleware/jwt');
 const validator = require('../middleware/schema-validator');
 const headerValidator = require('../middleware/header-validator');
 const auth = require('../auth/index');
 const  loginSchema = {
  email: Joi.string().required(),
  password: Joi.string().required()
};

  app
    .route('/users')
    .get(headerValidator.authKey, headerValidator.contentType, auth.isAuthenticated, headerValidator.token, jwtAuth.decode, users.getProfile)
    .post(headerValidator.authKey, headerValidator.contentType, auth.isAuthenticated, users.create)
    .put(headerValidator.authKey, headerValidator.contentType, auth.isAuthenticated, validator(loginSchema),users.login, jwtAuth.encode, users.getProfile)
    .patch(headerValidator.authKey, headerValidator.contentType, auth.isAuthenticated,  headerValidator.token, jwtAuth.decode, users.update);
};
