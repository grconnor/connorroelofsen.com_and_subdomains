(this.webpackJsonpfunny_jokes=this.webpackJsonpfunny_jokes||[]).push([[0],{145:function(e,t,a){e.exports=a(176)},150:function(e,t,a){},176:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(48),o=a.n(s),c=(a(150),a(10)),i=a.n(c),u=a(21),l=a(79),p=a(80),d=a(104),m=a(99),h=a(73),v=a(32),k=a.n(v),g=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/jokes");case 2:return t=e.sent,e.abrupt("return",t.data.jokes);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(i.a.mark((function e(t,a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=sessionStorage.getItem("credentials"),n=JSON.parse(n),n=Object(h.a)(Object(h.a)({},n),{},{"Content-type":"application/json",Accept:"application/json"}),e.prev=3,e.next=6,k.a.post("/jokes",{joke_id:t,content:a},{headers:n});case 6:return r=e.sent,e.abrupt("return",r.data);case 10:return e.prev=10,e.t0=e.catch(3),console.error(e.t0),alert("Sorry, we were not able to save that joke!"),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t,a){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=sessionStorage.getItem("credentials"),a=JSON.parse(a),a=Object(h.a)(Object(h.a)({},a),{},{"Content-type":"application/json",Accept:"application/json"}),e.prev=3,e.next=6,k.a.post("/votes",{jokeId:t},{headers:a});case 6:return n=e.sent,e.abrupt("return",n.data);case 10:return e.prev=10,e.t0=e.catch(3),console.error(e.t0),alert("Sorry, we are not that funny, we don't have that joke!"),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),w=a(193),b=a(188),j=a(192),E=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={currentJoke:{},displayJoke:!1,voteSaved:!1,voteMessage:"",jokeSaved:"",savedJokeMessage:""},e.getRandomJoke=Object(u.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:a=t.sent,e.setState({currentJoke:a,displayJoke:!0,voteSaved:!1,jokeSaved:!1});case 4:case"end":return t.stop()}}),t)}))),e.voteSaved=Object(u.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e.state.currentJoke.id);case 2:!1!==(a=t.sent)&&e.setState({currentJoke:a.joke,voteSaved:!0,voteMessage:a.message});case 4:case"end":return t.stop()}}),t)}))),e.jokeSaved=Object(u.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e.state.currentJoke.id,e.state.currentJoke.content);case 2:!1!==(a=t.sent)&&e.setState({jokeSaved:!0,savedJokeMessage:a.message});case 4:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state.currentJoke.content,t=this.state.currentJoke.upvotes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a.Row,{style:{width:"100%",height:"45%"}},this.state.displayJoke&&r.a.createElement("div",{"data-cy":"random-joke"},r.a.createElement(b.a,{textAlign:"center",style:{width:"45%"}},r.a.createElement("p",null,e),r.a.createElement("h3",{"data-cy":"upvote"},"upvotes: ",t)),r.a.createElement(b.a,{textAlign:"center"},this.props.authenticated&&!this.state.voteSaved?r.a.createElement(j.a,{basic:!0,color:"green","data-cy":"vote-button",onClick:this.voteSaved},"Vote +"," "):r.a.createElement("h3",{"data-cy":"vote-message"}," ",this.state.voteMessage),this.props.authenticated&&!this.state.jokeSaved?r.a.createElement(j.a,{basic:!0,color:"red","data-cy":"save-joke-button",onClick:this.jokeSaved},"Save Joke"):r.a.createElement("h3",{"data-cy":"saved-joke-message"},this.state.savedJokeMessage)))),r.a.createElement(w.a.Row,{style:{height:"60%"}},r.a.createElement(j.a,{color:"yellow",size:"large",onClick:this.getRandomJoke,"data-cy":"joke"},"Get the joke you need right now")))}}]),a}(n.Component),S=a(189),J=function(e){var t=e.submitFormHandler;return r.a.createElement("div",null,r.a.createElement(S.a,{"data-cy":"login-form",onSubmit:t},r.a.createElement(S.a.Input,{icon:"user",iconPosition:"left",label:"email:",placeholder:"Username",name:"email",type:"email",id:"email","data-cy":"email"}),r.a.createElement(S.a.Input,{icon:"lock",iconPosition:"left",label:"password:",type:"password",name:"password",id:"password","data-cy":"password"}),r.a.createElement(j.a,{"data-cy":"button",id:"Submit",content:"Submit",primary:!0})))},O=function(){var e=Object(u.a)(i.a.mark((function e(t,a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.post("/auth/sign_in",{email:t,password:a});case 3:return n=e.sent,e.next=6,x(n);case 6:return e.abrupt("return",{authenticated:!0});case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{authenticated:!1,message:e.t0.response.data.errors[0]});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a){return e.apply(this,arguments)}}(),x=function(e){var t=e.headers,a={uid:t.uid,client:t.client,access_token:t["access-token"],expiry:t.expiry,token_type:"Bearer"};sessionStorage.setItem("credentials",JSON.stringify(a))},I=a(190),F=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={showLoginForm:!1,authenticated:!1,message:""},e.onLogin=function(){var t=Object(u.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,O(a.target.email.value,a.target.password.value);case 3:(n=t.sent).authenticated?e.setState({authenticated:!0}):e.setState({message:n.message,showLoginForm:!1});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(p.a)(a,[{key:"render",value:function(){var e,t=this,a=this.state,n=a.showLoginForm,s=a.authenticated,o=a.message;switch(!0){case n&&!s:e=r.a.createElement(J,{submitFormHandler:this.onLogin});break;case!n&&!s:e=r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{primary:!0,id:"login","data-cy":"login",onClick:function(){return t.setState({showLoginForm:!0})}},"Login"),r.a.createElement("p",{"data-cy":"message"},o));break;case s:e=r.a.createElement("p",{"data-cy":"message"},"Hi ",JSON.parse(sessionStorage.getItem("credentials")).uid)}return r.a.createElement("div",{class:"backgroundImage"},r.a.createElement(I.a,{size:"small",inverted:!0},r.a.createElement(I.a.Menu,{position:"right"},r.a.createElement(I.a.Item,null,e))),r.a.createElement(w.a,{style:{height:"100vh"},textAlign:"center"},r.a.createElement(w.a.Row,{style:{height:"24%"}},r.a.createElement("h1",{"data-cy":"title",class:"title"},"Funny Jokes")),r.a.createElement(w.a.Row,{style:{height:"76%"}},r.a.createElement(E,{authenticated:this.state.authenticated}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C;a(175);C="https://funny-jokes-api.herokuapp.com/api/v1",k.a.defaults.baseURL=C,o.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[145,1,2]]]);
//# sourceMappingURL=main.d7507192.chunk.js.map