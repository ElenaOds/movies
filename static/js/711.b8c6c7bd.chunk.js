"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[711],{536:(n,e,t)=>{t.d(e,{A:()=>s});var a=t(9),i=t(243),r=t(579);const s=n=>{let{video:e,state:t}=n;const{media_type:s,poster_path:c,name:o,title:d,release_date:p,id:x,first_air_date:l}=e;return(0,r.jsx)(i.ee,{children:(0,r.jsxs)(i.ah,{to:"movie"===s?"/movies/".concat(x):"tv"===s?"/tv/".concat(x):"person"===s?"/person/".concat(x):null,id:x,state:t,children:[(0,r.jsx)(i.E9,{src:c?"https://image.tmdb.org/t/p/w300".concat(c):a,alt:"movie"===s?d:o}),(0,r.jsxs)(i.Ox,{children:[(0,r.jsx)(i.ZB,{children:"movie"===s?d.toUpperCase():o.toUpperCase()}),(0,r.jsxs)(i.ij,{children:[(0,r.jsx)(i.c5,{children:"movie"===s?new Date(p).getFullYear():new Date(l).getFullYear()}),(0,r.jsx)(i.c5,{children:"movie"===s?s.charAt(0).toUpperCase()+s.slice(1):s.toUpperCase()})]})]})]},x)},x)}},243:(n,e,t)=>{t.d(e,{E9:()=>w,Ox:()=>u,ZB:()=>y,ah:()=>m,c5:()=>f,ee:()=>h,ij:()=>v});var a,i,r,s,c,o,d,p=t(528),x=t(197),l=t(475);const m=(0,x.Ay)(l.N_)(a||(a=(0,p.A)(["\n   text-decoration: none;\n   display: flex;\n    flex-direction: column;\n"]))),h=x.Ay.li(i||(i=(0,p.A)(["\nwidth: 100%;\nmargin-bottom: 20px;\nbox-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),\n        0px 1px 1px rgba(0, 0, 0, 0.14),\n        0px 2px 1px rgba(0, 0, 0, 0.2);\n\n\n    @media (min-width: 480px) {\n        width: calc((100% - 4 * 10px) / 2);\n        margin: 10px;\n    }\n\n    @media (min-width: 640px) {\n        width: calc((100% - 6 * 10px) / 3);\n      }\n      \n      @media (min-width: 768px) {\n        width: calc((100% - 8 * 10px) / 4);\n      }\n\n      @media (min-width: 1280px) {\n        width: calc((100% - 10 * 10px) / 5);\n      }\n"]))),g="\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 1.2;\n    letter-spacing: 0.02em;\n    ",y=x.Ay.p(r||(r=(0,p.A)(["\n    ","\n    overflow: hidden;\n    color: var(--secondary-text-color);\n    margin-bottom: 4px;\n\n    @media (min-width: 1280px) {\n        font-size: 14px;\n    }\n"])),g),w=x.Ay.img(s||(s=(0,p.A)(["\n    height: 100%;\n"]))),v=x.Ay.div(c||(c=(0,p.A)(["\n    display: flex;\n    justify-content: space-between;\n"]))),f=x.Ay.p(o||(o=(0,p.A)(["\n    ","\n    color: var(--hover-color);\n\n    @media (min-width: 1280px) {\n        font-size: 14px;\n    }\n"])),g),u=x.Ay.div(d||(d=(0,p.A)(["\n    padding: 8px;\n"])))},711:(n,e,t)=>{t.r(e),t.d(e,{default:()=>h});var a,i,r=t(43),s=t(216),c=t(90),o=t(528),d=t(197);const p=d.Ay.section(a||(a=(0,o.A)(["\n    padding: 20px 20px;  \n   \n    @media screen and (min-width: 768px) {\n        padding: 32px 32px;   \n}\n"]))),x=d.Ay.ul(i||(i=(0,o.A)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin: -10px;\n"])));var l=t(536),m=t(579);const h=()=>{const n=(0,s.zy)(),[e,t]=(0,r.useState)([]);return(0,r.useEffect)((()=>{(async()=>{try{const{results:n}=await(0,c.uK)();t([...n]),console.log(n)}catch(n){console.error(n)}})()}),[]),(0,m.jsx)(p,{children:(0,m.jsx)(x,{children:e.map((e=>(0,m.jsx)(l.A,{video:e,state:{from:n}},e.id)))})})}},90:(n,e,t)=>{t.d(e,{Nt:()=>c,Wn:()=>s,hL:()=>d,uK:()=>o});var a=t(154);const i="56fe42c945e3ca855df6abfdcd1328f7",r=a.A.create({baseURL:"https://api.themoviedb.org/3/"}),s=async()=>{const{data:n}=await r.get("trending/all/day",{params:{api_key:i}});return n},c=async()=>{const{data:n}=await r.get("trending/movie/day",{params:{api_key:i}});return n},o=async()=>{const{data:n}=await r.get("trending/tv/day",{params:{api_key:i}});return n},d=async()=>{const{data:n}=await r.get("trending/person/day",{params:{api_key:i}});return n}},9:(n,e,t)=>{n.exports=t.p+"static/media/Noimage.17bf960c27bc4a1254c8.jpg"}}]);
//# sourceMappingURL=711.b8c6c7bd.chunk.js.map