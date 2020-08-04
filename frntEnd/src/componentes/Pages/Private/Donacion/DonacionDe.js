import React, {Component} from 'react';
import Page from '../../Page';
import { Redirect } from 'react-router-dom';
import Field from '../../../Forms/Fields/Field';
import { Actions } from '../../../Forms/Buttons/Button';
import {saxios} from '../../../Utilities/Utilities';

import './DonacionD.css';
export default class DonacionDe extends Component {
  /*
  1) Capturar los eventos de los botones
  2) Repasar el evento para capturar los datos del formulario
  3) Validaciones de Datos y como desplegarlo en el componente
  4) Usar axios para llegar al API.
   */
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
    /*let errors = this.validate({ [name]: value });
    if (!errors) {
      errors = { [name + "Error"]: '' };
    }*/
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
          //error={this.state.IdError}
        />
        <Field
          name="NombreCompleto"
          caption="Nombre Completo"
          value={this.state.NombreCompleto}
          type="text"
          onChange={this.onChangeHandler}
          //error={this.state.NombreError}
        />
        <Field
          name="Telefono"
          caption="Telefono"
          value={this.state.Telefono}
          type="text"
          onChange={this.onChangeHandler}
          //error={this.state.TelefonoError}
        />
        <Field
          name="Direccion"
          caption="Direccion"
          value={this.state.Direccion}
          type="text"
          onChange={this.onChangeHandler}
          //error={this.state.DireccionError}
        />
        <Field
          name="Donacion"
          caption="Donacion"
          value={this.state.Donacion}
          type="text"
          onChange={this.onChangeHandler}
          //error={this.state.DescripcionError}
        />
        <Actions>
          <button onClick={this.onClickButton}>Registrar</button>
        </Actions>
      </Page>
    );
  }
}
