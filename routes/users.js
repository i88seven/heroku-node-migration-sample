var express = require('express');
var router = express.Router();
let db = require("../models/index");

/* GET users listing. */
router.get("/", function (req, res, next) {
  db.user.findAll({}).then((users) => {
    res.send(users);
  });
});

router.get("/add", function (req, res, next) {
  db.user.create({
    firstName: 'Yasunori',
    lastName: 'Arakawa',
    email: 'arakawa@gmail.com'
  }).then(() => {
    res.send('Added');
  });
});

module.exports = router;
