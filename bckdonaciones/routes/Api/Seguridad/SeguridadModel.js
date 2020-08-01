const db = require('../../DB/db');
var ObjectID = require('mongodb').ObjectID;
const bcrypt = require('bcrypt');

function pswdGenerator(contRaw){
    var hashedPswd = bcrypt.hashSync(contRaw, 10);
    return hashedPswd;
}

let usuCol;
module.exports=class{
  static async initModel(){
    if(!usuCol){
      let _db = await db.getDB();
      usuCol = await _db.collection('Seguridad');
      if(process.env.ENSUREUDEX == "1"){
        console.log('Creando indices');
        await usuCol.createIndex({"correo":1},{unique:true});
      }
      console.log("Colección de seguridad creada");
      return;
    } else {
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

  static async addNew(data){
      const{correo, contraseña, nombre} = data;
      try{
          let nueUsu = {
              "correo" : correo,
              "contraseña" : pswdGenerator(contraseña),
              "nombre" : nombre,
              "Fechacreado" : new Date().getTime() + (1000 * 60 * 60 * 24 * 90)
          }
          let rest = await usuCol.insertOne(nueUsu);
          return rest;
      } catch (err){
          console.log(err);
          return err;
      }
  }
   
  static async getByEmail(correo){
      try{
          let filter = {"correo" : correo};
          let usu = await usuCol.findOne(filter);
          return usu;
      }catch (err){
          console.log(err);
          return err;
      }
  }

  static async comparePassword(rawPassword, cryptedPassword){
      try{
          return bcrypt.compareSync(rawPassword,cryptedPassword);
      }catch (err){
          return false;
      }
  }
}

