(this.webpackJsonpVmeste=this.webpackJsonpVmeste||[]).push([[0],{194:function(e,t,a){e.exports=a(303)},303:function(e,t,a){"use strict";a.r(t);a(195),a(221),a(223),a(224),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(235),a(236),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(258),a(259),a(260),a(261),a(262),a(263);var n=a(0),c=a.n(n),l=a(73),r=a.n(l),i=a(42),o=a.n(i),m=a(74),s=a.n(m),u=a(106),E=a(55),p=a(110),f=a.n(p),d=a(109),b=a.n(d),h=(a(272),a(30)),g=a.n(h),k=a(31),v=a.n(k),x=a(76),y=a.n(x),j=a(54),w=a.n(j),O=a(107),N=a.n(O),C=a(75),V=a.n(C),M=a(108),P=a.n(M),U=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(g.a,{id:t},c.a.createElement(v.a,null,"Example"),n&&c.a.createElement(w.a,{title:"User Data Fetched with VK Bridge"},c.a.createElement(N.a,{before:n.photo_200?c.a.createElement(P.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(w.a,{title:"Navigation Example"},c.a.createElement(V.a,null,c.a.createElement(y.a,{size:"xl",level:"2",onClick:a,"data-to":"Map"},"Map")),c.a.createElement(V.a,null,c.a.createElement(y.a,{size:"xl",level:"2",onClick:a,"data-to":"News"},"News"))))},_=a(24),A=a(45),I=a.n(A),K=a(43),z=a.n(K),S=a(44),W=a.n(S),B=a(49),F=a.n(B),J=(a(72),Object(_.b)()),T=function(e){return c.a.createElement(g.a,{id:e.id},c.a.createElement(v.a,{left:c.a.createElement(I.a,{onClick:e.go,"data-to":"home"},J===_.a?c.a.createElement(z.a,null):c.a.createElement(W.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:F.a,alt:"Persik The Cat"}))},D=Object(_.b)(),G=function(e){return c.a.createElement(g.a,{id:e.id},c.a.createElement(v.a,{left:c.a.createElement(I.a,{onClick:e.go,"data-to":"home"},D===_.a?c.a.createElement(z.a,null):c.a.createElement(W.a,null))},"Map"),c.a.createElement("input",{type:"checkbox",name:"filter1",value:"Friend"},c.a.createElement("label",{for:"filter1"}," \u0421 \u0437\u0430\u043f\u0438\u0441\u044f\u043c\u0438 \u0434\u0440\u0443\u0437\u0435\u0439 ")),c.a.createElement("input",{type:"checkbox",name:"filter2",value:"Photo"},c.a.createElement("label",{for:"filter2"}," \u0421 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f\u043c\u0438")),c.a.createElement("input",{type:"checkbox",name:"filter3",value:"Voice"},c.a.createElement("label",{for:"filter3"}," \u0421 \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u044b\u043c\u0438 \u0437\u0430\u043f\u0438\u0441\u044f\u043c\u0438")),c.a.createElement("input",{type:"checkbox",name:"filter4",value:"Music"},c.a.createElement("label",{for:"filter4"}," \u0421 \u043c\u0443\u0437\u044b\u043a\u043e\u0439")))},H=Object(_.b)(),q=function(e){return c.a.createElement(g.a,{id:e.id},c.a.createElement(v.a,{left:c.a.createElement(I.a,{onClick:e.go,"data-to":"home"},H===_.a?c.a.createElement(z.a,null):c.a.createElement(W.a,null))},"News"),c.a.createElement("img",{className:"News",src:F.a,alt:"News"}))},L=function(){var e=Object(n.useState)("Home"),t=Object(E.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(null),i=Object(E.a)(r,2),m=i[0],p=i[1],d=Object(n.useState)(c.a.createElement(b.a,{size:"large"})),h=Object(E.a)(d,2),g=h[0],k=h[1];Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,p(t),k(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]);var v=function(e){l(e.currentTarget.dataset.to)};return c.a.createElement(f.a,{activePanel:a,popout:g},c.a.createElement(U,{id:"home",fetchedUser:m,go:v}),c.a.createElement(T,{id:"persik",go:v}),c.a.createElement(q,{id:"News",go:v}),c.a.createElement(G,{id:"Map",go:v}))};o.a.send("VKWebAppInit"),r.a.render(c.a.createElement(L,null),document.getElementById("root"))},49:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},72:function(e,t,a){}},[[194,1,2]]]);
//# sourceMappingURL=main.e02f9dbd.chunk.js.map