/*import React, {Component} from 'react';
import Page from '../../Page';
import { Redirect } from 'react-router-dom';
import {paxios} from '../../../utilities/axios';

//import './PlatilloDetail.css';
export default class DonacionDetail extends Component{
  constructor(){
    super();
    this.state = {}
    this.addMoreStock = this.addMoreStock.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  //Encontrar producto
  componentDidMount()
  {
    const prodId = this.props.match.params.id;
    paxios.get(
      `/api/donaciones/donaciones/one/${prodId}`
    )
    .then((data)=>{
      console.log(data);
      this.setState(data.data);
      console.log(this.state);
    })
    .catch((e)=>{
      console.log(e);
    })
  }
  //Funcion agregar stock
  addMoreStock(e){
    e.preventDefault();
    e.stopPropagation();
    const prodId = this.props.match.params.id;
    paxios.put(
      `/api/donaciones/donaciones/new/${prodId}`,
      {stock: 1}
    )
      .then((data) => {
        this.setState(data.data);
      })
      .catch((e) => {
        console.log(e);
      })
  }
  //Renderizar pantalla
  render(){
      const id = this.props.match.params.id;
      if(!(id && true)){
        return (<Redirect to="/donaciones"/>)
      }
      var {pid,sku,nombre, correo,celular,Estado,fecha} = this.state;
      return (
        <Page pageTitle={nombre} auth={this.props.auth}>
          <span className="detailitem">{nombre}</span>
          <span className="detailitem">{correo}</span>
          <span className="detailitem">{celular}</span>
          <fieldset>
          <button onClick={this.addMoreStock}>Add One more Stock +</button>
          </fieldset>
        </Page>
      )
  }
} */