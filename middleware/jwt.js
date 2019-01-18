const errorHandler = require("./../controllers/errors.controller");
const jwt = require('jsonwebtoken');
const message = require("../message/index");
const view = require("../view/responseDTO");
//  JWT Token encode
module.exports.encode= function(req, res, next) {
 jwt.sign(
    {
      userId: res.userinfo._id
    },
    message._jwtsecret,
    function(err, encode) {
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
        res.token = encode;
        next();
      }
    }
  );

};

//  JWT Token Decode
module.exports.decode= function(req, res, next) {
 jwt.verify(req.headers["token"], message._jwtsecret, function(err, decoded) {
        if(err){
        view._view(
          {
            code: 400,
            flag: message._flag.params.flag,
            message: errorHandler.getErrorMessage(err)
          },
          res,
          next
        );
        }else{
          res.userId = decoded.userId;
           next();
        }
});
   
};
