var express = require('express');
var router = express.Router();
var usuariosRouter = require('./Api/Usuarios/index');
var donacionesRauter = require('./Api/donaciones/donaciones');
var secRauter = require('./Api/Sec/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/api/usuarios', usuariosRouter);
router.use('/api/Donaciones', donacionesRauter);
router.use('/api/Sec', secRauter);
module.exports = router;
