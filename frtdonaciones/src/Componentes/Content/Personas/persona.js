import React, { Component } from 'react';
import Page from '../../Page';
import './personas.css';

import { obtenerPersonaById } from './actions';
import { NavLink } from 'react-router-dom';
export default class extends Component {
  constructor() {
    super();
    this.state = {
      persona:{},
      loading: true,
    }
  }
  async componentDidMount(){
    const id = this.props.match.params.id;
    let persona = await obtenerPersonaById(id);
    this.setState({
      ...this.state,
      persona:persona
    });
  }
  render() {
    const nombre = this.state.persona.nombre || 'Not Found';
    const {nombre:nmb,  id, telefono, direccion} = this.state.persona;
    return (
      <Page
        showHeader={true}
        showFooter={false}
        title={nombre.substring(0,15) + '...'}
        auth={this.props.auth}
      >
        <div>Nombre Completo: {nmb}</div>
        <div>ID: {id}</div>
        <div>Teléfono: {telefono}</div>
        <div>Dirección: {direccion}</div>
        <NavLink to={`/personas#${this.state.persona._id}`}>Regresar</NavLink>
      </Page>
    );
  }

}