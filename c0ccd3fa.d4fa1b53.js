(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(2),a=n(6),i=(n(0),n(165)),r={id:"community",title:"Community",sidebar_label:"Community"},s={id:"getting_started/community",title:"Community",description:"Join the Slack channel!",source:"@site/docs/getting_started/community.md",permalink:"/PopGen.jl/docs/getting_started/community",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/getting_started/community.md",sidebar_label:"Community"},c=[{value:"Join the Slack channel!",id:"join-the-slack-channel",children:[]},{value:"Contributing",id:"contributing",children:[{value:"Improving available code",id:"improving-available-code",children:[]},{value:"Pointing out bugs",id:"pointing-out-bugs",children:[]},{value:"Writing new functions or methods for existing functions",id:"writing-new-functions-or-methods-for-existing-functions",children:[]},{value:"Writing or editing the docs",id:"writing-or-editing-the-docs",children:[]},{value:"Spreading the word",id:"spreading-the-word",children:[]},{value:"Kindness and encouragement",id:"kindness-and-encouragement",children:[]}]}],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"join-the-slack-channel"},"Join the Slack channel!"),Object(i.b)("p",null,"Have questions, want to talk population genetics, or have ideas?"),Object(i.b)("p",null," ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://join.slack.com/t/popgenjl/shared_invite/zt-deam65n8-DuBs2z1oDtsbBuRplJW~Pg"}),Object(i.b)("img",Object(o.a)({parentName:"a"},{src:"https://img.shields.io/badge/slack-join%20PopGen.jl-9d72b1?style=for-the-badge&logo=slack",alt:"alt text"})))),Object(i.b)("h2",{id:"contributing"},"Contributing"),Object(i.b)("p",null,"We absolutely welcome contributors to this package/project! See below for ways you can help PopGen.jl grow."),Object(i.b)("h3",{id:"improving-available-code"},"Improving available code"),Object(i.b)("p",null,"By nature, most (if not all) users of PopGen.jl will be biologists, and will not come from a strong computational background. Heck, the co-creators of the package don't even have a strong computation background (we're very good at nodding and smiling). There are various ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.julialang.org/en/v1/manual/style-guide/index.html"}),"best-practices")," documented in Julia that help users write code to get the best performance out of the language, and sometimes a function that gets written isn't as performant as it can be. If you come up with faster and/or more memory efficient alternatives to the functions in PopGen.jl, we wholeheartedly encourage you to open up a issue or pull request and we'll try to integrate that into the PopGen.jl ecosystem."),Object(i.b)("h3",{id:"pointing-out-bugs"},"Pointing out bugs"),Object(i.b)("p",null,"No one is perfect (except maybe Betty White), so it's very possible that mistakes get made, especially as more users begin adopting and contributing to PopGen.jl (we hope). If something isn't functioning correctly, please open an issue ",Object(i.b)("strong",{parentName:"p"},"that includes a minimum working example"),". We definitely want to figure out what's going on, and we need as much information as possible to try to diagnose issues as they come up."),Object(i.b)("p",null,"Julia's overall performance is rooted in really clever dispatching to the LLVM compiler, and the underlying system benefits most from stricter typing, wherever we can enforce it, and we expect that this strictness may result in extra issues being raised from niche use-cases. "),Object(i.b)("h4",{id:"testing-your-data-against-the-available-code"},"Testing your data against the available code"),Object(i.b)("p",null,"During PopGen.jl's development, we generally use ",Object(i.b)("inlineCode",{parentName:"p"},"nancycats")," and ",Object(i.b)("inlineCode",{parentName:"p"},"gulfsharks")," for just about everything. Those two datasets cover the range of what we expect are common use-cases; a smaller microsatellite dataset (nancycats) and a medium sized SNP dataset (gulfsharks). However, we know better than to put all of our faith into ",Object(i.b)("em",{parentName:"p"},"n")," = 2, so please use your own data and mess around with PopGen.jl and let us know if something doesn't jive."),Object(i.b)("h3",{id:"writing-new-functions-or-methods-for-existing-functions"},"Writing new functions or methods for existing functions"),Object(i.b)("p",null,"By all means, extend PopGen.jl to include all sorts of analyses! GST, Tajima's D, AMOVA, SAMOVA, porting ",Object(i.b)("inlineCode",{parentName:"p"},"BOTTLENECK"),", coalescence, etc. Yes please! Part of the intent behind PopGen.jl is to have it act as a sort of sandbox to play around in, which is why most of the package's basic calculations are modularized (see the hidden API). As a design choice, it made the most sense to have written the package in this way, because many population genetic calculations are built on top of other ones (like allele frequency or heterozygosity)."),Object(i.b)("h3",{id:"writing-or-editing-the-docs"},"Writing or editing the docs"),Object(i.b)("p",null,"The documentation of PopGen.jl must be approachable and ",Object(i.b)("em",{parentName:"p"},"helpful"),'. Helpful in the sense that if someone was tasked with "looking for siblings" in their data and didn\'t know exactly how, that the documentation for the ',Object(i.b)("inlineCode",{parentName:"p"},"relatedness")," command would provide some kind of ",Object(i.b)("em",{parentName:"p"},"context")," as to what it does and how, with figures, and with helpful in-line links to the source publications or more in-depth online resources. This package is not intended for only expert-level users, which means that the documentation ",Object(i.b)("strong",{parentName:"p"},"needs to be accessible to entry-level users"),". By no means will the documentation be the ultimate compendium of all population genetics knowledge, but it ",Object(i.b)("em",{parentName:"p"},"will")," be helpful beyond simply stating a command, its arguments, and a one-liner of what it does."),Object(i.b)("p",null,"If you want to contribute but don't feel comfortable with the programming side of things, then we encourage you to help grow the documentation. Clarify the language in some sections, or maybe provide a useful diagram where one doesn't exist. Or typos. There are always typoes."),Object(i.b)("h3",{id:"spreading-the-word"},"Spreading the word"),Object(i.b)("p",null,"The very soul of open-source projects relies on people wanting to get involved. Spread the word \ud83d\ude03. If you are into social media, give us a shoutout. We can't imagine why you'd want to, but if you insisted on using a hashtag, then #PopGenjl is probably the sensible choice. "),Object(i.b)("h3",{id:"kindness-and-encouragement"},"Kindness and encouragement"),Object(i.b)("p",null,"This stuff can be hard. As the package grows, we expect that we'll be dealing with a growing number of issues/complaints. A little thumbs-up \ud83d\udc4d or prayer-hands \ud83d\ude4f emoji (Pavel's personal favorite) can go a long way. Or cook up your own cactus graphic (like the one below) and send it to us. Who doesn't love adorable cactuses doing human things?"),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/img/terminal_cactus.png",alt:"error_cactus"}))))}u.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(r,".").concat(h)]||d[h]||p[h]||i;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);