var express =  require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

function initSeguridad (db) {
var userModel = require('./DonacionModel')(db);


router.get('/one/:id',(req, res)=>{
    var id =  req.params.id ;
    userModel.getById(id, (err, doc)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"error"});
      }
      return res.status(200).json(doc);
    });
});

router.get('/all',(req, res)=>{
    userModel.getAll((err, doc)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"error"});
      }
      return res.status(200).json(doc);
    });
});


router.post('/new', (req, res)=>{
  var datosEnviados = req.body;

  userModel.addNew(datosEnviados, (err, addedDoc)=>{
    if(err){
      console.log(err);
      return res.status(500).json({error:'error'});
    }
    return res.status(200).json(addedDoc);
    }); 
}); 

router.put('/upd/:id', (req, res)=>{
  var id = req.params.id;
  var data = {
    "_id": id,
    ...req.body
  };

  
  userModel.update(data, (err, updatedDoc)=>{
    if(err){
      console.log(err);
      return res.status(500).json({"error":"error"});
    }
    return res.status(200).json(updatedDoc);
  });
});

router.put('/desc/:id', (req, res)=>{
  var id = req.params.id;
  var data = {
    "_id": id,
    ...req.body
  };

 
  userModel.updateDesc(data, (err, updatedDoc)=>{
    if(err){
      console.log(err);
      return res.status(500).json({"error":"error"});
    }
    return res.status(200).json(updatedDoc);
  });
});


router.delete('/del/:id', (req, res)=>{
  var id = req.params.id;
  userModel.deleteByCode(id, (err, deletedDoc)=>{
    if(err){
      console.log(err);
      return res.status(500).json({"error":"error"});
    }
    return res.status(200).json(deletedDoc);
  }); 
});


router.get('/facet/:page/:items', (req, res)=>{
    var {page, items} = req.params;
    userModel.getProductByFilter(
      parseInt(page),
      parseInt(items),
      "id",
      (err, rslt)=>{
        if(err){
          return res.status(500).json({});
        }
        return res.status(200).json(rslt);
      });
}); 
 return router;
}


module.exports = initSeguridad;
