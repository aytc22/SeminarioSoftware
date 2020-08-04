import React, {Component} from 'react';
import Page from '../../Page';
import InfiniteScroll from 'react-infinite-scroller';
import './personas.css';

import {obtenerPersonaFacet} from './actions';
import { NavLink } from 'react-router-dom';
import { IoIosInformationCircle } from 'react-icons/io'
import { setSessionStorage, getSessionStorage } from '../../../utilities/axios';
export default class extends Component{
  constructor(){
    super();
    this.state = JSON.parse(getSessionStorage("personas_state")) || {
      personas : [],
      hasMore : true,
      page:1,
      itemToLoad: 15,
      loading: true,
      pageStart: 0,
      scrollTop:0
    }
    this.scrolled = false;
    this.cloujurepage = this.state.pageStart;
    this.loadMore = this.loadMore.bind(this);
    this.scrollHandler = this.scrollHandler.bind(this);
  }
  componentDidMount(){
    this.scrollParentRef.scrollTop = this.state.scrollTop;
    this.scrolled = true;
  }
  componentWillUnmount(){
    setSessionStorage('personas_state', JSON.stringify(this.state));
  }
  async loadMore(pageToLoad){
    try{
      let result = await obtenerPersonaFacet(pageToLoad,this.state.itemToLoad);
      console.log(result);
      if(result.total > 0){
        let nuePersona = this.state.personas.concat(result.personas);
        this.setState(
          {
            ...this.state,
            personas:nuePersona,
            hasMore: (pageToLoad * this.state.itemToLoad < result.total),
            pageStart:pageToLoad
          }
        )
      } else {
        this.setState(
          {hasMore:false}
        )
      }

    }catch(e){
      this.setState(
        { hasMore: false }
      )
    }
  }
  scrollHandler(e){
    if (this.scrolled == true ){
      let { scrollTop} = e.target;
      this.setState({scrollTop:scrollTop});
    }
  }
  render(){
    const personaListItem = this.state.personas.map((o)=>{
      return (<div key={o._id} ide={o._id} className="listItem">
        <b>{o.id}</b><b>{o.nombre}</b><NavLink className="info" to={`/persona/${o._id}`}><IoIosInformationCircle/></NavLink>
      </div>);
    });
    return (
      <Page
        showHeader={true}
        showFooter={true}
        title={`Personas p${this.state.pageStart}`}
        auth={this.props.auth}
      >
      <section className="listholder" ref={(ref)=>this.scrollParentRef = ref} onScroll={this.scrollHandler}>
          <InfiniteScroll
            pageStart={this.cloujurepage}
            loadMore={this.loadMore}
            hasMore={this.state.hasMore}
            useWindow={false}
            getScrollParent={()=>this.scrollParentRef}
            loader={<div key={"Item0NotFound"} className="listItem">Loading ..</div>}
          >
            {personaListItem}
          </InfiniteScroll>
          
      </section>
      </Page>
    );
  }

}
