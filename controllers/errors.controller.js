'use strict';
/**
 * Get unique error field name
 */
var getUniqueErrorMessage = function(err) {
  var output;
  try {
    var fieldName = err.errmsg.indexOf('{ :');
    var lastIndex = err.errmsg.indexOf('}');
    output = (err.errmsg.substring(fieldName, lastIndex).replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '')).trim() + ' already exists';

  } catch (ex) {
    output = 'Unique field already exists';
  }

  return output;
};

/**
 * Get the error message from error object
 */
exports.getErrorMessage = function(err) {
  var message = err.message;
  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = getUniqueErrorMessage(err);
        break;
      default:
        message = 'Something went wrong';
    }
  } else {
    for (var errName in err.errors) {
      if (err.errors[errName].message) message = err.errors[errName].message;
    }
  }

  return message;
};
