import  { paxios } from '../../../utilities/axios';

export const obtenerPersona = async()=>{
  try{
    let { data } = await paxios.get('/api/Personas/all');
    console.log(data);
    return data;
  }catch(e){
    throw(e);
  }
}

export const obtenerPersonaFacet = async (_page, items) => {
  const page = _page - 1;
  try {
    let { data } = await paxios.get(`/api/Personas/facet/${page}/${items}`);
    return data;
  } catch (e) {
    throw (e);
  }
}

export const obtenerPersonaById = async (id) => {
  try {
    let { data } = await paxios.get(`/api/Personas/one/${id}`);
    return data;
  } catch (e) {
    throw (e);
  }
}

export const nuevoPersona = async()=>{
  try{
    let { data } = await paxios.post("url", {id:"","nombre":"", "telefono":"", "direccion":""});
  }catch(e){
    throw(e);
  }
}
