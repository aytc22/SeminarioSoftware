import React, { Component } from 'react';
import Page from '../../Page';
import {Redirect} from 'react-router-dom';

import { login } from './actions';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      correo:'',
      contraseña:'',
      redirectTo:false
    }

    this.onClickButton = this.onClickButton.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }
  onTextChange(e){
    const {name, value} = e.target;
    this.setState({[name]:value});
  }
  async onClickButton(e) {
      try{
        let userData = await login(this.state.correo, this.state.contraseña);
        const {jwt} = userData;
        delete userData.jwt;
        this.setState({ "redirectTo": true }, () => { this.props.auth.login(userData, jwt);});
      }catch(e){
        alert("Error al iniciar sesión.");
      }
  }
  render() {
    if(this.state.redirectTo){
      const tourl = (this.props.location.state) ? this.props.location.state.from.pathname: '/login';
      return(
        <Redirect to={tourl}/>
      )
    }
    return (
      <Page
        showHeader={true}
        showFooter={true}
        title={"Iniciar Sesión"}
        auth = {this.props.auth}
      >
       
        <fieldset>
        <label>Correo Electrónico</label>
        <input type="email" name="correo" onChange={this.onTextChange} value={this.state.correo} />
        </fieldset>
        <fieldset>
          <label>Contraseña</label>
          <input type="password" name="contraseña" onChange={this.onTextChange} value={this.state.contraseña} />
        </fieldset>
        <button onClick={this.onClickButton}>Iniciar Sesión</button>
      </Page>
    )
  }
}