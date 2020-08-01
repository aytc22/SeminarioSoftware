var express= require('express');
var router = express.Router();
const donaModel = require('./DonacionesModel');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

router.get('/',(req, res)=>{
    res.status(200).json({"version":"1"});
  });

const init = async ()=>{
    await donaModel.initModel();
}
init();

router.get('/all', async(req, res)=>{
    try{
        let dona = await donaModel.getAll();
        res.status(200).json(dona);
    }catch (err){
        console.log(err);
        res.status(500).json({"ERROR":"Algo salió mal."});
    }
}); //Ruta GET /api/Donaciones/all

router.get('/one/:id', async(req, res)=>{
    try{
        let {ide} = req.params;
        let id = await donaModel.getOne(ide);
        res.status(200).json(id);
    }catch(err){
      console.log(err);
      res.status(500).json({"ERROR":"Algo salió mal."});
    }
    
});//Ruta GET /api/Donaciones/one/:id

router.post('/add', async(req, res)=>{
    try {
        let {id, nombre, correo, celular } = req.body;
        const rest = await donaModel.addOne(id, nombre, correo, celular);
        res.status(200).json(rest);
      } catch(err){
        console.log(err);
        res.status(500).json({"ERROR":"Algo salió mal."});
      }
});//Ruta POST /api/Donaciones/add

router.put('/upd/:id', async(req, res)=>{
    var id = req.params.id;
    var data = {
      "_id": id,
      ...req.body
    };
    donaModel.update(data, (err, upd)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"ERROR":"Algo salió mal."});
      }
      return res.status(200).json(upd);
    }); 
});//Ruta PUT /api/Donaciones/upd/:id

router.delete('/del/:id', async(req, res)=>{
    try {
        const {id} = req.params;
        const rest = await donaModel.deleteOne(id);
        res.status(200).json(rest);
    }catch(err){
      console.log(err);
      res.status(500).json({"ERROR":"Algo salió mal."});
    }
});//Ruta DELETE /api/Donaciones/del/:id

module.exports = router;