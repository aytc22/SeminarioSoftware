import React, {Component} from 'react';
import Page from '../../Page';

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
        title={"RECOLECTAS HN"}
        auth={this.props.auth}
      >
        <body>
          <h2>Quedate en Casa</h2>
        </body>
 
      </Page>
    )
  }
}  