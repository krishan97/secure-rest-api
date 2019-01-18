module.exports.generateAuth = function (mongoose) {
  var authorization = mongoose.model('authorizations');
  authorization.countDocuments({}, function (err, count) {
    if (count == 0) {
      var doc = new authorization({
        contentType: "application/json; charset=utf-8",
        authorizationkey: "2J3M5N6P8KUCVDWFYGZ_H3KR5P7Q8RATIFYG2J_S3K4N6P7Q9SAT"
      })
      doc.save(function (err) {
        if (err) console.log(err);
      });
    }
  });
};
