const Joi = require('joi');
const view = require("../view/responseDTO");
module.exports = (schemaObject) => {
 return (req, res, next) => {
   const payload = Object.assign({}, req.params || {}, req.query || {}, req.body || {});

   Joi.validate(payload, Joi.object().keys(schemaObject), (err, result) =>{
	 if(err){  
	 view._view(
         {
           code: 400,
           errors:err.details
         },
         res,
         next
       ); } else { next(err) }
	});
 };
};
