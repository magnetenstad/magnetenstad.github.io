import{S as m,i as h,s as y,C as d,l as b,m as C,p as g,h as c,q as _,P as r,b as k,N as p,Q as v,D as B,E as j,F as q,f as E,t as N}from"./index-1d50e03e.js";function S(s){let t,a,n,u,f;const o=s[4].default,l=d(o,s,s[3],null);return{c(){t=b("button"),l&&l.c(),this.h()},l(e){t=C(e,"BUTTON",{style:!0,class:!0});var i=g(t);l&&l.l(i),i.forEach(c),this.h()},h(){_(t,"style",s[0]),_(t,"class",a=r(s[2]?"pulse":"")+" svelte-1tm0o8j")},m(e,i){k(e,t,i),l&&l.m(t,null),n=!0,u||(f=p(t,"click",function(){v(s[1])&&s[1].apply(this,arguments)}),u=!0)},p(e,[i]){s=e,l&&l.p&&(!n||i&8)&&B(l,o,s,s[3],n?q(o,s[3],i,null):j(s[3]),null),(!n||i&1)&&_(t,"style",s[0]),(!n||i&4&&a!==(a=r(s[2]?"pulse":"")+" svelte-1tm0o8j"))&&_(t,"class",a)},i(e){n||(E(l,e),n=!0)},o(e){N(l,e),n=!1},d(e){e&&c(t),l&&l.d(e),u=!1,f()}}}function T(s,t,a){let{$$slots:n={},$$scope:u}=t,{style:f=""}=t,{onClick:o}=t,{pulse:l=!1}=t;return s.$$set=e=>{"style"in e&&a(0,f=e.style),"onClick"in e&&a(1,o=e.onClick),"pulse"in e&&a(2,l=e.pulse),"$$scope"in e&&a(3,u=e.$$scope)},[f,o,l,u,n]}class F extends m{constructor(t){super(),h(this,t,T,S,y,{style:0,onClick:1,pulse:2})}}export{F as B};
