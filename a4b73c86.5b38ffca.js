(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{139:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(2),o=a(6),r=(a(0),a(165)),i={id:"vcf",title:"Variant Call Format",sidebar_label:"Variant Call Format"},c={id:"io/vcf",title:"Variant Call Format",description:"Import a BCF/VCF file as a PopObj",source:"@site/docs/io/variantcall.md",permalink:"/docs/io/vcf",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/io/variantcall.md",sidebar_label:"Variant Call Format",sidebar:"docs",previous:{title:"Genepop format",permalink:"/docs/io/genepop"},next:{title:"Provided datasets",permalink:"/docs/io/datasets"}},l=[{value:"Import a BCF/VCF file as a <code>PopObj</code>",id:"import-a-bcfvcf-file-as-a-popobj",children:[]},{value:"What BCF/VCF files contain and lack",id:"what-bcfvcf-files-contain-and-lack",children:[]},{value:"Format",id:"format",children:[]},{value:"Acknowledgements",id:"acknowledgements",children:[]}],p={rightToc:l};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"import-a-bcfvcf-file-as-a-popobj"},"Import a BCF/VCF file as a ",Object(r.b)("inlineCode",{parentName:"h2"},"PopObj")),Object(r.b)("p",null,"PopGen.jl provides a simple command ",Object(r.b)("inlineCode",{parentName:"p"},"vcf")," to import a VCF file as a ",Object(r.b)("inlineCode",{parentName:"p"},"PopObj"),", which requires only the name of the file and nothing else. While not strictly necessary, if you have polyploid or mixed-ploidy samples, this import method may be most efficient."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),'potato = vcf("/home/data/russet_potatoes.vcf")\n')),Object(r.b)("p",null,"and similar for ",Object(r.b)("inlineCode",{parentName:"p"},"bcf")," formatted files:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),'cabbage = bcf("/home/data/nappa_cabbage.bcf")\n')),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Windows users")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Make sure to change your backslashes ",Object(r.b)("inlineCode",{parentName:"p"},"\\")," to forward slashes ",Object(r.b)("inlineCode",{parentName:"p"},"/")," "))),Object(r.b)("h2",{id:"what-bcfvcf-files-contain-and-lack"},"What BCF/VCF files contain and lack"),Object(r.b)("p",null,"Due to the nature of the file format, importing variant call files ",Object(r.b)("strong",{parentName:"p"},"will")," provide:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"sample names"),Object(r.b)("li",{parentName:"ul"},"ploidy of each sample"),Object(r.b)("li",{parentName:"ul"},"locus names"),Object(r.b)("li",{parentName:"ul"},"genotypes")),Object(r.b)("p",null,"but they ",Object(r.b)("strong",{parentName:"p"},"will not")," provide:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"population information"),Object(r.b)("li",{parentName:"ul"},"latitude or longitude")),Object(r.b)("p",null,"This means you will need to add that information separately afterwards. Location data (which is optional!) can be added to the ",Object(r.b)("inlineCode",{parentName:"p"},"PopData")," with the ",Object(r.b)("inlineCode",{parentName:"p"},"locations!")," command. Population names (mandatory!) can be added using ",Object(r.b)("inlineCode",{parentName:"p"},"populations!()")),Object(r.b)("h2",{id:"format"},"Format"),Object(r.b)("p",null,"Variant Call Format (or ",Object(r.b)("em",{parentName:"p"},"VCF"),") files already follow a format standard, and while there is some wiggle-room for optional values, PopGen.jl only requires the core/mandatory components of a VCF, meaning problems should hopefully not arise regardless of which variant caller you are using (although we use ",Object(r.b)("inlineCode",{parentName:"p"},"Freebayes")," ourselves). Please open an issue if they do, or reach out to us on the community Slack."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Filter files beforehand")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Keep in mind, BCF/VCF files need to be filtered ",Object(r.b)("strong",{parentName:"p"},"before")," importing them into PopGen.jl. There is no and will be no VCF-filtering functionality to this package, as it is outside of the purpose of PopGen.jl. Refer to ",Object(r.b)("inlineCode",{parentName:"p"},"vcftools"),", ",Object(r.b)("inlineCode",{parentName:"p"},"bcftools"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"vcflib")," to filter your sequence data. "))),Object(r.b)("h2",{id:"acknowledgements"},"Acknowledgements"),Object(r.b)("p",null,"The majority of the BCF/VCF reader is thanks to the tremendous efforts of Ben J. Ward and the BioJulia contributors involved in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/BioJulia/GeneticVariation.jl"}),"GeneticVariation.jl"),", which we use to parse your files into ",Object(r.b)("inlineCode",{parentName:"p"},"PopObj")," format. If you love the file importer, then give those folks your thanks. If something is wrong and/or you hate the importer, blame us (and please ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/pdimens/PopGen.jl/issues"}),"open up an issue")," \ud83d\ude05)."))}b.isMDXComponent=!0},165:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(a),d=n,u=s["".concat(i,".").concat(d)]||s[d]||m[d]||r;return a?o.a.createElement(u,c(c({ref:t},p),{},{components:a})):o.a.createElement(u,c({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<r;p++)i[p]=a[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);