"use strict";
module.exports = {
  _view: function(req, res, next) {
    switch (req.code) {

      case 200:
        res.status(200).send(req);
        break;
      case 400:
        res.status(400).send(req);
        break;

      case 401:
        res.status(401).send(req);;
        break;

      case 402:
        res.status(402).send(req);
        break;

      case 404:
        res.status(404).send(req);
        break;

      case 422:
        res.status(422).send(req);
        break;

      case 500:
        res.status(500).send(req);
        break;
    }
  }
};

/*
200 Success
400 Bad Request
401 Unauthorized
404 Not Found
402 Payment Required
500 Internal Server Error
422 Content Type
*/
