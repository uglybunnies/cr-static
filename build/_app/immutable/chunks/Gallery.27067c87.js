import{S as F,i as G,s as I,k as f,l as m,m as _,h as o,n as h,b as g,G as d,H as b,J as H,a as S,c as C,L as v,T as w,U as k,p as u}from"./index.76e64b4f.js";function y(c,e,a){const r=c.slice();return r[1]=e[a],r[3]=a,r}function L(c){let e,a,r,s;return{c(){e=f("img"),this.h()},l(t){e=m(t,"IMG",{src:!0,alt:!0,srcset:!0,sizes:!0}),this.h()},h(){v(e.src,a=c[1].thumbFallback)||h(e,"src",a),h(e,"alt",r=c[1].alt),h(e,"srcset",s=c[1].thumb+" 288w, "+c[1].thumbFallback+" 320w, "+c[1].thumb+" 634w"),h(e,"sizes","(max-width: 600px) 18em, (min-width: 601px) and (max-width: 1024px) 20em, 39em")},m(t,i){g(t,e,i)},p(t,i){i&1&&!v(e.src,a=t[1].thumbFallback)&&h(e,"src",a),i&1&&r!==(r=t[1].alt)&&h(e,"alt",r),i&1&&s!==(s=t[1].thumb+" 288w, "+t[1].thumbFallback+" 320w, "+t[1].thumb+" 634w")&&h(e,"srcset",s)},d(t){t&&o(e)}}}function T(c){let e,a,r=c[1].title+"",s,t,i=c[1].desc+"";return{c(){e=f("div"),a=new w(!1),s=S(),t=new w(!1),this.h()},l(l){e=m(l,"DIV",{class:!0,style:!0});var n=_(e);a=k(n,!1),s=C(n),t=k(n,!1),n.forEach(o),this.h()},h(){a.a=s,t.a=null,h(e,"class","media-slide text-slide"),u(e,"--bg-settings",c[1].bgSettings),u(e,"--copy-color",c[1].copyColor),u(e,"--font-weight",c[1].fontWeight)},m(l,n){g(l,e,n),a.m(r,e),d(e,s),t.m(i,e)},p(l,n){n&1&&r!==(r=l[1].title+"")&&a.p(r),n&1&&i!==(i=l[1].desc+"")&&t.p(i),n&1&&u(e,"--bg-settings",l[1].bgSettings),n&1&&u(e,"--copy-color",l[1].copyColor),n&1&&u(e,"--font-weight",l[1].fontWeight)},d(l){l&&o(e)}}}function E(c){let e,a,r;function s(l,n){return l[1].type==="slide"?T:L}let t=s(c),i=t(c);return{c(){e=f("li"),a=f("a"),i.c(),r=S(),this.h()},l(l){e=m(l,"LI",{});var n=_(e);a=m(n,"A",{href:!0,class:!0});var p=_(a);i.l(p),p.forEach(o),r=C(n),n.forEach(o),this.h()},h(){h(a,"href","#slide-"+(c[3]+1)),h(a,"class","slide")},m(l,n){g(l,e,n),d(e,a),i.m(a,null),d(e,r)},p(l,n){t===(t=s(l))&&i?i.p(l,n):(i.d(1),i=t(l),i&&(i.c(),i.m(a,null)))},d(l){l&&o(e),i.d()}}}function q(c){let e,a,r=c[0],s=[];for(let t=0;t<r.length;t+=1)s[t]=E(y(c,r,t));return{c(){e=f("section"),a=f("ul");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=m(t,"SECTION",{class:!0});var i=_(e);a=m(i,"UL",{class:!0});var l=_(a);for(let n=0;n<s.length;n+=1)s[n].l(l);l.forEach(o),i.forEach(o),this.h()},h(){h(a,"class","thumbs"),h(e,"class","media-gallery")},m(t,i){g(t,e,i),d(e,a);for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(a,null)},p(t,[i]){if(i&1){r=t[0];let l;for(l=0;l<r.length;l+=1){const n=y(t,r,l);s[l]?s[l].p(n,i):(s[l]=E(n),s[l].c(),s[l].m(a,null))}for(;l<s.length;l+=1)s[l].d(1);s.length=r.length}},i:b,o:b,d(t){t&&o(e),H(s,t)}}}function z(c,e,a){let{slides:r}=e;return c.$$set=s=>{"slides"in s&&a(0,r=s.slides)},[r]}class W extends F{constructor(e){super(),G(this,e,z,q,I,{slides:0})}}export{W as G};