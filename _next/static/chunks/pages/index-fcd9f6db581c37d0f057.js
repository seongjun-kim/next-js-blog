(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4184:function(e,t){var n;!function(){"use strict";var s={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var a=i.apply(null,n);a&&e.push(a)}}else if("object"===r)if(n.toString===Object.prototype.toString)for(var l in n)s.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},1297:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var s=n(5893),i=n(3855),r=n(4790);function a(e){var t=e.dateString,n=(0,i.Z)(t);return(0,s.jsx)("time",{dateTime:t,children:(0,r.Z)(n,"LLLL d, yyyy")})}},3445:function(e,t,n){"use strict";n.d(t,{y:function(){return _},Z:function(){return m}});var s=n(5893),i=n(9008),r=n(3151),a=n.n(r),l=n(367),c=n.n(l),o=n(1664),d=n(1163),h=n(4155),u="Seongjun Kim",_="zoonizone Blog.";function m(e){var t=e.children,n=(0,d.useRouter)().pathname||"",r="/_error"===n,l="/"===n;return(0,s.jsxs)("div",{className:a().container,children:[(0,s.jsxs)(i.default,{children:[(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,s.jsx)("meta",{name:"description",content:"Learn how to build a personal website using Next.js"}),(0,s.jsx)("meta",{property:"og:image",content:"https://og-image.vercel.app/".concat(encodeURI(_),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg")}),(0,s.jsx)("meta",{name:"og:title",content:_}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),(0,s.jsx)("header",{className:a().header,children:l?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:h.env.BACKEND_URL+"/images/emoji.jpg",className:c().borderCircle,height:144,width:144,alt:u}),(0,s.jsx)("h1",{className:c().heading2Xl,children:u})]}):(0,s.jsx)(s.Fragment,{children:r?(0,s.jsx)(s.Fragment,{}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.default,{href:"/",as:h.env.BACKEND_URL,children:(0,s.jsx)("a",{children:(0,s.jsx)("img",{src:h.env.BACKEND_URL+"/images/emoji.jpg",className:c().borderCircle,height:108,width:108,alt:u})})}),(0,s.jsx)("h2",{className:c().headingLg,children:(0,s.jsx)(o.default,{href:"/",as:h.env.BACKEND_URL,children:(0,s.jsx)("a",{className:c().colorInherit,children:u})})})]})})}),(0,s.jsx)("main",{children:t}),!l&&(0,s.jsx)("div",{className:a().backToHome,children:(0,s.jsx)(o.default,{href:"/",as:h.env.BACKEND_URL,children:(0,s.jsx)("a",{children:"\u2190 Back to home"})})})]})}},6124:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return f},default:function(){return g}});var s=n(5893),i=n(6156),r=n(9008),a=n(3445),l=n(367),c=n.n(l),o=n(4184),d=n.n(o),h=n(7294),u=n(1664),_=n(1297),m=n(4155),f=!0;function g(e){var t,n=e.allPostsData,l=(0,h.useState)("first"),o=l[0],f=l[1];return setTimeout((function(){f("default")}),2e3),(0,s.jsxs)(a.Z,{home:!0,children:[(0,s.jsx)(r.default,{children:(0,s.jsx)("title",{children:a.y})}),(0,s.jsxs)("section",{className:c().headingMd,children:[(0,s.jsx)("p",{children:"Blog."}),(0,s.jsxs)("p",{children:["I made this blog by"," ",(0,s.jsx)("a",{className:d()((t={},(0,i.Z)(t,c().first,"first"===o),(0,i.Z)(t,c().a,"default"===o),t)),href:"https://nextjs.org/learn",children:"Next.js tutorial"}),"."]}),(0,s.jsx)("p",{children:(0,s.jsx)(u.default,{href:"/posts",as:m.env.BACKEND_URL+"/posts",children:(0,s.jsx)("a",{children:"Posts"})})}),(0,s.jsx)("p",{children:(0,s.jsx)(u.default,{href:"/comments",as:m.env.BACKEND_URL+"/comments",children:(0,s.jsx)("a",{children:"Comments"})})})]}),(0,s.jsxs)("section",{className:"".concat(c().headingMd," ").concat(c().padding1px),children:[(0,s.jsx)("h2",{className:c().headingLg,children:"Blog"}),(0,s.jsx)("ul",{className:c().list,children:null===n||void 0===n?void 0:n.map((function(e){var t=e.id,n=e.date,i=e.title;return(0,s.jsxs)("li",{className:c().listItem,children:[(0,s.jsx)(u.default,{href:"/posts/".concat(t),as:m.env.BACKEND_URL+"/posts/".concat(t),children:(0,s.jsx)("a",{children:i})}),(0,s.jsx)("br",{}),(0,s.jsx)("small",{className:c().lightText,children:(0,s.jsx)(_.Z,{dateString:n})})]},t)}))})]})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6124)}])},3151:function(e){e.exports={container:"layout_container__2t4v2",header:"layout_header__2rhWq",backToHome:"layout_backToHome__1vZsp"}},367:function(e){e.exports={heading2Xl:"utils_heading2Xl__1I65m",headingXl:"utils_headingXl__1XecN",headingLg:"utils_headingLg__de7p0",headingMd:"utils_headingMd__3de6G",borderCircle:"utils_borderCircle__13qdJ",colorInherit:"utils_colorInherit__3Gudf",padding1px:"utils_padding1px__oCny8",list:"utils_list__S7_pe",listItem:"utils_listItem__2eJpJ",lightText:"utils_lightText__12Ckm",first:"utils_first__f4kjL"}}},function(e){e.O(0,[347,522,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);