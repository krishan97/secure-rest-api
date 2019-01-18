function start() {
  var express = require('express'),
    app = express(),
    path = require("path"),
    bodyParser = require('body-parser'),
    port = 5001;

  app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Credentials', true);
    res.set('Access-Control-Allow-Methods', 'POST, GET, PUT,PATCH, DELETE');
    res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, authorization-key,token');
    if ('OPTIONS' == req.method) return res.status(200).send();
    next();
  });
  const server= require('http').createServer(app);
   require("./../config/database")(app);

  app.use(bodyParser.urlencoded({
    parameterLimit: 1000000,
    limit: '500mb',
    keepExtensions: true,
    extended: true
  }));
  app.use(bodyParser.json({
    limit: '100mb'
  }));
  //app.use("/public",express.static(path.join(__dirname, '../', 'public')));
  app.use(bodyParser.json());
  server.listen(port);
  console.log('RESTful API server started on: ' + port);
}
exports.start = start;
