(this["webpackJsonpspy-game-web"]=this["webpackJsonpspy-game-web"]||[]).push([[0],{176:function(e,t,n){},177:function(e,t,n){},202:function(e,t){},275:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(28),r=n.n(i),s=(n(176),n(177),n(43)),o=n(26),j=n(287),d=n(6),l=function(e){return Object(d.jsx)(j.a,{mode:"inline",theme:"dark",children:e.menuItems.map((function(e){return Object(d.jsx)(j.a.Item,{children:Object(d.jsx)(s.b,{to:e.path,children:e.name})},e.id)}))})},b=n(89),u=n(59),O=n(54),h=n(288),m=n(285),p=n(293),f=n(297),x=n(167),g=n(156),C=n.n(g),y=n(68),v=n.n(y),I=n(57),N=n(91),k=n(122),w=n.n(k),M=n(53),S=n.n(M),F=function(){return w.a.get("https://api.jsonbin.io/b/6041088b0866664b1088ad64/latest").then((function(e){return e.data.body}))},T=function(){var e=Object(N.a)(v.a.mark((function e(t){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:n=e.sent,a=n.categories;try{w.a.put("https://api.jsonbin.io/b/6041088b0866664b1088ad64",{headers:{"Content-Type":"application/json","X-Bin-Versioning":!1},body:{categories:[].concat(Object(I.a)(a),[Object(u.a)({id:S()()},t)])}})}catch(c){console.error(c)}case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=n(169),R={main:"/",newGame:"/new-game",rules:"/rules",roleManaging:"/role-managing",game:"/game",addCategory:"/add-category"},E=h.a.Option,H={id:1,playersCont:4,spyesCount:1,isTimerNeeded:!0,timer:5,isFirstMemberChoiseNeeded:!1,isRolesNeeded:!1,categories:[],isHelpQuestionsNeeded:!1},Q=function(e){var t,n,c=C()(F,[]),i=Object(O.a)(c,1)[0],r=Object(a.useState)(H),s=Object(O.a)(r,2),j=s[0],l=s[1],g=Object(o.f)(),y=function(e){return function(t){l((function(){return Object(u.a)(Object(u.a)({},j),{},Object(b.a)({},e,t))}))}};return Object(d.jsxs)(m.a,{labelCol:{span:4},wrapperCol:{span:14},layout:"horizontal",onFinish:(n=j,function(){e.gameStore.setGameOptions(n),g.push(R.roleManaging)}),children:[Object(d.jsx)(m.a.Item,{label:"\u0418\u0433\u0440\u043e\u043a\u043e\u0432",children:Object(d.jsx)(p.a,{min:3,defaultValue:j.playersCont,onChange:y("playersCont")})}),Object(d.jsx)(m.a.Item,{label:"\u0428\u043f\u0438\u043e\u043d\u043e\u0432",children:Object(d.jsx)(p.a,{min:1,defaultValue:j.spyesCount,onChange:y("spyesCount")})}),Object(d.jsx)(m.a.Item,{label:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0438\u0433\u0440\u044b",children:Object(d.jsx)(p.a,{min:1,defaultValue:j.timer,onChange:y("timer")})}),Object(d.jsx)(m.a.Item,{label:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u0430\u0439\u043c\u0435\u0440",children:Object(d.jsx)(f.a,{disabled:!0,checked:j.isTimerNeeded,onChange:y("isTimerNeeded")})}),Object(d.jsx)(m.a.Item,{label:"\u0412\u044b\u0431\u043e\u0440 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0438\u0433\u0440\u043e\u043a\u0430",children:Object(d.jsx)(f.a,{disabled:!0,checked:j.isFirstMemberChoiseNeeded,onChange:y("isFirstMemberChoiseNeeded")})}),Object(d.jsx)(m.a.Item,{label:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0440\u043e\u043b\u0438",children:Object(d.jsx)(f.a,{disabled:!0,checked:j.isRolesNeeded,onChange:y("isRolesNeeded")})}),Object(d.jsx)(m.a.Item,{label:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",children:Object(d.jsx)(h.a,{mode:"multiple",onChange:(t=Object(G.a)([],["categories"],i),function(e){return l((function(){return Object(u.a)(Object(u.a)({},j),{},{categories:t.filter((function(t){return e.map(Number).includes(+t.id)}))})}))}),children:Object(G.a)([],["categories"],i).map((function(e){return Object(d.jsx)(E,{children:e.name},e.id)}))})}),Object(d.jsx)(m.a.Item,{label:"\u041f\u043e\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441\u044b",children:Object(d.jsx)(f.a,{disabled:!0,checked:j.isHelpQuestionsNeeded,onChange:y("isHelpQuestionsNeeded")})}),Object(d.jsx)(m.a.Item,{children:Object(d.jsx)(x.a,{htmlType:"submit",children:"\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443"})})]})},V=n(286),z=n(280),B=n(292),P=n(294),J=n(281),L=n(290),A=n(282),D=n(295),X=n(283),q=n(296),K=n(284),U=n(117),W=n(13),Y=n(160),Z=n.n(Y),$=V.a.Meta,_=Object(z.a)((function(e,t,n,a){return Object(B.a)(Object(P.a)(Object(J.a)(Object(L.a)("id",n),Object(A.a)(e,t))))(a)})),ee=Object(U.a)((function(e){var t=Object(W.p)(e.gameStore.options),n=t.categories.map((function(e){return e.locations})).flat(),c=n[Math.round(Math.random()*n.length-1)],i=Object(a.useState)(Z()([].concat(Object(I.a)(Object(D.a)(null,t.playersCont-t.spyesCount).map((function(){return{id:S()(),value:Object(X.a)("","name",c),type:"location",isOpened:!1}}))),Object(I.a)(Object(D.a)(null,t.spyesCount).map((function(){return{id:S()(),type:"spy",isOpened:!1}})))))),r=Object(O.a)(i,2),s=r[0],j=r[1],l=Object(o.f)(),b=function(e){return Object(B.a)(Object(q.a)(Object(L.a)("id",e)),Object(K.a)("isOpened"))(s)?j((function(){return function(e){return s.filter((function(t){return t.id!==e}))}(e)})):j((function(){return _("isOpened",!s.find((function(t){return t.id===e})).isOpened,e,s)}))};return Object(a.useEffect)((function(){s.length||l.push(R.game)}),[s]),Object(d.jsx)(d.Fragment,{children:s.map((function(e){return Object(d.jsx)(V.a,{style:{width:300},onClick:function(){return t=e.id,void b(t);var t},children:e.isOpened?Object(d.jsx)($,{title:"location"===e.type?e.value:"\u0412\u044b \u0448\u043f\u0438\u043e\u043d",description:"This is the description"}):"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438, \u0447\u0442\u043e \u0432\u043d\u0443\u0442\u0440\u0438"},e.id)}))})})),te=n(161),ne=function(e){var t=e.gameStore.options,n=Object(te.a)({timer:6e4*Object(W.p)(t.timer)}),a=n.countdown,c=n.start,i=n.pause,r=n.isRunning;return Object(d.jsxs)(d.Fragment,{children:[Math.floor(a%36e5/6e4)," :"," ",Math.floor(a%6e4/1e3),Object(d.jsxs)("div",{children:[Object(d.jsx)(x.a,{onClick:c,disabled:r,children:"Start"}),Object(d.jsx)(x.a,{onClick:i,disabled:!r,children:"Pause"})]}),Object(d.jsx)("div",{children:Object(d.jsx)(x.a,{children:Object(d.jsx)(s.b,{to:R.main,children:"End game"})})})]})},ae=n(162),ce=n(163),ie=function(){function e(){Object(ae.a)(this,e),this.options={id:1,playersCont:4,spyesCount:1,isTimerNeeded:!0,timer:5,isFirstMemberChoiseNeeded:!1,isRolesNeeded:!1,categories:[],isHelpQuestionsNeeded:!1},Object(W.l)(this)}return Object(ce.a)(e,[{key:"setGameOptions",value:function(e){this.options=e}}]),e}(),re=n(291),se=n(289),oe=n(298),je=Object(z.a)((function(e,t,n,a){return Object(B.a)(Object(P.a)(Object(J.a)(Object(L.a)("id",n),Object(A.a)(e,t))))(a)})),de=function(){var e=Object(a.useState)([{id:S()(),name:""}]),t=Object(O.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)({name:""}),r=Object(O.a)(i,2),o=r[0],j=r[1],l=function(e){return function(t){c(je("name",t.target.value,e,n))}},b=function(e){return function(){return c(n.filter((function(t){return t.id!==e})))}},u=function(){var e=Object(N.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T({name:o.name,locations:n});case 3:re.b.success("\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error("Error is",e.t0),re.b.error("\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430");case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)(m.a,{labelCol:{span:4},wrapperCol:{span:14},layout:"horizontal",onFinish:u,children:[Object(d.jsx)(m.a.Item,{label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",children:Object(d.jsx)(se.a,{onChange:function(e){return j({name:e.target.value})}})}),Object(d.jsx)(m.a.Item,{label:"\u041b\u043e\u043a\u0430\u0446\u0438\u0438",children:n.map((function(e){var t=e.id,a=e.name;return Object(d.jsxs)(m.a.Item,{children:[Object(d.jsx)(se.a,{onChange:l(t),value:a}),n.length>1&&Object(d.jsx)(x.a,{size:"small",onClick:b(t),children:Object(d.jsx)(oe.a,{})})]},t)}))}),Object(d.jsx)(x.a,{type:"text",onClick:function(){return c([].concat(Object(I.a)(n),[{id:S()(),name:""}]))},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043b\u043e\u043a\u0430\u0446\u0438\u044e"}),Object(d.jsx)(m.a.Item,{children:Object(d.jsx)(x.a,{htmlType:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"})}),Object(d.jsx)(m.a.Item,{children:Object(d.jsx)(x.a,{type:"link",children:Object(d.jsx)(s.b,{to:R.main,children:"\u041d\u0430\u0437\u0430\u0434"})})})]})},le=new ie;var be=function(){return Object(d.jsx)(s.a,{children:Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:R.main,children:Object(d.jsx)(l,{menuItems:[{id:1,name:"\u041d\u043e\u0432\u0430\u044f \u0438\u0433\u0440\u0430",path:R.newGame},{id:2,name:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430",path:R.rules},{id:3,name:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e",path:R.addCategory}]})}),Object(d.jsx)(o.a,{exact:!0,path:R.newGame,children:Object(d.jsx)(Q,{gameStore:le})}),Object(d.jsx)(o.a,{exact:!0,path:R.roleManaging,children:Object(d.jsx)(ee,{gameStore:le})}),Object(d.jsx)(o.a,{exact:!0,path:R.game,children:Object(d.jsx)(ne,{gameStore:le})}),Object(d.jsx)(o.a,{exact:!0,path:R.addCategory,children:Object(d.jsx)(de,{})})]})})})},ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,299)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(be,{})}),document.getElementById("root")),ue()}},[[275,1,2]]]);
//# sourceMappingURL=main.bfe1144c.chunk.js.map