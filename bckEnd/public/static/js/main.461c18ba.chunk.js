(this.webpackJsonpfrnlencastore=this.webpackJsonpfrnlencastore||[]).push([[0],{36:function(e,t,a){e.exports=a(73)},41:function(e,t,a){},42:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(33),l=a.n(r),c=(a(41),a(3)),i=a(18),s=a(10),u=a(11),m=a(1),h=a(13),d=a(12),p=(a(42),a(5)),g=a(2),E=function(e){var t=e.component,a=e.auth,n=Object(i.a)(e,["component","auth"]);return o.a.createElement(g.b,Object.assign({},n,{component:function(e){return a.isLogged?o.a.createElement(t,Object.assign({},e,{auth:a})):o.a.createElement(g.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},b=a(22),f=a.n(b),v=f.a.create();v.defaults.headers.common["cache-control"]="no-cache",v.defaults.headers.post["Content-Type"]="no-cache",v.defaults.headers.put["Content-Type"]="no-cache";var C=v,j=f.a.create();j.defaults.headers.common["cache-control"]="no-cache",j.defaults.headers.post["Content-Type"]="no-cache",j.defaults.headers.put["Content-Type"]="no-cache";var O=function(e){j.defaults.headers.common.Authorization="Bearer ".concat(e)},k=j,y=function(){try{return localStorage.setItem("t","t"),localStorage.removeItem("t"),!0}catch(e){return!1}}(),w=function(e,t){return!!y&&(localStorage.setItem(e,t),!0)},L=function(e){return y?localStorage.getItem(e):null},N=function(e){return!!y&&(localStorage.removeItem(e),!0)},D=(a(65),function(e){var t=e.children,a=e.title,n=e.login||function(e){};return o.a.createElement("h1",{onClick:function(e){n(e,{email:"RECOLECTAHN",id:"RecolectaHN",roles:["public","admin"]})}},a," ",t)}),T=a(9),H=(a(66),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={counter:0},e.counterUpdate=e.counterUpdate.bind(Object(m.a)(e)),e.logoutOnClick=e.logoutOnClick.bind(Object(m.a)(e)),e}return Object(u.a)(a,[{key:"counterUpdate",value:function(e){e.preventDefault(),e.stopPropagation(),this.setState({counter:this.state.counter+1})}},{key:"logoutOnClick",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.auth.logout()}},{key:"render",value:function(){return this.props.hide?null:this.props.auth&&this.props.auth.isLogged?o.a.createElement("footer",null,o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(p.c,{to:"/home2"},o.a.createElement(T.b,null),"Home")),o.a.createElement("li",null,o.a.createElement(p.c,{to:"/registro"},o.a.createElement(T.a,null)," Registro")),o.a.createElement("li",null,o.a.createElement(p.c,{to:"/donaciones"},o.a.createElement(T.a,null)," Donaciones")),o.a.createElement("li",null,o.a.createElement("a",{onClick:this.logoutOnClick},o.a.createElement(T.e,null)," Logout"))))):o.a.createElement("footer",null,o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(p.c,{to:"/"},o.a.createElement(T.b,null),"Home")),o.a.createElement("li",null,o.a.createElement(p.c,{to:"/login"},o.a.createElement(T.e,null)," Login")),o.a.createElement("li",null,o.a.createElement(p.c,{to:"/signin"},o.a.createElement(T.e,null)," SignIn")))))}}]),a}(n.Component)),I=(a(67),function(e){var t=e.pageTitle,a=e.hideFooter,n=e.children,r=e.auth,l=a||!1;return o.a.createElement("section",{className:"page"},o.a.createElement(D,null,t||"Page"),o.a.createElement("main",null,n),l?null:o.a.createElement(H,{auth:r}))}),S=function(e){var t=e.auth;return o.a.createElement(I,{pageTitle:"Recolecta HN",auth:t},o.a.createElement("h2",null),o.a.createElement("p",null,"La recolecta HN es un movimiento sin fines de lucru que se basa en la recolecci\xf3n de bienes para posteriormente ser donados a las personas m\xe1s necesitadas."),o.a.createElement("p",null,'La pandemia nos ha ca\xeddo como un balde con agua fr\xeda y los que m\xe1s sufren son las personas con escasos recursos, ayudar al projimo ess una "obligaci\xf3n", cual quier cosa que consideres \xfatil por muy peque\xf1a que sea cuenta'),o.a.createElement("p",null,"\xdanete a este lindo movimiento, ayuda al m\xe1s necesitado. #QuedateEnCasa #HoyPorTiMa\xf1anaPorMi"))},A=a(14),x=(a(68),function(e){var t=e.name,a=e.value,n=e.type,r=e.caption,l=e.onChange,c=e.error;return o.a.createElement("fieldset",null,o.a.createElement("label",{htmlFor:t},r),o.a.createElement("input",{type:n||"text",name:t,id:t,value:a,onChange:l||function(e){return!1}}),c?o.a.createElement("span",{className:"error"},c):null)}),P=(a(69),function(e){var t=e.children;return o.a.createElement("fieldset",{className:"action"},t)}),M=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,B=/^\s?$/,R=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={email:"",emailError:null,password:"",passwordError:null,redirecTo:!1},e.onChangeHandler=e.onChangeHandler.bind(Object(m.a)(e)),e.onClickLogin=e.onClickLogin.bind(Object(m.a)(e)),e.onClickCreateAccount=e.onClickCreateAccount.bind(Object(m.a)(e)),e.validate=e.validate.bind(Object(m.a)(e)),e}return Object(u.a)(a,[{key:"validate",value:function(e){var t=null,a=[],n=e.email,o=e.password;return void 0!==n&&(M.test(n)||a.push("El correo debe tener formato correcto"),/^\s*$/.test(n)&&a.push("Debe Ingresar Correo Adecuado"),a.length&&(t=Object.assign({},t,{emailError:a.join(". ")}))),void 0!==o&&(a=[],B.test(o)&&a.push("Debe Ingresar Contrase\xf1a Adecuado"),a.length&&(t=Object.assign({},t,{passwordError:a.join(". ")}))),t}},{key:"onChangeHandler",value:function(e){var t=e.currentTarget,a=t.name,n=t.value,o=this.validate(Object(A.a)({},a,n));o||(o=Object(A.a)({},a+"Error","")),this.setState(Object(c.a)(Object(c.a)({},this.state),{},Object(A.a)({},a,n),o))}},{key:"onClickLogin",value:function(e){var t=this;e.preventDefault(),e.stopPropagation();var a=this.validate(this.state);if(a)this.setState(Object(c.a)(Object(c.a)({},this.state),a));else{alert(JSON.stringify(this.state));var n=this.state,o=n.email,r=n.password;C.post("/api/seguridad/login",{useremail:o,userpswd:r}).then((function(e){console.log(e.data),t.props.login(e.data),t.setState(Object(c.a)(Object(c.a)({},t.state),{},{redirecTo:!0}))})).catch((function(e){console.log(e)}))}}},{key:"onClickCreateAccount",value:function(e){e.preventDefault(),e.stopPropagation();var t=this.props.location.state?this.props.location.state.from.pathname:"/signin";return o.a.createElement(g.a,{to:t})}},{key:"render",value:function(){if(this.state.redirecTo){var e=this.props.location.state?this.props.location.state.from.pathname:"/";return o.a.createElement(g.a,{to:e})}return o.a.createElement(I,{pageTitle:"Iniciar",auth:this.props.auth},o.a.createElement(x,{name:"email",caption:"Correo",value:this.state.email,type:"text",onChange:this.onChangeHandler,error:this.state.emailError}),o.a.createElement(x,{name:"password",caption:"Contrase\xf1a",value:this.state.password,type:"password",onChange:this.onChangeHandler,error:this.state.passwordError}),o.a.createElement(P,null,o.a.createElement("button",{onClick:this.onClickLogin},"Iniciar Sesi\xf3n")))}}]),a}(n.Component),q=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={userName:"",userNameError:null,email:"",emailError:null,password:"",passwordError:null},e.onChangeHandler=e.onChangeHandler.bind(Object(m.a)(e)),e.onClickLogin=e.onClickLogin.bind(Object(m.a)(e)),e.onClickCreateAccount=e.onClickCreateAccount.bind(Object(m.a)(e)),e.validate=e.validate.bind(Object(m.a)(e)),e}return Object(u.a)(a,[{key:"validate",value:function(e){var t=null,a=[],n=e.email,o=e.password;return void 0!==n&&(M.test(n)||a.push("El correo debe tener formato correcto"),/^\s*$/.test(n)&&a.push("Debe Ingresar Correo Adecuado"),a.length&&(t=Object.assign({},t,{emailError:a.join(". ")}))),void 0!==o&&(a=[],B.test(o)&&a.push("Debe Ingresar Contrase\xf1a Adecuado"),a.length&&(t=Object.assign({},t,{passwordError:a.join(". ")}))),t}},{key:"onChangeHandler",value:function(e){var t=e.currentTarget,a=t.name,n=t.value,o=this.validate(Object(A.a)({},a,n));o||(o=Object(A.a)({},a+"Error","")),this.setState(Object(c.a)(Object(c.a)({},this.state),{},Object(A.a)({},a,n),o))}},{key:"onClickCreateAccount",value:function(e){e.preventDefault(),e.stopPropagation();var t=this.validate(this.state);if(t)this.setState(Object(c.a)(Object(c.a)({},this.state),t));else{alert("Click en Login");var a=this.state,n=a.userName,o=a.email,r=a.password;C.post("/api/seguridad/users/new",{useremail:o,userpswd:r,usernames:n}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}}},{key:"onClickLogin",value:function(e){e.preventDefault(),e.stopPropagation(),alert("Click en Login")}},{key:"render",value:function(){return o.a.createElement(I,{pageTitle:"Registrar",auth:this.props.auth},o.a.createElement(x,{name:"userName",caption:"Nombre Completo",value:this.state.userName,type:"text",onChange:this.onChangeHandler,error:this.state.userNameError}),o.a.createElement(x,{name:"email",caption:"Correo",value:this.state.email,type:"text",onChange:this.onChangeHandler,error:this.state.emailError}),o.a.createElement(x,{name:"password",caption:"Contrase\xf1a",value:this.state.password,type:"password",onChange:this.onChangeHandler,error:this.state.passwordError}),o.a.createElement(P,null,o.a.createElement("button",{onClick:this.onClickCreateAccount},"Crear Cuenta"),o.a.createElement("button",{onClick:this.onClickLogin},"Iniciar Sesi\xf3n")))}}]),a}(n.Component),z=function(e){var t=e.auth;return o.a.createElement(I,{pageTitle:"Recolecta HN",auth:t},o.a.createElement("body",null,o.a.createElement("h2",null,"#Qu\xe9dateEnCasa #HoyPorTiMa\xf1anaPorMi"),o.a.createElement("h2",null,"Bienvenido")))},$=a(35),J=a.n($),U=(a(71),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={items:[],hasMore:!0,page:1,itemsToLoad:10},e.loadMore=e.loadMore.bind(Object(m.a)(e)),e}return Object(u.a)(a,[{key:"loadMore",value:function(e){var t=this,a=this.state.itemsToLoad,n="/api/donaciones/facet/".concat(e,"/").concat(a);k.get(n).then((function(n){var o=n.data;console.log(o);var r=o.products,l=o.total,c=t.state.items;r.map((function(e){return c.push(e)})),l?t.setState({items:c,hasMore:e*a<l}):t.setState({hasMore:!1})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.items.map((function(e){return o.a.createElement("div",{className:"listItem",key:e._id},o.a.createElement("span",null,e.id),o.a.createElement("span",null,e.NombreCompleto),o.a.createElement("span",null,e.Telefono),o.a.createElement("span",null,e.Direccion),o.a.createElement("span",null,e.Donacion),o.a.createElement("span",{className:"updateListItem"},o.a.createElement(p.b,{to:"/platillos/".concat(e._id)},o.a.createElement(T.d,{size:"2em"})),o.a.createElement(p.b,{to:"/platillos/img/".concat(e._id)},o.a.createElement(T.c,{size:"2em"}))))}));return t.length||t.push(o.a.createElement("div",{className:"listItem",key:"pbListAddOne"},o.a.createElement("span",null,"Nuevo Item"),o.a.createElement(p.b,{to:"/changeThis"},o.a.createElement(T.g,{size:"2.5em"})))),o.a.createElement(I,{pageTitle:"Donaciones",auth:this.props.auth},o.a.createElement("div",{className:"list",ref:function(t){return e.scrollParentRef=t}},o.a.createElement(J.a,{pageStart:0,loadMore:this.loadMore,hasMore:this.state.hasMore,useWindow:!1,threshold:108,getScrollParent:function(){return e.scrollParentRef},loader:o.a.createElement("div",{key:"pbListLoading",className:"listItem center"},o.a.createElement(T.f,null))},t)))}}]),a}(n.Component)),W=(a(72),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={id:"",IdError:null,NombreCompleto:"",NombreError:null,Telefono:"",TelefonoError:null,Direccion:"",DireccionError:null,Donacion:"",DescripcionError:null},e.onChangeHandler=e.onChangeHandler.bind(Object(m.a)(e)),e.onClickLogin=e.onClickLogin.bind(Object(m.a)(e)),e.onClickButton=e.onClickButton.bind(Object(m.a)(e)),e}return Object(u.a)(a,[{key:"onChangeHandler",value:function(e){var t=e.currentTarget,a=t.name,n=t.value;this.setState(Object(c.a)(Object(c.a)({},this.state),{},Object(A.a)({},a,n)))}},{key:"onClickButton",value:function(e){e.preventDefault(),e.stopPropagation(),alert("A\xf1adido");var t=this.state,a=t.id,n=t.NombreCompleto,o=t.Telefono,r=t.Direccion,l=t.Donacion;k.post("/api/donaciones/new",{id:a,NombreCompleto:n,Telefono:o,Direccion:r,Donacion:l}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"onClickLogin",value:function(e){e.preventDefault(),e.stopPropagation(),alert("A\xf1adido")}},{key:"render",value:function(){return o.a.createElement(I,{pageTitle:"Nueva Donaci\xf3n",auth:this.props.auth},o.a.createElement(x,{name:"id",caption:"Id",value:this.state.Id,type:"text",onChange:this.onChangeHandler}),o.a.createElement(x,{name:"NombreCompleto",caption:"Nombre Completo",value:this.state.NombreCompleto,type:"text",onChange:this.onChangeHandler}),o.a.createElement(x,{name:"Telefono",caption:"Telefono",value:this.state.Telefono,type:"text",onChange:this.onChangeHandler}),o.a.createElement(x,{name:"Direccion",caption:"Direccion",value:this.state.Direccion,type:"text",onChange:this.onChangeHandler}),o.a.createElement(x,{name:"Donacion",caption:"Donacion",value:this.state.Donacion,type:"text",onChange:this.onChangeHandler}),o.a.createElement(P,null,o.a.createElement("button",{onClick:this.onClickButton},"Registrar")))}}]),a}(n.Component)),_=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={user:L("user")||{},jwt:L("jwt")||"",isLogged:!1,loadingBackend:!1},""!==e.state.jwt&&(e.state.isLogged=!0,O(e.state.jwt)),e.login=e.login.bind(Object(m.a)(e)),e.logout=e.logout.bind(Object(m.a)(e)),e}return Object(u.a)(a,[{key:"login",value:function(e){var t=e.jwt,a=Object(i.a)(e,["jwt"]);this.setState(Object(c.a)(Object(c.a)({},this.state),{},{isLogged:!0,loadingBackend:!1,user:a,jwt:t})),O(t),w("jwt",t),w("user",a)}},{key:"logout",value:function(){N("jwt"),N("user"),this.setState(Object(c.a)(Object(c.a)({},this.state),{},{isLogged:!1,user:{},jwt:""}))}},{key:"render",value:function(){var e=this,t={isLogged:this.state.isLogged,user:this.state.user,logout:this.logout};return console.log(t),o.a.createElement(p.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(g.d,null,o.a.createElement(g.b,{render:function(e){return o.a.createElement(S,Object.assign({},e,{auth:t}))},path:"/",exact:!0}),o.a.createElement(g.b,{render:function(a){return o.a.createElement(R,Object.assign({},a,{auth:t,login:e.login}))},path:"/login",exact:!0}),o.a.createElement(g.b,{render:function(e){return o.a.createElement(q,Object.assign({},e,{auth:t}))},path:"/signin",exact:!0}),o.a.createElement(E,{component:z,path:"/home2",exact:!0,auth:t}),o.a.createElement(E,{component:U,path:"/donaciones",exact:!0,auth:t}),o.a.createElement(E,{component:W,path:"/registro",exact:!0,auth:t}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.461c18ba.chunk.js.map