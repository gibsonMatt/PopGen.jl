(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(9),o=(n(0),n(204)),i={id:"hardyweinberg",title:"HardyWeinberg.jl",sidebar_label:"HardyWeinberg.jl"},c={id:"api/hardyweinberg",isDocsHomePage:!1,title:"HardyWeinberg.jl",description:"locuschisq",source:"@site/docs/api/HardyWeinberg.md",permalink:"/PopGen.jl/docs/api/hardyweinberg",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/api/HardyWeinberg.md",lastUpdatedAt:1591241785,sidebar_label:"HardyWeinberg.jl",sidebar:"docs",previous:{title:"Genepop.jl",permalink:"/PopGen.jl/docs/api/genepop"},next:{title:"Heterozygosity.jl",permalink:"/PopGen.jl/docs/api/heterozygosity"}},l=[{value:"<code>locus_chi_sq</code>",id:"locus_chi_sq",children:[]},{value:"<code>hwe_test</code>",id:"hwe_test",children:[]}],p={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"locus_chi_sq"},Object(o.b)("inlineCode",{parentName:"h3"},"locus_chi_sq")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-julia"}),"locus_chi_sq(locus::T) where T <: GenotypeArray\n")),Object(o.b)("p",null,"Calculate the chi square statistic and p-value for a locus\nReturns a tuple with chi-square statistic, degrees of freedom, and p-value."),Object(o.b)("h3",{id:"hwe_test"},Object(o.b)("inlineCode",{parentName:"h3"},"hwe_test")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-julia"}),'    hwe_test(data::PopData; by_pop::Bool = false; correction = "none")\n')),Object(o.b)("p",null,"Calculate chi-squared test of HWE for each locus and returns observed and\nexpected heterozygosity with chi-squared, degrees of freedom and p-values for each locus. Use ",Object(o.b)("inlineCode",{parentName:"p"},"by_pop = true")," to perform this separately for each population (default: by_pop = false) and return a NamedTuple of DataFrames with the names corresponding to the population names. Use ",Object(o.b)("inlineCode",{parentName:"p"},"correction =")," to specify a P-value adjustment method for multiple testing."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"correction methods (case insensitive)")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"bonferroni"')," : Bonferroni adjustment"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"holm"')," : Holm adjustment"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"hochberg"')," : Hochberg adjustment"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"bh"')," : Benjamini-Hochberg adjustment"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"by"')," : Benjamini-Yekutieli adjustment"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"bl"'),"  : Benjamini-Liu adjustment"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"hommel"')," : Hommel adjustment"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"sidak"')," : \u0160id\xe1k adjustment"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"forwardstop"')," or ",Object(o.b)("inlineCode",{parentName:"li"},'"fs"')," : Forward-Stop adjustment"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"bc"')," : Barber-Cande\u0300s adjustment")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-julia"}),'hwe_test(gulfsharks(), correction = "bh")\nhwe_test(gulfsharks(), by_pop = true, correction = "bh")\n')))}b.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||s[d]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);