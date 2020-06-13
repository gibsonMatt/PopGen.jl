(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{194:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return c})),a.d(n,"metadata",(function(){return o})),a.d(n,"rightToc",(function(){return i})),a.d(n,"default",(function(){return b}));var t=a(2),l=a(9),r=(a(0),a(201)),c={id:"allelefreq",title:"AlleleFreq.jl",sidebar_label:"AlleleFreq.jl"},o={id:"api/allelefreq",title:"AlleleFreq.jl",description:"alleles",source:"@site/docs/api/AlleleFreq.md",permalink:"/PopGen.jl/docs/api/allelefreq",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/api/AlleleFreq.md",lastUpdatedAt:1591478309,sidebar_label:"AlleleFreq.jl",sidebar:"docs",previous:{title:"API",permalink:"/PopGen.jl/docs/api/api"},next:{title:"Datasets.jl",permalink:"/PopGen.jl/docs/api/datasets"}},i=[{value:"<code>alleles</code>",id:"alleles",children:[]},{value:"<code>unique_alleles</code>",id:"unique_alleles",children:[]},{value:"<code>allele_freq</code>",id:"allele_freq",children:[]},{value:"<code>allele_freq</code>",id:"allele_freq-1",children:[]},{value:"<code>avg_allele_freq</code>",id:"avg_allele_freq",children:[]},{value:"<code>allele_freq_vec</code>",id:"allele_freq_vec",children:[]},{value:"<code>geno_count_observed</code>",id:"geno_count_observed",children:[]},{value:"<code>geno_count_expected</code>",id:"geno_count_expected",children:[]},{value:"<code>geno_freq</code>",id:"geno_freq",children:[]},{value:"<code>geno_freq</code>",id:"geno_freq-1",children:[]},{value:"<code>geno_freq</code>",id:"geno_freq-2",children:[]},{value:"<code>geno_freq_expected</code>",id:"geno_freq_expected",children:[]}],p={rightToc:i};function b(e){var n=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},p,a,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"alleles"},Object(r.b)("inlineCode",{parentName:"h3"},"alleles")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),"alleles(locus::T) where T<:GenotypeArray\n")),Object(r.b)("p",null,"Return an array of all the non-missing alleles present in a locus."),Object(r.b)("h3",{id:"unique_alleles"},Object(r.b)("inlineCode",{parentName:"h3"},"unique_alleles")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),"unique_alleles(locus::T) where T<:GenotypeArray\n")),Object(r.b)("p",null,"Return an array of all the unique non-missing alleles of a locus."),Object(r.b)("h3",{id:"allele_freq"},Object(r.b)("inlineCode",{parentName:"h3"},"allele_freq")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),"allele_freq(locus::T) where T<:GenotypeArray\n")),Object(r.b)("p",null,"Return a ",Object(r.b)("inlineCode",{parentName:"p"},"Dict")," of allele frequencies of a single locus in a ",Object(r.b)("inlineCode",{parentName:"p"},"PopData"),"\nobject."),Object(r.b)("h3",{id:"allele_freq-1"},Object(r.b)("inlineCode",{parentName:"h3"},"allele_freq")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),"allele_freq(data::PopData, locus::String; population::Bool = false)\n")),Object(r.b)("p",null,"Return a ",Object(r.b)("inlineCode",{parentName:"p"},"Dict")," of allele frequencies of a single locus in a ",Object(r.b)("inlineCode",{parentName:"p"},"PopData"),"\nobject. Use ",Object(r.b)("inlineCode",{parentName:"p"},"population = true")," to return a table of allele frequencies\nof that locus per population."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),'cats = nancycats()\nallele_freq(cats, "fca8")\nallele_freq(cats, "fca8", population = true)\n')),Object(r.b)("h3",{id:"avg_allele_freq"},Object(r.b)("inlineCode",{parentName:"h3"},"avg_allele_freq")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),"avg_allele_freq(allele_dicts::AbstractVector{T}) where T<:Dict{Int16,Float32}\n")),Object(r.b)("p",null,"Takes a Vector of Dicts generated by ",Object(r.b)("inlineCode",{parentName:"p"},"allele_freq")," and returns a Dict of the average\nallele frequencies. This is typically done to calculate average allele frequencies\nacross populations."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"Example"))),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"cats = nancycats();\nalleles_df = DataFrames.combine(\n    groupby(cats.loci, [:locus, :population]),\n    :genotype => allele_freq => :alleles\n);\nDataFrames.combine(\n    groupby(alleles_df, :locus),\n    :alleles => (i -> sum(avg_allele_freq(i).^2)) => :avg_freq\n)\n")),Object(r.b)("h3",{id:"allele_freq_vec"},Object(r.b)("inlineCode",{parentName:"h3"},"allele_freq_vec")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),"allele_freq_vec(locus::T) where T<:GenotypeArray\n")),Object(r.b)("p",null,"Return a Vector of allele frequencies of a single locus in a ",Object(r.b)("inlineCode",{parentName:"p"},"PopData")," object. Similar to ",Object(r.b)("inlineCode",{parentName:"p"},"allele_freq()"),", except it returns only the frequencies, without the allele names, meaning they can be in any order. This can be useful for getting the expected genotype frequencies."),Object(r.b)("h3",{id:"geno_count_observed"},Object(r.b)("inlineCode",{parentName:"h3"},"geno_count_observed")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),"geno_count_observed(locus::T) where T<:GenotypeArray\n")),Object(r.b)("p",null,"Return a ",Object(r.b)("inlineCode",{parentName:"p"},"Dict")," of genotype counts of a single locus in a\n",Object(r.b)("inlineCode",{parentName:"p"},"PopData")," object."),Object(r.b)("h3",{id:"geno_count_expected"},Object(r.b)("inlineCode",{parentName:"h3"},"geno_count_expected")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),"geno_count_expected(locus::T) where T<:GenotypeArray\n")),Object(r.b)("p",null,"Return a ",Object(r.b)("inlineCode",{parentName:"p"},"Dict")," of the expected genotype counts of a single locus in a\n",Object(r.b)("inlineCode",{parentName:"p"},"PopData")," object. Expected counts are calculated as the product of observed allele frequencies multiplied by the number of non-missing genotypes."),Object(r.b)("h3",{id:"geno_freq"},Object(r.b)("inlineCode",{parentName:"h3"},"geno_freq")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),"geno_freq(locus::T) where T<:GenotypeArray\n`PopData` object.\n")),Object(r.b)("p",null,"Return a ",Object(r.b)("inlineCode",{parentName:"p"},"Dict")," of genotype frequencies of a single locus in a"),Object(r.b)("h3",{id:"geno_freq-1"},Object(r.b)("inlineCode",{parentName:"h3"},"geno_freq")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),"geno_freq(data::PopData, locus::String; population::Bool = false)\n")),Object(r.b)("p",null,"Return a ",Object(r.b)("inlineCode",{parentName:"p"},"Dict")," of genotype frequencies of a single locus in a ",Object(r.b)("inlineCode",{parentName:"p"},"PopData"),"\nobject. Use ",Object(r.b)("inlineCode",{parentName:"p"},"population = true")," to return a table of genotype frequencies\nof that locus per population."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),'cats = nancycats()\ngeno_freq(cats, "fca8")\ngeno_freq(cats, "fca8", population = true)\n')),Object(r.b)("h3",{id:"geno_freq-2"},Object(r.b)("inlineCode",{parentName:"h3"},"geno_freq")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),"geno_freq_expected(locus::T) where T<:GenotypeArray\n")),Object(r.b)("p",null,"Return a ",Object(r.b)("inlineCode",{parentName:"p"},"Dict")," of the expected genotype frequencies of a single locus in a ",Object(r.b)("inlineCode",{parentName:"p"},"PopData")," object. Expected frequencies are calculated as the product of\nobserved allele frequencies."),Object(r.b)("h3",{id:"geno_freq_expected"},Object(r.b)("inlineCode",{parentName:"h3"},"geno_freq_expected")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),"geno_freq_expected(data::PopData, locus::String; population::Bool = false)\n")),Object(r.b)("p",null,"Return a ",Object(r.b)("inlineCode",{parentName:"p"},"Dict")," of expected genotype frequencies of a single locus in a\n",Object(r.b)("inlineCode",{parentName:"p"},"PopData")," object. Use ",Object(r.b)("inlineCode",{parentName:"p"},"population = true")," to return a table of expected genotype frequencies of that locus per population."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),'cats = nancycats()\ngeno_freq_expeced(cats, "fca8")\ngeno_freq_expected(cats, "fca8", population = true)\n')))}b.isMDXComponent=!0},201:function(e,n,a){"use strict";a.d(n,"a",(function(){return u})),a.d(n,"b",(function(){return f}));var t=a(0),l=a.n(t);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function c(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?c(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=l.a.createContext({}),b=function(e){var n=l.a.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},u=function(e){var n=b(e.components);return l.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},d=l.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=b(a),d=t,f=u["".concat(c,".").concat(d)]||u[d]||s[d]||r;return a?l.a.createElement(f,o(o({ref:n},p),{},{components:a})):l.a.createElement(f,o({ref:n},p))}));function f(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,c=new Array(r);c[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:t,c[1]=o;for(var p=2;p<r;p++)c[p]=a[p];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);