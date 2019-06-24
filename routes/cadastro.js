var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cadastro', function(req, res, next) {
	console.log("cadastro");
  res.status(200).sendFile(__dirname+'../public/cadastro.html');
});
module.exports = router;

