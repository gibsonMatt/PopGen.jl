(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{102:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return r})),a.d(n,"metadata",(function(){return o})),a.d(n,"rightToc",(function(){return l})),a.d(n,"default",(function(){return b}));var t=a(2),c=a(6),i=(a(0),a(165)),r={id:"viewsort",title:"Viewing and sorting",sidebar_label:"Viewing and sorting"},o={id:"tutorials/viewsort",title:"Viewing and sorting",description:"The functions here help you inspect your PopData and pull information from it easily.",source:"@site/docs/tutorials/view_and_sort.md",permalink:"/PopGen.jl/docs/tutorials/viewsort",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/tutorials/view_and_sort.md",sidebar_label:"Viewing and sorting",sidebar:"docs",previous:{title:"Location and population data",permalink:"/PopGen.jl/docs/tutorials/populations"},next:{title:"Hardy-Weinberg Equilibrium",permalink:"/PopGen.jl/docs/analyses/hardyweinberg"}},l=[{value:"Individuals / Samples",id:"individuals--samples",children:[{value:"view individuals&#39; names",id:"view-individuals-names",children:[]}]},{value:"Display Specific Loci and/or Samples",id:"display-specific-loci-andor-samples",children:[{value:"Get loci names",id:"get-loci-names",children:[]},{value:"View genotypes at a locus",id:"view-genotypes-at-a-locus",children:[]}]},{value:"View genotypes by sample (or anything)",id:"view-genotypes-by-sample-or-anything",children:[]},{value:"Missing Data",id:"missing-data",children:[]}],p={rightToc:l};function b(e){var n=e.components,a=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},p,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The functions here help you inspect your ",Object(i.b)("inlineCode",{parentName:"p"},"PopData")," and pull information from it easily."),Object(i.b)("h2",{id:"individuals--samples"},"Individuals / Samples"),Object(i.b)("h3",{id:"view-individuals-names"},"view individuals' names"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),"samples(data::PopData)\n")),Object(i.b)("p",null,"View individual/sample names in a ",Object(i.b)("inlineCode",{parentName:"p"},"PopData"),".\n:::: tabs card stretch\n::: tab samples"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),"julia> samples(sharks)\n")),Object(i.b)("p",null,":::\n::: tab output"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),'212-element Array{String,1}:\n "cc_001" \n "cc_002" \n "cc_003" \n "cc_005" \n "cc_007" \n "cc_008" \n "cc_009" \n "cc_010" \n "cc_012" \n "cc_013" \n \u22ee        \n "seg_023"\n "seg_024"\n "seg_025"\n "seg_026"\n "seg_027"\n "seg_028"\n "seg_029"\n "seg_030"\n "seg_031"\n')),Object(i.b)("p",null,":::\n::::"),Object(i.b)("h2",{id:"display-specific-loci-andor-samples"},"Display Specific Loci and/or Samples"),Object(i.b)("h3",{id:"get-loci-names"},"Get loci names"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),"loci(data::PopData)\n")),Object(i.b)("p",null,"Returns a vector of strings of the loci names in a ",Object(i.b)("inlineCode",{parentName:"p"},"PopData"),"\n:::: tabs card stretch\n::: tab loci"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),"julia> loci(sharks)\n")),Object(i.b)("p",null,":::\n::: tab output"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),'2213-element Array{String,1}:\n "contig_35208"\n "contig_23109"\n "contig_4493" \n "contig_10742"\n "contig_14898"\n "contig_8483" \n "contig_8065" \n "contig_14708"\n "contig_2307" \n \u22ee             \n "contig_24711"\n "contig_18959"\n "contig_43517"\n "contig_27356"\n "contig_475"  \n "contig_19384"\n "contig_22368"\n "contig_2784" \n')),Object(i.b)("p",null,":::\n::::"),Object(i.b)("h3",{id:"view-genotypes-at-a-locus"},"View genotypes at a locus"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),"locus(data::PopData, locus::String)\n")),Object(i.b)("p",null,"Default shows all genotypes for all individuals. Returns a Vector.\n:::: tabs card stretch\n::: tab all loci"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),'julia> locus(sharks, "contig_2784")\n')),Object(i.b)("p",null,":::\n::: tab output"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"212-element Array{Union{Missing, Tuple{Int8,Int8}},1}:\n (1, 1)\n (1, 1)\n (1, 1)\n (1, 1)\n (1, 1)\n (1, 1)\n (1, 1)\n (1, 1)\n (1, 1)\n \u22ee\n (1, 1)\n (1, 1)\n (1, 1)\n (1, 1)\n missing\n (1, 1)\n (1, 1)\n (1, 1)\n")),Object(i.b)("p",null,"::::"),Object(i.b)("h2",{id:"view-genotypes-by-sample-or-anything"},"View genotypes by sample (or anything)"),Object(i.b)("p",null,"This can be done fairly easily using DataFramesMeta macro ",Object(i.b)("inlineCode",{parentName:"p"},"@where"),"\n:::: tabs card stretch\n::: tab single sample"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),'julia> @where(sharks.loci, :name .== "cc_001")\n2213\xd74 DataFrame\n\u2502 Row  \u2502 name   \u2502 population     \u2502 locus        \u2502 genotype \u2502\n\u2502      \u2502 Cat\u2026   \u2502 Categorical\u2026   \u2502 Categorical\u2026 \u2502 Tuple\u2026?  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1    \u2502 cc_001 \u2502 Cape Canaveral \u2502 contig_35208 \u2502 (1, 2)   \u2502\n\u2502 2    \u2502 cc_001 \u2502 Cape Canaveral \u2502 contig_23109 \u2502 (1, 1)   \u2502\n\u2502 3    \u2502 cc_001 \u2502 Cape Canaveral \u2502 contig_4493  \u2502 (1, 2)   \u2502\n\u2502 4    \u2502 cc_001 \u2502 Cape Canaveral \u2502 contig_10742 \u2502 (1, 1)   \u2502\n\u2502 5    \u2502 cc_001 \u2502 Cape Canaveral \u2502 contig_14898 \u2502 (1, 2)   \u2502\n\u2502 6    \u2502 cc_001 \u2502 Cape Canaveral \u2502 contig_8483  \u2502 (1, 1)   \u2502\n\u22ee\n\u2502 2207 \u2502 cc_001 \u2502 Cape Canaveral \u2502 contig_18959 \u2502 (1, 2)   \u2502\n\u2502 2208 \u2502 cc_001 \u2502 Cape Canaveral \u2502 contig_43517 \u2502 (1, 1)   \u2502\n\u2502 2209 \u2502 cc_001 \u2502 Cape Canaveral \u2502 contig_27356 \u2502 (1, 1)   \u2502\n\u2502 2210 \u2502 cc_001 \u2502 Cape Canaveral \u2502 contig_475   \u2502 (1, 2)   \u2502\n\u2502 2211 \u2502 cc_001 \u2502 Cape Canaveral \u2502 contig_19384 \u2502 (2, 2)   \u2502\n\u2502 2212 \u2502 cc_001 \u2502 Cape Canaveral \u2502 contig_22368 \u2502 (1, 1)   \u2502\n\u2502 2213 \u2502 cc_001 \u2502 Cape Canaveral \u2502 contig_2784  \u2502 (1, 1)   \u2502\n')),Object(i.b)("p",null,":::\n::: tab multiple samples"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),'julia> @where(sharks.loci, :name .\u2208 Ref(["cc_001", "cc_002"]))\n4426\xd74 DataFrame\n\u2502 Row  \u2502 name   \u2502 population     \u2502 locus        \u2502 genotype \u2502\n\u2502      \u2502 Cat\u2026   \u2502 Categorical\u2026   \u2502 Categorical\u2026 \u2502 Tuple\u2026?  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1    \u2502 cc_001 \u2502 Cape Canaveral \u2502 contig_35208 \u2502 (1, 2)   \u2502\n\u2502 2    \u2502 cc_002 \u2502 Cape Canaveral \u2502 contig_35208 \u2502 (1, 2)   \u2502\n\u2502 3    \u2502 cc_001 \u2502 Cape Canaveral \u2502 contig_23109 \u2502 (1, 1)   \u2502\n\u2502 4    \u2502 cc_002 \u2502 Cape Canaveral \u2502 contig_23109 \u2502 (1, 2)   \u2502\n\u2502 5    \u2502 cc_001 \u2502 Cape Canaveral \u2502 contig_4493  \u2502 (1, 2)   \u2502\n\u2502 6    \u2502 cc_002 \u2502 Cape Canaveral \u2502 contig_4493  \u2502 (1, 1)   \u2502\n\u22ee\n\u2502 4420 \u2502 cc_002 \u2502 Cape Canaveral \u2502 contig_475   \u2502 (1, 2)   \u2502\n\u2502 4421 \u2502 cc_001 \u2502 Cape Canaveral \u2502 contig_19384 \u2502 (2, 2)   \u2502\n\u2502 4422 \u2502 cc_002 \u2502 Cape Canaveral \u2502 contig_19384 \u2502 (2, 2)   \u2502\n\u2502 4423 \u2502 cc_001 \u2502 Cape Canaveral \u2502 contig_22368 \u2502 (1, 1)   \u2502\n\u2502 4424 \u2502 cc_002 \u2502 Cape Canaveral \u2502 contig_22368 \u2502 (1, 1)   \u2502\n\u2502 4425 \u2502 cc_001 \u2502 Cape Canaveral \u2502 contig_2784  \u2502 (1, 1)   \u2502\n\u2502 4426 \u2502 cc_002 \u2502 Cape Canaveral \u2502 contig_2784  \u2502 (1, 1)   \u2502\n')),Object(i.b)("p",null,':::\n::: tab name and locus\nIt also means that you can combine different queries with "and" ',Object(i.b)("inlineCode",{parentName:"p"},"&&"),' and "or" ',Object(i.b)("inlineCode",{parentName:"p"},"||"),". Here is an example of an approach combining a name and locus criteria:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),'julia> @where(sharks.loci, :name .\u2208 Ref(["cc_001", "cc_002"]), :locus .== "contig_2784")\n2\xd74 DataFrame\n\u2502 Row \u2502 name   \u2502 population     \u2502 locus       \u2502 genotype \u2502\n\u2502     \u2502 Cat\u2026   \u2502 Categorical\u2026   \u2502 Cat\u2026        \u2502 Tuple\u2026?  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1   \u2502 cc_001 \u2502 Cape Canaveral \u2502 contig_2784 \u2502 (1, 1)   \u2502\n\u2502 2   \u2502 cc_002 \u2502 Cape Canaveral \u2502 contig_2784 \u2502 (1, 1)   \u2502\n')),Object(i.b)("p",null,":::\n::::"),Object(i.b)("h2",{id:"missing-data"},"Missing Data"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),'missing(data::PopData; by::String = "sample")\n')),Object(i.b)("p",null,"Get missing genotype information in a ",Object(i.b)("inlineCode",{parentName:"p"},"PopData"),". Specify a mode of operation using the ",Object(i.b)("inlineCode",{parentName:"p"},"by =")," keyword to return a table corresponding with that missing information type."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(t.a)({parentName:"tr"},{align:"center"}),"by"),Object(i.b)("th",Object(t.a)({parentName:"tr"},{align:"center"}),"alternative name"),Object(i.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"what it does"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(t.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},'"sample"')),Object(i.b)("td",Object(t.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},'"individual"')),Object(i.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"returns a count of missing loci per individual (default)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(t.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},'"pop"')),Object(i.b)("td",Object(t.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},'"population"')),Object(i.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"returns a count of missing genotypes per population")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(t.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},'"locus"')),Object(i.b)("td",Object(t.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},'"loci"')),Object(i.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"returns a count of missing genotypes per locus")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(t.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},'"full"')),Object(i.b)("td",Object(t.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},'"detailed"')),Object(i.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"returns a count of missing genotypes per locus per population")))),Object(i.b)("p",null,":::: tabs card stretch\n::: tab sample"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"julia> missing(sharks)\n212\xd72 DataFrame\n\u2502 Row \u2502 name    \u2502 missing \u2502\n\u2502     \u2502 Cat\u2026    \u2502 Int64   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1   \u2502 cc_001  \u2502 124     \u2502\n\u2502 2   \u2502 cc_002  \u2502 94      \u2502\n\u2502 3   \u2502 cc_003  \u2502 100     \u2502\n\u2502 4   \u2502 cc_005  \u2502 0       \u2502\n\u2502 5   \u2502 cc_007  \u2502 2       \u2502\n\u2502 6   \u2502 cc_008  \u2502 1       \u2502\n\u22ee\n\u2502 206 \u2502 seg_025 \u2502 0       \u2502\n\u2502 207 \u2502 seg_026 \u2502 0       \u2502\n\u2502 208 \u2502 seg_027 \u2502 2       \u2502\n\u2502 209 \u2502 seg_028 \u2502 25      \u2502\n\u2502 210 \u2502 seg_029 \u2502 0       \u2502\n\u2502 211 \u2502 seg_030 \u2502 1       \u2502\n\u2502 212 \u2502 seg_031 \u2502 1       \u2502\n")),Object(i.b)("p",null,":::\n::: tab pop"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),'julia> missing(sharks, by = "pop")\n7\xd72 DataFrame\n\u2502 Row \u2502 population     \u2502 missing \u2502\n\u2502     \u2502 Categorical\u2026   \u2502 Int64   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1   \u2502 Florida Keys   \u2502 1246    \u2502\n\u2502 2   \u2502 Cape Canaveral \u2502 666     \u2502\n\u2502 3   \u2502 Mideast Gulf   \u2502 99      \u2502\n\u2502 4   \u2502 Georgia        \u2502 425     \u2502\n\u2502 5   \u2502 Northeast Gulf \u2502 474     \u2502\n\u2502 6   \u2502 Southeast Gulf \u2502 1504    \u2502\n\u2502 7   \u2502 South Carolina \u2502 234     \u2502\n')),Object(i.b)("p",null,":::\n::: tab locus"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),'julia> missing(sharks, by = "locus")\n2213\xd72 DataFrame\n\u2502 Row  \u2502 locus        \u2502 missing \u2502\n\u2502      \u2502 Categorical\u2026 \u2502 Int64   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1    \u2502 contig_35208 \u2502 0       \u2502\n\u2502 2    \u2502 contig_23109 \u2502 6       \u2502\n\u2502 3    \u2502 contig_4493  \u2502 3       \u2502\n\u2502 4    \u2502 contig_10742 \u2502 2       \u2502\n\u2502 5    \u2502 contig_14898 \u2502 0       \u2502\n\u2502 6    \u2502 contig_8483  \u2502 0       \u2502\n\u22ee\n\u2502 2207 \u2502 contig_18959 \u2502 0       \u2502\n\u2502 2208 \u2502 contig_43517 \u2502 6       \u2502\n\u2502 2209 \u2502 contig_27356 \u2502 2       \u2502\n\u2502 2210 \u2502 contig_475   \u2502 0       \u2502\n\u2502 2211 \u2502 contig_19384 \u2502 5       \u2502\n\u2502 2212 \u2502 contig_22368 \u2502 3       \u2502\n\u2502 2213 \u2502 contig_2784  \u2502 7       \u2502\n')),Object(i.b)("p",null,":::\n::: tab full"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),'julia> missing(sharks, by = "full")\n15491\xd73 DataFrame\n\u2502 Row   \u2502 locus        \u2502 population     \u2502 missing \u2502\n\u2502       \u2502 Categorical\u2026 \u2502 Categorical\u2026   \u2502 Int64   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1     \u2502 contig_35208 \u2502 Cape Canaveral \u2502 0       \u2502\n\u2502 2     \u2502 contig_35208 \u2502 Georgia        \u2502 0       \u2502\n\u2502 3     \u2502 contig_35208 \u2502 South Carolina \u2502 0       \u2502\n\u2502 4     \u2502 contig_35208 \u2502 Florida Keys   \u2502 0       \u2502\n\u2502 5     \u2502 contig_35208 \u2502 Mideast Gulf   \u2502 0       \u2502\n\u2502 6     \u2502 contig_35208 \u2502 Northeast Gulf \u2502 0       \u2502\n\u22ee\n\u2502 15485 \u2502 contig_2784  \u2502 Cape Canaveral \u2502 0       \u2502\n\u2502 15486 \u2502 contig_2784  \u2502 Georgia        \u2502 2       \u2502\n\u2502 15487 \u2502 contig_2784  \u2502 South Carolina \u2502 1       \u2502\n\u2502 15488 \u2502 contig_2784  \u2502 Florida Keys   \u2502 2       \u2502\n\u2502 15489 \u2502 contig_2784  \u2502 Mideast Gulf   \u2502 1       \u2502\n\u2502 15490 \u2502 contig_2784  \u2502 Northeast Gulf \u2502 0       \u2502\n\u2502 15491 \u2502 contig_2784  \u2502 Southeast Gulf \u2502 1       \u2502\n')),Object(i.b)("p",null,":::\n::::"),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"alternative names")),Object(i.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Each mode of operation has an extra synonymous (alternative) name just because we can and want you to have the option of more explicitly legible code. If you get the ",Object(i.b)("inlineCode",{parentName:"p"},"by = "),"  argument wrong, it will let you know with an error message and run the default ",Object(i.b)("inlineCode",{parentName:"p"},'"sample"')," mode anyway."))))}b.isMDXComponent=!0},165:function(e,n,a){"use strict";a.d(n,"a",(function(){return s})),a.d(n,"b",(function(){return d}));var t=a(0),c=a.n(t);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,c=function(e,n){if(null==e)return{};var a,t,c={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(c[a]=e[a]);return c}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var p=c.a.createContext({}),b=function(e){var n=c.a.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},s=function(e){var n=b(e.components);return c.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},g=c.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(a),g=t,d=s["".concat(r,".").concat(g)]||s[g]||u[g]||i;return a?c.a.createElement(d,o(o({ref:n},p),{},{components:a})):c.a.createElement(d,o({ref:n},p))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,r=new Array(i);r[0]=g;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:t,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"}}]);