(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[721],{3490:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/article/[id]",function(){return s(9892)}])},228:function(e,t,s){"use strict";var n=s(5893);t.Z=function(e){var t=e.url,s=e.name,l=e.active;return"home"===s?(0,n.jsx)("a",{href:"/",className:"text-gray-600 dark:text-gray-200",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})})}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"mx-5 text-gray-500 dark:text-gray-300",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})}),l?(0,n.jsx)("a",{href:t,className:"hover:underline cursor-pointer text-gray-500",children:s}):(0,n.jsx)("div",{className:"text-black cursor-not-allowed font-extrabold",children:s})]})}},9892:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return v}});var n=s(5893),l=s(4051),r=s.n(l),i=s(7294),a=s(1163),c=s(228),o=s(9669),d=s.n(o);function x(e,t,s,n,l,r,i){try{var a=e[r](i),c=a.value}catch(o){return void s(o)}a.done?t(c):Promise.resolve(c).then(n,l)}function u(e){return function(){var t=this,s=arguments;return new Promise((function(n,l){var r=e.apply(t,s);function i(e){x(r,n,l,i,a,"next",e)}function a(e){x(r,n,l,i,a,"throw",e)}i(void 0)}))}}var m=function(){var e=(0,a.useRouter)(),t=(0,i.useState)(),s=t[0],l=t[1],o=(0,i.useState)(),x=o[0],m=o[1],h=function(){var t=u(r().mark((function t(){var s;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d().get("".concat("http://localhost:4545","/blog/article/").concat(e.query.id));case 2:s=t.sent,l(s.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=u(r().mark((function t(){var s,n,l,i,a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=[],t.next=3,d().get("".concat("http://localhost:4545","/blog/articlesPaginate/?page=0&size=10"));case 3:for(n=t.sent,l=n.data.dataList.filter((function(t){return!0!==t.status&&e.query.id!==t.id})),i=0;i<3;i++)a=Math.round(Math.random()*(l.length-1)),s.push(l[a]),l.splice(a,1);m(s);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,i.useEffect)((function(){h(),v()}),[e.query.id]),(0,n.jsx)("section",{className:"text-gray-600 body-font",children:(0,n.jsxs)("div",{className:"container px-5 mx-auto",children:[(0,n.jsx)("div",{className:"flex justify-between mb-4",children:(0,n.jsxs)("div",{className:"flex items-center mb-3 mt-3",children:[(0,n.jsx)(c.Z,{url:"/",name:"home",active:!0}),(0,n.jsx)(c.Z,{url:"/blog/",name:"Blog",active:!0}),(0,n.jsx)(c.Z,{url:"/blog/".concat(e.query.id,"}"),name:null===s||void 0===s?void 0:s.title,active:!1})]})}),(0,n.jsxs)("div",{className:"flex flex-wrap w-full mb-5 items-center justify-center",children:[(0,n.jsx)("h1",{className:"sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 text-center w-full mt-12",children:null===s||void 0===s?void 0:s.title}),(0,n.jsx)("p",{className:"font-light text-center w-1/2 mt-5",children:null===s||void 0===s?void 0:s.description})]}),(0,n.jsx)("div",{className:"bg-cover bg-center"}),(0,n.jsxs)("div",{className:"grid grid-cols-6 mt-16",children:[(0,n.jsx)("div",{className:"sticky top-0",children:(0,n.jsxs)("div",{className:"flex flex-col items-start justify-start",children:[(0,n.jsxs)("button",{className:"bg-blue-500 px-4 py-2 m-1 font-semibold text-white inline-flex items-center space-x-2 rounded",children:[(0,n.jsx)("svg",{className:"w-5 h-5 fill-current",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),(0,n.jsx)("span",{children:"Facebook"})]}),(0,n.jsxs)("button",{className:"bg-blue-300 px-4 py-2 m-1 font-semibold text-white inline-flex items-center space-x-2 rounded",children:[(0,n.jsx)("svg",{className:"w-5 h-5 fill-current",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"})}),(0,n.jsx)("span",{children:"Twitter"})]}),(0,n.jsxs)("button",{className:"bg-red-500 px-4 py-2 m-1 font-semibold text-white inline-flex items-center space-x-2 rounded",children:[(0,n.jsx)("svg",{className:"w-5 h-5 fill-current",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"})}),(0,n.jsx)("span",{children:"Reddit"})]}),(0,n.jsxs)("button",{className:"bg-pink-600 px-4 py-2 m-1 font-semibold text-white inline-flex items-center space-x-2 rounded",children:[(0,n.jsxs)("svg",{className:"w-5 h-5 fill-current",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("title",{children:"Pinterest icon"}),(0,n.jsx)("path",{d:"M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"})]}),(0,n.jsx)("span",{children:"Pinterest"})]})]})}),(0,n.jsx)("div",{className:"col-span-5",children:(0,n.jsx)("p",{dangerouslySetInnerHTML:{__html:null===s||void 0===s?void 0:s.text}})})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"flex flex-wrap w-full mb-5 items-center justify-center",children:[(0,n.jsx)("h1",{className:"sm:text-3xl text-2xl font-medium title-font text-gray-900 text-center w-full mt-12 mb-12",children:"Lire d\u2019autres actualit\xe9s Meltrip"}),null===x||void 0===x?void 0:x.map((function(t){return(0,n.jsx)("div",{className:"p-4 md:w-1/3",children:(0,n.jsxs)("div",{className:"h-full overflow-hidden",children:[(0,n.jsx)("img",{className:"lg:h-48 md:h-36 w-full object-cover object-center",src:null===t||void 0===t?void 0:t.pictureURL,alt:"blog"}),(0,n.jsxs)("div",{className:"p-6",children:[(0,n.jsx)("h2",{className:"tracking-widest text-xs title-font font-medium text-gray-400 mb-1",children:"CATEGORY"}),(0,n.jsx)("h1",{className:"title-font text-lg font-medium text-gray-900 mb-3",children:null===t||void 0===t?void 0:t.id}),(0,n.jsx)("p",{className:"leading-relaxed mb-3",children:null===t||void 0===t?void 0:t.description}),(0,n.jsx)("div",{className:"flex items-center flex-wrap",children:(0,n.jsxs)("div",{className:"text-meltrip-primary inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer hover:underline",onClick:function(){return e.push("/blog/article/".concat(null===t||void 0===t?void 0:t.id))},children:["En savoir plus",(0,n.jsxs)("svg",{className:"w-4 h-4 ml-2",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",children:[(0,n.jsx)("path",{d:"M5 12h14"}),(0,n.jsx)("path",{d:"M12 5l7 7-7 7"})]})]})})]})]})},null===t||void 0===t?void 0:t.id)}))]})})]})})},h=s(3344),v=function(){return(0,n.jsx)(h.default,{children:(0,n.jsx)(m,{})})}}},function(e){e.O(0,[927,669,344,774,888,179],(function(){return t=3490,e(e.s=t);var t}));var t=e.O();_N_E=t}]);