(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{36:function(e,t,n){},53:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(6),s=n.n(a),i=n(10),r=(n(53),n(2)),l=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"header",children:Object(r.jsx)("h3",{className:"logo",children:"Noti memo"})})})},o=n(45),j=n(28),u=n(34),d=n(42),b=n.n(d),m=n(37),O=n.n(m),x=n(40),h=n.n(x),f=n(41),v=n.n(f),p=n(81),g=(n(36),function(e){var t=e.setItemArr,n=e.itemArr,c=e.setInput,a=e.setTextArea,s=(e.showAddBtn,e.showSaveBtn),i=function(e){var t=e.target.parentElement.getAttribute("id");localStorage.setItem("id",t),window.scrollTo(0,0);var n=document.getElementsByClassName("mainDiv");setTimeout((function(){var e=document.getElementById(t),i=e.querySelector(".title").textContent,r=e.querySelector(".note").textContent;console.log(e),c((function(){return{title:i,note:r}})),a(!0),s(!0),n[0].style.transition="all 0.5s linear",n[0].style.transform="scale(1.1)",n[0].querySelector("input").focus()}),500)},l=function(e){var n=e.target.id;t((function(e){return e.filter((function(e,t){return n!=t}))}))};return Object(r.jsx)(r.Fragment,{children:n.map((function(e,t){return Object(r.jsxs)("div",{className:"note-card",id:t,children:[Object(r.jsx)(O.a,{className:"CheckCircleIcon"}),Object(r.jsxs)("p",{className:"title",children:[" ",e.title]}),Object(r.jsxs)("p",{className:"note",children:[" ",e.note]}),Object(r.jsx)(p.a,{title:"Delete",children:Object(r.jsx)(h.a,{onClick:l,id:t,className:"DeleteOutlineIcon"})}),Object(r.jsx)(p.a,{title:"Edit",children:Object(r.jsx)(v.a,{onClick:i,id:t,className:"EditIcon "})})]},t)}))})}),N=n(43),S=n.n(N),I=(n(61),n(44)),y=n.n(I),A=function(e){var t=e.setItemArr,n=e.itemArr,a=Object(c.useState)(!1),s=Object(i.a)(a,2),l=s[0],d=s[1],m=Object(c.useState)(!1),O=Object(i.a)(m,2),x=O[0],h=O[1],f=Object(c.useState)(!1),v=Object(i.a)(f,2),N=v[0],I=v[1],A=Object(c.useState)("Take a note..."),C=Object(i.a)(A,2),k=C[0],T=C[1],w=Object(c.useState)({title:"",note:""}),E=Object(i.a)(w,2),B=E[0],D=E[1],F=function(e){var t=e.target,n=t.value,c=t.name;D((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(j.a)({},c,n))})),d(!0),h(!0),N&&h(!1)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"mainDiv",style:l?{height:"145px"}:{height:"auto"},children:[Object(r.jsxs)("div",{className:"user-input-div",children:[Object(r.jsx)("input",{autoComplete:"off",onClick:function(){T("Title"),N||(d(!0),h(!0),I(!1))},onDoubleClick:function(){T("Take a note..."),N||(d(!1),h(!1),I(!1))},onChange:F,type:"text",name:"title",placeholder:k,value:B.title}),Object(r.jsx)("div",{className:"hidden-textArea",children:l?Object(r.jsx)("textarea",{value:B.note,name:"note",onChange:F,placeholder:"Take a note...",type:"text"}):null})]}),Object(r.jsxs)("div",{className:"add-icon-div",children:[x?Object(r.jsx)(p.a,{title:"Add",children:Object(r.jsx)(b.a,{className:"add-icon",onClick:function(){t((function(e){return[].concat(Object(o.a)(e),[B])})),D((function(){return{title:"",note:""}})),d(!1),h(!1),T("Take a note")}})}):null,N?Object(r.jsx)(p.a,{title:"save",children:Object(r.jsx)(S.a,{style:{fontSize:"40px"},onClick:function(){t((function(e){return e.filter((function(e,t){var n=parseInt(localStorage.getItem("id"));return console.log(n),t===n?[e.title=B.title,e.note=B.note]:{item:e}}))})),document.getElementsByClassName("mainDiv")[0].style.transform="scale(1)",D({title:"",note:""}),d(!1),I(!1),T("Take a note...")}})}):null]})]}),Object(r.jsx)("div",{className:"show-list-div",children:Object(r.jsx)(g,{setItemArr:t,itemArr:n,setInput:D,setTextArea:d,showAddBtn:h,showSaveBtn:I})}),n.length?null:Object(r.jsxs)("div",{className:"bulb-icon-div",children:[Object(r.jsx)(y.a,{className:"bulb__icon",size:"50px"}),Object(r.jsx)("p",{children:"Notes You add appear here"})]})]})},C=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("notes"));e&&a(e)}),[]),Object(c.useEffect)((function(){n&&localStorage.setItem("notes",JSON.stringify(n))}),[n]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l,{}),Object(r.jsx)(A,{setItemArr:a,itemArr:n})]})};n(62);s.a.render(Object(r.jsx)(C,{}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.105b9a97.chunk.js.map