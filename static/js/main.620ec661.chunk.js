(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(2),l=c(1),d=(c(10),c(11),c(5)),i=c(0),o=function(e){var t=e.todos,c=e.selectedTodo,s=e.onSelectedTodo;return Object(i.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("th",{children:"Title"}),Object(i.jsx)("th",{children:" "})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsxs)("tr",{"data-cy":"todo",className:(null===c||void 0===c?void 0:c.id)===e.id?"has-background-info-light":"",children:[Object(i.jsx)("td",{className:"is-vcentered",children:e.id}),Object(i.jsx)("td",{className:"is-vcentered"}),Object(i.jsx)("td",{className:"is-vcentered is-expanded",children:Object(i.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(i.jsx)("td",{className:"has-text-right is-vcentered",children:Object(i.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(i.jsx)("span",{className:"icon",children:(null===c||void 0===c?void 0:c.id)===e.id?Object(i.jsx)("i",{className:"far fa-eye-slash"}):Object(i.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})},r=function(e){var t=e.filter,c=e.searchQuery,s=e.onFilter,a=e.onSearchQuery,n=e.onAppliedSearchQuery;return Object(i.jsxs)("form",{className:"field has-addons",children:[Object(i.jsx)("p",{className:"control",children:Object(i.jsx)("span",{className:"select",children:Object(i.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){return s(e.target.value)},children:[Object(i.jsx)("option",{value:"all",children:"All"}),Object(i.jsx)("option",{value:"active",children:"Active"}),Object(i.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(i.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(i.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){var t=e.target;a(t.value),n(t.value)}}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-magnifying-glass"})}),c&&Object(i.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(i.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){a(""),n("")}})})]})]})};function j(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(15);var u=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})},b=function(e){var t=e.selectedTodo,c=e.onDeletedSelectedTodo,s=Object(l.useState)(null),a=Object(n.a)(s,2),d=a[0],o=a[1];return Object(l.useEffect)((function(){var e;(e=t.userId,j("/users/".concat(e))).then((function(e){return o(e)}))}),[t]),Object(i.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(i.jsx)("div",{className:"modal-background"}),d?Object(i.jsxs)("div",{className:"modal-card",children:[Object(i.jsxs)("header",{className:"modal-card-head",children:[Object(i.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(i.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){c(null)}})]}),Object(i.jsxs)("div",{className:"modal-card-body",children:[Object(i.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(i.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(i.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(i.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(i.jsx)("a",{href:"mailto:".concat(d.email),children:d.name})]})]})]}):Object(i.jsx)(u,{})]})},h=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(null),h=Object(n.a)(a,2),O=h[0],m=h[1],x=Object(l.useState)("all"),f=Object(n.a)(x,2),v=f[0],p=f[1],N=Object(l.useState)(""),y=Object(n.a)(N,2),g=y[0],S=y[1],k=Object(l.useState)(""),T=Object(n.a)(k,2),C=T[0],w=T[1];Object(l.useEffect)((function(){j("/todos").then((function(e){return s(e)}))}),[]);var Q=Object(l.useCallback)(Object(d.debounce)(w,1e3),[C]),_=Object(l.useCallback)((function(e,t){return e.length?e.filter((function(e){var c=e.title,s=e.completed,a=c.toLowerCase().includes(t.toLowerCase());switch(v){case"all":return a;case"active":return!s&&a;case"completed":return s&&a;default:return e}})):null}),[C,v]),A=Object(l.useMemo)((function(){return _(c,C)}),[c,C,v]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("h1",{className:"title",children:"Todos:"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsx)(r,{filter:v,searchQuery:g,onFilter:p,onSearchQuery:S,onAppliedSearchQuery:Q})}),Object(i.jsxs)("div",{className:"block",children:[0===c.length&&Object(i.jsx)(u,{}),A&&Object(i.jsx)(o,{todos:A,selectedTodo:O,onSelectedTodo:m})]})]})})}),O&&Object(i.jsx)(b,{selectedTodo:O,onDeletedSelectedTodo:m})]})};a.a.render(Object(i.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.620ec661.chunk.js.map