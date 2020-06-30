var express= require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

router.get('/',(req, res)=>{
    res.status(200).json({"version":"1"});
  });

router.post('/login', function(req, res){
    return res.status(200).json({"Mensaje":"FUNCIONA"});
    
}); //Ruta POST /api/Sec/login

router.post('/signin', function(req, res){
    
    return res.status(200).json({"Mensaje":"FUNCIONA"});
    
});//Ruta POST /api/Sec/signin

module.exports = router;