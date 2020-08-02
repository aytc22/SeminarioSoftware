import {paxios} from '../../../utilities/axios';

export const login = async (correo, contraseña)=>{
  try
  {
    const {data} = await paxios.post(
      "/api/Seguridad/login",
      {
        correo: correo,
        contraseña: contraseña
      }
    );
    return data;
  }catch (e){
    throw(e);
  }
}
