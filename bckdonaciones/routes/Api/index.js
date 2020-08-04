var express = require('express');
var router = express.Router();
var passport = require('passport');
var passportJWT = require('passport-jwt');


var extractJWT = passportJWT.ExtractJwt;
var strategyJWT = passportJWT.Strategy;

passport.use( 
  new strategyJWT(
    {
        jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'NosVaACostarHacerEstePincheProyecto'
    },
    (payload, next)=>{
      var user = payload;
      console.log(user);
      return next(null, user);
    }
  )
)

var usuariosRouter = require('./Personas/Personas');
var donacionesRouter = require('./Donaciones/Donaciones');
var secRouter = require('./Seguridad/Seguridad');
//const { Passport } = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use("/Seguridad", secRouter);
const jwtAuthMiddleware = passport.authenticate('jwt', {session:false});


router.use('/personas', jwtAuthMiddleware, usuariosRouter);
router.use('/Donaciones', jwtAuthMiddleware, donacionesRouter);

module.exports = router;
