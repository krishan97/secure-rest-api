const view = require("../view/responseDTO");
const message = require("../message/index");
module.exports.authKey = function (req,res,next) {
if (req.headers['authorization-key'] == void 0 || req.headers['authorization-key'].length ==0 ) {
       view._view({
         code: 401,
         flag: message._flag.authorization.flag,
         message: message._flag.authorization.msg
       }, res, next)
     }else{
                next();
        }

}
module.exports.contentType = function (req,res,next) {
 if (req.headers['content-type'] === void 0 || req.headers['content-type'].length ===0 ) {
       view._view({
         code: 401,
         flag: message._flag.contentType.flag,
         message: message._flag.contentType.msg
       }, res, next);
     }else{
                next();
        }
}
   
module.exports.token = function (req,res,next) {
  if (req.headers['token'] == void 0 || req.headers['token'].length ==0 ) {
       view._view({
         code: 401,
         flag: message._flag.contentType.flag,
         message: 'Token is required'
       }, res, next);
     }else{
                next();
        }
}
