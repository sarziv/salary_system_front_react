(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},184:function(e,t,a){},185:function(e,t,a){},203:function(e,t,a){},204:function(e,t,a){},206:function(e,t,a){},207:function(e,t,a){},225:function(e,t,a){},226:function(e,t,a){},227:function(e,t,a){},234:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),l=a.n(c),i=(a(104),a(105),a(236)),o=a(4),s=a(89),m=a.n(s),u=a(90),d=a.n(u),f=a(38),p=a.n(f),E=a(54),v=a.n(E),b=a(55),h=a.n(b),g=(a(106),a(7)),N=a(2),j={root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},img:{width:150,height:50}};var y=function(){var e=Object(N.c)(function(e){return e.AuthReducer.authenticated}),t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)({iconParams:{icon:"bars",iconColor:"faBars"},sidebar:"sidenavClosed"}),s=Object(o.a)(i,2),u=s[0],f=s[1];return Object(n.useEffect)(function(){f(!0===c?{iconParams:{icon:"times",Color:"faTimes"},sidebar:"sidenavOpen"}:{iconParams:{icon:"bars",Color:"faBars"},sidebar:"sidenavClosed"})},[c]),r.a.createElement("div",{style:j.root},r.a.createElement(m.a,{position:"fixed",color:"primary"},r.a.createElement(d.a,null,r.a.createElement("img",{style:j.img,src:h.a,alt:h.a}),r.a.createElement(p.a,{variant:"h6",style:j.grow}),r.a.createElement(v.a,{onClick:function(){return l(!c)},style:j.menuButton,"aria-label":"Menu"},r.a.createElement("i",{className:"fas fa-"+u.iconParams.icon+" "+u.iconParams.Color}," ")))),r.a.createElement("div",{className:"sidenav "+u.sidebar},!0!==e?r.a.createElement("div",null,r.a.createElement(g.b,{to:"/",onClick:function(){return l(!c)}},"Pagrindinis"),r.a.createElement(g.b,{to:"/login",onClick:function(){return l(!c)}},"Prisijungti"),r.a.createElement(g.b,{to:"/register",onClick:function(){return l(!c)}},"Registruotis")):r.a.createElement("div",null,r.a.createElement(g.b,{to:"/statistic",onClick:function(){return l(!c)}},"U\u017edirbta"),r.a.createElement(g.b,{to:"/add",onClick:function(){return l(!c)}},"Pildyti"),r.a.createElement(g.b,{to:"/records",onClick:function(){return l(!c)}},"Istorija"),r.a.createElement(g.b,{to:"/search",onClick:function(){return l(!c)}},"Paie\u0161ka"),r.a.createElement("div",{className:"logoutButton"}," ",r.a.createElement(g.b,{to:"/logout",onClick:function(){return l(!c)}},"Atsijungti")))))},x=a(29);a(184);var O=function(){return r.a.createElement("div",null,r.a.createElement("section",null,r.a.createElement("div",{className:"wave"},r.a.createElement("div",{className:"bls"},r.a.createElement("b",null,"BLS")),r.a.createElement("div",{className:"bls"},r.a.createElement("b",null,"S"),"alary"),r.a.createElement("div",{className:"bls"},r.a.createElement("b",null,"S"),"ystem"),r.a.createElement("div",{className:"bls"},r.a.createElement("h5",null,"Prisijunk prie komandos!")),r.a.createElement("div",{className:"joinButton"},r.a.createElement(g.b,{to:"/login"},r.a.createElement("button",{className:"btn btn-outline-light p-3 mr-3"},"Prisijungti")),r.a.createElement(g.b,{to:"/register"},r.a.createElement("button",{className:"btn btn-outline-light p-3"},"Registruokis"))))))},w=a(5),_=(a(185),a(11)),k=a.n(_),R="http://salaryapi.local/api",A=R+"/auth/signup",S=R+"/auth/logout",P=R+"/auth/login",C=R+"/user/records",T=R+"/user/add",I=R+"/user/statistic",D=R+"/user/search",M=R+"/user/delete/",B=R+"/rate/all";var G=function(){var e=Object(N.c)(function(e){return e.AuthReducer.authenticated}),t=Object(N.b)(),a=Object(n.useState)({email:"asdasdds@gmail.com",password:"asdasdds@gmail.com"}),c=Object(o.a)(a,2),l=c[0],i=c[1],s=Object(n.useState)({errorEmail:!1,errorPassword:!1,errorMessage:!1,redirect:!1}),m=Object(o.a)(s,2),u=m[0],d=m[1];return Object(n.useEffect)(function(){0===l.email.length?d({errorEmail:!0}):0===l.password.length?d({errorPassword:!0}):0!==l.email.length?d({errorPassword:!1}):0!==l.password.length&&d({errorPassword:!1})},[l]),!0!==e?r.a.createElement("div",{className:"login"},r.a.createElement("h4",{className:"d-flex justify-content-center"},"Prisijungimas"),r.a.createElement("div",{className:"container d-flex justify-content-center"},r.a.createElement("form",{onSubmit:function(e){var a,n;e.preventDefault(),0===(l.email.length&&l.password.length)?d({errorMessage:!0}):(d({errorMessage:!1}),a=l.email,n=l.password,k.a.post(P,{email:a,password:n}).then(function(e){d({redirect:!0}),t({type:"LOGIN",payload:{authenticated:!0,access_token:e.data.access_token,token_type:e.data.token_type,expires_at:e.data.expires_at}}),k.a.get(B,{}).then(function(e){var a=e.data[0];t({type:"GET_RATES",payload:{rate_pallet:a.pallet,rate_lines:a.lines,rate_vip:a.vip,rate_extraHour:a.extraHour}})}).catch(function(){})}).catch(function(){t({type:"LOGOUT"})}))}},r.a.createElement("div",{className:"container form-group py-2"},r.a.createElement("label",null,"Pa\u0161tas:"),r.a.createElement("input",{type:"text",value:l.email,className:!0===u.errorEmail?"form-control borderWarning mb-2":"form-control mb-2",onChange:function(e){return i(Object(w.a)({},l,{email:e.target.value}))}}),r.a.createElement("label",null,"Slapta\u017eodis:"),r.a.createElement("input",{type:"password",value:l.password,className:!0===u.errorPassword?"form-control borderWarning":"form-control",onChange:function(e){return i(Object(w.a)({},l,{password:e.target.value}))}}),r.a.createElement("div",{className:"container-fluid d-flex justify-content-center bgRed mt-2"},!0===u.errorMessage?"U\u017epildyta blogai.":""),r.a.createElement("div",{className:"d-flex justify-content-center py-3"},r.a.createElement("button",{className:"btn btn-outline-light p-3",type:"submit",value:"submit"},"Prisijungti"))))),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(g.b,{to:"/recover"},r.a.createElement("div",{className:"recoverLink"}," Pamir\u0161ai prisijungim\u0105?")))):r.a.createElement(x.a,{to:"/statistic"})};a(203);var L=function(){var e=Object(n.useState)({name:"",email:"",password:"",passwordConfirm:""}),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({errorEmail:!1,errorPassword:!1,errorMessage:!1,errorPasswordNotMatch:!1,errorEmailExist:!1,redirect:!1,redirectAnimation:!1}),i=Object(o.a)(l,2),s=i[0],m=i[1];function u(){m({redirect:!0})}return Object(n.useEffect)(function(){0===a.name.length?m({errorEmail:!0}):0===a.email.length?m({errorEmail:!0}):0!==a.password.length&&m({errorPassword:!0})},[a]),!0!==s.redirect?r.a.createElement("div",{className:"Register"},r.a.createElement("h4",{className:"d-flex justify-content-center"},"Registracija"),r.a.createElement("div",{className:"container d-flex justify-content-center"},r.a.createElement("form",{onSubmit:function(e){var t,n,r,c;e.preventDefault(),0===(a.name.length&&a.email.length&&a.password.length&&a.passwordConfirm.length)?m({errorMessage:!0}):a.password!==a.passwordConfirm?m({errorPasswordNotMatch:!0}):(t=a.name,n=a.email,r=a.password,c=a.passwordConfirm,k.a.post(A,{name:t,email:n,password:r,password_confirmation:c}).then(function(){m({redirectAnimation:!0}),setTimeout(u,3e3)}).catch(function(e){void 0!==e.response.data.errors.email&&m({errorEmailExist:!0})}))}},r.a.createElement("div",{className:"container form-group py-2"},r.a.createElement("label",null,"Vardas:"),r.a.createElement("input",{type:"text",value:a.name,className:"form-control",onChange:function(e){return c(Object(w.a)({},a,{name:e.target.value}))}}),r.a.createElement("label",null,"Pa\u0161tas:"),r.a.createElement("input",{type:"email",value:a.email,className:"form-control",onChange:function(e){return c(Object(w.a)({},a,{email:e.target.value}))}}),r.a.createElement("label",null,"Slapta\u017eodis:"),r.a.createElement("input",{type:"password",value:a.password,className:"form-control",onChange:function(e){return c(Object(w.a)({},a,{password:e.target.value}))}}),r.a.createElement("label",null,"Slapta\u017eodio patvirtinimas:"),r.a.createElement("input",{type:"password",value:a.passwordConfirm,className:"form-control",onChange:function(e){return c(Object(w.a)({},a,{passwordConfirm:e.target.value}))}}),r.a.createElement("div",{className:"container-fluid d-flex justify-content-center bgRed mt-2"},!0===s.errorPasswordNotMatch?r.a.createElement("div",null,"Slapta\u017eodis nesutapo ",r.a.createElement("i",{className:"fas fa-exclamation-circle"}," ")):""),r.a.createElement("div",{className:"container-fluid d-flex justify-content-center bgRed mt-2"},!0===s.errorEmailExist?r.a.createElement("div",null,"Toks pa\u0161tas jau sukurtas. ",r.a.createElement("i",{className:"fas fa-exclamation-circle"}," ")):""),r.a.createElement("div",{className:"container-fluid d-flex justify-content-center bgRed mt-2"},!0===s.errorMessage?r.a.createElement("div",null,"Neu\u017epildyti laukai ",r.a.createElement("i",{className:"fas fa-exclamation-circle"}," ")):""),r.a.createElement("div",{className:"container-fluid d-flex justify-content-center bgGreen mt-2"},!0===s.redirectAnimation?r.a.createElement("div",null,"Registracija sekminga ",r.a.createElement("i",{className:"fas fa-check-circle"}," ")):""),r.a.createElement("div",{className:"d-flex justify-content-center py-2"},!0!==s.redirectAnimation?r.a.createElement("button",{className:"btn btn-outline-light p-3",type:"submit",value:"submit"},"Registruotis"):r.a.createElement("div",null,"Pra\u0161ome palaukti",r.a.createElement("div",{className:"spinner-border ml-2",role:"status","aria-hidden":"true"}))))))):r.a.createElement(x.a,{to:"/login"})};a(204);var V=function(){var e=Object(n.useState)({email:""}),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({emailNotProvided:!1}),i=Object(o.a)(l,2),s=i[0],m=i[1];return r.a.createElement("div",{className:"recover"},r.a.createElement("h4",{className:"d-flex justify-content-center"},"Paskyros atgavimas"),r.a.createElement("div",{className:"container d-flex justify-content-center"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),0===a.email.length?m({emailNotProvided:!0}):m({emailNotProvided:!1}),alert(":O")}},r.a.createElement("div",{className:"container form-group py-2"},r.a.createElement("label",null,"Pa\u0161tas:"),r.a.createElement("input",{type:"text",value:a.email,className:"form-control",onChange:function(e){return c(Object(w.a)({},a,{email:e.target.value}))}}),r.a.createElement("div",{className:"container-fluid d-flex justify-content-center bgRed mt-2"},!0===s.emailNotProvided?"Neu\u017epildyta.":""),r.a.createElement("div",{className:"d-flex justify-content-center py-3"},r.a.createElement("button",{className:"btn btn-outline-light p-3",type:"submit",value:"submit"},"Gauti slapta\u017eod\u012f"))))))},F=a(20),U=a.n(F),H=a(28);a(206),a(207);var z=function(){return r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"lds-facebook"},r.a.createElement("div",null," "),r.a.createElement("div",null," "),r.a.createElement("div",null," ")))},Y=a(93),W=a.n(Y),J=a(94),K=a.n(J),X=a(95),$=a.n(X),q=a(96),Q=a.n(q),Z=a(92),ee=a.n(Z);var te=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],l=a[1],i=Object(N.c)(function(e){return e.AuthReducer.access_token}),s=Object(N.c)(function(e){return e.RateReducer.rate_pallet}),m=Object(N.c)(function(e){return e.RateReducer.rate_lines}),u=Object(N.c)(function(e){return e.RateReducer.rate_vip}),d=Object(N.c)(function(e){return e.RateReducer.rate_extraHour});function f(){return(f=Object(H.a)(U.a.mark(function e(t){return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.delete(M+t,{headers:{Authorization:"Bearer "+i}}).then(function(e){l(!0)}).catch(function(e){l(!1),console.log(e.response)});case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}var E=e.userData.data.map(function(e){return r.a.createElement(W.a,{key:e.id},r.a.createElement(K.a,{expandIcon:r.a.createElement($.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(p.a,{component:"span"},r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",{className:"float-left"},(l=e.created_at,ee()(l).format("YYYY-MM-DD"))),r.a.createElement("div",{className:"pl-4"},(t=e.line,a=e.pallet,n=e.vip,c=e.extra_hour,(t*s+a*m+n*u+c*d).toFixed(1)+"\u20ac"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(Q.a,{className:"d-inline"},r.a.createElement(p.a,{component:"span"},r.a.createElement("ul",{className:"list-group list-group-flush border-dark"},r.a.createElement("li",{className:"list-group-item"},"Palet\u0117s:",r.a.createElement("span",{className:"badge badge-primary badge-pill float-right"},e.pallet)),r.a.createElement("li",{className:"list-group-item"},"Eilut\u0117s:",r.a.createElement("span",{className:"badge badge-primary badge-pill float-right"},e.line)),r.a.createElement("li",{className:"list-group-item"},"VIP:",r.a.createElement("span",{className:"badge badge-primary badge-pill float-right"},e.vip)),r.a.createElement("li",{className:"list-group-item"},"Valandos:",r.a.createElement("span",{className:"badge badge-primary badge-pill float-right"},e.extra_hour)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-center"},r.a.createElement("button",{className:"btn btn-danger",onClick:function(){!function(e){f.apply(this,arguments)}(e.id)}},"I\u0161trinti")))))));var t,a,n,c,l});return!0===c?r.a.createElement(x.a,{to:"/statistic"}):E};var ae=function(){var e=Object(n.useState)({data:[{}]}),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),i=Object(o.a)(l,2),s=i[0],m=i[1],u=Object(N.c)(function(e){return e.AuthReducer.authenticated}),d=Object(N.c)(function(e){return e.AuthReducer.access_token});return Object(n.useEffect)(function(){function e(){return(e=Object(H.a)(U.a.mark(function e(){return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get(C,{params:{},headers:{Authorization:"Bearer "+d}}).then(function(e){var t=e.data;c({data:t}),m(!1)}).catch(function(e){m(!0)});case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[d]),!0===u?r.a.createElement("div",{className:"container-fluid toppading"},r.a.createElement("h4",{className:"d-flex justify-content-center"},"Istorija"),r.a.createElement("h6",{className:"d-flex justify-content-center"},"5 paskutiniai"),r.a.createElement("div",{className:"container"},r.a.createElement(function(e){return 0!==e.userData.data.length?!0!==s?r.a.createElement(te,{userData:e.userData}):r.a.createElement(z,null):r.a.createElement("div",null,r.a.createElement("h3",{className:"text-center"},"Tu\u0161\u010dia"),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(g.b,{to:"/add"},r.a.createElement("button",{className:"btn btn-outline-light p-3"},"Kurti nauja"))))},{userData:a})),r.a.createElement("div",{className:"bottompadding"})):r.a.createElement(x.a,{to:"/"})};a(225);var ne=function(){var e,t,a,c,l=Object(n.useState)({pallet:"",lines:"",vip:0,hours:0}),i=Object(o.a)(l,2),s=i[0],m=i[1],u=Object(n.useState)({field:!1,redirect:!1,redirectAnimation:!1,server:!1}),d=Object(o.a)(u,2),f=d[0],p=d[1],E=Object(N.c)(function(e){return e.AuthReducer.authenticated}),v=Object(N.c)(function(e){return e.AuthReducer.access_token}),b=Object(N.c)(function(e){return e.RateReducer.rate_pallet}),h=Object(N.c)(function(e){return e.RateReducer.rate_lines}),g=Object(N.c)(function(e){return e.RateReducer.rate_vip}),j=Object(N.c)(function(e){return e.RateReducer.rate_extraHour});function y(){p({redirect:!0})}function O(){return(O=Object(H.a)(U.a.mark(function e(){return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post(T,{pallet:s.pallet,line:s.lines,vip:s.vip,extra_hour:s.hours},{headers:{Authorization:"Bearer "+v}}).then(function(e){console.log(e),p({redirectAnimation:!0}),setTimeout(y,3e3)}).catch(function(e){console.log(e.response),p({server:!0})});case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}return!0===f.redirect?r.a.createElement(x.a,{to:"/records"}):!0===E?r.a.createElement("div",{className:"toppading"},r.a.createElement("div",{className:"container d-flex justify-content-center"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),0===s.pallet.length?p({field:!0}):0===s.lines.length?p({field:!0}):(p({field:!1}),function(){O.apply(this,arguments)}())}},r.a.createElement("div",{className:"form-group col-6 offset-3 text-center"},r.a.createElement("label",{htmlFor:"palletAdd"},"Palet\u0117s"),r.a.createElement("input",{min:0,type:"number",className:"form-control",id:"palletAdd",value:s.pallet,onChange:function(e){return m(Object(w.a)({},s,{pallet:e.target.value}))}})),r.a.createElement("div",{className:"form-group col-6 offset-3 text-center"},r.a.createElement("label",{htmlFor:"linesAdd"},"Eilut\u0117s"),r.a.createElement("input",{min:0,type:"number",className:"form-control",id:"linesAdd",value:s.lines,onChange:function(e){return m(Object(w.a)({},s,{lines:e.target.value}))}})),r.a.createElement("div",{className:"form-inline d-flex justify-content-around"},r.a.createElement("div",{className:"mb-2"},r.a.createElement("label",{className:"d-flex justify-content-center",htmlFor:"vipAdd"},"VIP"),r.a.createElement("select",{className:"form-control inputNumber",id:"vipAdd",name:"vip",onChange:function(e){return m(Object(w.a)({},s,{vip:e.target.value}))}},">",r.a.createElement("option",{value:0},"0"),r.a.createElement("option",{value:1},"1"),r.a.createElement("option",{value:2},"2"),r.a.createElement("option",{value:3},"3"),r.a.createElement("option",{value:4},"4"),r.a.createElement("option",{value:5},"5"))),r.a.createElement("div",{className:"mb-2"},r.a.createElement("label",{className:"d-flex justify-content-center",htmlFor:"hoursAdd"},"Valandos"),r.a.createElement("select",{className:"form-control inputNumber",id:"hoursAdd",name:"hours",onChange:function(e){return m(Object(w.a)({},s,{hours:e.target.value}))}},r.a.createElement("option",{value:0},"0"),r.a.createElement("option",{value:1},"1"),r.a.createElement("option",{value:2},"2"),r.a.createElement("option",{value:3},"3"),r.a.createElement("option",{value:4},"4"),r.a.createElement("option",{value:5},"5")))),r.a.createElement("div",{className:"form-inline d-flex justify-content-center pt-3"},r.a.createElement("label",{htmlFor:"exampleInputSalary"},"U\u017edirbta:"),r.a.createElement("div",{id:"exampleInputSalary",className:"SalaryCount mb-2 pl-2"},(e=s.pallet,t=s.lines,a=s.vip,c=s.hours,(e*b+t*h+a*g+c*j).toFixed(1)),"\u20ac")),!0===f.field?r.a.createElement("div",{className:"container-fluid d-flex justify-content-center errorMessage"},"Neu\u017epildyta"):"",!0===f.server?r.a.createElement("div",{className:"container-fluid d-flex justify-content-center errorMessage"},"I\u0161saugoti nepavyko"):"",!0!==f.redirectAnimation?r.a.createElement("div",{className:"container d-flex justify-content-center py-3"},r.a.createElement("button",{className:"btn btn-outline-light p-3",type:"submit",value:"submit"},"Saugoti")):r.a.createElement("div",null,r.a.createElement("div",{className:"container d-flex justify-content-center bgGreen mt-2"},r.a.createElement("div",null,"I\u0161saugota ",r.a.createElement("i",{className:"fas fa-check-circle"}," "))),r.a.createElement("div",{className:"container d-flex justify-content-center"},"Pra\u0161ome palaukti",r.a.createElement("div",{className:"spinner-border ml-2",role:"status","aria-hidden":"true"})))))):r.a.createElement(x.a,{to:"/"})},re=(a(226),a(97)),ce=a.n(re);var le=function(){var e=Object(N.c)(function(e){return e.AuthReducer.authenticated}),t=Object(N.c)(function(e){return e.AuthReducer.access_token}),a=Object(N.c)(function(e){return e.RateReducer.rate_pallet}),c=Object(N.c)(function(e){return e.RateReducer.rate_lines}),l=Object(N.c)(function(e){return e.RateReducer.rate_vip}),i=Object(N.c)(function(e){return e.RateReducer.rate_extraHour}),s=Object(n.useState)(!0),m=Object(o.a)(s,2),u=m[0],d=m[1],f=Object(n.useState)({data:{}}),p=Object(o.a)(f,2),E=p[0],v=p[1];function b(){return new Date}function h(){return(E.data.total_pallet*a+E.data.total_lines*c+E.data.total_vip*l+E.data.total_extra_hour*i).toFixed(1)}return Object(n.useEffect)(function(){k.a.post(I,{year:b().getFullYear(),month:b().getMonth()+1},{headers:{Authorization:"Bearer "+t}}).then(function(e){var t=e.data[0];v({data:t}),d(!1)}).catch(function(e){v({data:{}}),d(!0)})},[t]),!0===e?r.a.createElement(function(){if(0!==E.data.total_count){var e=r.a.createElement("div",{className:"toppading"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-center monthinfo mb-5"},function(){switch((new Date).getMonth()+1){case 1:return"Sausis";case 2:return"Vasaris";case 3:return"Kovas";case 4:return"Balandis";case 5:return"Gegu\u017e\u0117";case 6:return"Bir\u017eelis";case 7:return"Liepa";case 8:return"Rugpj\u016btis";case 9:return"Rugs\u0117jis";case 10:return"Spalis";case 11:return"Lapkritis";case 12:return"Gruodis";default:return null}}()),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 d-flex justify-content-center mb-2"},r.a.createElement("div",{className:"stat-icon"},r.a.createElement("div",{className:"stat-icon-text"},h()+" ","\u20ac"),r.a.createElement("div",{className:"stat-icon-nameTag"},"U\u017edirbta"))),r.a.createElement("div",{className:"col-6 d-flex justify-content-center mb-2"},r.a.createElement("div",{className:"stat-icon"},r.a.createElement("div",{className:"stat-icon-text"},E.data.total_extra_hour+" ","h"),r.a.createElement("div",{className:"stat-icon-nameTag"},"Pap.Val."))),r.a.createElement("div",{className:"col-6 d-flex justify-content-center mb-2"},r.a.createElement("div",{className:"stat-icon"},r.a.createElement("div",{className:"stat-icon-text"},(h()/(8*E.data.total_count)).toFixed(1)+" ","\u20ac"),r.a.createElement("div",{className:"stat-icon-nameTag"},"Valandinis"))),r.a.createElement("div",{className:"col-6 d-flex justify-content-center mb-2"},r.a.createElement("div",{className:"stat-icon"},r.a.createElement("div",{className:"stat-icon-text"},E.data.total_vip),r.a.createElement("div",{className:"stat-icon-nameTag"},"VIP"))),r.a.createElement("div",{className:"col-6 d-flex justify-content-center mb-2"},r.a.createElement("div",{className:"stat-icon"},r.a.createElement("div",{className:"stat-icon-text"},E.data.total_pallet),r.a.createElement("div",{className:"stat-icon-nameTag"},"Palet\u0117s"))),r.a.createElement("div",{className:"col-6 d-flex justify-content-center mb-2"},r.a.createElement("div",{className:"stat-icon"},r.a.createElement("div",{className:"stat-icon-text"},E.data.total_lines),r.a.createElement("div",{className:"stat-icon-nameTag"},"Eilut\u0117s"))))));return!0!==u?e:r.a.createElement("div",{className:"toppading"},r.a.createElement("div",{className:"container"},r.a.createElement(z,null)))}return r.a.createElement("div",{className:"toppading"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("img",{src:ce.a,alt:"koxobin..",width:125,height:125})),r.a.createElement("div",{className:"text-center"},"Dirbk, U\u017edirbk, Jud\u0117k kaip bananiukas"),r.a.createElement("div",{className:"text-center"},"Meniu gali rasti vir\u0161uje de\u0161in\u0117ja pus\u0117ja. ",r.a.createElement("i",{className:"fas fa-bars"}))))},null):r.a.createElement(x.a,{to:"/"})};var ie=function(){var e=Object(N.b)(),t=Object(N.c)(function(e){return e.AuthReducer.access_token}),a=Object(n.useState)(!1),c=Object(o.a)(a,2),l=c[0],i=c[1];return k.a.get(S,{params:{},headers:{Authorization:"Bearer "+t}}).then(function(){i(!1),e({type:"LOGOUT"}),e({type:"LOGOUT_RATES"})}).catch(function(){i(!0)}),!0!==l?r.a.createElement(x.a,{to:"/"}):r.a.createElement(x.a,{to:"/login"})},oe=(a(227),a(98)),se=a.n(oe);var me=function(){var e=Object(N.c)(function(e){return e.AuthReducer.authenticated}),t=Object(N.c)(function(e){return e.AuthReducer.access_token});return!0===e?r.a.createElement(function(){var e=Object(n.useState)({data:[]}),a=Object(o.a)(e,2),c=a[0],l=a[1],i=Object(n.useState)({redirect:!0,redirectAnimation:!0}),s=Object(o.a)(i,2),m=s[0],u=s[1],d=(new Date).getFullYear(),f=Object(n.useState)({from:{year:d,month:1,day:1},to:{year:d,month:1,day:1}}),p=Object(o.a)(f,2),E=p[0],v=p[1];function b(e){for(var t=e-2,a=[],n=[],c=0;c<5;c++)a.push(t+c);var l=!0,i=!1,s=void 0;try{for(var m,u=a.entries()[Symbol.iterator]();!(l=(m=u.next()).done);l=!0){var d=m.value,f=Object(o.a)(d,2),p=f[0],E=f[1];n.push(r.a.createElement("option",{value:E,key:p},E))}}catch(v){i=!0,s=v}finally{try{l||null==u.return||u.return()}finally{if(i)throw s}}return n}function h(){for(var e=[],t=[],a=1;a<13;a++)e.push(a);var n=!0,c=!1,l=void 0;try{for(var i,s=e.entries()[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var m=i.value,u=Object(o.a)(m,2),d=u[0],f=u[1];t.push(r.a.createElement("option",{value:f,key:d},f))}}catch(p){c=!0,l=p}finally{try{n||null==s.return||s.return()}finally{if(c)throw l}}return t}function N(){for(var e=[],t=[],a=1;a<32;a++)e.push(a);var n=!0,c=!1,l=void 0;try{for(var i,s=e.entries()[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var m=i.value,u=Object(o.a)(m,2),d=u[0],f=u[1];t.push(r.a.createElement("option",{value:f,key:d},f))}}catch(p){c=!0,l=p}finally{try{n||null==s.return||s.return()}finally{if(c)throw l}}return t}function j(){return(j=Object(H.a)(U.a.mark(function e(){return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post(D,{from:[{year:E.from.year,month:E.from.month,day:E.from.day}],to:[{year:E.to.year,month:E.to.month,day:E.to.day}]},{headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}}).then(function(e){var t=e.data;u({redirect:!1}),l({data:t}),u({redirectAnimation:!1})}).catch(function(e){l({data:[{}]}),u({redirect:!0})});case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}var y=r.a.createElement("div",{className:"toppading"},r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u({redirectAnimation:!0}),function(){j.apply(this,arguments)}()}},r.a.createElement("div",{className:"d-flex justify-content-center searchinfo mb-2"},"Nuo"),r.a.createElement("div",{className:"form-inline d-flex justify-content-around mb-4"},r.a.createElement("div",{className:"mb-2"},r.a.createElement("select",{className:"form-control searchInput",id:"vipAdd",name:"vip",defaultValue:d,onChange:function(e){return v(Object(w.a)({},E,{from:Object(w.a)({},E.from,{year:e.target.value})}))}},b(d))),r.a.createElement("div",{className:"mb-2"},r.a.createElement("select",{className:"form-control searchInput",id:"hoursAdd",name:"hours",onChange:function(e){return v(Object(w.a)({},E,{from:Object(w.a)({},E.from,{month:e.target.value})}))}},h())),r.a.createElement("div",{className:"mb-2"},r.a.createElement("select",{className:"form-control searchInput",id:"hoursAdd",name:"hours",onChange:function(e){return v(Object(w.a)({},E,{from:Object(w.a)({},E.from,{day:e.target.value})}))}},N()))),r.a.createElement("div",{className:"d-flex justify-content-center searchinfo mb-2"},"Iki"),r.a.createElement("div",{className:"form-inline d-flex justify-content-around mb-4"},r.a.createElement("div",{className:"mb-2"},r.a.createElement("select",{className:"form-control searchInput",id:"vipAdd",name:"vip",defaultValue:d,onChange:function(e){return v(Object(w.a)({},E,{to:Object(w.a)({},E.to,{year:e.target.value})}))}},b(d))),r.a.createElement("div",{className:"mb-2"},r.a.createElement("select",{className:"form-control searchInput",id:"hoursAdd",name:"hours",onChange:function(e){return v(Object(w.a)({},E,{to:Object(w.a)({},E.to,{month:e.target.value})}))}},h())),r.a.createElement("div",{className:"mb-2"},r.a.createElement("select",{className:"form-control searchInput",id:"hoursAdd",name:"hours",onChange:function(e){return v(Object(w.a)({},E,{to:Object(w.a)({},E.to,{day:e.target.value})}))}},N()))),r.a.createElement("div",{className:"d-flex justify-content-center py-3"},r.a.createElement("button",{className:"btn btn-outline-light p-3",type:"submit",value:"submit"},"Ie\u0161koti")))));return!0===m.redirect?y:r.a.createElement(function(e){if(!0===m.redirectAnimation)return r.a.createElement("div",{className:"toppading"},r.a.createElement("div",{className:"container"},r.a.createElement(z,null)));if(0!==c.data.length){if(!0!==m.redirect)return r.a.createElement("div",{className:"container-fluid toppading"},r.a.createElement("h4",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"text-center h6"},r.a.createElement("b",null,E.from.year+"/"+E.from.month+"/"+E.from.day,"-",E.to.year+"/"+E.to.month+"/"+E.to.day))),r.a.createElement("div",{className:"container"},r.a.createElement(te,{userData:e.userData})),r.a.createElement("div",{className:"bottompadding"}))}else if(0===c.data.length)return r.a.createElement("div",{className:"toppading"},r.a.createElement("div",{className:"container"},r.a.createElement("h5",{className:"text-center"},"Atsipra\u0161ome ,bet nieko neradome."),r.a.createElement("div",{className:"d-flex justify-content-center mb-2"},r.a.createElement("img",{src:se.a,alt:"sadgif..",width:125,height:125})),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(g.b,{to:"/search"},r.a.createElement("button",{className:"btn btn-outline-light p-3"},"Pandykite dar kart\u0105")))))},{userData:c})},null):r.a.createElement(x.a,{to:"/"})};var ue=function(){return r.a.createElement("main",null,r.a.createElement(x.d,null,r.a.createElement(x.b,{path:"/",exact:!0,component:O}),r.a.createElement(x.b,{path:"/login",exact:!0,component:G}),r.a.createElement(x.b,{path:"/register",exact:!0,component:L}),r.a.createElement(x.b,{path:"/recover",exact:!0,component:V}),r.a.createElement(x.b,{path:"/records",exact:!0,component:ae}),r.a.createElement(x.b,{path:"/add",exact:!0,component:ne}),r.a.createElement(x.b,{path:"/statistic",exact:!0,component:le}),r.a.createElement(x.b,{path:"/search",exact:!0,component:me}),r.a.createElement(x.b,{path:"/logout",exact:!0,component:ie})))},de=Object(i.createMuiTheme)({palette:{primary:{main:"#E3E3E3"},secondary:{main:"#000000"},text:{main:"#F55E27"}},typography:{useNextVariants:!0}});var fe=function(){return r.a.createElement(i.MuiThemeProvider,{theme:de},r.a.createElement(y,null),r.a.createElement(ue,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(233);var pe=a(34),Ee={authenticated:!1,access_token:null,token_type:null,expires_at:null};var ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return{authenticated:t.payload.authenticated,access_token:t.payload.access_token,token_type:t.payload.token_type,expires_at:t.payload.expires_at};case"LOGOUT":return Ee;default:return e}},be={rate_pallet:null,rate_lines:null,rate_vip:null,rate_extraHour:null};var he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_RATES":return{rate_pallet:t.payload.rate_pallet,rate_lines:t.payload.rate_lines,rate_vip:t.payload.rate_vip,rate_extraHour:t.payload.rate_extraHour};case"LOGOUT_RATES":return be;default:return e}},ge=Object(pe.b)({AuthReducer:ve,RateReducer:he});window.devToolsExtension=window.__REDUX_DEVTOOLS_EXTENSION__;var Ne=Object(pe.c)(ge,window.devToolsExtension&&window.devToolsExtension());l.a.render(r.a.createElement(N.a,{store:Ne},r.a.createElement(g.a,null,r.a.createElement(fe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},55:function(e,t,a){e.exports=a.p+"static/media/bls-s-s_logo.6ad40673.png"},97:function(e,t,a){e.exports=a.p+"static/media/KOXOBiN.77a0a982.gif"},98:function(e,t,a){e.exports=a.p+"static/media/holding_back_tears.aa19f2a0.gif"},99:function(e,t,a){e.exports=a(234)}},[[99,1,2]]]);
//# sourceMappingURL=main.3fc36fd5.chunk.js.map