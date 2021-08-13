(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[554],{4559:function(e,t,n){"use strict";var r=n(5893),i=(n(7294),n(9008));t.Z=function(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:e.title}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/modern-css-reset/dist/reset.min.css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/purecss@2.0.6/build/pure-min.css",integrity:"sha384-Uu6IeWbM+gzNVXJcM9XV3SohHtmWE+3VGi496jvgX1jyvDTXfdK+rfZc8C1Aehk5",crossOrigin:"anonymous"}),(0,r.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/purecss@2.0.6/build/grids-responsive-min.css"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})})}},5978:function(e,t,n){"use strict";var r=n(5893),i=(n(7294),n(9163)),o=n(9583),c=n(1664),s=i.ZP.nav.withConfig({displayName:"Nav__NavContent",componentId:"sc-1vxt7ju-0"})([""]),a=i.ZP.div.withConfig({displayName:"Nav__NavInner",componentId:"sc-1vxt7ju-1"})(["display:flex;justify-content:space-between;align-items:center;flex-grow:1;flex-direction:row"]),u=i.ZP.span.withConfig({displayName:"Nav__GithubLink",componentId:"sc-1vxt7ju-2"})(["margin-right:1rem;"]),d=i.ZP.div.withConfig({displayName:"Nav__IconWrapper",componentId:"sc-1vxt7ju-3"})(["margin-top:.7rem;"]);t.Z=function(e){return(0,r.jsx)(s,{children:(0,r.jsxs)(a,{className:"pure-menu pure-menu-horizontal pure-menu-fixed",children:[(0,r.jsx)("h1",{className:"pure-menu-heading",children:(0,r.jsx)(c.default,{href:"/",children:"TimerTodo"})}),(0,r.jsxs)("div",{children:[e.children,(0,r.jsx)(d,{children:(0,r.jsx)(c.default,{href:"https://github.com/hiy/time-todo",children:(0,r.jsx)(u,{children:(0,r.jsx)(o.hJX,{size:40})})})})]})]})})}},1085:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var r=n(5893),i=n(6265),o=n(1385),c=n(809),s=n.n(c),a=n(2447),u=n(7294),d=n(1664),l=n(2605),f=n(8347),p=n(9163),h=n(5434),m=n(5155);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=p.ZP.span.withConfig({displayName:"TodoInput__InputStyle",componentId:"sc-ywtxz7-0"})(["input{font-family:inherit;font-size:inherit;-webkit-padding:0.4em 0;padding:0.4em;margin:0 0 0.5em 0;box-sizing:border-box;border:1px solid #ccc;border-radius:2px;}input&:disabled{color:#ccc;}"]),j=p.ZP.span.withConfig({displayName:"TodoInput__CheckBox",componentId:"sc-ywtxz7-1"})(["margin:0 1rem;"]),g=p.ZP.span.withConfig({displayName:"TodoInput__InputWrapper",componentId:"sc-ywtxz7-2"})(["position:relative;"]),b=p.ZP.a.withConfig({displayName:"TodoInput__DeleteButton",componentId:"sc-ywtxz7-3"})(["position:absolute;top:0;right:.3rem;"]),w=p.ZP.button.withConfig({displayName:"TodoInput__ExecButton",componentId:"sc-ywtxz7-4"})(["border:"," margin-left:1rem;div{padding:.5rem;&:first-child{border-bottom:1px solid gray;}}"],(function(e){return e.isExec?"1px solid red;":null})),O=function(e){var t=e.isDone,n=e.isExec,i=e.onDelete,o=e.onClickExecButton,c=e.onClickCheckBox,s=e.isShow,a=(0,f.Z)(e,["isDone","isExec","onDelete","onClickExecButton","onClickCheckBox","isShow"]);return(0,r.jsxs)("div",{children:[s?(0,r.jsxs)(g,{children:[(0,r.jsx)(j,{children:t?(0,r.jsx)(m.yDY,{onClick:function(){return c()}}):(0,r.jsx)(m.UHD,{onClick:function(){return c()}})}),(0,r.jsx)(v,{children:(0,r.jsx)("input",x({type:"text"},a))}),(0,r.jsx)(b,{onClick:function(){return i()},children:(0,r.jsx)(h.lUB,{})})]}):null,s?(0,r.jsxs)(w,{isExec:n,onClick:function(){return o()},children:[(0,r.jsx)("div",{children:"Start"}),(0,r.jsx)("div",{children:"Stop"})]}):null]})};function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var Z=function(e){var t=(0,u.useState)(null),n=t[0],o=t[1];(0,u.useEffect)((function(){return e.isBeingMeasured?(d(),void c()):(s(),function(){s()})}),[e.isBeingMeasured]);var c=function(){var e=setInterval((function(){d()}),1e3);o(e)},s=function(){n&&clearInterval(n)},a=function(e){return("00"+e).slice(-2)},d=function(){var t=e.timeRecord.time+1,n=Math.floor(t/60/60),r=Math.floor(t/60%60),o=Math.floor(t%60);e.timeRecord.hours=a(n),e.timeRecord.minutes=a(r),e.timeRecord.seconds=a(o),e.timeRecord.time=t,e.setTimeRecord(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.timeRecord))};return(0,r.jsx)("div",{children:e.isShow?(0,r.jsxs)("div",{children:[e.timeRecord.hours,":",e.timeRecord.minutes,":",e.timeRecord.seconds]}):null})},_=n(9583),P=p.ZP.footer.withConfig({displayName:"Footer__FooterContent",componentId:"sc-1o3yg6y-0"})(["width:100%;height:100px;border-top:1px solid #eaeaea;display:flex;justify-content:center;align-items:center;"]),C=p.ZP.span.withConfig({displayName:"Footer__GithubLink",componentId:"sc-1o3yg6y-1"})(["display:flex;justify-content:flex-end;align-items:center;flex-grow:1;"]),I=function(){return(0,r.jsx)(P,{children:(0,r.jsx)(d.default,{href:"https://github.com/hiy/time-todo",children:(0,r.jsxs)(C,{children:[(0,r.jsx)(_.hJX,{})," GitHub"]})})})},S=n(5978),D=n(4047),N=n(2700),E=function(){function e(t){(0,D.Z)(this,e),(0,i.Z)(this,"todoRepository",void 0),this.todoRepository=t}return(0,N.Z)(e,[{key:"search",value:function(){var e=(0,a.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.todoRepository.search());case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"create",value:function(){var e=(0,a.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.todoRepository.create());case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=(0,a.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.todoRepository.update(t));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();function T(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){s=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw o}}}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var R="todoList",L=new Date,B=new E(new(function(){function e(){(0,D.Z)(this,e)}return(0,N.Z)(e,[{key:"search",value:function(){var e=(0,a.Z)(s().mark((function e(){var t,n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!1,e.next=5;break;case 5:if(!(t=localStorage.getItem(R))){e.next=12;break}if("object"!==typeof(n=JSON.parse(t))){e.next=12;break}if(!(r=n[(0,l.Z)(L,"YMMdd")])){e.next=12;break}return e.abrupt("return",r);case 12:return e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"create",value:function(){var e=(0,a.Z)(s().mark((function e(){var t,n,r,i,o,c,a,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!1,e.next=5;break;case 5:if(!(t=localStorage.getItem(R))){e.next=15;break}if("object"!==typeof(n=JSON.parse(t))){e.next=15;break}r=Object.entries(n),i=r.sort()[r.length-1][0],o=[],c=T(n[i]);try{for(c.s();!(a=c.n()).done;)(u=a.value).isDone=!1,u.elapsedTime=0,o.push(u)}catch(s){c.e(s)}finally{c.f()}return e.abrupt("return",o);case 15:return e.abrupt("return",[]);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=(0,a.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!1,e.next=5;break;case 5:return n=localStorage.getItem(R)||"{}",(r=JSON.parse(n))[(0,l.Z)(L,"YMMdd")]=t,localStorage.setItem(R,JSON.stringify(r)),e.abrupt("return",t);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}())),z=n(8767),A=n(4559);function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var J=p.ZP.div.withConfig({displayName:"todoList__Container",componentId:"sc-idjw8v-0"})(["height:100%;padding:0 1rem;"]),G=p.ZP.main.withConfig({displayName:"todoList__Main",componentId:"sc-idjw8v-1"})(["flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;"]),F=p.ZP.div.withConfig({displayName:"todoList__MainInner",componentId:"sc-idjw8v-2"})(["padding:0 3rem;"]),U=p.ZP.div.withConfig({displayName:"todoList__AddTodo",componentId:"sc-idjw8v-3"})(["margin:1rem 0;"]),W={hours:"00",minutes:"00",seconds:"00",time:0},Y=new Date,H=function(e){e.todoListData;var t=(0,u.useState)([]),n=t[0],c=t[1],f=(0,u.useState)(null),p=f[0],h=f[1],y=(0,u.useState)(!1),x=y[0],v=y[1],j=(0,u.useState)(W),g=j[0],b=j[1],w=(0,z.useQuery)("searchTodoList",(0,a.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.search();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),k=(0,z.useMutation)((0,a.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.create();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),_=(0,z.useMutation)((function(e){return B.update(e)}));(0,u.useEffect)((function(){if(!w.isLoading&&w.data){if(w.data.length>0)return void c(w.data);k.mutate()}}),[w.isLoading,w.data]),(0,u.useEffect)((function(){!k.isLoading&&k.data&&c(k.data)}),[k.isLoading,k.data]);var P=function(e){W.time=n[e].elapsedTime,b(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},W)),v(!0),n[e].isDone=!1,c((0,o.Z)(n)),h(e)},C=function(e){n[e].elapsedTime=g.time,n[e].isDone=!0,v(!1),c((0,o.Z)(n)),h(null)},D=function(){return 0===p||p};return w.isLoading?(0,r.jsx)("span",{children:"Loading..."}):(0,r.jsxs)(J,{children:[(0,r.jsx)(A.Z,{title:"Timer TODO"}),(0,r.jsxs)(S.Z,{children:[(0,r.jsx)("h1",{children:(0,r.jsx)(d.default,{href:"/",children:"TimerTodo"})}),(0,r.jsx)(d.default,{href:"/dashboard",children:"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9"})]}),(0,r.jsx)(G,{children:(0,r.jsxs)(F,{children:[(0,r.jsx)("h2",{children:(0,l.Z)(Y,"Y/MM/dd")}),n.map((function(e,t){return(0,r.jsxs)("div",{children:[D()&&t===p?(0,r.jsx)("div",{children:"\u73fe\u5728\u5b9f\u884c\u4e2d\u306e\u30bf\u30b9\u30af"}):null,(0,r.jsx)(O,{type:"text",value:e.title,onChange:function(e){return function(e,t){n[t].title=e.target.value,c((0,o.Z)(n)),_.mutate(n)}(e,t)},onClickExecButton:function(){return function(e){if(D())return C(e),void _.mutate(n);P(e),_.mutate(n)}(t)},onClickCheckBox:function(){return n[e=t].isDone=!n[e].isDone,c((0,o.Z)(n)),void _.mutate(n);var e},onDelete:function(){return e=t,void(confirm("are you sure?")&&(n.splice(e,1),c((0,o.Z)(n)),_.mutate(n)));var e},isDone:e.isDone,isShow:t===p||null===p,isExec:!!D()},t)]},t)})),(0,r.jsx)(U,{children:D()?null:(0,r.jsx)("a",{onClick:function(){n.push({title:"",isDone:!1,elapsedTime:0}),c((0,o.Z)(n)),_.mutate(n)},children:(0,r.jsx)(m.vcu,{})})}),(0,r.jsx)(Z,{isShow:!!D(),timeRecord:g,setTimeRecord:b,isBeingMeasured:x})]})}),(0,r.jsx)(I,{})]})}},2795:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/todoList",function(){return n(1085)}])}},function(e){e.O(0,[445,228,158,775,793,774,888,179],(function(){return t=2795,e(e.s=t);var t}));var t=e.O();_N_E=t}]);