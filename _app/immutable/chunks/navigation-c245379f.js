import{S as h,i as g,s as d,C as y,l as b,m as p,p as v,h as c,q as r,P as m,b as C,N as k,Q as B,D as j,E as q,F as E,f as N,t as S}from"./index-bd23b365.js";import{c as o}from"./singletons-e5e57fbd.js";function T(s){let t,a,n,u,_;const f=s[4].default,l=y(f,s,s[3],null);return{c(){t=b("button"),l&&l.c(),this.h()},l(e){t=p(e,"BUTTON",{style:!0,class:!0});var i=v(t);l&&l.l(i),i.forEach(c),this.h()},h(){r(t,"style",s[0]),r(t,"class",a=m(s[2]?"pulse":"")+" svelte-1tm0o8j")},m(e,i){C(e,t,i),l&&l.m(t,null),n=!0,u||(_=k(t,"click",function(){B(s[1])&&s[1].apply(this,arguments)}),u=!0)},p(e,[i]){s=e,l&&l.p&&(!n||i&8)&&j(l,f,s,s[3],n?E(f,s[3],i,null):q(s[3]),null),(!n||i&1)&&r(t,"style",s[0]),(!n||i&4&&a!==(a=m(s[2]?"pulse":"")+" svelte-1tm0o8j"))&&r(t,"class",a)},i(e){n||(N(l,e),n=!0)},o(e){S(l,e),n=!1},d(e){e&&c(t),l&&l.d(e),u=!1,_()}}}function D(s,t,a){let{$$slots:n={},$$scope:u}=t,{style:_=""}=t,{onClick:f}=t,{pulse:l=!1}=t;return s.$$set=e=>{"style"in e&&a(0,_=e.style),"onClick"in e&&a(1,f=e.onClick),"pulse"in e&&a(2,l=e.pulse),"$$scope"in e&&a(3,u=e.$$scope)},[_,f,l,u,n]}class P extends h{constructor(t){super(),g(this,t,D,T,d,{style:0,onClick:1,pulse:2})}}o.disable_scroll_handling;const Q=o.goto;o.invalidate;o.prefetch;o.prefetch_routes;o.before_navigate;o.after_navigate;export{P as B,Q as g};