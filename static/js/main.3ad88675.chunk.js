(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{12:function(e){e.exports=JSON.parse('{"a":"9cbe2dbf4e33fda96656481d48e9c42a"}')},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(3),i=n(10),r=n.n(i),o=n(1),d=Object(s.b)({key:"city state",default:""}),l=n(0);var j=function(e){var t=Object(s.c)(d),n=Object(o.a)(t,2),a=n[0],c=n[1];return Object(l.jsxs)("div",{id:"search",className:"search",children:[Object(l.jsx)("p",{className:"search-label",children:"Search for city: "}),Object(l.jsxs)("span",{className:"search-input",children:[Object(l.jsx)("input",{className:"search-input",type:"text",id:"search",onChange:function(e){c(e.target.value)}}),Object(l.jsx)("h1",{className:"search-button",onClick:function(){a.length>0&&e.onSearch(a)},children:Object(l.jsx)("i",{className:"bi bi-search rotate"})})]})]})};var u=function(){return Object(l.jsxs)("div",{id:"loading",className:"hidden",children:[Object(l.jsx)("span",{children:"Loading data...\u2003"}),Object(l.jsx)("svg",{id:"rotate",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"bi bi-sun",viewBox:"0 0 16 16",children:Object(l.jsx)("path",{d:"M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"})})]})},h=Object(s.b)({key:"info state",default:""});var b=function(){var e=Object(s.d)(h);return Object(l.jsxs)("div",{id:"info",className:"hidden",children:[Object(l.jsx)("span",{children:e.msg}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{onClick:function(){return document.getElementById("info").classList.add("hidden")},children:e.btn})]})},m=Object(s.b)({key:"data state",default:"NO_DATA"});var x={checkData:function(e){return"NO_DATA"===e},unixToLocal:function(e){var t=new Date(1e3*e),n="0"+t.getHours(),a="0"+t.getMinutes(),c="0"+t.getSeconds();return"".concat(n.substr(-2),":").concat(a.substr(-2),":").concat(c.substr(-2))},getTime:function(){return(new Date).toLocaleString()}};var O=function(){var e=Object(s.d)(m),t=x.unixToLocal,n=x.getTime;return(0,x.checkData)(e)?Object(l.jsx)("div",{style:{marginTop:"20vh"},children:Object(l.jsx)("h1",{style:{textAlign:"center"},children:"Please select your city!"})}):Object(l.jsxs)("div",{id:"main",className:"main",children:[Object(l.jsxs)("div",{className:"main-title",children:[Object(l.jsx)("h6",{children:n()}),Object(l.jsxs)("h1",{children:[e.name," (",e.sys.country,")",Object(l.jsx)("i",{id:"favourite",className:"bi bi-star favourite ".concat("fav"in localStorage&&e.name===JSON.parse(localStorage.getItem("fav"))?"added":""),onClick:function(){return function(){var t=document.getElementById("favourite").classList;t.contains("added")?(t.remove("added"),localStorage.removeItem("fav")):(t.add("added"),localStorage.setItem("fav",JSON.stringify(e.name)))}()}})]})]}),Object(l.jsxs)("div",{className:"main-info",children:[Object(l.jsxs)("div",{className:"main-info_weather",children:[Object(l.jsxs)("div",{className:"main-info_weather_icon",children:[Object(l.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"),alt:"weather icon"}),Object(l.jsxs)("h1",{children:[e.main.temp.toFixed(1),"\xb0C"]})]}),Object(l.jsx)("div",{className:"main-info_weather_description",children:e.weather[0].description})]}),Object(l.jsxs)("div",{className:"main-info_temp",children:[Object(l.jsxs)("p",{children:["Feels like: ",e.main.feels_like.toFixed(1),"\xb0C"]}),Object(l.jsxs)("p",{children:["Min: ",e.main.temp_min.toFixed(1),"\xb0C"]}),Object(l.jsxs)("p",{children:["Max: ",e.main.temp_max.toFixed(1),"\xb0C"]})]})]}),Object(l.jsxs)("div",{className:"main-sun",children:[Object(l.jsxs)("p",{children:["Sunrise: ",t(e.sys.sunrise)]}),Object(l.jsxs)("p",{children:["Sunset: ",t(e.sys.sunset)]})]}),Object(l.jsxs)("div",{className:"main-addon",children:[Object(l.jsxs)("p",{children:["Pressure: ",e.main.pressure," hPa"]}),Object(l.jsxs)("p",{children:["Humidity: ",e.main.humidity,"%"]}),Object(l.jsxs)("p",{children:["Wind: \u2003",Object(l.jsx)("svg",{style:{transform:"rotate(".concat(e.wind.deg,"deg)")},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-up",viewBox:"0 0 16 16",children:Object(l.jsx)("path",{fillRule:"evenodd",d:"M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"})}),"\u2003",e.wind.speed," m/s"]})]})]})};var f=function(){return Object(l.jsx)("div",{id:"navbar",className:"navbar",children:Object(l.jsxs)("h1",{children:[Object(l.jsx)("i",{className:"bi bi-cloud-lightning-rain"}),"\u2003Weather App"]})})},p=n(4),v=n.n(p),g=n(9),w=n(12);function y(){return(y=Object(g.a)(v.a.mark((function e(t){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=metric&appid=").concat(w.a));case 2:if(404!==(n=e.sent).status){e.next=5;break}return e.abrupt("return",{cod:404,message:"City not found!"});case 5:return a=n.json(),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=function(e){return y.apply(this,arguments)};var k=function(){var e=Object(s.e)(h),t=Object(s.e)(m);function n(t){e(t),document.getElementById("info").classList.remove("hidden")}function c(e){document.getElementById("loading").classList.remove("hidden"),N(e).then((function(e){200===e.cod?t(e):404===e.cod?n({msg:"I couldn't find the city you are looking for! Are you sure you spell it right?",btn:"Let's check!"}):n({msg:"Ooops! Something went wrong! Please let us know about your issue or try again later!",btn:"Okay!"})})).catch((function(e){n({msg:"What an unexpected and unwanted error has been occured! Check your internet connection, let me know about this issue or try again later!",btn:"Not nice!"}),console.log(e)})).finally((function(){return document.getElementById("loading").classList.add("hidden")}))}return Object(a.useEffect)((function(){"fav"in localStorage&&c(JSON.parse(localStorage.getItem("fav")))})),Object(l.jsxs)("main",{children:[Object(l.jsx)(u,{}),Object(l.jsx)(b,{}),Object(l.jsx)(f,{}),Object(l.jsx)(j,{onSearch:function(e){return c(e)}}),Object(l.jsx)(O,{})]})};n(19);r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(s.a,{children:Object(l.jsx)(k,{})})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.3ad88675.chunk.js.map