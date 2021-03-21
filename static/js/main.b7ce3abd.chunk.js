(this["webpackJsonpcorona-tracker"]=this["webpackJsonpcorona-tracker"]||[]).push([[0],{104:function(e,t,n){},106:function(e,t,n){},203:function(e,t,n){},204:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(7),s=n.n(c),o=(n(96),n(11)),i=n.n(o),u=n(14),l=n(12),d=n(231),j=n(241),f=n(242),h=n(3),p=function(e){return Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("h1",{children:"COVID-19 Tracker"}),Object(h.jsx)(d.a,{className:"dropdown",children:Object(h.jsxs)(j.a,{variant:"outlined",onChange:e.onCountryChange,value:e.country,children:[Object(h.jsx)(f.a,{value:"worldwide",children:"Worldwide"}),e.countries.map((function(e){return Object(h.jsx)(f.a,{value:e.value,children:e.name},e.name)}))]})})]})},v=n(236),b=n(237),x=n(238),O=(n(104),n(243)),m=n(235),y=n(16),g=n.n(y),w=function(e){return e.sort((function(e,t){return e.cases>t.cases?-1:1}))},C=function(e,t){var n,r=[];for(var a in e.cases){if(n){var c={x:a,y:e[t][a]-n};r.push(c)}n=e[t][a]}return r},k={cases:{hex:"#CC1034",multiplier:500},recovered:{hex:"#7dd71d",multiplier:500},deaths:{hex:"#fb4443",multiplier:1700}},N=function(e){return e?g()(e).format("0.0a"):"0"},P=function(e){return Object(h.jsx)(v.a,{className:"infobox ".concat(e.active&&"infobox--selected"," ").concat(e.isRed&&"infobox--isRed"),onClick:e.onClick,children:Object(h.jsxs)(b.a,{children:[Object(h.jsx)(x.a,{className:"title",color:"textSecondary",children:e.title}),Object(h.jsxs)("h2",{className:"cases ".concat(!e.isRed&&"infobox--notRed"),children:["+",N(e.cases)]}),Object(h.jsxs)(x.a,{className:"total",color:"textSecondary",children:[N(e.total)," Total"]})]})})},I=(n(105),n(106),n(239)),S=n(244),R=n(240),M=function(e){return Object(h.jsx)("div",{className:"map",children:Object(h.jsxs)(I.a,{center:e.center,zoom:e.zoom,scrollWheelZoom:!1,children:[Object(h.jsx)(D,{center:e.center,zoom:e.zoom}),Object(h.jsx)(S.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e.countries?(t=e.countries,n=e.type,t.map((function(e){return Object(h.jsx)(O.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,pathOptions:{color:k[n].hex,fillColor:k[n].hex},radius:Math.sqrt(e[n])*k[n].multiplier,children:Object(h.jsx)(m.a,{children:Object(h.jsxs)("div",{className:"info-container",children:[Object(h.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(h.jsx)("div",{className:"info-name",children:e.country}),Object(h.jsxs)("div",{className:"info-confirmed",children:["Cases: ",g()(e.cases).format("0,0")]}),Object(h.jsxs)("div",{className:"info-recovered",children:["Recovered: ",g()(e.recovered).format("0,0")]}),Object(h.jsxs)("div",{className:"info-deaths",children:["Deaths: ",g()(e.deaths).format("0,0")]})]})})})}))):Object(h.jsx)("div",{})]})});var t,n},D=function(e){return Object(R.a)().setView(e.center,e.zoom),Object(h.jsx)("div",{})},z=function(e){return Object(h.jsx)("div",{className:"table",children:e.countries.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.country}),Object(h.jsx)("td",{children:Object(h.jsx)("strong",{children:g()(e.cases).format("0,0")})})]},e.country)}))})},F=n(86),T=n(20),L=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="worldwide"===t?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(t),e.next=3,W(n);case 3:if(r=e.sent,"worldwide"!==t){e.next=8;break}return e.abrupt("return",Object(T.a)(Object(T.a)({},r),{},{countryInfo:{lat:34.80746,long:-40.4796}}));case 8:return e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://disease.sh/v3/covid-19/historical/all?lastdays=".concat(t),e.next=3,W(n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var n=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}}));t(n)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return g()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,n){return g()(e).format("0a")}}}]}},J=function(e){var t=a.a.useState(),n=Object(l.a)(t,2),r=n[0],c=n[1];return a.a.useEffect((function(){(function(){var t=Object(u.a)(i.a.mark((function t(){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(120);case 2:n=t.sent,r=C(n,e.type),c(r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.type]),Object(h.jsx)("div",{className:"graph",children:Object(h.jsx)(F.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:r}]},options:B})})},V=(n(203),{updated:1616084947223,country:"Loading... Please wait",countryInfo:{_id:1,iso2:"FI",iso3:"FIN",lat:64,long:26,flag:"https://disease.sh/assets/img/flags/fi.png"},cases:1,todayCases:1,deaths:1,todayDeaths:1,recovered:1,todayRecovered:1,active:1,critical:1,casesPerOneMillion:1,deathsPerOneMillion:1,tests:1,testsPerOneMillion:1,population:1,continent:"Europe",oneCasePerPeople:1,oneDeathPerPeople:1,oneTestPerPeople:1,activePerOneMillion:1.11,recoveredPerOneMillion:1.01,criticalPerOneMillion:1.01});var Y=function(){var e=a.a.useState("cases"),t=Object(l.a)(e,2),n=t[0],r=t[1],c=a.a.useState([34.80746,-40.4796]),s=Object(l.a)(c,2),o=s[0],d=s[1],j=a.a.useState(3),f=Object(l.a)(j,2),x=f[0],O=f[1],m=a.a.useState([]),y=Object(l.a)(m,2),g=y[0],C=y[1],k=a.a.useState([]),N=Object(l.a)(k,2),I=N[0],S=N[1],R=a.a.useState("worldwide"),D=Object(l.a)(R,2),F=D[0],T=D[1],E=a.a.useState(),B=Object(l.a)(E,2),Y=B[0],q=B[1],Z=a.a.useState([V]),_=Object(l.a)(Z,2),G=_[0],H=_[1];a.a.useEffect((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W("https://disease.sh/v3/covid-19/all");case 2:return t=e.sent,e.next=5,W("https://disease.sh/v3/covid-19/countries");case 5:n=e.sent,r=w(n),q(t),H(r),S(n),A(C);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var K=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,T(n),e.next=4,L(n);case 4:r=e.sent,q(r),d([r.countryInfo.lat,r.countryInfo.long]),O("worldwide"===n?3:4);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"app",children:[Object(h.jsxs)("div",{className:"left",children:[Object(h.jsx)(p,{countries:g,country:F,onCountryChange:K}),Object(h.jsxs)("div",{className:"infoboxes",children:[Object(h.jsx)(P,{isRed:!0,active:"cases"===n,onClick:function(e){return r("cases")},title:"Cases",total:null===Y||void 0===Y?void 0:Y.cases,cases:null===Y||void 0===Y?void 0:Y.todayCases}),Object(h.jsx)(P,{isRed:!1,active:"recovered"===n,onClick:function(e){return r("recovered")},title:"Recovered",total:null===Y||void 0===Y?void 0:Y.recovered,cases:null===Y||void 0===Y?void 0:Y.todayRecovered}),Object(h.jsx)(P,{isRed:!0,active:"deaths"===n,onClick:function(e){return r("deaths")},title:"Deaths",total:null===Y||void 0===Y?void 0:Y.deaths,cases:null===Y||void 0===Y?void 0:Y.todayDeaths})]}),Object(h.jsx)(M,{countries:I,center:o,zoom:x,type:n})]}),Object(h.jsx)("div",{className:"right",children:Object(h.jsx)(v.a,{children:Object(h.jsxs)(b.a,{children:[Object(h.jsx)("h3",{children:"Total Cases by Country"}),Object(h.jsx)(z,{countries:G}),Object(h.jsxs)("h3",{children:["Worldwide new ",n]}),Object(h.jsx)(J,{type:n})]})})})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,246)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(Y,{})}),document.getElementById("root")),q()},96:function(e,t,n){}},[[204,1,2]]]);
//# sourceMappingURL=main.b7ce3abd.chunk.js.map