(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{119:function(e,t,a){e.exports=a(246)},243:function(e,t,a){},244:function(e,t,a){},246:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),l=a.n(r),s=a(9),o=a(8),m=a(113),i=a(252),u=a(6),d={isLoggedIn:!1,_id:null,token:null,currentChatroom:"5f52268b6d59e14df8174254",user:{}},h=a(44),p=a(39),b=a(114),E=a.n(b),f=[],v=Object(o.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_AUTH":case"SET_CHATROOM":case"LOG_IN":return Object(u.a)(Object(u.a)({},e),t.payload);case"LOG_OUT":return Object(u.a)(Object(u.a)({},e),d);default:return e}},chatrooms:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CHATROOMS":return Object(u.a)(Object(u.a)({},e),E.a.mapKeys(t.payload,"_id"));case"CREATE_CHATROOM":return Object(u.a)(Object(u.a)({},e),{},Object(p.a)({},t.payload._id,Object(u.a)({},t.payload)));case"FETCH_MESSAGES":return console.log("state",e[t.payload.chatroomId]),console.log("fetch action",t.payload.chatroomId),Object(u.a)(Object(u.a)({},e),{},Object(p.a)({},t.payload.chatroomId,Object(u.a)(Object(u.a)({},e[t.payload.chatroomId]),{},{messages:[].concat(Object(h.a)(e[t.payload.chatroomId].messages),Object(h.a)(t.payload.messages))})));default:return e}},form:i.a}),g=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,_=Object(o.e)(v,g(Object(o.a)(m.a))),N=a(249),y=a(22),w=Object(y.a)(),O=a(16),x=a(12),j=a.n(x),C=a(23),k=a(116),S=a.n(k).a.create({baseURL:"https://young-oasis-67409.herokuapp.com",headers:{"Content-Security-Policy":"default-src *"}}),I=c.a.createElement("svg",{width:"1.2em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-person",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{fillRule:"evenodd",d:"M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"})),H=c.a.createElement("svg",{width:"1.2em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-chat-right-text",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{fillRule:"evenodd",d:"M2 1h12a1 1 0 0 1 1 1v11.586l-2-2A2 2 0 0 0 11.586 11H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"}),c.a.createElement("path",{fillRule:"evenodd",d:"M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"})),T=c.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-plus-square",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{fillRule:"evenodd",d:"M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),c.a.createElement("path",{fillRule:"evenodd",d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})),A=c.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-pencil",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{fillRule:"evenodd",d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"})),M=Object(s.b)((function(e){return{auth:e.auth,chatrooms:e.chatrooms}}),{createChatroom:function(e,t){return function(){var a=Object(C.a)(j.a.mark((function a(n){var c,r;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,S.post("/chatrooms/create",{name:e,createdBy:t});case 3:c=a.sent,r=c.data,n({type:"CREATE_CHATROOM",payload:Object(u.a)(Object(u.a)({},r.chat),{},{messages:[]})}),w.push("/chats/".concat(r.chat._id)),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),n({type:"ERROR",error:"Invalid Name"});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},setChatroom:function(e){return function(){var t=Object(C.a)(j.a.mark((function t(a){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"SET_CHATROOM",payload:{currentChatroom:e}});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.auth,a=e.chatrooms,r=e.setChatroom,l=(e.displayChatRooms,e.createChatroom),s=(e.closeChat,Object(n.useState)("")),o=Object(O.a)(s,2),m=o[0],i=o[1],u=function(e){i(e.target.value)},d=function(e){e.preventDefault(),m.length>=5&&(l(m,t._id),i(""))},h=function(){if(a!=={})return Object.keys(a).map((function(e){return c.a.createElement("li",{key:e,className:"chatroom__item"},c.a.createElement("div",{className:"chatroom__icon col-2 my-auto text-secondary"},I),c.a.createElement("div",{className:"col-8"},c.a.createElement("div",{className:"col text-center text-white"},c.a.createElement("div",{onClick:function(){return r(t=e),void w.push("/chats/".concat(t));var t},className:"chatroom__chatroom"}," ",c.a.createElement("div",{className:"col text-center"},a[e].name)))),c.a.createElement("div",{className:"chatroom__cta-col"},c.a.createElement("button",{className:"chatroom__cta-close p-0 text-secondary"},c.a.createElement("p",{className:"chatroom__close"},"\ud83d\uddd9"))))}))};return c.a.createElement("div",{className:"chatroom__list my-3"},c.a.createElement("ul",{className:"chatroom__list list-unstyled"},c.a.createElement("li",{className:"chatroom__new"},c.a.createElement(V,{handleForm:d,onChange:u,newRoomName:m})),h()))})),R=a(251),L=Object(s.b)((function(e){return{auth:e.auth}}),{userLogout:function(){return function(){var e=Object(C.a)(j.a.mark((function e(t,a){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().auth.token,e.next=3,S.post("/users/logout",{},{headers:{Authorization:"Bearer ".concat(n)}});case 3:return e.next=5,localStorage.removeItem("jwt-token");case 5:t({type:"LOG_OUT"}),w.push("/");case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}})((function(e){e.auth;var t=e.userLogout,a=(e.updateUser,e.deleteUser,Object(n.useState)("")),r=Object(O.a)(a,2),l=r[0],s=r[1],o=Object(n.useState)(!1),m=Object(O.a)(o,2),i=m[0],u=m[1],d=function(e){s("")},h=function(e){var t=e.input,a=e.label,n=e.meta,r="field ".concat(n.error&&n.touched?"error":"");return c.a.createElement("li",{className:"list-group-item px-3"},c.a.createElement("div",{className:"row justify-content-between align-items-center ".concat(r)},c.a.createElement("div",{className:"col-3 text-left p-0"},c.a.createElement("label",{className:"m-auto font-weight-bold"},a)),c.a.createElement("div",{className:"col-7"},l===a?c.a.createElement("input",Object.assign({className:"form-control text-left"},t)):c.a.createElement("input",Object.assign({className:"form-control-plaintext text-left"},t))),c.a.createElement("div",{onClick:function(){return s(a)},className:"col-1 text-secondary"},A),function(e){var t=e.error;if(e.touched&&t)return c.a.createElement("div",{className:"ui error message"},c.a.createElement("div",{className:"header"},t))}(n)))},p=c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-img-top mx-auto"},c.a.createElement("img",{className:"mx-auto mt-3",height:"150",width:"150",alt:"avatar"})),c.a.createElement("div",{className:"card-body"},c.a.createElement(z,{handleForm:d},c.a.createElement("ul",{className:"list-group list-group-flush"},c.a.createElement(R.a,{name:"name",component:h,label:"Name"}),c.a.createElement(R.a,{name:"username",component:h,label:"Username"}),c.a.createElement(R.a,{name:"email",component:h,label:"Email"}),c.a.createElement(R.a,{name:"password",component:h,label:"Password"}),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("div",{className:"row justify-content-around"},c.a.createElement("div",{className:"col text-center"},"User Since:")))),c.a.createElement("input",{type:"submit",className:"profile__submit",tabIndex:"-1"})),c.a.createElement("ul",{className:"list-group list-group-flush"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement("button",{onClick:function(){t()},className:"btn btn-secondary mt-2"},"Log Out")),c.a.createElement("li",{className:"list-group-item "},c.a.createElement("button",{onClick:function(){return u(!0)},className:"btn btn-danger"},"Delete Account"))))));return c.a.createElement("div",{className:"d-flex flex-column m-3",style:{width:"90%"}},p,c.a.createElement(Q,{modalConfig:{title:"Delete Account",message:"Are you sure you want to delete your account?",btnText:"Delete",btnStyle:"danger"},setModalDisplay:u,modalDisplay:i}))})),F=a(250),z=Object(F.a)({form:"userForm"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit((function(t){if(!e.initialValues)return e.handleForm(t)})),className:"form-signin mt-2"},e.children)})),U=function(e){var t=function(e){var t=e.input,a=e.label,n=e.type;return c.a.createElement("div",null,c.a.createElement("label",{className:"text-white text-left my-2"},a),c.a.createElement("input",Object.assign({className:"form-control",placeholder:a},t,{type:n,required:!0})))};return c.a.createElement(z,{handleForm:function(t){e.handleForm(t)}},c.a.createElement("div",{className:"ui stacked element"},c.a.createElement(R.a,{name:"username",component:t,label:"Username",type:"text"}),c.a.createElement(R.a,{name:"password",component:t,label:"Password",type:"password"}),c.a.createElement("button",{className:"btn btn-md btn-secondary btn-block my-4 mx-auto w-25"},"Submit")),c.a.createElement("div",{className:"d-flex w-100 justify-content-center text-white"},c.a.createElement("div",{className:"col"},c.a.createElement("p",{className:"m-0 p-0"},"Sample User Credentials"),c.a.createElement("p",{className:"m-0 p-0"},"Username: sampleuser"),c.a.createElement("p",{className:"m-0 p-0"},"Password: examplepass000"))))},D=function(e){var t=function(e){var t=e.input,a=e.label,n=e.type;return c.a.createElement("div",null,c.a.createElement("label",{className:"text-white text-left my-2"},a),c.a.createElement("input",Object.assign({className:"form-control",type:n,placeholder:a},t,{required:!0})))};return c.a.createElement(z,{handleForm:function(t){e.handleForm(t)}},c.a.createElement(R.a,{name:"name",component:t,label:"Name",type:"text"}),c.a.createElement(R.a,{name:"username",component:t,label:"Username",type:"text"}),c.a.createElement(R.a,{name:"email",component:t,label:"Email",type:"email"}),c.a.createElement(R.a,{name:"password",component:t,label:"Password",type:"password"}),c.a.createElement(R.a,{name:"passwordConf",component:t,label:"Confirm Password",type:"password"}),c.a.createElement("button",{className:"btn btn-md btn-secondary btn-block mt-4 mx-auto w-50"},"Submit"))},V=function(e){var t=e.newRoomName.length<5&&0!==e.newRoomName.length?"is-invalid":null;return c.a.createElement("form",{className:"w-100",onSubmit:function(t){e.handleForm(t)}},c.a.createElement("div",{className:"chatroom__form"},c.a.createElement("div",{className:"d-flex justify-content-end col-3 mx-auto"},c.a.createElement("button",{type:"submit",className:"chatroom__cta-new btn p-0"},c.a.createElement("div",{className:"chatroom__new-cta text-secondary"},T))),c.a.createElement("div",{className:"col-9"},c.a.createElement("input",{onChange:function(t){e.onChange(t)},className:"form-control ".concat(t),type:"text",placeholder:"Create Chat Room....",name:"chatForm",required:!0}))))},B=a(10),P=a.n(B),G=function(e){return c.a.createElement("button",{className:P()("icon__button","btn btn-outline-dark p-0",{"text-white":e.icon===e.activeIcon,"text-secondary":e.icon!==e.activeIcon}),disabled:e.icon===e.activeIcon},"profile"===e.icon?I:"chats"===e.icon?H:void 0)},q=a(118),K=a(59),J=a(58),X=a(61),W=a(60),Q=function(e){var t=e.modalConfig,a=e.setModalDisplay,n=e.modalDisplay,r=e.handleDelete;return n?c.a.createElement(q.a,{show:n,onHide:function(){return a(!1)}},c.a.createElement(W.a,{closeButton:!0},c.a.createElement(X.a,null,t.title)),c.a.createElement(J.a,null,c.a.createElement("p",null,t.message)),c.a.createElement(K.a,null,c.a.createElement("button",{onClick:function(){return a(!1)},type:"button",className:"btn btn-secondary"},"Cancel"),c.a.createElement("button",{onClick:function(){return a(!1),void r()},className:"btn btn-".concat(t.btnStyle)},t.btnText))):c.a.createElement(c.a.Fragment,null)},Y=function(e){var t=Object(n.useState)("chats"),a=Object(O.a)(t,2),r=a[0],l=a[1],s=["profile","chats"];return c.a.createElement("div",{className:"sidebar__content"},c.a.createElement("nav",{className:"sidebar__nav"},c.a.createElement("div",{className:"sidebar__row py-4"},c.a.createElement("h2",{className:"text-white"},"WhatsChat")),c.a.createElement("div",{className:"sidebar__row"},c.a.createElement("div",{className:"sidebar__break"})),c.a.createElement("div",{className:"sidebar__row"},c.a.createElement("ul",{className:"sidebar__list list-unstyled components py-3 mb-0"},s.map((function(e){return c.a.createElement("li",{id:"".concat(e,"-cta"),key:e,className:"nav-item",onClick:function(e){return function(e){"profile-cta"===e.currentTarget.id&&l("profile"),"chats-cta"===e.currentTarget.id&&l("chats")}(e)}},c.a.createElement(G,{icon:e,activeIcon:r}))})))),c.a.createElement("div",{className:"sidebar__row"},c.a.createElement("div",{className:"sidebar__break"})),c.a.createElement("div",{className:"sidebar__row"},e.auth?"profile"===r?c.a.createElement(L,null):"chats"===r?c.a.createElement(M,null):void 0:c.a.createElement("div",null,"Sign In or Create an account to see available rooms and profile"))))},Z=Object(s.b)(null,{userLogin:function(e){return function(){var t=Object(C.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.post("/users/login",Object(u.a)({},e));case 2:n=t.sent,localStorage.setItem("jwt-token",n.data.token),a({type:"LOG_IN",payload:{_id:n.data.user._id,token:n.data.token,user:n.data.user,isLoggedIn:!0}}),w.push("/chats");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=Object(n.useState)("signup"),a=Object(O.a)(t,2),r=a[0],l=a[1],s=function(e){},o=function(t){e.userLogin(t)},m=function(){"signup"===r&&l("login"),"login"===r&&l("signup")};return c.a.createElement("div",{className:"landing__area col"},c.a.createElement("div",{className:"landing__container container pb-3 px-3 bg-dark"},c.a.createElement("div",{className:"row mb-2"},c.a.createElement("div",{className:"col p-0"},c.a.createElement("button",{onClick:function(){return m()},className:P()({"btn btn-large text-white w-100 p-3":!0,"btn-outline-dark":"signup"===r,"btn-secondary":"login"===r}),disabled:"signup"===r},"Sign Up Here!")),c.a.createElement("div",{className:"col h-100 p-0"},c.a.createElement("button",{onClick:function(){return m()},className:P()({"btn btn-large text-white w-100 p-3":!0,"btn-outline-dark disabled":"login"===r,"btn-secondary":"signup"===r}),disabled:"login"===r},"Log In Here!"))),"signup"===r?c.a.createElement(D,{handleForm:s}):c.a.createElement(U,{handleForm:o})))})),$=a(117),ee=a.n($),te=Object(s.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.messages,a=e.auth,r=Object(n.useRef)(null);Object(n.useEffect)((function(){var e=r.current.lastElementChild;if(e){var t=getComputedStyle(e.lastElementChild),a=parseInt(t.marginBottom),n=r.current.offsetHeight+a,c=r.current.offsetHeight;r.current.scrollHeight-n<=r.current.scrollTop+c&&(r.current.scrollTop=r.current.scrollHeight)}}),[t.length]);return c.a.createElement("div",{className:"chat__container"},c.a.createElement("ul",{className:"chat__display chat__display-scroll ",ref:r},t?Object.keys(t).map((function(e){var n,r=(n=t[e].createdAt,ee()(n).format("h:mm A"));return"systemManager"===t[e].author?c.a.createElement("li",{key:1e3*Math.random(),className:"chat__message chat__message-system"},c.a.createElement("div",{key:e,className:"text-white text-left"},t[e].message)):t[e].userId!==a._id?c.a.createElement("li",{key:e,className:"chat__messages chat__messages-rec"},c.a.createElement("div",{className:"chat__bubble chat__bubble-rec"},c.a.createElement("div",{className:"chat__content px-2 py-1"},c.a.createElement("div",{className:"chat__area py-0 mr-1"},c.a.createElement("p",{className:"chat__text chat__text-author"},t[e].author),c.a.createElement("p",{className:"chat__text chat__text-message"},t[e].message)),c.a.createElement("div",{className:"chat__footer ml-1"},c.a.createElement("div",{className:"chat__timestamp"},r))))):c.a.createElement("li",{key:e,className:"chat__messages chat__messages-sent"},c.a.createElement("div",{className:"chat__bubble chat__bubble-sent"},c.a.createElement("div",{className:"chat__content px-2 py-1"},c.a.createElement("div",{className:"chat__area py-0 mr-1"},c.a.createElement("p",{className:"chat__text chat__text-message"},t[e].message)),c.a.createElement("div",{className:"chat__footer ml-1 text-white"},c.a.createElement("div",{className:"chat__timestamp"},r)))))})):c.a.createElement("div",{className:"text-white"},"Send a message!!")))})),ae=Object(s.b)((function(e){return{auth:e.auth,chatrooms:e.chatrooms}}),{fetchMessages:function(e){return function(){var t=Object(C.a)(j.a.mark((function t(a){var n,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,S.get("/messages/fetch?chatroomId=".concat(e));case 3:n=t.sent,c=n.data,console.log(c),a({type:"FETCH_MESSAGES",payload:{chatroomId:e,messages:c.messages}});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.auth,a=e.chatrooms,r=e.fetchMessages,l=Object(n.useState)(""),s=Object(O.a)(l,2),o=s[0],m=s[1];Object(n.useEffect)((function(){Object.keys(a).forEach((function(e){console.log(e),r(e)}))}),[]);return c.a.createElement("div",{className:"chatroom__display bg-secondary"},c.a.createElement("div",{className:"chatroom__container"},c.a.createElement("div",{className:"chatroom__heading"},c.a.createElement("h2",{className:"chatroom__title"},a[t.currentChatroom].name)),c.a.createElement(te,{messages:a[t.currentChatroom].messages}),c.a.createElement("div",{className:"chatroom__input mb-2 mx-auto"},c.a.createElement("form",{className:"w-100"},c.a.createElement("div",{className:"row "},c.a.createElement("div",{className:"col-10"},c.a.createElement("input",{className:"form-control w-100",placeholder:"Message...",type:"text",value:o,onChange:function(e){m(e.target.value)}})),c.a.createElement("div",{className:"col-2"},c.a.createElement("button",{className:"btn btn-md btn-outline-secondary "},"Send")))))))})),ne=Object(s.b)((function(e){return{auth:e.auth,chatrooms:e.chatrooms}}),{})((function(e){var t=0!==e.chatrooms.length?c.a.createElement(ae,null):c.a.createElement("div",null,"Click on a chat room to enter");return c.a.createElement(c.a.Fragment,null,t)})),ce=(a(243),a(244),Object(s.b)((function(e){return{auth:e.auth}}),{checkAuth:function(){return function(){var e=Object(C.a)(j.a.mark((function e(t){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=localStorage.getItem("jwt-token")){e.next=3;break}return e.abrupt("return",t({type:"CHECK_AUTH",payload:{isLoggedIn:!1,token:null}}));case 3:return e.next=5,S.get("/users/fetch",{headers:{Authorization:"Bearer ".concat(a)}});case 5:n=e.sent,t({type:"CHECK_AUTH",payload:{token:a,_id:n.data._id,isLoggedIn:!0,user:n.data.user}});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},fetchChatrooms:function(){return function(){var e=Object(C.a)(j.a.mark((function e(t,a){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.get("/chatrooms/fetch");case 3:n=e.sent,console.log(n),c=n.data.chats.map((function(e){var t=0!==a().chatrooms.length?a().chatrooms[e._id].messages:[];return Object(u.a)(Object(u.a)({},e),{},{messages:Object(h.a)(t)})})),t({type:"FETCH_CHATROOMS",payload:Object(u.a)({},c)}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a){return e.apply(this,arguments)}}()}})((function(e){var t=e.auth,a=e.checkAuth,r=e.fetchChatrooms;return Object(n.useEffect)((function(){a(),t.isLoggedIn&&r()}),[t.isLoggedIn,a,r]),c.a.createElement("div",{className:"wrapper d-flex align-items-stretch"},c.a.createElement(N.c,{history:w},c.a.createElement(c.a.Fragment,null,c.a.createElement(Y,{auth:t.isLoggedIn}),c.a.createElement(N.d,null,c.a.createElement(N.b,{path:"/",exact:!0},t.isLoggedIn?c.a.createElement(N.a,{to:"/chats"}):c.a.createElement(Z,null)),c.a.createElement(N.b,{path:"/chats"},t.isLoggedIn?c.a.createElement(ne,null):c.a.createElement(N.a,{to:"/"}))))))})));console.log("ENV:","production"),l.a.render(c.a.createElement(s.a,{store:_},c.a.createElement(ce,null)),document.querySelector("#root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.b4c3a513.chunk.js.map