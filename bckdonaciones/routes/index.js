var express = require('express');
var router = express.Router();
var usuariosRouter = require('./Api/Usuarios/index');
var donacionesRouter = require('./Api/donaciones/donaciones');
var secRouter = require('./Api/Sec/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/api/usuarios', usuariosRouter);
router.use('/api/Donaciones', donacionesRouter);
router.use('/api/Sec', secRouter);
module.exports = router;
