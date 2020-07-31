const db = require('../../DB/db');
const ObjectId = require('mongodb').ObjectId;

let usuCol;

module.exports = class{
    static async initModel(){
        if(!usuCol){
            let _db = await db.getDB();
            usuCol = await _db.collection('Personas');
            console.log("Coleccion de Personas creada");
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

    static async addOne( id, nombre, telefono, direccion) {
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
}