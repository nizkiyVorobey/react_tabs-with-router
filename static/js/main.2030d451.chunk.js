(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(14),m=a.n(c),r=a(6),i=a(5),s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Tabs with router"),l.a.createElement("nav",{className:"main-nav"},l.a.createElement("ul",{className:"man-nav-item-wrapper"},l.a.createElement("li",{className:"main-nav-item"},l.a.createElement(r.b,{to:"/",exact:!0,className:"main-nav-link"},"Home")),l.a.createElement("li",{className:"main-nav-item"},l.a.createElement(r.b,{to:"/tabs",className:"main-nav-link"},"Tabs")))))},o=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,null),l.a.createElement("h1",null,"Home"))},u=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,null),l.a.createElement("h1",null,"Tabs"),l.a.createElement("ul",{className:"tabs-item-container"},b.map((function(e){return l.a.createElement("li",{key:e.id,className:"tabs-item"},l.a.createElement(r.b,{to:"/tabs/".concat(e.id),className:"tabs-item-link"},e.id))}))))},E=function(e){var t=e.match,a=b.find((function(e){return e.id===t.params.tabsId}));return a?l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement("div",{className:"content"},a.content)):l.a.createElement("p",null,"Tab not found")},b=(a(27),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),p=function(){return l.a.createElement(r.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(i.a,{path:"/",exact:!0,component:o}),l.a.createElement(i.a,{path:"/tabs",exact:!0,component:u}),l.a.createElement(i.a,{path:"/tabs/:tabsId",component:E})))};m.a.render(l.a.createElement(p,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2030d451.chunk.js.map