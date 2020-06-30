var express= require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

var donacionesRauter = require('./Api/donaciones/donaciones');
var secRauter = require('./Api/Sec/index');

router.use('/Donaciones', donacionesRauter);
router.use('/Sec', secRauter);

module.exports = router;