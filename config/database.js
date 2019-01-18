module.exports = function (app) {
  let dbName = 'sample';
  let mongoose = require('mongoose');
  mongoose.set('useCreateIndex', true);
  mongoose.connect('mongodb://localhost:27017/'+ dbName, {
    useNewUrlParser: true
  }, function (err, res) {
    if (err) {
      console.log(err);
    } else {
      require('./../models/index.js')(mongoose);
      require('./../routes/index.js')(app);
    }
  });
};
