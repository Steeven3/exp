var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Nos Services' });
});

module.exports = router;
