import {paxios} from '../../../utilities/axios';

export const signin = async (correo, contraseña, nombre)=>{
  try
  {
    const {data} = await paxios.post(
      "/api/Seguridad/signin",
      {
        correo: correo,
        contraseña: contraseña,
        nombre: nombre
      }
    );
    return data;
  }catch (e){
    throw(e);
  }
}
