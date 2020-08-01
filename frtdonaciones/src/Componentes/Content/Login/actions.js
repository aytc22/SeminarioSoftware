import {paxios} from '../../../utilities/axios';

export const login = async (email, password)=>{
  try
  {
    const {data} = await paxios.post(
      "/api/seguridad/login",
      {
        email: email,
        pswd: password
      }
    );
    return data;
  }catch (e){
    throw(e);
  }
}
