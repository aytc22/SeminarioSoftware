const db = require('../../DB/db');
const ObjectId = require('mongodb').ObjectId;

let usuCol;

module.exports = class{
    static async initModel(){
        if(!usuCol){
            let _db = await db.getDB();
            usuCol = await _db.collection('Personas');
            console.log("Colección de Personas creada");
            return;
        }else{
            return;
        }
    }

    static async getAll (){
        try{
            if(usuCol){
                let muestra = await usuCol.find();
                return muestra.toArray();
            }
            return[];
        }catch(err){
            console.log(err);
            return err;
        }
    }

    static async addOne(id, nombre, telefono, direccion) {
        try{
          const nueUsu = {id:id, nombre:nombre, telefono:telefono, direccion:direccion};
          const res = await usuCol.insertOne(nueUsu);
          return res;
        }catch(err){
          console.log(err);
          return err;
        }
      }
  
    static async getOne(id) {
        try {
          let filter = { "_id": new ObjectId(id)};
          const res = await usuCol.findOne(filter);
          return res;
        } catch (err) {
          console.log(err);
          return err;
        }
      }
 
    static async deleteOne(id){
        try{
          let filter = {"_id": new ObjectId(id)};
          const res = await usuCol.deleteOne(filter);
          return res;
        }catch(err){
          console.log(err);
          return err;
        }
      }

      static update = ( dataToUpdate , handler )=>{
        var { _id, nombre, telefono, direccion } = dataToUpdate;
        var query = { "_id": new ObjectID(_id)};
        var updateCommad = {
          "$set":{
            nombre: nombre,
            telefono: telefono,
            direccion: direccion
          },
          "$inc" :{
            "updates": 1
          }
        };
        async.updateOne(
          query,
          updateCommad,
          (err, rslt)=>{
            if(err){
              return handler(err, null);
            }
            return handler(null, rslt.result);
          }
        );
      }

      static async getFacet(page, poolNumber) {
        try {
          if (usuCol) {
            
            let registro = await usuCol.find();
            let totalDocs = await registro.count();
            const limiteInferior = page * poolNumber;
            registro.skip(limiteInferior);
            registro.limit(poolNumber);
            const personas = await registro.toArray();
            return {personas:personas, total:totalDocs};
          }
          return { personas: [], total: 0};
        } catch (err) {
          console.log(err);
          return err;
        }
      }
}