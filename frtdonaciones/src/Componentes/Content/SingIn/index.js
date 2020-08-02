import React, { Component } from 'react';
import Page from '../../Page';
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo accusamus, similique sequi saepe cum quas labore, fugit repellat assumenda delectus in suscipit harum quisquam accusantium impedit ipsa ut. Dignissimos.</p>
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
        {this.state.correo}
        <br/>
        {this.state.contraseña}
      </Page>
    )
  }
}
