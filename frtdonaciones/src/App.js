import React , {Component} from 'react';
import {Switch, BrowserRouter as Router} from 'react-router-dom';
import PRoute from './utilities/privateroutes';
import NRoute from './utilities/normalroutes';

import {setJWT, getLocalStorage, setLocalStorage, setUnAuthInterceptor} from './utilities/axios';

import './App.css';



import Home from './Componentes/Content/Home/index';
import Home2 from './Componentes/Content/Home2/inicio';
import Login from './Componentes/Content/Login';
import SingIn from './Componentes/Content/SingIn';
import Donaciones from './Componentes/Content/Donaciones/donaciones';
import Personas from './Componentes/Content/Personas/personas';
import Persona from './Componentes/Content/Personas/persona';

export default class extends Component{
  constructor (){
    super();
    this.state = {
      user: getLocalStorage('user') || {},
      jwt: getLocalStorage('jwt') || "",
      isLogged:false,
      loadingBackend:false
    }
    if(this.state.jwt !== ""){
      setJWT(this.state.jwt);
      this.state.isLogged = true;
    }
    this.setLogginData = this.setLogginData.bind(this);
    this.setLoggoutData = this.setLoggoutData.bind(this);
    
    setUnAuthInterceptor(this.setLoggoutData)
  }

  componentDidMount(){
    this.setState({"loadingBackend":true});
  }
  setLogginData(user, jwt){
    this.setState({
      ...this.state,
      user:user,
      jwt:jwt,
      isLogged:true,
      },
      () => {
        setLocalStorage('jwt', jwt);
        setLocalStorage('user', user);
        setJWT(jwt);}
    );
  }
  setLoggoutData(){
    if(this.state.loadingBackend){
      this.setState(
        {
          ...this.state,
          user:"",
          jwt:"",
          isLogged:false,
        },
        ()=>{setJWT('')}
      )
    }else{
      this.state = {
        ...this.state,
        user: "",
        jwt: "",
        isLogged: false,
      }
      setJWT('')
    }
  }
  render() {
    if (!this.state.loadingBackend){
      return (<div className="splash"> ...Loading </div>)
    }
    const auth = {
      isLogged : this.state.isLogged,
      login: this.setLogginData,
      logout: this.setLoggoutData,
    }
    return (
      <Router>
        <Switch>
          <NRoute path="/" component={Home} exact auth={auth}/>
          <NRoute path="/inicio" component={Home2} exact auth={auth}/>
          <NRoute path="/login" component={Login} exact auth={auth}/>
          <NRoute path="/signin" component={SingIn} exact auth={auth}/>
          <PRoute path="/donaciones" auth={this.state.auth} component={Donaciones}/>
          <PRoute path="/personas" component={Personas} exact auth={auth}/>
          <PRoute path="/persona/:id" component={Persona} exact auth={auth}/>
        </Switch>
      </Router>
    );
  }
}
