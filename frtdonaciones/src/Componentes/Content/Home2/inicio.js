import React, {Component} from 'react';
import Page from '../../Page';
import './inicio.css';
//import { getMocion, getPrivateMocion } from './actions';
export default class extends Component {
  constructor(){
    super();
    this.state = {
      click : 0
    }

    this.onClickButton = this.onClickButton.bind(this);
  }
  onClickButton(e){
    this.setState({click:(this.state.click + 1)});
  }
  
  render(){
    return (
      <Page
        showHeader={true}
        showFooter={true}
        title={"RECOLECTA HN"}
        auth={this.props.auth}
      >
        <body>
          <h2>#QuédateEnCasa #HoyPorTiMañanaPorMi</h2>
          <h1>Bienvenido</h1>
        </body>
 
      </Page>
    )
  }
}  