import{S as C,i as W,s as X,B as R,C as O,D as x,E as ee,f as p,t as w,o as pe,k as y,v as B,a as H,l as D,m as b,w as N,c as V,h as u,n as _,b as v,x as A,F as I,y as S,e as K,g as de,d as _e,H as ge,I as oe,A as J,J as he,K as ve,q as G,r as U,L as we,M as Ee,p as Q}from"../../chunks/index-2eabee18.js";import{g as $e,B as ye}from"../../chunks/navigation-fee2ea26.js";const De=r=>({matches:r&1}),ae=r=>({matches:r[0]});function be(r){let e;const l=r[4].default,t=R(l,r,r[3],ae);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,[n]){t&&t.p&&(!e||n&9)&&O(t,l,s,s[3],e?ee(l,s[3],n,De):x(s[3]),ae)},i(s){e||(p(t,s),e=!0)},o(s){w(t,s),e=!1},d(s){t&&t.d(s)}}}function qe(r,e,l){let{$$slots:t={},$$scope:s}=e,{query:n}=e,i,o,c=!1,m=!1;pe(()=>(l(2,c=!0),()=>{d()}));function a($){i=window.matchMedia($),o=g=>l(0,m=g.matches),i.addEventListener("change",o),l(0,m=i.matches)}function d(){i&&o&&i.removeEventListener("change",o)}return r.$$set=$=>{"query"in $&&l(1,n=$.query),"$$scope"in $&&l(3,s=$.$$scope)},r.$$.update=()=>{r.$$.dirty&6&&c&&(d(),a(n))},[m,n,c,s,t]}class fe extends C{constructor(e){super(),W(this,e,qe,be,X,{query:1})}}function ue(r={}){return{scale:1,max:20,reverse:!0,...r}}function Le(r,e){let l=ue(e),t=l.reverse?-1:1,s=!1;function n(h){if(!s)return;const q=window.innerWidth/2,L=window.innerHeight/2,T=q,Y=L+100,Z=T-h.pageX,P=Y-h.pageY,{max:k,scale:M}=l,j=Z/q*k,f=-(P/L)*k;r.style.transform=`perspective(${1e3}px) rotateX(${t*f}deg) rotateY(${t*j}deg) scale3d(${Array(3).fill(M).join(", ")})`}let i;function o(h){clearTimeout(i),!(h<=0)&&(r.style.willChange="transform",r.style.transition=`${h}ms`,i=setTimeout(()=>o(h/2-1),h/2-1))}function c(h){s=!1,o(h),r.style.transform=`perspective(${1e3}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`}function m(h){s=!0,o(h),r.style.willChange="transform"}const a=()=>m(300),d=()=>c(300),$=()=>c(100),g=()=>m(100);return document.addEventListener("mousemove",n),document.addEventListener("mouseenter",a),document.addEventListener("mouseleave",d),a(),{destroy(){document.removeEventListener("mousemove",n),document.removeEventListener("mouseenter",a),document.removeEventListener("mouseleave",d),r.removeEventListener("mouseenter",$),r.removeEventListener("mouseleave",g)},update(h){l=ue(h),t=l.reverse?-1:1}}}function ce(r){let e,l,t,s;const n=r[0].default,i=R(n,r,r[1],null);return{c(){e=y("div"),i&&i.c(),this.h()},l(o){e=D(o,"DIV",{class:!0});var c=b(e);i&&i.l(c),c.forEach(u),this.h()},h(){_(e,"class","dialog svelte-vr5vzr")},m(o,c){v(o,e,c),i&&i.m(e,null),l=!0,t||(s=ge(Le.call(null,e)),t=!0)},p(o,c){i&&i.p&&(!l||c&2)&&O(i,n,o,o[1],l?ee(n,o[1],c,null):x(o[1]),null)},i(o){l||(p(i,o),l=!0)},o(o){w(i,o),l=!1},d(o){o&&u(e),i&&i.d(o),t=!1,s()}}}function ke(r){let e,l,t=r[2]&&ce(r);return{c(){t&&t.c(),e=K()},l(s){t&&t.l(s),e=K()},m(s,n){t&&t.m(s,n),v(s,e,n),l=!0},p(s,n){s[2]?t?(t.p(s,n),n&4&&p(t,1)):(t=ce(s),t.c(),p(t,1),t.m(e.parentNode,e)):t&&(de(),w(t,1,1,()=>{t=null}),_e())},i(s){l||(p(t),l=!0)},o(s){w(t),l=!1},d(s){t&&t.d(s),s&&u(e)}}}function me(r){let e,l;const t=r[0].default,s=R(t,r,r[1],null);return{c(){e=y("div"),s&&s.c(),this.h()},l(n){e=D(n,"DIV",{class:!0});var i=b(e);s&&s.l(i),i.forEach(u),this.h()},h(){_(e,"class","dialog svelte-vr5vzr")},m(n,i){v(n,e,i),s&&s.m(e,null),l=!0},p(n,i){s&&s.p&&(!l||i&2)&&O(s,t,n,n[1],l?ee(t,n[1],i,null):x(n[1]),null)},i(n){l||(p(s,n),l=!0)},o(n){w(s,n),l=!1},d(n){n&&u(e),s&&s.d(n)}}}function Ie(r){let e,l,t=r[2]&&me(r);return{c(){t&&t.c(),e=K()},l(s){t&&t.l(s),e=K()},m(s,n){t&&t.m(s,n),v(s,e,n),l=!0},p(s,n){s[2]?t?(t.p(s,n),n&4&&p(t,1)):(t=me(s),t.c(),p(t,1),t.m(e.parentNode,e)):t&&(de(),w(t,1,1,()=>{t=null}),_e())},i(s){l||(p(t),l=!0)},o(s){w(t),l=!1},d(s){t&&t.d(s),s&&u(e)}}}function Te(r){let e,l,t,s,n;return l=new fe({props:{query:"(min-width: 800px)",$$slots:{default:[ke,({matches:i})=>({2:i}),({matches:i})=>i?4:0]},$$scope:{ctx:r}}}),s=new fe({props:{query:"(max-width: 800px)",$$slots:{default:[Ie,({matches:i})=>({2:i}),({matches:i})=>i?4:0]},$$scope:{ctx:r}}}),{c(){e=y("div"),B(l.$$.fragment),t=H(),B(s.$$.fragment),this.h()},l(i){e=D(i,"DIV",{class:!0});var o=b(e);N(l.$$.fragment,o),t=V(o),N(s.$$.fragment,o),o.forEach(u),this.h()},h(){_(e,"class","wrapper svelte-vr5vzr")},m(i,o){v(i,e,o),A(l,e,null),I(e,t),A(s,e,null),n=!0},p(i,[o]){const c={};o&6&&(c.$$scope={dirty:o,ctx:i}),l.$set(c);const m={};o&6&&(m.$$scope={dirty:o,ctx:i}),s.$set(m)},i(i){n||(p(l.$$.fragment,i),p(s.$$.fragment,i),n=!0)},o(i){w(l.$$.fragment,i),w(s.$$.fragment,i),n=!1},d(i){i&&u(e),S(l),S(s)}}}function Me(r,e,l){let{$$slots:t={},$$scope:s}=e;return r.$$set=n=>{"$$scope"in n&&l(1,s=n.$$scope)},[t,s]}class He extends C{constructor(e){super(),W(this,e,Me,Te,X,{})}}function Ve(r){let e,l;return{c(){e=y("img"),this.h()},l(t){e=D(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){_(e,"class","portrait svelte-1k4l3x"),oe(e.src,l=r[0])||_(e,"src",l),_(e,"alt",r[1])},m(t,s){v(t,e,s)},p(t,[s]){s&1&&!oe(e.src,l=t[0])&&_(e,"src",l),s&2&&_(e,"alt",t[1])},i:J,o:J,d(t){t&&u(e)}}}function Be(r,e,l){let{imgSrc:t}=e,{imgAlt:s}=e;return r.$$set=n=>{"imgSrc"in n&&l(0,t=n.imgSrc),"imgAlt"in n&&l(1,s=n.imgAlt)},[t,s]}class Ne extends C{constructor(e){super(),W(this,e,Be,Ve,X,{imgSrc:0,imgAlt:1})}}function Ae(r){let e,l,t,s,n,i,o;const c=r[3].default,m=R(c,r,r[2],null);return{c(){e=he("svg"),m&&m.c(),this.h()},l(a){e=ve(a,"svg",{width:!0,height:!0,"stroke-width":!0,viewBox:!0,fill:!0});var d=b(e);m&&m.l(d),d.forEach(u),this.h()},h(){var a,d,$,g,h,q;_(e,"width",l=(a=r[0].width)!=null?a:r[1].width),_(e,"height",t=(d=r[0].height)!=null?d:r[1].height),_(e,"stroke-width",s=($=r[0].strokeWidth)!=null?$:r[1].strokeWidth),_(e,"viewBox",n="0 0 "+((g=r[0].width)!=null?g:r[1].width)+" "+((h=r[0].height)!=null?h:r[1].height)),_(e,"fill",i=(q=r[0].fill)!=null?q:r[1].fill)},m(a,d){v(a,e,d),m&&m.m(e,null),o=!0},p(a,[d]){var $,g,h,q,L,T;m&&m.p&&(!o||d&4)&&O(m,c,a,a[2],o?ee(c,a[2],d,null):x(a[2]),null),(!o||d&1&&l!==(l=($=a[0].width)!=null?$:a[1].width))&&_(e,"width",l),(!o||d&1&&t!==(t=(g=a[0].height)!=null?g:a[1].height))&&_(e,"height",t),(!o||d&1&&s!==(s=(h=a[0].strokeWidth)!=null?h:a[1].strokeWidth))&&_(e,"stroke-width",s),(!o||d&1&&n!==(n="0 0 "+((q=a[0].width)!=null?q:a[1].width)+" "+((L=a[0].height)!=null?L:a[1].height)))&&_(e,"viewBox",n),(!o||d&1&&i!==(i=(T=a[0].fill)!=null?T:a[1].fill))&&_(e,"fill",i)},i(a){o||(p(m,a),o=!0)},o(a){w(m,a),o=!1},d(a){a&&u(e),m&&m.d(a)}}}function Se(r,e,l){let{$$slots:t={},$$scope:s}=e,{options:n={}}=e;const i={width:24,height:24,fill:"none",strokeWidth:1.5};return r.$$set=o=>{"options"in o&&l(0,n=o.options),"$$scope"in o&&l(2,s=o.$$scope)},[n,i,s,t]}class Qe extends C{constructor(e){super(),W(this,e,Se,Ae,X,{options:0})}}function Ce(r){let e;return{c(){e=he("path"),this.h()},l(l){e=ve(l,"path",{fill:!0,d:!0}),b(e).forEach(u),this.h()},h(){_(e,"fill","currentColor"),_(e,"d","M3 21q-.825 0-1.412-.587Q1 19.825 1 19V7q0-.425.288-.713Q1.575 6 2 6t.713.287Q3 6.575 3 7v12h16q.425 0 .712.288q.288.287.288.712t-.288.712Q19.425 21 19 21Zm4-4q-.825 0-1.412-.587Q5 15.825 5 15V4q0-.825.588-1.413Q6.175 2 7 2h4.175q.4 0 .763.15q.362.15.637.425L14 4h7q.825 0 1.413.588Q23 5.175 23 6v9q0 .825-.587 1.413Q21.825 17 21 17Zm0-2h14V6h-7.825l-2-2H7v11Zm0 0V4v11Z")},m(l,t){v(l,e,t)},p:J,i:J,o:J,d(l){l&&u(e)}}}class We extends C{constructor(e){super(),W(this,e,null,Ce,X,{})}}function Xe(r){let e,l;return e=new We({}),{c(){B(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,s){A(e,t,s),l=!0},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){w(e.$$.fragment,t),l=!1},d(t){S(e,t)}}}function Ye(r){let e,l,t,s,n,i;return l=new Qe({props:{$$slots:{default:[Xe]},$$scope:{ctx:r}}}),{c(){e=y("div"),B(l.$$.fragment),t=G(`
  Docs`),this.h()},l(o){e=D(o,"DIV",{class:!0});var c=b(e);N(l.$$.fragment,c),t=U(c,`
  Docs`),c.forEach(u),this.h()},h(){_(e,"class","docs-button svelte-1mjs1v0")},m(o,c){v(o,e,c),A(l,e,null),I(e,t),s=!0,n||(i=we(e,"click",Ee(r[0])),n=!0)},p(o,[c]){const m={};c&2&&(m.$$scope={dirty:c,ctx:o}),l.$set(m)},i(o){s||(p(l.$$.fragment,o),s=!0)},o(o){w(l.$$.fragment,o),s=!1},d(o){o&&u(e),S(l),n=!1,i()}}}function Ze(r){return[()=>{$e("https://magne.dev/docs")}]}class Pe extends C{constructor(e){super(),W(this,e,Ze,Ye,X,{})}}function je(r){let e;return{c(){e=G("Hello! \u{1F44B}")},l(l){e=U(l,"Hello! \u{1F44B}")},m(l,t){v(l,e,t)},d(l){l&&u(e)}}}function ze(r){let e,l,t,s,n,i,o,c,m,a,d,$,g,h,q,L,T,Y,Z,P,k,M,j;return T=new Ne({props:{imgSrc:"https://avatars.githubusercontent.com/u/46494695",imgAlt:"Portrait of Magne Tenstad"}}),M=new ye({props:{onClick:r[0],pulse:!0,$$slots:{default:[je]},$$scope:{ctx:r}}}),{c(){e=y("div"),l=y("h1"),t=G("Hey, I'm Magne Tenstad \u{1F44B}"),s=H(),n=y("div"),i=y("ul"),o=y("li"),c=G("\u{1F468}\u200D\u{1F393} CS student and TA at NTNU"),m=H(),a=y("li"),d=G("\u{1F4BB} Web Developer at Norsonic"),$=H(),g=y("li"),h=G("\u{1F47E} Hobbyist Game Developer"),q=H(),L=y("div"),B(T.$$.fragment),Y=H(),Z=y("br"),P=H(),k=y("div"),B(M.$$.fragment),this.h()},l(f){e=D(f,"DIV",{style:!0});var E=b(e);l=D(E,"H1",{});var F=b(l);t=U(F,"Hey, I'm Magne Tenstad \u{1F44B}"),F.forEach(u),E.forEach(u),s=V(f),n=D(f,"DIV",{style:!0});var te=b(n);i=D(te,"UL",{});var z=b(i);o=D(z,"LI",{class:!0});var se=b(o);c=U(se,"\u{1F468}\u200D\u{1F393} CS student and TA at NTNU"),se.forEach(u),m=V(z),a=D(z,"LI",{class:!0});var le=b(a);d=U(le,"\u{1F4BB} Web Developer at Norsonic"),le.forEach(u),$=V(z),g=D(z,"LI",{class:!0});var ne=b(g);h=U(ne,"\u{1F47E} Hobbyist Game Developer"),ne.forEach(u),z.forEach(u),te.forEach(u),q=V(f),L=D(f,"DIV",{class:!0});var re=b(L);N(T.$$.fragment,re),re.forEach(u),Y=V(f),Z=D(f,"BR",{}),P=V(f),k=D(f,"DIV",{style:!0});var ie=b(k);N(M.$$.fragment,ie),ie.forEach(u),this.h()},h(){Q(e,"max-width","68%"),Q(e,"transform","translateZ(15px)"),_(o,"class","svelte-1ve5so5"),_(a,"class","svelte-1ve5so5"),_(g,"class","svelte-1ve5so5"),Q(n,"transform","translateZ(15px)"),_(L,"class","portrait-wrapper svelte-1ve5so5"),Q(k,"width","100%"),Q(k,"display","flex"),Q(k,"justify-content","center"),Q(k,"transform","translateZ(20px)")},m(f,E){v(f,e,E),I(e,l),I(l,t),v(f,s,E),v(f,n,E),I(n,i),I(i,o),I(o,c),I(i,m),I(i,a),I(a,d),I(i,$),I(i,g),I(g,h),v(f,q,E),v(f,L,E),A(T,L,null),v(f,Y,E),v(f,Z,E),v(f,P,E),v(f,k,E),A(M,k,null),j=!0},p(f,E){const F={};E&2&&(F.$$scope={dirty:E,ctx:f}),M.$set(F)},i(f){j||(p(T.$$.fragment,f),p(M.$$.fragment,f),j=!0)},o(f){w(T.$$.fragment,f),w(M.$$.fragment,f),j=!1},d(f){f&&u(e),f&&u(s),f&&u(n),f&&u(q),f&&u(L),S(T),f&&u(Y),f&&u(Z),f&&u(P),f&&u(k),S(M)}}}function Ge(r){let e,l,t,s;return e=new Pe({}),t=new He({props:{$$slots:{default:[ze]},$$scope:{ctx:r}}}),{c(){B(e.$$.fragment),l=H(),B(t.$$.fragment)},l(n){N(e.$$.fragment,n),l=V(n),N(t.$$.fragment,n)},m(n,i){A(e,n,i),v(n,l,i),A(t,n,i),s=!0},p(n,[i]){const o={};i&2&&(o.$$scope={dirty:i,ctx:n}),t.$set(o)},i(n){s||(p(e.$$.fragment,n),p(t.$$.fragment,n),s=!0)},o(n){w(e.$$.fragment,n),w(t.$$.fragment,n),s=!1},d(n){S(e,n),n&&u(l),S(t,n)}}}function Ue(r){return[()=>$e("/chat")]}class Ke extends C{constructor(e){super(),W(this,e,Ue,Ge,X,{})}}export{Ke as default};
