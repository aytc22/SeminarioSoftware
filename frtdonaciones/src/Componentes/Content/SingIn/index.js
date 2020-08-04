import React, { Component } from 'react';
import Page from '../../Page';
import {emailRegex, emptyRegex} from '../../Validacion/index'

export default class extends Component {
  constructor() {
    super();
    this.state = {
      correo:'',
      contraseña:'',
      nombre:'',
    }

    this.onClickButton = this.onClickButton.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.validate = this.validate.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  validate(state) {
    let nameErrors = null;
    let tmpErrors = [];
    const { correo, contraseña } = state;
    if (correo !== undefined) {
      if (!emailRegex.test(correo)) {
        tmpErrors.push("El correo debe tener formato correcto");
      }
      if ((/^\s*$/.test(correo))) {
        tmpErrors.push("Debe Ingresar Correo Adecuado");
      }
      if (tmpErrors.length) {
        nameErrors = Object.assign({}, nameErrors, { emailError: tmpErrors.join('. ') });
      }
    }
    if (contraseña !== undefined) {
      tmpErrors = [];
      if ((emptyRegex.test(contraseña))) {
        tmpErrors.push("Debe Ingresar Contraseña Adecuado");
      }
      if (tmpErrors.length) {
        nameErrors = Object.assign({}, nameErrors, { passwordError: tmpErrors.join('. ') });
      }
    }
    return nameErrors;
  }
  onChangeHandler(e) {
    const { name, value } = e.currentTarget;
    let errors = this.validate({ [name]: value });
    if (!errors) {
      errors = { [name + "Error"]: '' };
    }
    this.setState({
      ...this.state,
      [name]: value,
      ...errors
    });
  }

  onTextChange(e){
    
    const {name, value} = e.target;
    this.setState({[name]:value});
  }
  onClickButton(e) {
    alert(JSON.stringify(this.state));
  }
  render() {
    return (
      <Page
        showHeader={true}
        showFooter={true}
        title={"Crear Cuenta"}
        auth={this.props.auth}
      >
        <h2></h2>
        <p>Registrate para poder realizar el proceso de donación</p>
        <fieldset>
        <label>Correo Electrónico</label>
        <input type="email" name="correo" onChange={this.onTextChange} value={this.state.correo} />
        </fieldset>
        <fieldset>
          <label>Contraseña</label>
          <input type="password" name="contraseña" onChange={this.onTextChange} value={this.state.contraseña} />
        </fieldset>
        <fieldset>
        <label>Nombre completo</label>
          <input type="text" name="nombre" onChange={this.onTextChange} value={this.state.nombre} />
        </fieldset>
        
        <button onClick={this.onClickButton}>Sign In</button>
        
        
      </Page>
    )
  }
}
