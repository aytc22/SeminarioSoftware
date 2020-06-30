var express= require('express');
var router = express.Router();

router.get('/',(req, res)=>{
  res.status(200).json({"version":"1"});
});

router.get("/all", function(req, res){

    res.status(200).json({"Entro":"Ruta GET usuarios/all"});

});//GET /api/usuarios/all

router.get("/one/:id", function(req, res){

  res.status(200).json({"Entro":"Ruta GET usuarios/one/:id"});

});//GET /api/usuarios/one/:id

router.post("/new", function(req, res){

  res.status(200).json({"Entro":"Ruta POST /api/usuarios/new"});

});//POST /api/usuarios/new

router.put("/upd/:id", function(req, res){

    res.status(200).json({"Entro":"Ruta PUT /api/usuarios/upd/:id"});

});//PUT /api/usuarios/upd/:id

router.delete("/del/:id", function(req, res){

    res.status(200).json({"Entro":"Ruta DELETE /api/usuarios/del/:id"});

});//DELETE /api/usuarios/del/:id


module.exports = router;
