(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(9),i=(n(0),n(201)),o={id:"permutations",title:"Permutations.jl",sidebar_label:"Permutations.jl"},p={id:"api/permutations",title:"Permutations.jl",description:"permute_loci!",source:"@site/docs/api/Permutations.md",permalink:"/PopGen.jl/docs/api/permutations",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/api/Permutations.md",lastUpdatedAt:1592513669,sidebar_label:"Permutations.jl",sidebar:"docs",previous:{title:"Manipulate.jl",permalink:"/PopGen.jl/docs/api/manipulate"},next:{title:"Read.jl",permalink:"/PopGen.jl/docs/api/read"}},l=[{value:"<code>permute_loci!</code>",id:"permute_loci",children:[]},{value:"<code>permute_samples!</code>",id:"permute_samples",children:[]},{value:"<code>permute_genotypes!</code>",id:"permute_genotypes",children:[]},{value:"<code>permute_alleles!</code>",id:"permute_alleles",children:[]}],c={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"permute_loci"},Object(i.b)("inlineCode",{parentName:"h3"},"permute_loci!")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),"permute_loci!(data::PopData)\n")),Object(i.b)("p",null,"Edits ",Object(i.b)("inlineCode",{parentName:"p"},"PopData")," in place with loci permuted across populations within\nthe ",Object(i.b)("inlineCode",{parentName:"p"},".loci")," dataframe."),Object(i.b)("h3",{id:"permute_samples"},Object(i.b)("inlineCode",{parentName:"h3"},"permute_samples!")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),"permute_samples!(data::PopData; meta::Bool = false)\n")),Object(i.b)("p",null,"Edits ",Object(i.b)("inlineCode",{parentName:"p"},"PopData")," in place with samples permuted across populations within\nthe ",Object(i.b)("inlineCode",{parentName:"p"},".loci")," dataframe. Since performance is important for many permutations,\nthe default is to only edit the ",Object(i.b)("inlineCode",{parentName:"p"},".loci")," table in place; use ",Object(i.b)("inlineCode",{parentName:"p"},"meta = true"),"\nif you also require the ",Object(i.b)("inlineCode",{parentName:"p"},".meta")," dataframe edited in place."),Object(i.b)("h3",{id:"permute_genotypes"},Object(i.b)("inlineCode",{parentName:"h3"},"permute_genotypes!")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),'permute_genotypes!(data::PopData; by::String = "locus")\n')),Object(i.b)("p",null,"Edits ",Object(i.b)("inlineCode",{parentName:"p"},"PopData")," in place with genotypes permuted across individuals within\nthe ",Object(i.b)("inlineCode",{parentName:"p"},".loci")," dataframe. Use ",Object(i.b)("inlineCode",{parentName:"p"},'by = "population"')," (or ",Object(i.b)("inlineCode",{parentName:"p"},'"pop"'),") to permute genotypes\nwithin populations."),Object(i.b)("h3",{id:"permute_alleles"},Object(i.b)("inlineCode",{parentName:"h3"},"permute_alleles!")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),'permute_alleles!(data::PopData; ploidy::Union{Nothing, Int} = nothing, by::String = "locus")\n')),Object(i.b)("p",null,"Edits ",Object(i.b)("inlineCode",{parentName:"p"},"PopData")," in place with alleles permuted and reconstructed into genotypes\nfor each locus within the ",Object(i.b)("inlineCode",{parentName:"p"},".loci")," dataframe. Use ",Object(i.b)("inlineCode",{parentName:"p"},'by = "population"')," (or ",Object(i.b)("inlineCode",{parentName:"p"},'"pop"'),")\nto permute alleles within populations. If ",Object(i.b)("inlineCode",{parentName:"p"},"ploidy")," is not provided (default ",Object(i.b)("inlineCode",{parentName:"p"},"ploidy = nothing"),"),\nthen ploidy will be identified from the PopData. If performance is important,\nit would be best to identify ploidy in advance and set it to a specific integer."))}u.isMDXComponent=!0},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),s=a,b=d["".concat(o,".").concat(s)]||d[s]||m[s]||i;return n?r.a.createElement(b,p(p({ref:t},c),{},{components:n})):r.a.createElement(b,p({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);