const db = require('../../DB/db');
var ObjectID = require('mongodb').ObjectID;
const bcrypt = require('bcrypt');

let usuCol;
module.exports=class{
  static async initModel(){
    if(!usuCol){
      let _db = await db.getDB();
      usuCol = await _db.collection('Seguridad');
      if(process.env.ENSUREUDEX == "1"){
        console.log('Creando indices');
        await usuCol.cresteIndex({"Correo":1},{unique:true});
      }
      console.log("Colección de seguridad creada");
      return;
    } else {
      return;
    }
  }

  static async addNew(data){
      const{correo, contra, nomcom} = data;
      try{
          let nueUsu = {
              "Correo_electrónico" : correo,
              "Contraseña" : bcrypt.hashSync(contra, 10),
              "Nombre_Completo" : nomcom,
              "Fecha_creado" : new Date().getTime()
          }
          let res = await usuCol.insertOne(nueUsu);
          return res;
      } catch (err){
          console.log(err);
          return err;
      }
  }
   
  static async getByEmail(correo){
      try{
          let filter = {"Correo_electrónico" : correo};
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

