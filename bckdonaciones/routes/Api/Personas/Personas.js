var express= require('express');
var router = express.Router();
const perModel = require('./PersonasModel');


const init = async ()=>{
  await perModel.initModel();
}
init();

router.get("/all", async(req, res)=>{
  try {
    let usu = await perModel.getAll();
    res.status(200).json(usu);
  } catch (err) {
    console.log(err);
    res.status(500).json({"Error":"Algo salió mal."});
  }
});//GET /api/Personas/all

router.get("/one/:id", async(req, res)=>{
  try{
    let {ide} = req.params;
    let id = await perModel.getOne(ide);
    res.status(200).json(id);
  }catch(err){
    console.log(err);
    res.status(500).json({"ERROR":"Algo salió mal."});
  }
});//GET /api/Personas/one/:id

router.post("/new", async(req, res)=>{
  try {
    let {id, nombre, telefono, direccion } = req.body;
    const rest = await perModel.addOne(id, nombre, telefono, direccion);
    res.status(200).json(rest);
  } catch(err){
    console.log(err);
    res.status(500).json({ "ERROR": "Algo salió mal." });
  }
});//POST /api/Personas/new

router.put("/upd/:id", async(req, res)=>{
  var id = req.params.id;
  var data = {
    "_id": id,
    ...req.body
  };
  perModel.update(data, (err, upd)=>{
    if(err){
      console.log(err);
      return res.status(500).json({"ERROR":"Algo salió mal."});
    }
    return res.status(200).json(upd);
  });
});//PUT /api/Personas/upd/:id

router.delete("/del/:id", async(req, res)=>{
  try {
    const {id} = req.params;
    const rest = await perModel.deleteOne(id);
    res.status(200).json(rest);
  }catch(err){
  console.log(err);
  res.status(500).json({ "Error": "Algo salió mal." });
  }
});//DELETE /api/Personas/del/:id

router.get('/facet/:page/:items' , async (req, res)=>{
  try{
    const {page, items} = req.params;
    let facetResult = await perModel.getFacet(parseInt(page), parseInt(items));
    res.status(200).json(facetResult);
  }catch(err){
    console.log(err);
    res.status(500).json({ "Error": "Algo Sucedio Mal intentar de nuevo." });
  }
});


module.exports = router;
