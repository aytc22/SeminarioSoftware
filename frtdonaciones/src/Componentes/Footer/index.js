import React from 'react';
import { NavLink } from 'react-router-dom';

import { MdHome } from 'react-icons/md';
import { FaUserPlus, FaAngellist } from 'react-icons/fa';

import './footer.css';

export default ({ auth } )=>{
  if (auth.isLogged && true){
    return (
      <footer>
        <nav>
          <ul>
            <li><NavLink to="/" ><MdHome size="2em" /></NavLink></li>
            <li><NavLink to="/Donaciones">Donación</NavLink></li>
            <li><NavLink to="/Personas">Registro</NavLink></li>
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