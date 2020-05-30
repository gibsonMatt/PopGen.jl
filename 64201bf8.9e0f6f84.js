(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(6),i=(n(0),n(165)),r={id:"exclusion",title:"Data exclusion",sidebar_label:"Data Exclusion"},c={id:"tutorials/exclusion",title:"Data exclusion",description:"This section covers situations where one may want to remove samples or loci from PopData. By design, removal functions do not alter your original PopData, so you always have a backup handy (but don't forget to assign a name to the new PopData). Since the exclusion functions don't alter the original PopData, they do not end with a bang !.",source:"@site/docs/tutorials/exclusion.md",permalink:"/docs/tutorials/exclusion",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorials/exclusion.md",sidebar_label:"Data Exclusion",sidebar:"docs",previous:{title:"Accessing elements",permalink:"/docs/tutorials/accessing"},next:{title:"Location and population data",permalink:"/docs/tutorials/populations"}},l=[{value:"Exclude samples",id:"exclude-samples",children:[]},{value:"Exclude loci",id:"exclude-loci",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This section covers situations where one may want to remove samples or loci from ",Object(i.b)("inlineCode",{parentName:"p"},"PopData"),". By design, removal functions ",Object(i.b)("em",{parentName:"p"},"do not")," alter your original ",Object(i.b)("inlineCode",{parentName:"p"},"PopData"),", so you always have a backup handy (but don't forget to assign a name to the new ",Object(i.b)("inlineCode",{parentName:"p"},"PopData"),"). Since the exclusion functions don't alter the original ",Object(i.b)("inlineCode",{parentName:"p"},"PopData"),", they do not end with a bang ",Object(i.b)("inlineCode",{parentName:"p"},"!"),". "),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"alias functions")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"For the exclusion commands on this page, we made it so the words ",Object(i.b)("inlineCode",{parentName:"p"},"omit")," and ",Object(i.b)("inlineCode",{parentName:"p"},"remove")," are interchangeable with ",Object(i.b)("inlineCode",{parentName:"p"},"exclude"),", meaning  ",Object(i.b)("inlineCode",{parentName:"p"},"remove_samples")," and ",Object(i.b)("inlineCode",{parentName:"p"},"omit_loci")," are the same exact functions as their ",Object(i.b)("inlineCode",{parentName:"p"},"exclude")," variants. This was done so you can use them interchangeably and you wont' need to remember the specific name to perform these basic actions. Maybe you just prefer the word ",Object(i.b)("inlineCode",{parentName:"p"},"omit"),". We're not here to judge."))),Object(i.b)("h2",{id:"exclude-samples"},"Exclude samples"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),"exclude_samples(data::PopObj, samp_id::Union{String, Vector{String}})\n")),Object(i.b)("p",null,"Returns a new ",Object(i.b)("inlineCode",{parentName:"p"},"PopData")," object without the sample or samples provided. Input can be a single sample, or an array of samples. Will output an entire ",Object(i.b)("inlineCode",{parentName:"p"},"PopData"),", so use a semicolon after the command if you don't want the entire object printed to your screen. Use ",Object(i.b)("inlineCode",{parentName:"p"},"summary"),"  if you want to confirm that the samples were removed. This command will inform you if samples were not found in the data. "),Object(i.b)("p",null,":::: tabs card stretch\n::: tab single individual"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),'julia> fewer_sharks = exclude_samples(sharks, "cc_001") \nPopData Object\n  Marker type: SNP\n  Ploidy: 2\n  Number of individuals: 211\n  Number of loci: 2213\n  Populations: 7\n  Longitude: present with 0 missing\n  Latitude: present with 0 missing\n')),Object(i.b)("p",null,":::\n::: tab multiple individuals"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),'julia> lots_fewer_sharks = remove_samples(sharks, ["cc_001", "cc_002", "cc_003"]) \nPopData Object\n  Marker type: SNP\n  Ploidy: 2\n  Number of individuals: 209\n  Number of loci: 2213\n  Populations: 7\n  Longitude: present with 0 missing\n  Latitude: present with 0 missing\n')),Object(i.b)("p",null,":::\n::::"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"sample not found!")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If removing a single sample and it is not found in the PopData, an error will be returned. However, if removing multiple samples, you will receive a notice above the PopData output indicating which individuals were not found, while still removing the ones that were present."))),Object(i.b)("h2",{id:"exclude-loci"},"Exclude loci"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),"exclude_loci(data::PopObj, loci::Union{String, Vector{String}})\n")),Object(i.b)("p",null,"Returns a new ",Object(i.b)("inlineCode",{parentName:"p"},"PopData")," object without the locus or loci provided. Input can be a single locus, or an array of loci, all as Strings. Will output an entire ",Object(i.b)("inlineCode",{parentName:"p"},"PopData"),", so use a semicolon after the command if you don't want the entire object printed to your screen. Use ",Object(i.b)("inlineCode",{parentName:"p"},"summary"),"  if you want to confirm that the loci were removed. This command will inform you if loci were not found in the data."),Object(i.b)("p",null,":::: tabs card stretch\n::: tab single locus"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),'julia> fewer_shark_loci = exclude_loci(sharks, "contig_475") \nPopData Object\n  Marker type: SNP\n  Ploidy: 2\n  Number of individuals: 212\n  Number of loci: 2212\n  Populations: 7\n  Longitude: present with 0 missing\n  Latitude: present with 0 missing\n')),Object(i.b)("p",null,":::\n::: tab multiple loci"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),'julia> lots_fewer_loci = remove_loci(sharks, ["contig_475", "contig_2784", "contig_8065"]) \nPopData Object\n  Marker type: SNP\n  Ploidy: 2\n  Number of individuals: 212\n  Number of loci: 2210\n  Populations: 7\n  Longitude: present with 0 missing\n  Latitude: present with 0 missing\n')),Object(i.b)("p",null,":::\n::::"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"locus not found!")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If removing a single locus and it is not found in the PopData, an error will be returned. However, if removing multiple loci, you will receive a notice above the PopData summary indicating which loci were not found, while removing the ones that were. If none of the loci specified were found, it will return an error."))))}p.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(r,".").concat(d)]||u[d]||b[d]||i;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);