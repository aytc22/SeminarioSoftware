import React, {Component} from 'react';
import Page from '../../Page';
import { Redirect } from 'react-router-dom';
import Field from '../../../Forms/Fields/Field';
import { Actions } from '../../../Forms/Buttons/Button';
import {saxios} from '../../../Utilities/Utilities';

import './DonacionD.css';
export default class DonacionDe extends Component {
  constructor() {
    super();
    this.state = {
      id:'',
      IdError: null,
      NombreCompleto: '',
      NombreError:null,
      Telefono: '',
      TelefonoError: null,
      Direccion: '',
      DireccionError: null,
      Donacion: '',
      DescripcionError: null,
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickLogin = this.onClickLogin.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
  }
  onChangeHandler(e) {
    const { name, value } = e.currentTarget;
    this.setState({
      ...this.state,
      [name]: value,
    });
  }
  onClickButton(e) {
    e.preventDefault();
    e.stopPropagation();
    let errors;
     if (errors) {
      console.log(errors)
    } else {
      alert("Añadido");
      const { id, NombreCompleto, Telefono, Direccion, Donacion} = this.state;
      saxios.post(
        `/api/donaciones/new`,
        {
          id:id,
          NombreCompleto: NombreCompleto,
          Telefono:Telefono,
          Direccion:Direccion,
          Donacion:Donacion
        }
      )
        .then((resp) => {
          console.log(resp);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
  onClickLogin(e) {
    e.preventDefault();
    e.stopPropagation();
    alert("Añadido");
  }
  render() {
    return (
      <Page pageTitle="Nueva Donación" auth={this.props.auth}>
        <Field
          name="id"
          caption="Id"
          value={this.state.Id}
          type="text"
          onChange={this.onChangeHandler}
         
        />
        <Field
          name="NombreCompleto"
          caption="Nombre Completo"
          value={this.state.NombreCompleto}
          type="text"
          onChange={this.onChangeHandler}
       
        />
        <Field
          name="Telefono"
          caption="Telefono"
          value={this.state.Telefono}
          type="text"
          onChange={this.onChangeHandler}
     
        />
        <Field
          name="Direccion"
          caption="Direccion"
          value={this.state.Direccion}
          type="text"
          onChange={this.onChangeHandler}
      
        />
        <Field
          name="Donacion"
          caption="Donacion"
          value={this.state.Donacion}
          type="text"
          onChange={this.onChangeHandler}
        
        />
        <Actions>
          <button onClick={this.onClickButton}>Registrar</button>
        </Actions>
      </Page>
    );
  }
}
