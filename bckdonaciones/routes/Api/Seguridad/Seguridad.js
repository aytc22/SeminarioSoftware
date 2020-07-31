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
    var {correo, contra, nomcom} = req.body;
    var usu = await segModel.getByEmail(correo);
    if(await segModel.comparePassword(contra, usu.contraseña)){
      const {correo, _id} = usu;
      const jUsu = {correo, _id};
      console.log(jUsu);
      let token = jwt.sign(jUsu, 'NosVaACostarHacerEstePincheProyecto', {expiresIn: '60m'});
      res.status(200).json(
        {
          ...jUsu, jwt: token
        }
      );
    }else{
      res.status(401).json({"ERROR":"Credenciales incorrectas"});
    }
  }catch(err){
    res.status(500).json({"ERROR":"Algo salió mal"});
  }
}); //Ruta POST /api/Sec/login

router.post('/signin', async(req, res)=>{
  try{
    var res = await segModel.addNew(req.body);
    console.log(res);
    res.status(200).json({"Mensaje":"Usuario creado"});
  }catch(err){
    res.status(500).json({"ERROR":"Algo salió mal"});
  }
   
    
});//Ruta POST /api/Sec/signin

module.exports = router;