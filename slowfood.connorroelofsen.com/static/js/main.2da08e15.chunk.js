(this.webpackJsonpslowfood_client=this.webpackJsonpslowfood_client||[]).push([[0],{21:function(e,t,n){e.exports=n(44)},44:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),s=n(19),i=n.n(s),c=n(5),u=n(6),l=n(8),p=n(7),d=n(9),m=n(1),h=n.n(m),f=n(3),g=n(4),v=n.n(g),b=function(){var e=Object(f.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/products");case 2:return t=e.sent,e.abrupt("return",t.data.products);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=n(20),w=function(){var e=Object(f.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=sessionStorage.getItem("credentials"),n=JSON.parse(n),n=Object(E.a)({},n,{"Content-type":"application/json",Accept:"application/json"}),e.prev=3,e.next=6,v.a.post("/orders",{product:t},{headers:n});case 6:return a=e.sent,e.abrupt("return",a.data);case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0.response);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),y=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={menuList:[],orderResponse:{}},n.addToOrder=function(){var e=Object(f.a)(h.a.mark((function e(t){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.parentElement.dataset.id,e.next=3,w(a);case 3:r=e.sent,n.setState({orderResponse:{id:a,message:r.message}});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMenuList()}},{key:"getMenuList",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,this.setState({menuList:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this,n=this.props.authenticated;return this.state.menuList.length>0&&(e=this.state.menuList.map((function(e){return o.a.createElement("div",{"data-id":e.id,"data-cy":"product-"+e.id},o.a.createElement("h3",null,e.name),o.a.createElement("p",null,e.price),n&&o.a.createElement("button",{onClick:t.addToOrder},"Add to order"),e.id==parseInt(t.state.orderResponse.id)&&o.a.createElement("p",{id:"message"},t.state.orderResponse.message))}))),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,e))}}]),t}(r.Component),O=function(){var e=Object(f.a)(h.a.mark((function e(t,n){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.post("/auth/sign_in",{email:t,password:n});case 3:return a=e.sent,j(a),e.abrupt("return",{data:a.data.data,authenticated:!0});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{authenticated:!1,data:e.t0.response.data.errors[0]});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),j=function(e){var t=e.headers,n={uid:t.uid,client:t.client,access_token:t["access-token"],expiry:t.expiry,token_type:"Bearer"};sessionStorage.setItem("credentials",JSON.stringify(n))},k=function(e){var t=e.submitFormHandler;return o.a.createElement("form",{onSubmit:t,id:"login-form"},o.a.createElement("label",null,"Email"),o.a.createElement("input",{name:"login_email",type:"email",id:"login_email"}),o.a.createElement("label",null,"Password"),o.a.createElement("input",{name:"login_password",type:"password",id:"login_password"}),o.a.createElement("button",{id:"submit"},"Submit"))},x=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={renderLoginForm:!1},n.onLogin=function(){var e=Object(f.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,O(t.target.login_email.value,t.target.login_password.value);case 3:(a=e.sent).authenticated?n.props.authenticated():n.props.renderLoginError(a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,this.state.renderLoginForm?o.a.createElement(k,{submitFormHandler:this.onLogin}):o.a.createElement("button",{id:"login",onClick:function(){return e.setState({renderLoginForm:!0})},"data-cy":"toggle-login"},"Login"))}}]),t}(r.Component),L=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={authenticated:!1},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t=this;return this.state.authenticated&&(e=o.a.createElement("p",{id:"message"},"Hi ",JSON.parse(sessionStorage.getItem("credentials")).uid)),this.state.authError&&(e=o.a.createElement("p",{id:"message"},this.state.authError)),o.a.createElement(o.a.Fragment,null,e,o.a.createElement("h1",{"data-cy":"header"},"Johan's Pizzeria"),o.a.createElement(y,{authenticated:this.state.authenticated}),o.a.createElement(x,{authenticated:function(){return t.setState({authError:void 0,authenticated:!0})},renderLoginError:function(e){return t.setState({authError:e})}}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a="https://ca-cooper-api.herokuapp.com/api/v1",v.a.defaults.baseURL=a,i.a.render(o.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.2da08e15.chunk.js.map