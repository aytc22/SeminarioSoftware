import React, {Component} from 'react';
import Page from '../../Page';
import axios from 'axios'; //Para estas dos instale npm i bootstrap reactstrap axios
import "bootstrap/dist/css/bootstrap.min.css";


//import './donaciones.css';
//import {obtenerDonacion} from './actions';
import { NavLink } from 'react-router-dom';
import { IoIosInformationCircle } from 'react-icons/io'

class Donacion extends Component {
  state={
    data:[],
    modalInsertar: false,
    modalEliminar: false,
    form:{
      id: '',
      nombre: '',
      correo: '',
      celular: '',
      tipoModal: ''
    }
  }
  
  peticionGet=()=>{
    const url="https://localhost:3000/api/Donaciones/all";
  axios.get(url).then(response=>{
    this.setState({data: response.data});
  }).catch(error=>{
    console.log(error.message);
  })
  }
  
  peticionPost=async()=>{
    const url="https://localhost:3000/api/Donaciones/add";
    delete this.state.form.id;
   await axios.post(url,this.state.form).then(response=>{
      this.modalInsertar();
      this.peticionGet();
    }).catch(error=>{
      console.log(error.message);
    })
  }
  
  peticionPut=()=>{
      const url="https://localhost:3000/api/Donaciones/upd/:id";
    axios.put(url+this.state.form.id, this.state.form).then(response=>{
      this.modalInsertar();
      this.peticionGet();
    })
  }
  
  peticionDelete=()=>{
      const url="https://localhost:3000/api/Donaciones/del/:id";
    axios.delete(url+this.state.form.id).then(response=>{
      this.setState({modalEliminar: false});
      this.peticionGet();
    })
  }
  
  modalInsertar=()=>{
    this.setState({modalInsertar: !this.state.modalInsertar});
  }
  
  seleccionarDonaciones=(Donaciones)=>{
    this.setState({
      tipoModal: 'actualizar',
      form: {
        id: Donaciones.id,
        nombre: Donaciones.nombre,
        correo: Donaciones.correo,
        celular: Donaciones.celular
      }
    })
  }
  
  handleChange=async e=>{
  e.persist();
  await this.setState({
    form:{
      ...this.state.form,
      [e.target.name]: e.target.value
    }
  });
  console.log(this.state.form);
  }
  
    componentDidMount() {
      this.peticionGet();
    }
    
  
    render(){
      const {form}=this.state;
    return (
      <div className="App">
      <br /><br /><br />
    <button className="btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}>Agregar Donación</button>
    <br /><br />
      <table className="table ">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Celular</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(Donaciones=>{
            return(
              <tr>
            <td>{Donaciones.id}</td>
            <td>{Donaciones.nombre}</td>
            <td>{Donaciones.correo}</td>
            <td>{Donaciones.celular}</td>
            <td>
                  <button className="btn btn-primary" onClick={()=>{this.seleccionarDonaciones(Donaciones); this.modalInsertar()}}></button>
                  {"   "}
                  <button className="btn btn-danger" onClick={()=>{this.seleccionarDonaciones(Donaciones); this.setState({modalEliminar: true})}}></button>
                  </td>
            </tr>
            )
          })}
        </tbody>
      </table>
  
  
  
      <Modal isOpen={this.state.modalInsertar}>
                  <ModalHeader style={{display: 'block'}}>
                    <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                  </ModalHeader>
                  <ModalBody>
                    <div className="form-group">
                      <label htmlFor="id">ID</label>
                      <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: this.state.data.length+1}/>
                      <br />
                      <label htmlFor="nombre">Nombre</label>
                      <input className="form-control" type="text" name="nombre" id="nombre" onChange={this.handleChange} value={form?form.nombre: ''}/>
                      <br />
                      <label htmlFor="correo">Correo</label>
                      <input className="form-control" type="text" name="correo" id="correo" onChange={this.handleChange} value={form?form.correo: ''}/>
                      <br />
                      <label htmlFor="celular">celular</label>
                      <input className="form-control" type="number" name="celular" id="celular" onChange={this.handleChange} value={form?form.celular:''}/>
                    </div>
                  </ModalBody>
  
                  <ModalFooter>
                    {this.state.tipoModal=='insertar'?
                      <button className="btn btn-success" onClick={()=>this.peticionPost()}>
                      Insertar
                    </button>: <button className="btn btn-primary" onClick={()=>this.peticionPut()}>
                      Actualizar
                    </button>
    }
                      <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                  </ModalFooter>
            </Modal>
  
  
            <Modal isOpen={this.state.modalEliminar}>
              <ModalBody>
                 Estás seguro que deseas eliminar la Donación {form && form.nombre}
              </ModalBody>
              <ModalFooter>
                <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Sí</button>
                <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
              </ModalFooter>
            </Modal>
    </div>
    );
  }
}
export default Donacion;