(this.webpackJsonpfrtdonaciones=this.webpackJsonpfrtdonaciones||[]).push([[0],{37:function(e,t,a){},40:function(e,t){},43:function(e,t,a){e.exports=a(79)},48:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(38),c=a.n(o),s=(a(48),a(11)),l=a(6),i=a(7),u=a(2),h=a(9),m=a(8),p=a(10),d=a(3),f=a(20),b=function(e){var t=e.component,a=e.auth,n=Object(f.a)(e,["component","auth"]);return r.a.createElement(d.b,Object.assign({},n,{component:function(e){return a.isLogged?r.a.createElement(t,Object.assign({},e,{auth:a})):r.a.createElement(d.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},g=function(e){var t=e.component,a=e.auth,n=Object(f.a)(e,["component","auth"]);return r.a.createElement(d.b,Object.assign({},n,{component:function(e){return r.a.createElement(t,Object.assign({},e,{auth:a}))}}))},v=a(25),E=a.n(v),j=E.a.create();j.defaults.headers.common["cache-control"]="no-cache",j.defaults.headers.post["Content-Type"]="no-cache",j.defaults.headers.put["Content-Type"]="no-cache";var O=E.a.create();O.defaults.headers.common["cache-control"]="no-cache",O.defaults.headers.post["Content-Type"]="no-cache",O.defaults.headers.put["Content-Type"]="no-cache";var k=function(e){O.defaults.headers.common.Authorization="Bearer ".concat(e)},C=O,w=function(){try{return localStorage.setItem("t","t"),localStorage.removeItem("t"),!0}catch(e){return!1}}(),y=function(){try{return sessionStorage.setItem("t","t"),sessionStorage.removeItem("t"),!0}catch(e){return!1}}(),S=function(e){return w?localStorage.getItem(e):null},x=function(e,t){return!!w&&(localStorage.setItem(e,t),!0)},T=(a(71),a(72),function(e){return r.a.createElement("header",null,r.a.createElement("h1",null,e.title))}),L=a(26),B=a(21),D=(a(73),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={counter:0},e.counterUpdate=e.counterUpdate.bind(Object(u.a)(e)),e.logoutOnClick=e.logoutOnClick.bind(Object(u.a)(e)),e}return Object(i.a)(a,[{key:"counterUpdate",value:function(e){e.preventDefault(),e.stopPropagation(),this.setState({counter:this.state.counter+1})}},{key:"logoutOnClick",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.auth.logout()}},{key:"render",value:function(){return this.props.hide?null:this.props.auth.isLogged?r.a.createElement("footer",null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/inicio"},r.a.createElement(L.a,{size:"2em"}))),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/Donaciones"},"Donaci\xf3n")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/Personas"},"Registro")),r.a.createElement("li",null,r.a.createElement("a",{onClick:this.logoutOnClick},r.a.createElement(B.a,null)," Logout"))))):r.a.createElement("footer",null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/"},r.a.createElement(L.a,{size:"2em"}))),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/signin"},r.a.createElement(B.a,{size:"2em"}))),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/login"},r.a.createElement(B.a,{size:"2em"}))))))}}]),a}(n.Component)),H=(a(74),function(e){var t=e.showHeader,a=e.showFooter,n=e.title,o=e.children,c=e.auth,s=t?r.a.createElement(T,{title:n}):null,l=a?r.a.createElement(D,{auth:c}):null;return r.a.createElement("section",null,s,r.a.createElement("main",null,o),l)}),M=(a(75),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={click:0},e.onClickButton=e.onClickButton.bind(Object(u.a)(e)),e}return Object(i.a)(a,[{key:"onClickButton",value:function(e){this.setState({click:this.state.click+1})}},{key:"render",value:function(){return r.a.createElement(H,{showHeader:!0,showFooter:!0,title:"RECOLECTA HN",auth:this.props.auth},r.a.createElement("body",null,r.a.createElement("h2",null),r.a.createElement("p",null,"La recolecta HN es un movimiento sin fines de lucru que se basa en la recolecci\xf3n de bienes para posteriormente ser donados a las personas m\xe1s necesitadas."),r.a.createElement("p",null,'La pandemia nos ha ca\xeddo como un balde con agua fr\xeda y los que m\xe1s sufren son las personas con escasos recursos, ayudar al projimo ess una "obligaci\xf3n", cual quier cosa que consideres \xfatil por muy peque\xf1a que sea cuenta'),r.a.createElement("p",null,"\xdanete a este lindo movimiento, ayuda al m\xe1s necesitado. #QuedateEnCasa #HoyPorTiMa\xf1anaPorMi")))}}]),a}(n.Component)),I=(a(76),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={click:0},e.onClickButton=e.onClickButton.bind(Object(u.a)(e)),e}return Object(i.a)(a,[{key:"onClickButton",value:function(e){this.setState({click:this.state.click+1})}},{key:"render",value:function(){return r.a.createElement(H,{showHeader:!0,showFooter:!0,title:"RECOLECTA HN",auth:this.props.auth},r.a.createElement("body",null,r.a.createElement("h2",null,"#Qu\xe9dateEnCasa #HoyPorTiMa\xf1anaPorMi"),r.a.createElement("h1",null,"Bienvenido")))}}]),a}(n.Component)),N=a(4),P=a.n(N),F=a(13),z=a(17),R=function(){var e=Object(F.a)(P.a.mark((function e(t,a){var n,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.post("/api/Seguridad/login",{correo:t,"contrase\xf1a":a});case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),q=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={correo:"","contrase\xf1a":"",redirectTo:!1},e.onClickButton=e.onClickButton.bind(Object(u.a)(e)),e.onTextChange=e.onTextChange.bind(Object(u.a)(e)),e}return Object(i.a)(a,[{key:"onTextChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(z.a)({},a,n))}},{key:"onClickButton",value:function(){var e=Object(F.a)(P.a.mark((function e(t){var a,n,r=this;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R(this.state.correo,this.state.contrase\u00f1a);case 3:a=e.sent,n=a.jwt,delete a.jwt,this.setState({redirectTo:!0},(function(){r.props.auth.login(a,n)})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert("Error al iniciar sesi\xf3n.");case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(this.state.redirectTo){var e=this.props.location.state?this.props.location.state.from.pathname:"/";return r.a.createElement(d.a,{to:e})}return r.a.createElement(H,{showHeader:!0,showFooter:!0,title:"Iniciar Sesi\xf3n",auth:this.props.auth},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Correo Electr\xf3nico"),r.a.createElement("input",{type:"email",name:"correo",onChange:this.onTextChange,value:this.state.correo})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Contrase\xf1a"),r.a.createElement("input",{type:"password",name:"contrase\xf1a",onChange:this.onTextChange,value:this.state.contrase\u00f1a})),r.a.createElement("button",{onClick:this.onClickButton},"Iniciar Sesi\xf3n"))}}]),a}(n.Component),_=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,A=/^\s?$/,J=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={correo:"","contrase\xf1a":"",nombre:""},e.onClickButton=e.onClickButton.bind(Object(u.a)(e)),e.onTextChange=e.onTextChange.bind(Object(u.a)(e)),e.validate=e.validate.bind(Object(u.a)(e)),e.onChangeHandler=e.onChangeHandler.bind(Object(u.a)(e)),e}return Object(i.a)(a,[{key:"validate",value:function(e){var t=null,a=[],n=e.correo,r=e.contrase\u00f1a;return void 0!==n&&(_.test(n)||a.push("El correo debe tener formato correcto"),/^\s*$/.test(n)&&a.push("Debe Ingresar Correo Adecuado"),a.length&&(t=Object.assign({},t,{emailError:a.join(". ")}))),void 0!==r&&(a=[],A.test(r)&&a.push("Debe Ingresar Contrase\xf1a Adecuado"),a.length&&(t=Object.assign({},t,{passwordError:a.join(". ")}))),t}},{key:"onChangeHandler",value:function(e){var t=e.currentTarget,a=t.name,n=t.value,r=this.validate(Object(z.a)({},a,n));r||(r=Object(z.a)({},a+"Error","")),this.setState(Object(s.a)(Object(s.a)({},this.state),{},Object(z.a)({},a,n),r))}},{key:"onTextChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(z.a)({},a,n))}},{key:"onClickButton",value:function(e){alert(JSON.stringify(this.state))}},{key:"render",value:function(){return r.a.createElement(H,{showHeader:!0,showFooter:!0,title:"Crear Cuenta",auth:this.props.auth},r.a.createElement("h2",null),r.a.createElement("p",null,"Registrate para poder realizar el proceso de donaci\xf3n"),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Correo Electr\xf3nico"),r.a.createElement("input",{type:"email",name:"correo",onChange:this.onTextChange,value:this.state.correo})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Contrase\xf1a"),r.a.createElement("input",{type:"password",name:"contrase\xf1a",onChange:this.onTextChange,value:this.state.contrase\u00f1a})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Nombre completo"),r.a.createElement("input",{type:"text",name:"nombre",onChange:this.onTextChange,value:this.state.nombre})),r.a.createElement("button",{onClick:this.onClickButton},"Sign In"))}}]),a}(n.Component),U=a(40),W=a.n(U),$=a(41),Q=a.n($),G=(a(37),function(){var e=Object(F.a)(P.a.mark((function e(t,a){var n,r,o;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t-1,e.prev=1,e.next=4,C.get("/api/Personas/facet/".concat(n,"/").concat(a));case 4:return r=e.sent,o=r.data,e.abrupt("return",o);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,a){return e.apply(this,arguments)}}()),K=function(){var e=Object(F.a)(P.a.mark((function e(t){var a,n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.get("/api/Personas/one/".concat(t));case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),V=a(42),X=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e,n;return Object(l.a)(this,a),(e=t.call(this)).state=JSON.parse((n="personas_state",y?sessionStorage.getItem(n):null))||{personas:[],hasMore:!0,page:1,itemToLoad:15,loading:!0,pageStart:0,scrollTop:0},e.scrolled=!1,e.cloujurepage=e.state.pageStart,e.loadMore=e.loadMore.bind(Object(u.a)(e)),e.scrollHandler=e.scrollHandler.bind(Object(u.a)(e)),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.scrollParentRef.scrollTop=this.state.scrollTop,this.scrolled=!0}},{key:"componentWillUnmount",value:function(){var e,t;e="personas_state",t=JSON.stringify(this.state),y&&sessionStorage.setItem(e,t)}},{key:"loadMore",value:function(){var e=Object(F.a)(P.a.mark((function e(t){var a,n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G(t,this.state.itemToLoad);case 3:a=e.sent,console.log(a),a.total>0?(n=this.state.personas.concat(a.personas),this.setState(Object(s.a)(Object(s.a)({},this.state),{},{personas:n,hasMore:t*this.state.itemToLoad<a.total,pageStart:t}))):this.setState({hasMore:!1}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),this.setState({hasMore:!1});case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"scrollHandler",value:function(e){if(1==this.scrolled){var t=e.target.scrollTop;this.setState({scrollTop:t})}}},{key:"render",value:function(){var e=this,t=this.state.personas.map((function(e){return r.a.createElement("div",{key:e._id,ide:e._id,className:"listItem"},r.a.createElement("b",null,e.id),r.a.createElement("b",null,e.nombre),r.a.createElement(p.b,{className:"info",to:"/persona/".concat(e._id)},r.a.createElement(V.a,null)))}));return r.a.createElement(H,{showHeader:!0,showFooter:!0,title:"Personas p".concat(this.state.pageStart),auth:this.props.auth},r.a.createElement("section",{className:"listholder",ref:function(t){return e.scrollParentRef=t},onScroll:this.scrollHandler},r.a.createElement(Q.a,{pageStart:this.cloujurepage,loadMore:this.loadMore,hasMore:this.state.hasMore,useWindow:!1,getScrollParent:function(){return e.scrollParentRef},loader:r.a.createElement("div",{key:"Item0NotFound",className:"listItem"},"Loading ..")},t)))}}]),a}(n.Component),Y=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={persona:{},loading:!0},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(F.a)(P.a.mark((function e(){var t,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,K(t);case 3:a=e.sent,this.setState(Object(s.a)(Object(s.a)({},this.state),{},{persona:a}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.persona.nombre||"Not Found",t=this.state.persona,a=t.nombre,n=t.id,o=t.telefono,c=t.direccion;return r.a.createElement(H,{showHeader:!0,showFooter:!1,title:e.substring(0,15)+"...",auth:this.props.auth},r.a.createElement("div",null,"Nombre Completo: ",a),r.a.createElement("div",null,"ID: ",n),r.a.createElement("div",null,"Tel\xe9fono: ",o),r.a.createElement("div",null,"Direcci\xf3n: ",c),r.a.createElement(p.b,{to:"/personas#".concat(this.state.persona._id)},"Regresar"))}}]),a}(n.Component),Z=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e,n;return Object(l.a)(this,a),(e=t.call(this)).state={user:S("user")||{},jwt:S("jwt")||"",isLogged:!1,loadingBackend:!1},""!==e.state.jwt&&(k(e.state.jwt),e.state.isLogged=!0),e.setLogginData=e.setLogginData.bind(Object(u.a)(e)),e.setLoggoutData=e.setLoggoutData.bind(Object(u.a)(e)),n=e.setLoggoutData,O.interceptors.response.use((function(e){return e}),(function(e){if(console.log(e),e.response)switch(e.response.status){case 401:n();break;default:console.log(e)}else console.log(e);return Promise.reject(e)})),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({loadingBackend:!0})}},{key:"setLogginData",value:function(e,t){this.setState(Object(s.a)(Object(s.a)({},this.state),{},{user:e,jwt:t,isLogged:!0}),(function(){x("jwt",t),x("user",e),k(t)}))}},{key:"setLoggoutData",value:function(){this.state.loadingBackend?this.setState(Object(s.a)(Object(s.a)({},this.state),{},{user:"",jwt:"",isLogged:!1}),(function(){k("")})):(this.state=Object(s.a)(Object(s.a)({},this.state),{},{user:"",jwt:"",isLogged:!1}),k(""))}},{key:"render",value:function(){if(!this.state.loadingBackend)return r.a.createElement("div",{className:"splash"}," ...Loading ");var e={isLogged:this.state.isLogged,login:this.setLogginData,logout:this.setLoggoutData};return r.a.createElement(p.a,null,r.a.createElement(d.d,null,r.a.createElement(g,{path:"/",component:M,exact:!0,auth:e}),r.a.createElement(g,{path:"/inicio",component:I,exact:!0,auth:e}),r.a.createElement(g,{path:"/login",component:q,exact:!0,auth:e}),r.a.createElement(g,{path:"/signin",component:J,exact:!0,auth:e}),r.a.createElement(b,{path:"/donaciones",auth:this.state.auth,component:W.a}),r.a.createElement(b,{path:"/personas",component:X,exact:!0,auth:e}),r.a.createElement(b,{path:"/persona/:id",component:Y,exact:!0,auth:e})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.6588971b.chunk.js.map