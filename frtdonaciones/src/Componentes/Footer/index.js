import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { MdHome } from 'react-icons/md';
import { FaUserPlus } from 'react-icons/fa';

import './footer.css';

export default class Footer extends Component{
  constructor(){
    super();
    this.state = {
      counter:0
    }
    this.counterUpdate = this.counterUpdate.bind(this);
    this.logoutOnClick = this.logoutOnClick.bind(this);
  }
  counterUpdate(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({counter:this.state.counter+1});
  }
  logoutOnClick(e){
    e.preventDefault();
    e.stopPropagation();
    this.props.auth.logout();
  }

  render(){
    if (this.props.hide && true){
      return null;
    }
    if (this.props.auth.isLogged && true){
      return (
        <footer>
          <nav>
            <ul>
              <li><NavLink to="/inicio" ><MdHome size="2em" /></NavLink></li>
              <li><NavLink to="/Donaciones">Donación</NavLink></li>
              <li><NavLink to="/Personas">Registro</NavLink></li>
              <li><a onClick={this.logoutOnClick}><FaUserPlus /> Logout</a></li>
            </ul>
          </nav>
        </footer>
      )

    }else {
      return (
        <footer>
          <nav>
            <ul>
              <li><NavLink to="/" ><MdHome size="2em"/></NavLink></li>
              <li><NavLink to="/signin"><FaUserPlus size="2em"/></NavLink></li>
              <li><NavLink to="/login"><FaUserPlus size="2em" /></NavLink></li>
            </ul>
          </nav>
        </footer>
      );
    }
  }
}

  