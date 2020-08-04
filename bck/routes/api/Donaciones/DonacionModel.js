var ObjectID = require('mongodb').ObjectID;
var bcrypt = require('bcrypt');
var hasIndexEmail = false;

function pswdGenerator( pswdRaw ){
  var hashedPswd = bcrypt.hashSync(pswdRaw, 10);
  return hashedPswd;
}


module.exports = (db)=>{
  var seguridadModel = {}
  var seguridadCollection = db.collection("Donaciones");

  var foodTemplate = {
    id:"",
    NombreCompleto: "",
    Telefono: "",
    Direccion: "",
    Donacion: "",
    userDateCreated: null
  }

  seguridadModel.getAll = (handler)=>{
    var projection = {"id":1,"NombreCompleto": 1, "Telefono": 1, "Direccion":1, "Donacion":1};
    seguridadCollection.find({projection:projection}).toArray(handler);
  }

  seguridadModel.addNew = (dataToAdd, handler)=>{
    var {id, NombreCompleto, Telefono, Direccion, Donacion} = dataToAdd;
    var userToAdd = Object.assign(
      {},
      foodTemplate,
      {
        id:id,
        NombreCompleto: NombreCompleto,
        Telefono: Telefono,
        Direccion: Direccion,
        Donacion: Donacion,
        userDateCreated: new Date().getTime()
      }
    );
    seguridadCollection.insertOne(userToAdd, (err, rslt)=>{
      if(err){
        return handler(err, null);
      }
      console.log(rslt);
      return handler(null, rslt.ops[0]);
    }); //insertOne
  }

  seguridadModel.update = ( dataToUpdate , handler )=>{
    var { _id, NombreCompleto, Telefono, Direccion, Donacion} = dataToUpdate;
    var query = { "_id": new ObjectID(_id)};
    var updateCommad = {
      "$set":{
        NombreCompleto: NombreCompleto,
        Telefono: Telefono,
        Direccion: Direccion,
        Donacion: Donacion,
        lastUpdated: new Date().getTime()
      },
      "$inc" :{
        "updates": 1
      }
    };
    seguridadCollection.updateOne(
      query,
      updateCommad,
      (err, rslt)=>{
        if(err){
          return handler(err, null);
        }
        return handler(null, rslt.result);
      }
    );// updateOne
  }


  seguridadModel.updateDesc = ( dataToUpdate , handler )=>{
    var { _id, estado} = dataToUpdate;
    var query = { "_id": new ObjectID(_id)};
    var updateCommad = {
      "$set":{
        Estado:estado,
        lastUpdated: new Date().getTime()
      },
      "$inc" :{
        "updates": 1
      }
    };
    seguridadCollection.updateOne(
      query,
      updateCommad,
      (err, rslt)=>{
        if(err){
          return handler(err, null);
        }
        return handler(null, rslt.result);
      }
    );// updateOne
  }


  seguridadModel.deleteByCode = (id, handler)=>{
    var query = {"_id": new ObjectID(id)};
    seguridadCollection.deleteOne(
      query,
      (err, rslt)=>{
        if(err){
          return handler(err, null);
        }
        return handler(null, rslt.result);
      }
    ); //deleteone
  }

  seguridadModel.getById = (id, handler) => {
    var query = {"_id": new ObjectID(id) };
    seguridadCollection.findOne(
      query,
      (err, doc) => {
        if (err) {
          return handler(err, null);
        }
        return handler(null, doc);
      }
    ); 
  }


  seguridadModel.comparePswd = (hash, raw)=>{
    return bcrypt.compareSync(raw, hash);
  }

  seguridadModel.getProductByFilter = async (_page, _itemsPerPage, _sortBy, handler) => {
    var page = _page || 1;
    var itemsPerPage = _itemsPerPage || 10;
    var sortBy = _sortBy || "id";
    var options = { "id": 1, "NombreCompleto": 1, "Telefono": 1, "Direccion": 1, "Donacion": 1};
    let cursor = seguridadCollection.find().limit(itemsPerPage);
    let totalProds = await cursor.count();
    cursor.toArray((err, docs) => {
      if (err) {
        console.log(err);
        return handler(err, null);
      }
        console.log(docs);
        return handler(null, { total: totalProds, products: docs });

    });
  };

  return seguridadModel;
}
