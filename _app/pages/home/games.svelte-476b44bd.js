import{S as a,i as s,s as t,e,t as r,c,a as l,g as i,d as n,b as o,f as m,F as h,h as g,k as f,n as u,K as d,J as p,N as v,j as $,m as E,o as I,x as D,u as V,v as _}from"../../chunks/vendor-ad30b6ea.js";function b(a,s,t){const e=a.slice();return e[7]=s[t],e[9]=t,e}function S(a){let s,t,f=a[7]+"";return{c(){s=e("span"),t=r(f),this.h()},l(a){s=c(a,"SPAN",{class:!0});var e=l(s);t=i(e,f),e.forEach(n),this.h()},h(){o(s,"class","tag")},m(a,e){m(a,s,e),h(s,t)},p(a,s){32&s&&f!==(f=a[7]+"")&&g(t,f)},d(a){a&&n(s)}}}function w(a){let s,t,$,E,I,D,V,_,w,x,F,P,j,k,A,y,C,J,L,B,G,M,N,R,T=a[5],U=[];for(let e=0;e<T.length;e+=1)U[e]=S(b(a,T,e));return{c(){s=e("div"),t=e("div"),$=e("div"),E=e("figure"),I=e("img"),V=f(),_=e("div"),w=e("div"),x=e("div"),F=e("p"),P=r(a[0]),j=f(),k=e("p"),A=e("time"),y=r(a[4]),C=f(),J=e("div"),L=e("div");for(let a=0;a<U.length;a+=1)U[a].c();B=f(),G=e("div"),M=f(),N=e("a"),R=r(a[6]),this.h()},l(e){s=c(e,"DIV",{class:!0});var r=l(s);t=c(r,"DIV",{class:!0});var o=l(t);$=c(o,"DIV",{class:!0});var m=l($);E=c(m,"FIGURE",{class:!0});var h=l(E);I=c(h,"IMG",{src:!0,alt:!0}),h.forEach(n),m.forEach(n),V=u(o),_=c(o,"DIV",{class:!0});var g=l(_);w=c(g,"DIV",{class:!0});var f=l(w);x=c(f,"DIV",{class:!0});var d=l(x);F=c(d,"P",{class:!0});var p=l(F);P=i(p,a[0]),p.forEach(n),j=u(d),k=c(d,"P",{class:!0});var v=l(k);A=c(v,"TIME",{datetime:!0});var D=l(A);y=i(D,a[4]),D.forEach(n),v.forEach(n),d.forEach(n),C=u(f),J=c(f,"DIV",{class:!0});var b=l(J);L=c(b,"DIV",{class:!0});var S=l(L);for(let a=0;a<U.length;a+=1)U[a].l(S);S.forEach(n),b.forEach(n),f.forEach(n),B=u(g),G=c(g,"DIV",{class:!0}),l(G).forEach(n),M=u(g),N=c(g,"A",{href:!0,class:!0});var T=l(N);R=i(T,a[6]),T.forEach(n),g.forEach(n),o.forEach(n),r.forEach(n),this.h()},h(){d(I.src,D=a[1])||o(I,"src",D),o(I,"alt",a[2]),o(E,"class","image"),o($,"class","card-image"),o(F,"class","title is-4"),o(A,"datetime",a[4]),o(k,"class","subtitle is-6"),o(x,"class","media-left"),o(L,"class","tags"),o(J,"class","media-right"),o(w,"class","media"),o(G,"class","content"),o(N,"href",a[3]),o(N,"class","button is-link"),o(_,"class","card-content"),o(t,"class","card"),o(s,"class","block")},m(a,e){m(a,s,e),h(s,t),h(t,$),h($,E),h(E,I),h(t,V),h(t,_),h(_,w),h(w,x),h(x,F),h(F,P),h(x,j),h(x,k),h(k,A),h(A,y),h(w,C),h(w,J),h(J,L);for(let s=0;s<U.length;s+=1)U[s].m(L,null);h(_,B),h(_,G),h(_,M),h(_,N),h(N,R)},p(a,[s]){if(2&s&&!d(I.src,D=a[1])&&o(I,"src",D),4&s&&o(I,"alt",a[2]),1&s&&g(P,a[0]),16&s&&g(y,a[4]),16&s&&o(A,"datetime",a[4]),32&s){let t;for(T=a[5],t=0;t<T.length;t+=1){const e=b(a,T,t);U[t]?U[t].p(e,s):(U[t]=S(e),U[t].c(),U[t].m(L,null))}for(;t<U.length;t+=1)U[t].d(1);U.length=T.length}64&s&&g(R,a[6]),8&s&&o(N,"href",a[3])},i:p,o:p,d(a){a&&n(s),v(U,a)}}}function x(a,s,t){let{title:e="Untitled"}=s,{img_src:r="https://bulma.io/images/placeholders/1280x960.png"}=s,{img_alt:c=e+" Cover"}=s,{href:l="."}=s,{datetime:i=""}=s,{tags:n=[]}=s,o="Play";return l.includes("steam")&&(o+=" on Steam"),l.includes("itch")&&(o+=" on Itch"),a.$$set=a=>{"title"in a&&t(0,e=a.title),"img_src"in a&&t(1,r=a.img_src),"img_alt"in a&&t(2,c=a.img_alt),"href"in a&&t(3,l=a.href),"datetime"in a&&t(4,i=a.datetime),"tags"in a&&t(5,n=a.tags)},[e,r,c,l,i,n,o]}class F extends a{constructor(a){super(),s(this,a,x,w,t,{title:0,img_src:1,img_alt:2,href:3,datetime:4,tags:5})}}function P(a){let s,t,r,i,g,d,v,b,S,w,x;return r=new F({props:{title:"CoderBear",img_src:"/coderbear.png",href:"https://store.steampowered.com/app/994360/CoderBear",datetime:"Jun 2019",tags:["Solo","Paid"]}}),g=new F({props:{title:"Hungry Jungle",img_src:"/hungryjungle.png",href:"https://mitsuartemius.itch.io/jungle",datetime:"Apr 2021",tags:["Ludum Dare","Team","Free","Web"]}}),b=new F({props:{title:"Void",img_src:"/void.png",href:"https://mitsuartemius.itch.io/void",datetime:"Oct 2019",tags:["Ludum Dare","Solo","Free"]}}),w=new F({props:{title:"Space Run",img_src:"/spacerun.png",href:"https://mitsuartemius.itch.io/space-run",datetime:"Aug 2018",tags:["Ludum Dare","Solo","Free"]}}),{c(){s=e("div"),t=e("div"),$(r.$$.fragment),i=f(),$(g.$$.fragment),d=f(),v=e("div"),$(b.$$.fragment),S=f(),$(w.$$.fragment),this.h()},l(a){s=c(a,"DIV",{class:!0});var e=l(s);t=c(e,"DIV",{class:!0});var o=l(t);E(r.$$.fragment,o),i=u(o),E(g.$$.fragment,o),o.forEach(n),d=u(e),v=c(e,"DIV",{class:!0});var m=l(v);E(b.$$.fragment,m),S=u(m),E(w.$$.fragment,m),m.forEach(n),e.forEach(n),this.h()},h(){o(t,"class","column"),o(v,"class","column"),o(s,"class","columns")},m(a,e){m(a,s,e),h(s,t),I(r,t,null),h(t,i),I(g,t,null),h(s,d),h(s,v),I(b,v,null),h(v,S),I(w,v,null),x=!0},p:p,i(a){x||(D(r.$$.fragment,a),D(g.$$.fragment,a),D(b.$$.fragment,a),D(w.$$.fragment,a),x=!0)},o(a){V(r.$$.fragment,a),V(g.$$.fragment,a),V(b.$$.fragment,a),V(w.$$.fragment,a),x=!1},d(a){a&&n(s),_(r),_(g),_(b),_(w)}}}class j extends a{constructor(a){super(),s(this,a,null,P,t,{})}}export{j as default};
