(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[554],{4964:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var r=n(5893),o=n(2809),i=n(8990),c=n(809),s=n.n(c),a=n(266),u=n(7294),l=n(1664),f=n(7955);function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=n(9163),m=n(5434),h=n(5155);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=p.ZP.div.withConfig({displayName:"TodoInput__Container",componentId:"sc-1v5f1ff-0"})(["display:flex;flex-direction:row;align-items:center;margin:",""],(function(e){return e.isShow?"3rem 0;":"0;"})),v=p.ZP.span.withConfig({displayName:"TodoInput__InputStyle",componentId:"sc-1v5f1ff-1"})(["input{font-family:inherit;font-size:2.5rem;-webkit-padding:0.4em 0;padding:0.4em;box-sizing:border-box;border:1px solid #ccc;border-radius:2px;}input&:disabled{color:#ccc;}"]),j=p.ZP.span.withConfig({displayName:"TodoInput__CheckBox",componentId:"sc-1v5f1ff-2"})(["font-size:2rem;margin:0 1rem;cursor:pointer;"]),x=p.ZP.span.withConfig({displayName:"TodoInput__InputWrapper",componentId:"sc-1v5f1ff-3"})(["position:relative;"]),O=p.ZP.a.withConfig({displayName:"TodoInput__DeleteButton",componentId:"sc-1v5f1ff-4"})(["position:absolute;top:1.3rem;right:.3rem;font-size:2.5rem;cursor:pointer;"]),w=p.ZP.a.withConfig({displayName:"TodoInput__ExecButton",componentId:"sc-1v5f1ff-5"})(["border:"," margin-left:1rem;border-radius:100%;height:7rem;width:7rem;cursor:pointer;display:flex;flex-direction:column;align-items:center;div{padding:.5rem;&:first-child{margin-top:.5rem;border-bottom:1px solid gray;}}"],(function(e){return e.isExec?"3px solid #00d08d;":"3px solid #b5b5b5;"})),P=function(e){var t=e.isDone,n=e.isExec,o=e.onDelete,i=e.onClickExecButton,c=e.onClickCheckBox,s=e.isShow,a=d(e,["isDone","isExec","onDelete","onClickExecButton","onClickCheckBox","isShow"]);return(0,r.jsxs)(b,{isShow:s,children:[s?(0,r.jsxs)(x,{children:[(0,r.jsx)(j,{children:t?(0,r.jsx)(h.yDY,{style:{color:"blue"},onClick:function(){return c()}}):(0,r.jsx)(h.UHD,{onClick:function(){return c()}})}),(0,r.jsx)(v,{children:(0,r.jsx)("input",y({type:"text"},a))}),e.value?(0,r.jsx)(O,{onClick:function(){return o()},children:(0,r.jsx)(m.lUB,{})}):null]}):null,s&&e.value?(0,r.jsxs)(w,{isExec:n,onClick:function(){return i()},children:[(0,r.jsx)("div",{children:"Start"}),(0,r.jsx)("div",{children:"Stop"})]}):null]})};function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var C=p.ZP.div.withConfig({displayName:"Timer__Time",componentId:"sc-z326cs-0"})(["font-size:3rem;display:flex;justify-content:center;flex-direction:row;"]),Z=function(e){var t=(0,u.useState)(null),n=t[0],i=t[1];(0,u.useEffect)((function(){return e.isBeingMeasured?(l(),void c()):(s(),function(){s()})}),[e.isBeingMeasured]);var c=function(){var e=setInterval((function(){l()}),1e3);i(e)},s=function(){n&&clearInterval(n)},a=function(e){return("00"+e).slice(-2)},l=function(){var t=e.timeRecord.time+1,n=Math.floor(t/60/60),r=Math.floor(t/60%60),i=Math.floor(t%60);e.timeRecord.hours=a(n),e.timeRecord.minutes=a(r),e.timeRecord.seconds=a(i),e.timeRecord.time=t,e.setTimeRecord(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.timeRecord))};return(0,r.jsx)(r.Fragment,{children:e.isShow?(0,r.jsxs)(C,{children:[e.timeRecord.hours,":",e.timeRecord.minutes,":",e.timeRecord.seconds]}):null})},D=n(9583),E=p.ZP.footer.withConfig({displayName:"Footer__FooterContent",componentId:"sc-7ha0gj-0"})(["width:100%;height:100px;border-top:1px solid #eaeaea;display:flex;justify-content:flex-end;align-items:center;"]),k=p.ZP.span.withConfig({displayName:"Footer__GithubLink",componentId:"sc-7ha0gj-1"})(["margin-right:1rem;"]),I=p.ZP.div.withConfig({displayName:"Footer__IconWrapper",componentId:"sc-7ha0gj-2"})([""]),N=function(){return(0,r.jsx)(E,{children:(0,r.jsx)(I,{children:(0,r.jsx)(l.default,{href:"https://github.com/hiy/timer-todo",children:(0,r.jsx)(k,{children:(0,r.jsx)(D.hJX,{size:40})})})})})},S=n(5978),T=n(774),z=n(8767),L=n(4559);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var B=p.ZP.div.withConfig({displayName:"todoList__Container",componentId:"sc-ztvwgg-0"})(["height:100%;padding:0 1rem;"]),R=p.ZP.main.withConfig({displayName:"todoList__Main",componentId:"sc-ztvwgg-1"})(["flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;margin:10rem 0;"]),F=p.ZP.div.withConfig({displayName:"todoList__MainInner",componentId:"sc-ztvwgg-2"})(["padding:0 3rem;max-width:90%"]),W=p.ZP.h2.withConfig({displayName:"todoList__TodayTitle",componentId:"sc-ztvwgg-3"})(["font-size:3rem;margin-bottom:2rem;"]),X={hours:"00",minutes:"00",seconds:"00",time:0},Y=new Date,U=function(e){e.todoListData;var t=(0,u.useState)([]),n=t[0],c=t[1],d=(0,u.useState)(null),p=d[0],m=d[1],h=(0,u.useState)(!1),g=h[0],y=h[1],b=(0,u.useState)(X),v=b[0],j=b[1],x=(0,z.useQuery)("searchTodoList",(0,a.Z)(s().mark((function e(){var t,n,r,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,f.Z)(Y,"Y"),n=(0,f.Z)(Y,"MM"),r=(0,f.Z)(Y,"dd"),o=new T.DT(t,n,r),e.next=6,T.ZP.search(o);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))),O=(0,z.useMutation)((0,a.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.ZP.create();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),w=(0,z.useMutation)((function(e){return T.ZP.update(e)})),_=function(){0===n.filter((function(e){return!e.title})).length&&(n.push({title:"",isDone:!1,elapsedTime:0}),c((0,i.Z)(n)),w.mutate(n))},C=function(e){n.splice(e,1),c((0,i.Z)(n)),w.mutate(n)};(0,u.useEffect)((function(){if(!x.isLoading&&x.data){if(x.data.length>0)return console.log(x.data.length),void c(x.data);O.mutate()}}),[x.isLoading,x.data]),(0,u.useEffect)((function(){!O.isLoading&&O.data&&(c(O.data),_())}),[O.isLoading,O.data]),(0,u.useEffect)((function(){n.length>0&&_()}),[n]);var D=function(e){X.time=n[e].elapsedTime,j(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},X)),y(!0),n[e].isDone=!1,c((0,i.Z)(n)),m(e)},E=function(e){n[e].elapsedTime=v.time,n[e].isDone=!0,y(!1),c((0,i.Z)(n)),m(null)},k=function(){return 0===p||p};return x.isLoading?(0,r.jsx)("span",{children:"Loading..."}):(0,r.jsxs)(B,{children:[(0,r.jsx)(L.Z,{title:"Timer TODO"}),(0,r.jsx)(S.Z,{children:(0,r.jsx)("li",{children:(0,r.jsx)(l.default,{href:"/dashboard",children:"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9"})})}),(0,r.jsx)(R,{children:(0,r.jsxs)(F,{children:[(0,r.jsxs)(W,{children:[(0,f.Z)(Y,"Y/MM/dd"),(0,r.jsx)("hr",{})]}),n.map((function(e,t){return(0,r.jsx)(P,{type:"text",value:e.title,onChange:function(e){return function(e,t){if(!e.target.value)return confirm("\u524a\u9664\u3057\u307e\u3059\u3002\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f")?void C(t):void 0;n[t].title=e.target.value,c((0,i.Z)(n)),w.mutate(n)}(e,t)},onClickExecButton:function(){return function(e){if(k())return E(e),void w.mutate(n);D(e),w.mutate(n)}(t)},onClickCheckBox:function(){return n[e=t].isDone=!n[e].isDone,c((0,i.Z)(n)),void w.mutate(n);var e},onDelete:function(){var e;n[e=t].title&&confirm("".concat(n[e].title,"\u3092\u524a\u9664\u3057\u307e\u3059\u3002\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f"))&&C(e)},isDone:e.isDone,isShow:t===p||null===p,isExec:!!k()},t)})),(0,r.jsx)(Z,{isShow:!!k(),timeRecord:v,setTimeRecord:j,isBeingMeasured:g})]})}),(0,r.jsx)(N,{})]})}},2795:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/todoList",function(){return n(4964)}])},4405:function(e,t,n){"use strict";n.d(t,{w_:function(){return u}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function a(e){return e&&e.map((function(e,t){return r.createElement(e.tag,c({key:t},e.attr),a(e.child))}))}function u(e){return function(t){return r.createElement(l,c({attr:c({},e.attr)},t),a(e.child))}}function l(e){var t=function(t){var n,o=e.attr,i=e.size,a=e.title,u=s(e,["attr","size","title"]),l=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&r.createElement("title",null,a),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}}},function(e){e.O(0,[228,158,445,181,632,572,774,888,179],(function(){return t=2795,e(e.s=t);var t}));var t=e.O();_N_E=t}]);