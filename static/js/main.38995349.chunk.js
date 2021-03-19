(this["webpackJsonpcorona-tracker"]=this["webpackJsonpcorona-tracker"]||[]).push([[0],{55:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),r=n(8),a=n.n(r),o=(n(55),n(11)),i=n.n(o),u=n(17),l=n(27),d=n(90),j=n(97),h=n(98),v=n(4),f=function(e){var t=function(){var t=Object(u.a)(i.a.mark((function t(n){var s,c,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=n.target.value,e.setCountry(s),c="worldwide"===s?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(s),t.next=5,e.getData(c);case 5:r=t.sent,e.setCountryInfo(r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"header",children:[Object(v.jsx)("h1",{children:"COVID-19 Tracker"}),Object(v.jsx)(d.a,{className:"dropdown",children:Object(v.jsxs)(j.a,{variant:"outlined",onChange:t,value:e.country,children:[Object(v.jsx)(h.a,{value:"worldwide",children:"Worldwide"}),e.countries.map((function(e){return Object(v.jsx)(h.a,{value:e.value,children:e.name},e.name)}))]})})]})},b=n(94),O=n(95),p=n(96),x=function(e){return Object(v.jsx)("div",{children:Object(v.jsx)(b.a,{className:"infobox",children:Object(v.jsxs)(O.a,{children:[Object(v.jsx)(p.a,{className:"title",color:"textSecondary",children:e.title}),Object(v.jsxs)("h2",{className:"cases",children:["+",e.cases]}),Object(v.jsxs)(p.a,{className:"total",color:"textSecondary",children:[e.total," Total"]})]})})})},y=function(){return Object(v.jsx)("div",{className:"map",children:Object(v.jsx)("h1",{children:"Map (Coming soon)"})})},m=function(e){return Object(v.jsx)("div",{className:"table",children:e.countries.map((function(e){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:e.country}),Object(v.jsx)("td",{children:Object(v.jsx)("strong",{children:e.cases})})]},e.country)}))})},w=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var n=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}}));t(n)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,s=n.json(),e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=(n(63),{updated:1616084947223,country:"Loading... Please wait",countryInfo:{_id:246,iso2:"FI",iso3:"FIN",lat:64,long:26,flag:"https://disease.sh/assets/img/flags/fi.png"},cases:69497,todayCases:804,deaths:805,todayDeaths:1,recovered:46e3,todayRecovered:0,active:22692,critical:50,casesPerOneMillion:12529,deathsPerOneMillion:145,tests:3708679,testsPerOneMillion:668612,population:5546833,continent:"Europe",oneCasePerPeople:80,oneDeathPerPeople:6890,oneTestPerPeople:1,activePerOneMillion:4090.98,recoveredPerOneMillion:8293.02,criticalPerOneMillion:9.01}),P=n(46),N=function(e){var t=Object(P.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t};var I=function(){var e=c.a.useState([]),t=Object(l.a)(e,2),n=t[0],s=t[1],r=c.a.useState("worldwide"),a=Object(l.a)(r,2),o=a[0],d=a[1],j=c.a.useState(),h=Object(l.a)(j,2),p=h[0],P=h[1],I=c.a.useState([C]),k=Object(l.a)(I,2),D=k[0],M=k[1];return c.a.useEffect((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("https://disease.sh/v3/covid-19/all");case 2:return t=e.sent,e.next=5,g("https://disease.sh/v3/covid-19/countries");case 5:n=e.sent,c=N(n),P(t),M(c),w(s);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(v.jsxs)("div",{className:"app",children:[Object(v.jsxs)("div",{className:"left",children:[Object(v.jsx)(f,{countries:n,country:o,setCountry:d,countryInfo:p,setCountryInfo:P,getData:g}),Object(v.jsxs)("div",{className:"infoboxes",children:[Object(v.jsx)(x,{title:"Coronavirus cases",total:null===p||void 0===p?void 0:p.cases,cases:null===p||void 0===p?void 0:p.todayCases}),Object(v.jsx)(x,{title:"Recovered",total:null===p||void 0===p?void 0:p.recovered,cases:null===p||void 0===p?void 0:p.todayRecovered}),Object(v.jsx)(x,{title:"Deaths",total:null===p||void 0===p?void 0:p.deaths,cases:null===p||void 0===p?void 0:p.todayDeaths})]}),Object(v.jsx)(y,{})]}),Object(v.jsx)("div",{className:"right",children:Object(v.jsx)(b.a,{children:Object(v.jsxs)(O.a,{children:[Object(v.jsx)("h3",{children:"Live Cases by Country"}),Object(v.jsx)(m,{countries:D}),Object(v.jsx)("h3",{children:"Worldwide new cases"})]})})})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,100)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};a.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(I,{})}),document.getElementById("root")),k()}},[[64,1,2]]]);
//# sourceMappingURL=main.38995349.chunk.js.map