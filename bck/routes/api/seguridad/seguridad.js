var express =  require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

function initSeguridad (db) {
var userModel = require('./seguridad.model')(db);

router.get('/users/all', (req, res)=>{
    userModel.getAll((err, users)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"error"});
      }
      return res.status(200).json(users);
    });
} ); // get /api/seguridad/users/all


router.get('/users/:id',(req, res)=>{
    var id =  req.params.id ;
    userModel.getById(id, (err, doc)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"error"});
      }
      return res.status(200).json(doc);
    });// get /api/seguridad/users/1
});


router.post('/users/new', (req, res)=>{
  var datosEnviados = req.body;
  userModel.addNew(datosEnviados, (err, addedDoc)=>{
    if(err){
      console.log(err);
      return res.status(500).json({error:'error'});
    }
    return res.status(200).json(addedDoc);
    }); 
}); // post /api/seguridad/users/new

router.put('/users/upd/:id', (req, res)=>{
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


router.delete('/users/del/:id', (req, res)=>{
  var id = req.params.id;
  userModel.deleteByCode(id, (err, deletedDoc)=>{
    if(err){
      console.log(err);
      return res.status(500).json({"error":"error"});
    }
    return res.status(200).json(deletedDoc);
  }); 
});


router.post('/login', (req, res)=>{
  var {useremail, userpswd} = req.body;
  userModel.getByEmail(useremail, (err,user)=>{
    if(err){
      console.log(err);
      return res.status(400).json({"msg":"Credencales no pueden ser validadas"});
    }
    if (userModel.comparePswd(user.userpswd, userpswd)){
      delete user.userpswd;
      var token =  jwt.sign(user,
      'cuandoLosGatosNoEstanFiestanlosRatonesHacen',
      {expiresIn:'1600m'}
      )
      return res.status(200).json({"user":user, "jwt":token});
    }
    console.log({ useremail, userpswd, ...{ "msg":"No Coincide Pswds"}});
    return res.status(400).json({ "msg": "Credencales no pueden ser validadas" });
  });
});// post /api/seguridad/login

 return router;
}

//module.exports = router;
module.exports = initSeguridad;
