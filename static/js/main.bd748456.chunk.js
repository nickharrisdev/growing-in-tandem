(this["webpackJsonpgrowing-in-tandem"]=this["webpackJsonpgrowing-in-tandem"]||[]).push([[0],{38:function(e,a,t){},39:function(e,a,t){var n=t(67);e.exports=function(e){for(var a=[],t=e.getTime(),r=Math.abs(158381634e4-t),o=Math.floor(r/864e5),l=e.getDay(),i=84-o,c=0;c<=n.length-1;c++){var s=n[c].water_after.split("").splice(0,2).join(""),m=n[c].name,d=Number(s);i%d===0&&1===l?a.push(m):(3!==l&&5!==l&&1!==l||2!==d)&&(4!==l&&1!==l||3!==d)||a.push(m)}return a}},61:function(e,a,t){e.exports=t(71)},66:function(e,a,t){},67:function(e){e.exports=JSON.parse('[{"name":"Fiddle Leaf Fig","water_after":"7 days"},{"name":"Snake Plant","water_after":"14 days"},{"name":"Money Tree","water_after":"14 days"},{"name":"Bird\'s Nest Fern","water_after":"3 days"},{"name":"Croton","water_after":"7 days"},{"name":"Bell Pepper Plant","water_after":"3 days"},{"name":"Strawberry Plant","water_after":"3 days"},{"name":"Dracaena","water_after":"14 days"},{"name":"Spider Plant","water_after":"7 days"},{"name":"Jade","water_after":"14 days"},{"name":"Wavy Fern","water_after":"2 days"}]')},71:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(8),l=t.n(o),i=(t(66),t(38),t(10)),c=t(44),s=t(31),m=t(98),d=t(39),u=t.n(d),p=t(93),w=function(e){var a=e.waterToday,t=e.date;function n(e){return r.a.createElement("li",{"data-testid":"plant-name",key:e},e)}return r.a.createElement("div",{className:"message"},0===a.length?r.a.createElement(p.a,{variant:"h5",component:"h1",className:"no-watering"},"No plants need watering today!",r.a.createElement("br",null)," Enjoy some you time."):r.a.createElement(p.a,{variant:"h5",component:"h1"},r.a.createElement("strong",null,"To water on ",t.slice(0,10)),r.a.createElement("ol",null,a.map(n))))},h=function(){var e=Object(n.useState)(new Date),a=Object(s.a)(e,2),t=a[0],o=a[1],l=Object(n.useState)([]),i=Object(s.a)(l,2),c=i[0],d=i[1],p=t.toString();return Object(n.useEffect)((function(){var e=u()(t);d(e)}),[t]),r.a.createElement("div",{className:"calendar-container"},r.a.createElement("div",{className:"date-picker-container"},r.a.createElement(m.a,{autoOk:!0,color:"secondary",orientation:"portrait",variant:"static",openTo:"date",value:t,onChange:o,"data-testid":"date-picker"})),r.a.createElement("div",null,c&&p?r.a.createElement(w,{waterToday:c,date:p}):null))},f=t(45),y=t(21),v=t.n(y),g=Object(f.a)({palette:{primary:v.a,secondary:v.a}});var E=function(){return r.a.createElement(i.a,{utils:c.a},r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"heading"},r.a.createElement(p.a,{variant:"h2",component:"h1"},"Growing In Tandem"),r.a.createElement(p.a,{variant:"h6",component:"h1",className:"sub-heading"},r.a.createElement("i",null,"Lush office greenery is ",r.a.createElement("a",{href:"https://www.exeter.ac.uk/news/featurednews/title_409094_en.html",target:"_blank",rel:"noopener noreferrer",className:"study-link"},"proven")," to promote happiness and productivity amongst workers. Inspire personal growth by watering the plants on a regular basis!"),r.a.createElement("hr",null))),r.a.createElement("div",null,r.a.createElement(h,{theme:g}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=t(97),_=Object(f.a)({palette:{primary:v.a,secondary:{main:v.a[300]}}});l.a.render(r.a.createElement(b.a,{theme:_},r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[61,1,2]]]);
//# sourceMappingURL=main.bd748456.chunk.js.map