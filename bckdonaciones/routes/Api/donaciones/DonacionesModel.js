const db = require('../../DB/db');
const ObjectId = require('mongodb').ObjectId;

let donaCol;

module.exports = class{
    static async initModel(){
        if(!donaCol){
            let _db = await db.getDB();
            donaCol = await _db.collection('Donaciones');
            console.log("Colección de Donaciones creada");
            return;
        }else{
            return;
        }
    }

    static async getAll(){
        try{
            if(donaCol){
                let mostrar = await donaCol.find();
                return mostrar.toArray();
            }
            return[];
        }catch(err){
            console.log(err);
        }
    }

    static async addOne( id, nombre, correo, celular) {
        try{
          const nueDona = {Id:id, NombreCompleto:nombre, Correo:correo, Celular:celular};
          const res = await donaCol.insertOne(nueDona);
          return res;
        }catch(err){
          console.log(err);
          return err;
        }
      }
    
    static async getOne(id) {
        try {
          let filter = { "_id": new ObjectId(id)};
          const res = await donaCol.findOne(filter);
          return result;
        } catch (err) {
          console.log(err);
          return err;
        }
      }

    static async deleteOne(id){
        try{
          let filter = {"_id": new ObjectId(id)};
          const res = await donaCol.deleteOne(filter);
          return res;
        }catch(err){
          console.log(err);
          return err;
        }
      }

    static async updateOne(id){
          try{
              let filter = {"_id": new ObjectId(id)};
              const res = await donaCol.updateOne(filter);
              return res;
          }catch(err){
              console.log(err);
              return err;
          }
      }

    static update = ( dataToUpdate , handler )=>{
        var { _id, nombre, celular, } = dataToUpdate;
        var query = { "_id": new ObjectID(_id)};
        var updateCommad = {
          "$set":{
            NombreCompleto: nombre,
            Celular: celular
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
          if (donaCol) {
            
            let registro = await donaCol.find();
            let totalDocs = await registro.count();
            const limiteInferior = page * poolNumber;
            registro.skip(limiteInferior);
            registro.limit(poolNumber);
            const donacion = await registro.toArray();
            return {Donaciones:donacion, total:totalDocs};
          }
          return { Donaciones: [], total: 0};
        } catch (err) {
          console.log(err);
          return err;
        }
      }
}