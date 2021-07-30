(this.webpackJsonpmeet2=this.webpackJsonpmeet2||[]).push([[0],{208:function(e,t,n){},211:function(e,t,n){},229:function(e,t,n){},365:function(e,t,n){},366:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(67),c=n.n(o),s=(n(208),n(18)),i=n(23),l=n.n(i),u=n(51),h=n(25),d=n(31),f=n(26),p=n(27),v=n(3),m=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"Alert",children:Object(v.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),b=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(m),j=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,display:"flex",textAlign:"center",justifyContent:"center"}},a.color="red",a}return n}(m),g=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(""===n&&e.setState({suggestions:[],query:"",showSuggestions:!1}),0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,suggestions:[],infoText:"We can not find the city you are looking for. Please try again!"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,infoText:""}),e.props.updateEvents(t,0)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{className:"CitySearch",children:[Object(v.jsx)("label",{htmlFor:"CitySearch",children:"Event Location"}),Object(v.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})},placeholder:"Enter Location"}),Object(v.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(v.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(v.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(v.jsx)("b",{children:"See all cities"})},"all")]}),Object(v.jsx)(b,{text:this.state.infoText})]})}}]),n}(a.Component),w=(n(211),function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:10,error:""},e.handleChange=function(t){var n=t.target.value;if(!(n>=0&&n<=20))return e.setState({numberOfEvents:n,error:"Please enter a number between 1 and 20"});e.setState({numberOfEvents:n,error:""}),e.props.updateEventCount(n)},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"NumberOfEvents",children:[Object(v.jsx)("p",{children:"Number of Events"}),Object(v.jsx)("input",{type:"number",id:"number",className:"event-number-input",placeholder:"10",value:this.state.numberOfEvents,onChange:this.handleChange})]}),Object(v.jsx)("div",{children:Object(v.jsx)(j,{text:this.state.error})}),Object(v.jsx)("br",{})]})}}]),n}(a.Component)),O=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={show:!1},e}return Object(d.a)(n,[{key:"showDetails",value:function(){this.setState({show:!this.state.show})}},{key:"render",value:function(){var e=this,t=this.props.event;return Object(v.jsxs)("div",{className:"event",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{className:"event-title",children:this.props.event.summary}),Object(v.jsx)("p",{className:"location",children:this.props.event.location})]}),this.state.show&&Object(v.jsxs)("div",{className:"show_event",children:[Object(v.jsx)("h3",{children:" About event:"}),Object(v.jsx)("p",{className:"description",children:t.description})]}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{className:"buttonDetails",onClick:function(){e.showDetails(t)},children:"showDetails"})})]})}}]),n}(a.Component),x=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(v.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(v.jsx)("li",{children:Object(v.jsx)(O,{event:e})},e.id)}))})}}]),n}(a.Component),y=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction.",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],k=n(197),S=n(120),E=n.n(S),T=n(76),C=n.n(T),N=function(e){var t=e.map((function(e){return e.location}));return Object(k.a)(new Set(t))},W=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://msaepjyxal.execute-api.us-east-2.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return C.a.done(),e.abrupt("return",y);case 4:if(navigator.onLine){e.next=10;break}return t=localStorage.getItem("lastEvents"),C.a.done(),console.log(",,"),console.log(t),e.abrupt("return",t?JSON.parse(t).events:[]);case 10:return e.next=13,L();case 13:if(!(n=e.sent)){e.next=23;break}return D(),a="https://msaepjyxal.execute-api.us-east-2.amazonaws.com/dev/api/get-events/"+n,e.next=19,E.a.get(a);case 19:return(r=e.sent).data&&(o=N(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),C.a.done(),e.abrupt("return",r.data.events);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,r,o,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,W(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,E.a.get("https://msaepjyxal.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",r&&A(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)};n(229);var I,q=function(e){return e.showWelcomeScreen?Object(v.jsxs)("div",{className:"WelcomeScreen",children:[Object(v.jsx)("h1",{children:"Welcome to the Meet app"}),Object(v.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(v.jsx)("div",{className:"button_cont",align:"center",children:Object(v.jsxs)("div",{class:"google-btn",children:[Object(v.jsx)("div",{class:"google-icon-wrapper",children:Object(v.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log\r\no.svg",alt:"Google sign-in"})}),Object(v.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(v.jsx)("b",{children:"Sign in with google"})}),"Page 1"]})}),Object(v.jsx)("a",{href:"https://tobias-fletcher.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},B=n(367),J=n(371),M=n(372),R=n(193),U=n(194),F=n(79),_=n(198),P=n(374),z=n(184),G=n(93),H=n(75),Y=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(s.a)(n,2),o=r[0],c=r[1],i=["#E6E6FA","#8A2BE2","#9370DB","#4B0082","#9400D3"];Object(a.useEffect)((function(){c((function(){return l()}))}),[t]);var l=function(){return["React","JavaScript","Node","jQuery","AngularJS"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}))};return Object(v.jsx)(B.a,{height:400,children:Object(v.jsxs)(P.a,{children:[Object(v.jsx)(z.a,{data:o,cx:"50%",cy:"50%",labelLine:!0,label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")},outerRadius:100,fill:"#8884d8",dataKey:"value",children:o.map((function(e,t){return Object(v.jsx)(G.a,{fill:i[t]},"cell-".concat(t))}))}),Object(v.jsx)(H.a,{layout:"horizontal",align:"center",verticalAlign:"top"})]})})},K=n(94),V=n(189),X=Object(K.b)(I||(I=Object(V.a)(["\n  body {\n    background-color: ",";\n    color: ",";\n  }\n  "])),(function(e){return"dark"===e.theme.mode?"#111":"#EEE"}),(function(e){return"dark"===e.theme.mode?"#EEE":"#111"})),Q=(n(365),function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:10,currentLocation:"all",eText:"",showWelcomeScreen:void 0},e.updateEvents=function(t){Z().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t})),r=e.state.numberOfEvents;e.setState({events:a.slice(0,r),currentLocation:t})}))},e.updateEventCount=function(t){var n=e.state.currentLocation;e.setState({numberOfEvents:t}),e.updateEvents(n)},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,r,o=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,this.state.numberOfEvents,t=localStorage.getItem("access_token"),e.next=5,W(t);case 5:if(!e.sent.error){e.next=9;break}e.t0=!1,e.next=10;break;case 9:e.t0=!0;case 10:n=e.t0,a=new URLSearchParams(window.location.search),r=a.get("code"),this.setState({showWelcomeScreen:!(r||n)}),(r||n)&&this.mounted&&Z().then((function(e){o.mounted&&o.setState({events:e,locations:N(e)})})),navigator.onLine?this.setState({eText:""}):this.setState({eText:"You are currently offline."});case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state.events,t=this.setState({mode:"light"}),n=Object(s.a)(t,2),a=n[0],r=n[1];return void 0===this.state.showWelcomeScreen?Object(v.jsx)("div",{className:"App"}):Object(v.jsxs)(K.a,{theme:a,children:[Object(v.jsx)(X,{}),Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("button",{onClick:function(e){return r("dark"===a.mode?{mode:"light"}:{mode:"dark"})},children:"ToggleTheme"}),Object(v.jsx)(j,{text:this.state.eText}),Object(v.jsx)(g,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(v.jsx)(w,{numberOfEvents:this.state.numberOfEvents,updateEventCount:this.updateEventCount}),Object(v.jsx)("h4",{children:"Events in each city"}),Object(v.jsxs)("div",{className:"data-vis-wrapper",children:[Object(v.jsx)(Y,{events:e}),Object(v.jsx)(B.a,{height:400,children:Object(v.jsxs)(J.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(v.jsx)(M.a,{}),Object(v.jsx)(R.a,{dataKey:"city",name:"city",type:"category"}),Object(v.jsx)(U.a,{dataKey:"number",name:"numbert",type:"number"}),Object(v.jsx)(F.a,{cursor:{strokeDasharray:"3 3"}}),Object(v.jsx)(_.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(v.jsx)(x,{events:this.state.events}),Object(v.jsx)(q,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){L()}})]})]})}}]),n}(a.Component)),$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ee(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,375)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};n(195).config("a3a5231a0faa44e49f9f03ceba8dadad").install(),c.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(Q,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");$?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ee(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ee(t,e)}))}}(),te()}},[[366,1,2]]]);
//# sourceMappingURL=main.09e73393.chunk.js.map