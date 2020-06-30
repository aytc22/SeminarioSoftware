var express= require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

router.get('/',(req, res)=>{
    res.status(200).json({"version":"1"});
  });

router.get('/all', function(req, res){
    return res.status(200).json({"Mensaje":"FUNCIONA"});
}); //Ruta GET /api/Donaciones/all

router.get('/one/:id', function(req, res){
    return res.status(200).json({"Mensaje":"FUNCIONA"});
    
});//Ruta GET /api/Donaciones/one/:id

router.post('/add', function(req, res){
    return res.status(200).json({"Mensaje":"FUNCIONA"});
});//Ruta POST /api/Donaciones/add

router.put('/upd/:id', function(req, res){
    return res.status(200).json({"Mensaje":"FUNCIONA"});
});//Ruta PUT /api/Donaciones/upd/:id

module.exports = router;