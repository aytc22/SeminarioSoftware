var express= require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
let segModel = require('./SeguridadModel');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

router.get('/',(req, res)=>{
    res.status(200).json({"version":"1"});
  });


  let init = async ()=>{
    await segModel.initModel();
  }
  init();

router.get('/all', async(req, res)=>{
    try{
      let usu = await segModel.getAll();
      res.status(200).json(usu);
    }catch (err){
      console.log(err);
      res.status(500).json({"ERROR":"Algo salió mal"});
    }
}); // get /

router.post('/login', async(req, res)=>{
  try{
    var {correo, contraseña} = req.body;
    var usu = await segModel.getByEmail(correo);
    if(await segModel.comparePassword(contraseña, usu.contraseña)){
      const {correo, _id, nombre} = usu;
      const jUsu = {correo, _id, nombre};
      let token = jwt.sign(jUsu, 'NosVaACostarHacerEstePincheProyecto', {expiresIn: '1600m'});
      res.status(200).json(
        {
          ...jUsu, jwt: token
        }
      );
    }else{
      res.status(401).json({"ERROR":"Credenciales incorrectas"});
    }
  }catch(err){
    console.log(err);
    res.status(500).json({"ERROR":"Algo salió mal"});
  }
}); //Ruta POST /api/Seguridad/login

router.post('/signin', async(req, res)=>{
  try{
    var resu = await segModel.addNew(req.body);
    res.status(200).json(resu);
  }catch(err){
    console.log(err);
    res.status(500).json({"ERROR":"Algo salió mal"});
  }
   
    
});//Ruta POST /api/Seguridad/signin

module.exports = router;