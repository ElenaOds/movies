"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[433],{536:(n,e,t)=>{t.d(e,{A:()=>d});var a=t(9),i=t(243),r=t(579);const d=n=>{let{video:e}=n;const{media_type:t,poster_path:d,name:s,title:p,release_date:o,id:c,first_air_date:x}=e;return(0,r.jsxs)(i.ee,{children:[(0,r.jsx)(i.E9,{src:d?"https://image.tmdb.org/t/p/w300".concat(d):a,alt:"movie"===t?p:s}),(0,r.jsxs)(i.Ox,{children:[(0,r.jsx)(i.ZB,{children:"movie"===t?p.toUpperCase():s.toUpperCase()}),(0,r.jsxs)(i.ij,{children:[(0,r.jsx)(i.c5,{children:"movie"===t?new Date(o).getFullYear():new Date(x).getFullYear()}),(0,r.jsx)(i.c5,{children:"movie"===t?t.charAt(0).toUpperCase()+t.slice(1):t.toUpperCase()})]})]})]},c)}},243:(n,e,t)=>{t.d(e,{E9:()=>m,Ox:()=>y,ZB:()=>h,c5:()=>w,ee:()=>x,ij:()=>g});var a,i,r,d,s,p,o=t(528),c=t(197);const x=c.Ay.li(a||(a=(0,o.A)(["\ndisplay: flex;\nflex-direction: column;\nwidth: 100%;\noverflow: hidden;\nbox-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),\n        0px 1px 1px rgba(0, 0, 0, 0.14),\n        0px 2px 1px rgba(0, 0, 0, 0.2);\n\n\n@media (min-width: 320px) {\n    width: 80%;\n  }\n\n    @media (min-width: 640px) {\n        width: 48%;\n      }\n      \n      @media (min-width: 768px) {\n        width: 31%;\n      }\n\n      @media (min-width: 1280px) {\n        width: 23.7%;\n      }\n"]))),l="\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 1.2;\n    letter-spacing: 0.02em;\n    ",h=c.Ay.p(i||(i=(0,o.A)(["\n    ","\n    overflow: hidden;\n    color: var(--secondary-text-color);\n    margin-bottom: 4px;\n\n    @media (min-width: 1280px) {\n        font-size: 14px;\n    }\n"])),l),m=c.Ay.img(r||(r=(0,o.A)(["\n    height: 100%;\n"]))),g=c.Ay.div(d||(d=(0,o.A)(["\n    display: flex;\n    justify-content: space-between;\n"]))),w=c.Ay.p(s||(s=(0,o.A)(["\n    ","\n    color: var(--hover-color);\n\n    @media (min-width: 1280px) {\n        font-size: 14px;\n    }\n"])),l),y=c.Ay.div(p||(p=(0,o.A)(["\n    padding: 8px;\n"])))},433:(n,e,t)=>{t.r(e),t.d(e,{default:()=>h});var a,i,r=t(43),d=t(90),s=t(528),p=t(197);const o=p.Ay.section(a||(a=(0,s.A)(["\n    padding: 20px 20px;  \n   \n    @media screen and (min-width: 768px) {\n        padding: 32px 32px;   \n}\n"]))),c=p.Ay.ul(i||(i=(0,s.A)(["\n    display: flex;\n    flex-wrap: wrap;\n    gap: 20px;\n    justify-content: center;\n"])));var x=t(536),l=t(579);const h=()=>{const[n,e]=(0,r.useState)([]);return(0,r.useEffect)((()=>{(async()=>{try{const{results:n}=await(0,d.Nt)();e([...n]),console.log(n)}catch(n){console.error(n)}})()}),[]),(0,l.jsx)(o,{children:(0,l.jsx)(c,{children:n.map((n=>(0,l.jsx)(x.A,{video:n},n.id)))})})}},90:(n,e,t)=>{t.d(e,{Nt:()=>s,Wn:()=>d,hL:()=>o,uK:()=>p});var a=t(154);const i="56fe42c945e3ca855df6abfdcd1328f7",r=a.A.create({baseURL:"https://api.themoviedb.org/3/"}),d=async()=>{const{data:n}=await r.get("trending/all/day",{params:{api_key:i}});return n},s=async()=>{const{data:n}=await r.get("trending/movie/day",{params:{api_key:i}});return n},p=async()=>{const{data:n}=await r.get("trending/tv/day",{params:{api_key:i}});return n},o=async()=>{const{data:n}=await r.get("trending/person/day",{params:{api_key:i}});return n}},9:(n,e,t)=>{n.exports=t.p+"static/media/Noimage.17bf960c27bc4a1254c8.jpg"}}]);
//# sourceMappingURL=433.7c5dcb5d.chunk.js.map