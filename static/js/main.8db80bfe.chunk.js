(this["webpackJsonpquote-machine"]=this["webpackJsonpquote-machine"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n(4),s=n.n(i),r=(n(9),n(3)),a=(n(10),n.p+"static/media/twitter.eb6b5dca.svg"),o=n(0);function u(){var t=Object(c.useState)(""),e=Object(r.a)(t,2),n=e[0],i=e[1],s=Object(c.useState)(""),u=Object(r.a)(s,2),j=u[0],b=u[1];Object(c.useEffect)((function(){h()}),[]);var h=function(){fetch("https://type.fit/api/quotes").then((function(t){return t.json()})).then((function(t){var e=t,n=e[Math.floor(Math.random()*e.length)];i(n.text),b(n.author)}))};return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{id:"quote-box",children:[Object(o.jsxs)("h3",{id:"text",children:['"',n,'"']}),Object(o.jsxs)("p",{id:"author",children:["--",j]}),Object(o.jsxs)("div",{className:"btnContainer",children:[Object(o.jsx)("button",{id:"new-quote",className:"btn",onClick:function(){h()},children:"New Quote"}),Object(o.jsx)("a",{id:"tweet-quote",className:"btn2",href:"https://twitter.com/intent/tweet?text=".concat(n," ---").concat(j),target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{src:a})})]})]})})}var j=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(u,{})})};s.a.render(Object(o.jsx)(j,{}),document.getElementById("root"))},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.8db80bfe.chunk.js.map