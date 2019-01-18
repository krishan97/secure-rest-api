"use strict";
module.exports = {
  uSERs: {},
  userName: [],
  messagerooms: [],
  _emailSendFrom: "krishantpps@gmail.com",
  _listcount: 25,
  _listcount10: 10,
  _firebase: "",
  _canNotAccess: "can not access room",
  _formatdate: "yyyy-mm-dd HH:MM:ss",
  _dataGetSuccess: "success",
  _anotherUser: "anotherUser",
  _flag: {
    noexist: {
      flag: "notExist",
      msg: "User does not exist"
    },
    datanoexist: {
      flag: "notExist",
      msg: "data does not exist"
    },
    dataexist: {
      flag: "exist",
      msg: "data already exist"
    },
    token: {
      flag: "notExistToken",
      msg: "Unauthorized Token"
    },
    existEmail: {
      flag: "alreadyExist",
      msg: "Email already exist."
    },
    invalidRecord: {
      flag: "invalid",
      msg: "Username/Email or password does not match"
    },
    invalidAdminRecord: {
      flag: "invalid",
      msg: "Username or password does not match"
    },
    notExistRecord: {
      flag: "notExist",
      msg: "Username/Email not exist"
    },
    invalidCode: {
      flag: "invalid",
      msg: "Invalid verification code"
    },
    existRecord: {
      flag: "alreadyExist",
      msg: "record already exist."
    },
    existVerified: {
      flag: "alreadyVerify",
      msg: "Email already verified."
    },
    block: {
      flag: "blocked",
      msg: "Your account is blocked. Contact support@tech-pratish.com for reinstatement"
    },
    deactivate: {
      flag: "deactivated",
      msg: "Your account is deactivated. Contact support@tech-pratish.com for reinstatement"
    },
    notfound: {
      flag: "notfound",
      msg: "Data not found"
    },
    logout: {
      flag: "logoutAdmin",
      msg: "Logout by admin"
    },
    another: {
      flag: "loginAnother",
      msg: "This user is already logged in on another device. Do you want to close previous session?"
    },
    session: {
      flag: "sessionExpired",
      msg: "session expired"
    },
    userLogout: {
      flag: "logout",
      msg: "Logout successfully"
    },
    invalid: {
      flag: "invalid",
      msg: "Invalid Parameter"
    },
    authorization: {
      flag: "authorization",
      msg: "Invalid Authorization-Key"
    },
    contentType: {
      flag: "content-type",
      msg: "Content-Type must be application/json"
    },
    badReqest: {
      flag: "bad-request",
      msg: "Bad Request"
    },
    params: {
      flag: "parameter-error",
    },
    card: {
      flag: "card-error",
    },
    database: {
      flag: "server-error",
      msg: "Server Internal Error"
    },
    mailVerification: {
      flag: "mail-verify",
      msg: "Please verify your email"
    },
    afterMailVerification: {
      flag: "mail-verify",
      msg: "Thanks you, you are registered successfully. We have sent verification email to you"
    },
    _wrong: {
      flag:"failed",
      msg: "Something went wrong"
    },
    _password: {
      flag: "notMatch",
      msg: "Old password does not match",
      notMatchMsg: "New password and Confirm password does not match",
      msgSuccess: "Password updated successfully",
      olgMatchMsg: "Old password and New password must be different"
    },
    _aws: {
      accessKeyId: "",
      secretAccessKey: ""
    },
    _stripe: {
      stripeSecretKey: "sk_test_nMmjQe3gtDWOC9atZmIocYlF",
      stripePublishableKey: "pk_test_LeZF02LazB5wkITqTtDV9eOj"
    },
    _smtp: {
      email: "demotpss@gmail.com",
      password: "Demo123456"
    }
  },
  _jwtsecret: "K91r80I54s15h33A19N",
  _sAlt: "TTPS8054153319_K80I54s15h33A19N",
  _possible: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
};
