(this.webpackJsonpmeet2=this.webpackJsonpmeet2||[]).push([[0],{200:function(e,t,n){},203:function(e,t,n){},221:function(e,t,n){},356:function(e,t,n){},357:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(66),s=n.n(o),c=(n(200),n(23)),i=n.n(c),l=n(51),u=n(25),h=n(31),d=n(26),f=n(27),p=n(3),v=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(h.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"Alert",children:Object(p.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),b=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(v),j=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,display:"flex",textAlign:"center",justifyContent:"center"}},a.color="red",a}return n}(v),m=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1,infoText:""},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations;if(e.setState({showSuggestions:!0}),0!==a.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1})).length)return e.setState({query:n,suggestions:[],showSuggestion:!1,infoText:""});e.setState({query:n,infoText:"We cannot find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;this.props.locations;return Object(p.jsxs)("div",{className:"CitySearch",children:[Object(p.jsx)(b,{text:this.state.infoText}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(p.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(p.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(p.jsxs)("li",{className:"all",onClick:function(){return e.handleItemClicked("all")},children:[Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"See all cities"})]},"all")]})]})}}]),n}(a.Component),g=(n(203),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:10,error:""},e.handleChange=function(t){var n=t.target.value;if(!(n>=0&&n<=20))return e.setState({numberOfEvents:n,error:"Please enter a number between 1 and 20"});e.setState({numberOfEvents:n,error:""}),e.props.updateEventCount(n)},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"NumberOfEvents",children:[Object(p.jsx)("p",{children:"Number of Events"}),Object(p.jsx)("input",{type:"number",id:"number",className:"event-number-input",placeholder:"10",value:this.state.numberOfEvents,onChange:this.handleChange})]}),Object(p.jsx)("div",{children:Object(p.jsx)(j,{text:this.state.error})}),Object(p.jsx)("br",{})]})}}]),n}(a.Component)),w=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={show:!1},e}return Object(h.a)(n,[{key:"showDetails",value:function(){this.setState({show:!this.state.show})}},{key:"render",value:function(){var e=this,t=this.props.event;return Object(p.jsxs)("div",{className:"event",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:"event-title",children:this.props.event.summary}),Object(p.jsx)("p",{className:"location",children:this.props.event.location})]}),this.state.show&&Object(p.jsxs)("div",{className:"show_event",children:[Object(p.jsx)("h3",{children:" About event:"}),Object(p.jsx)("p",{className:"description",children:t.description})]}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{className:"buttonDetails",onClick:function(){e.showDetails(t)},children:"showDetails"})})]})}}]),n}(a.Component),O=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(p.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(w,{event:e})},e.id)}))})}}]),n}(a.Component),x=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction.",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],y=n(189),k=n(118),S=n.n(k),T=n(75),E=n.n(T),C=function(e){var t=e.map((function(e){return e.location}));return Object(y.a)(new Set(t))},N=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://msaepjyxal.execute-api.us-east-2.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return E.a.done(),e.abrupt("return",x);case 4:if(navigator.onLine){e.next=10;break}return t=localStorage.getItem("lastEvents"),E.a.done(),console.log(",,"),console.log(t),e.abrupt("return",t?JSON.parse(t).events:[]);case 10:return e.next=13,Z();case 13:if(!(n=e.sent)){e.next=23;break}return L(),a="https://msaepjyxal.execute-api.us-east-2.amazonaws.com/dev/api/get-events/"+n,e.next=19,S.a.get(a);case 19:return(r=e.sent).data&&(o=C(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),E.a.done(),e.abrupt("return",r.data.events);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,N(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,S.a.get("https://msaepjyxal.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&W(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)};n(221);var D=function(e){return e.showWelcomeScreen?Object(p.jsxs)("div",{className:"WelcomeScreen",children:[Object(p.jsx)("h1",{children:"Welcome to the Meet app"}),Object(p.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(p.jsx)("div",{className:"button_cont",align:"center",children:Object(p.jsxs)("div",{class:"google-btn",children:[Object(p.jsx)("div",{class:"google-icon-wrapper",children:Object(p.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log\r\no.svg",alt:"Google sign-in"})}),Object(p.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(p.jsx)("b",{children:"Sign in with google"})}),"Page 1"]})}),Object(p.jsx)("a",{href:"https://tobias-fletcher.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},I=n(358),B=n(362),J=n(363),M=n(185),q=n(186),R=n(78),U=n(190),F=n(18),_=n(365),P=n(180),z=n(93),G=n(74),H=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(F.a)(n,2),o=r[0],s=r[1],c=["#E6E6FA","#8A2BE2","#9370DB","#4B0082","#9400D3"];Object(a.useEffect)((function(){s((function(){return i()}))}),[t]);var i=function(){return["React","JavaScript","Node","jQuery","AngularJS"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}))};return Object(p.jsx)(I.a,{height:400,children:Object(p.jsxs)(_.a,{children:[Object(p.jsx)(P.a,{data:o,cx:"50%",cy:"50%",labelLine:!0,label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")},outerRadius:100,fill:"#8884d8",dataKey:"value",children:o.map((function(e,t){return Object(p.jsx)(z.a,{fill:c[t]},"cell-".concat(t))}))}),Object(p.jsx)(G.a,{layout:"horizontal",align:"center",verticalAlign:"top"})]})})},Y=(n(356),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:10,currentLocation:"all",eText:"",showWelcomeScreen:void 0},e.updateEvents=function(t){A().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t})),r=e.state.numberOfEvents;e.setState({events:a.slice(0,r),currentLocation:t})}))},e.updateEventCount=function(t){var n=e.state.currentLocation;e.setState({numberOfEvents:t}),e.updateEvents(n)},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,this.state.numberOfEvents,t=localStorage.getItem("access_token"),e.next=5,N(t);case 5:if(!e.sent.error){e.next=9;break}e.t0=!1,e.next=10;break;case 9:e.t0=!0;case 10:n=e.t0,a=new URLSearchParams(window.location.search),r=a.get("code"),this.setState({showWelcomeScreen:!(r||n)}),(r||n)&&this.mounted&&A().then((function(e){o.mounted&&o.setState({events:e,locations:C(e)})})),navigator.onLine?this.setState({eText:""}):this.setState({eText:"You are currently offline."});case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state.events;return void 0===this.state.showWelcomeScreen?Object(p.jsx)("div",{className:"App"}):Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(j,{text:this.state.eText}),Object(p.jsx)(m,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(p.jsx)(g,{numberOfEvents:this.state.numberOfEvents,updateEventCount:this.updateEventCount}),Object(p.jsx)("h4",{children:"Events in each city"}),Object(p.jsxs)("div",{className:"data-vis-wrapper",children:[Object(p.jsx)(H,{events:e}),Object(p.jsx)(I.a,{height:400,children:Object(p.jsxs)(B.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(p.jsx)(J.a,{}),Object(p.jsx)(M.a,{dataKey:"city",name:"city",type:"category"}),Object(p.jsx)(q.a,{dataKey:"number",name:"numbert",type:"number"}),Object(p.jsx)(R.a,{cursor:{strokeDasharray:"3 3"}}),Object(p.jsx)(U.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(p.jsx)(O,{events:this.state.events}),Object(p.jsx)(D,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){Z()}})]})}}]),n}(a.Component)),K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,366)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};n(187).config("a3a5231a0faa44e49f9f03ceba8dadad").install(),s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(Y,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");K?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):V(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):V(t,e)}))}}(),X()}},[[357,1,2]]]);
//# sourceMappingURL=main.bef18df9.chunk.js.map