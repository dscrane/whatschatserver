(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{128:function(a,e,t){"use strict";t.r(e);var c=t(0),o=t.n(c),O=t(16),n=t.n(O),r=t(43),s=t(4),d=t(40),l=t(130),b=t(1),j={isLoggedIn:!1,_id:null,token:null,data:{}},u=t(18),p=t(6),i=t(27),m=t.n(i),_=[],h=Object(s.c)({auth:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_AUTH":case"LOG_IN":return Object(b.a)(Object(b.a)({},a),e.payload);case"LOG_OUT":return Object(b.a)(Object(b.a)({},a),j);case"UPDATE_USER":return Object(b.a)(Object(b.a)({},a),{},{data:Object(b.a)(Object(b.a)({},a.data),e.payload)});default:return a}},chatRooms:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_CHATROOM":return Object(b.a)(Object(b.a)({},a),{},Object(p.a)({},e.payload._id,Object(b.a)({},e.payload)));case"DISPLAY_CHATROOMS":return Object(b.a)(Object(b.a)({},a),m.a.mapKeys(e.payload,"_id"));case"CLOSE_CHAT":return Object(b.a)(Object(b.a)({},a),m.a.omit(a,e.payload));case"NEW_MESSAGE":return Object(b.a)(Object(b.a)({},a),{},Object(p.a)({},e.payload.chatRoomId,Object(b.a)(Object(b.a)({},a[e.payload.chatRoomId]),{},{messages:[].concat(Object(u.a)(a[e.payload.chatRoomId].messages),[e.payload.message])})));case"LOAD_MESSAGES":return Object(b.a)(Object(b.a)({},a),{},Object(p.a)({},e.payload.chatRoomId,Object(b.a)(Object(b.a)({},a[e.payload.chatRoomId]),{},{messages:[].concat(Object(u.a)(a[e.payload.chatRoomId].messages),Object(u.a)(e.payload.messages))})));case"LOG_OUT":return Object(b.a)(Object(b.a)({},a),_);default:return a}},form:l.a}),y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,E=Object(s.e)(h,y(Object(s.a)(d.a))),S=function(){return o.a.createElement("h1",null," Hello World ")};n.a.render(o.a.createElement(r.a,{store:E},o.a.createElement(S,null)),document.querySelector("#root"))},44:function(a,e,t){a.exports=t(128)}},[[44,1,2]]]);
//# sourceMappingURL=main.b30e403e.chunk.js.map