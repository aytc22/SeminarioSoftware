import React, {Component} from 'react';
import Page from '../../Page';
import './home.css';
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
          <h2></h2>
          <p>La recolecta HN es un movimiento sin fines de lucru que se basa en la recolección de bienes para posteriormente ser donados a las personas más necesitadas.</p>
          <p>La pandemia nos ha caído como un balde con agua fría y los que más sufren son las personas con escasos recursos, ayudar al projimo ess una "obligación", cual quier cosa que consideres útil por muy pequeña que sea cuenta</p>
          <p>Únete a este lindo movimiento, ayuda al más necesitado. #QuedateEnCasa #HoyPorTiMañanaPorMi</p>
        </body>
 
      </Page>
    )
  }
}  