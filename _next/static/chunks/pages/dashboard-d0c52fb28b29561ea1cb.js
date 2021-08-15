(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{4559:function(e,t,n){"use strict";var r=n(5893),a=(n(7294),n(9008));t.Z=function(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:e.title}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/modern-css-reset/dist/reset.min.css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/purecss@2.0.6/build/pure-min.css",integrity:"sha384-Uu6IeWbM+gzNVXJcM9XV3SohHtmWE+3VGi496jvgX1jyvDTXfdK+rfZc8C1Aehk5",crossOrigin:"anonymous"}),(0,r.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/purecss@2.0.6/build/grids-responsive-min.css"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})})}},5978:function(e,t,n){"use strict";var r=n(5893),a=(n(7294),n(9163)),i=n(1664),o=a.ZP.nav.withConfig({displayName:"Nav__NavContent",componentId:"sc-15yxcwh-0"})([""]),s=a.ZP.div.withConfig({displayName:"Nav__NavInner",componentId:"sc-15yxcwh-1"})(["display:flex;justify-content:space-between;align-items:center;flex-grow:1;flex-direction:row"]),u=a.ZP.ul.withConfig({displayName:"Nav__RightWrapper",componentId:"sc-15yxcwh-2"})(["padding-top:0.7rem;display:flex;align-content:space-around;flex-direction:row;align-items:center;list-style:none;li{margin:0 1rem;}"]);t.Z=function(e){return(0,r.jsx)(o,{children:(0,r.jsxs)(s,{className:"pure-menu pure-menu-horizontal pure-menu-fixed",children:[(0,r.jsx)("h1",{className:"pure-menu-heading",children:(0,r.jsx)(i.default,{href:"/",children:"Timer-Todo"})}),(0,r.jsx)(u,{children:e.children})]})})}},9124:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(5893),a=n(809),i=n.n(a),o=n(2447),s=n(1664),u=n(5978),c=n(9163),l=n(4559),f=n(7294),d=n(8767),h=n(8059),p=n(8687),m=n(4195),y=n(3023),v=n(5358),x=n(9307),g=n(6830),b=n(5735),j=n(2931),w=n(6208),k=n(3815),Z=n(2605);function _(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw i}}}}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var P=c.ZP.h2.withConfig({displayName:"dashboard__Title",componentId:"sc-1nak91j-0"})(["font-size:3rem;margin-bottom:2rem;"]),S=["#0088FE","#00C49F","#FFBB28","#FF8042"],I=(Math.PI,[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}]),T=c.ZP.div.withConfig({displayName:"dashboard__Container",componentId:"sc-1nak91j-1"})(["height:100%;padding:0 1rem;"]),O=c.ZP.main.withConfig({displayName:"dashboard__Main",componentId:"sc-1nak91j-2"})(["flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;margin:10rem 0;"]),M=new Date;function C(){var e=(0,f.useState)([]),t=e[0],n=e[1],a=(0,d.useQuery)("searchTodoList",(0,o.Z)(i().mark((function e(){var t,n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,Z.Z)(M,"Y"),n=(0,Z.Z)(M,"MM"),(0,Z.Z)(M,"dd"),r=new h.DT(t,n,null),e.next=6,h.ZP.search(r);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)}))));return(0,f.useEffect)((function(){if(!a.isLoading&&a.data&&a.data.length>0){var e,t={},r=_(a.data);try{for(r.s();!(e=r.n()).done;){var i=e.value;t[i.title]||(t[i.title]=0),t[i.title]+=i.elapsedTime}}catch(s){r.e(s)}finally{r.f()}var o=Object.entries(t).map((function(e){return{title:e[0],isDone:!0,elapsedTime:e[1]}}));console.log(o),n(o)}}),[a.isLoading,a.data]),a.isLoading?(0,r.jsx)(r.Fragment,{children:"Loading..."}):(0,r.jsx)(T,{children:(0,r.jsxs)(O,{children:[(0,r.jsx)(l.Z,{title:"Timer TODO"}),(0,r.jsx)(u.Z,{children:(0,r.jsx)("li",{children:(0,r.jsx)(s.default,{href:"/todoList",children:"Todo\u30ea\u30b9\u30c8"})})}),(0,r.jsxs)(P,{children:[(0,Z.Z)(M,"Y/MM"),(0,r.jsx)("hr",{})]}),(0,r.jsx)("p",{children:"\u524d\u6708\u3078"}),(0,r.jsx)("p",{children:"\u6b21\u6708\u3078"}),(0,r.jsx)("br",{}),(0,r.jsxs)(p.w,{width:500,height:300,data:I,margin:{top:5,right:30,left:20,bottom:5},children:[(0,r.jsx)(m.q,{strokeDasharray:"3 3"}),(0,r.jsx)(y.K,{dataKey:"name"}),(0,r.jsx)(v.B,{}),(0,r.jsx)(x.u,{}),(0,r.jsx)(g.D,{}),(0,r.jsx)(b.x,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),(0,r.jsx)(b.x,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"})]}),(0,r.jsx)(j.u,{width:400,height:400,children:(0,r.jsx)(w.b,{data:t,cx:"50%",cy:"50%",labelLine:!1,outerRadius:180,fill:"#8884d8",dataKey:"elapsedTime",children:t.map((function(e,t){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(k.b,{fill:S[t%S.length]},"cell-".concat(t))})}))})})]})})}},8059:function(e,t,n){"use strict";n.d(t,{DT:function(){return v},ZP:function(){return x}});var r=n(809),a=n.n(r),i=n(2447),o=n(4047),s=n(2700),u=n(6265),c=function(){function e(t){(0,o.Z)(this,e),(0,u.Z)(this,"todoRepository",void 0),this.todoRepository=t}return(0,s.Z)(e,[{key:"search",value:function(){var e=(0,i.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.todoRepository.search(t));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"create",value:function(){var e=(0,i.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.todoRepository.create());case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=(0,i.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.todoRepository.update(t));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),l=n(1385),f=n(2605);function d(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw i}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p="todoList",m=new Date,y=function(){function e(){(0,o.Z)(this,e)}return(0,s.Z)(e,[{key:"search",value:function(){var e=(0,i.Z)(a().mark((function e(t){var n,r,i,o,s,u,c,f,h,m;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!1,e.next=5;break;case 5:if(!(n=localStorage.getItem(p))){e.next=25;break}if("object"!==typeof(r=JSON.parse(n))||!t.isPresentYMD()){e.next=14;break}if(!(i=r["".concat(t.year).concat(t.month).concat(t.day)])){e.next=12;break}return e.abrupt("return",i);case 12:e.next=25;break;case 14:if(!t.isPresentYM()){e.next=25;break}o=Object.keys(r),s=o.filter((function(e){return e.indexOf("".concat(t.year).concat(t.month))>-1})),u=[],c=d(s);try{for(c.s();!(f=c.n()).done;)h=f.value,u.push.apply(u,(0,l.Z)(r[h]))}catch(a){c.e(a)}finally{c.f()}return m=u.filter((function(e){return!!e.title})),console.log(m),e.abrupt("return",m);case 25:return e.abrupt("return",[]);case 26:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"create",value:function(){var e=(0,i.Z)(a().mark((function e(){var t,n,r,i,o,s,u,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!1,e.next=5;break;case 5:if(!(t=localStorage.getItem(p))){e.next=15;break}if("object"!==typeof(n=JSON.parse(t))){e.next=15;break}r=Object.entries(n),i=r.sort()[r.length-1][0],o=[],s=d(n[i]);try{for(s.s();!(u=s.n()).done;)(c=u.value).isDone=!1,c.elapsedTime=0,o.push(c)}catch(a){s.e(a)}finally{s.f()}return e.abrupt("return",o);case 15:return e.abrupt("return",[]);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=(0,i.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!1,e.next=5;break;case 5:return n=localStorage.getItem(p)||"{}",(r=JSON.parse(n))[(0,f.Z)(m,"YMMdd")]=t,localStorage.setItem(p,JSON.stringify(r)),e.abrupt("return",t);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),v=function(){function e(t,n,r){(0,o.Z)(this,e),(0,u.Z)(this,"year",void 0),(0,u.Z)(this,"month",void 0),(0,u.Z)(this,"day",void 0),this.year=t,this.month=n,this.day=r}return(0,s.Z)(e,[{key:"isPresentYMD",value:function(){return!!(this.year&&this.month&&this.day)}},{key:"isPresentYM",value:function(){return!(!this.year||!this.month)}}]),e}(),x=new c(new y)},5058:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return n(9124)}])}},function(e){e.O(0,[774,181,638,386,888,179],(function(){return t=5058,e(e.s=t);var t}));var t=e.O();_N_E=t}]);