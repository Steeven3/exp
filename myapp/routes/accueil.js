var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/accueil', function(req, res, next) {
  res.render('accueil', { title: 'Page Accueil' });
});

module.exports = router;
