"""
    allele_freq(x::Array{Union{Missing, Tuple},1})
Calculate allele counts for a single locus of a `PopObj`. Returns a `Dict` of
allele's and their frequencies.
"""
function allele_freq(x::Array{Union{Missing,Tuple},1})
    d = Dict()
    for row in x
        # sum up missing
        if row === missing
            continue
        else
        # sum up alleles
            for allele in row
                d[allele] = get!(d, allele, 0) + 1
            end
        end
    end
    total = values(d) |> sum    # sum of all non-missing alleles
    [d[i] = d[i] / total for i in keys(d)]  # allele count / sum
    return d
end


"""
    allele_freq(x::SubArray{Union{Missing, Tuple},1})
Calculate allele counts for a single locus of a `PopObj` split by population
using `group()`. Returns a `Dict` of allele's and their frequencies.
"""
function allele_freq(x::SubArray{Union{Missing,Tuple},1})
    d = Dict()
    for row in x
        # sum up missing
        if row === missing
            continue
        else
        # sum up alleles
            for allele in row
                d[allele] = get!(d, allele, 0) + 1
            end
        end
    end
    total = values(d) |> sum    # sum of all non-missing alleles
    [d[i] = d[i] / total for i in keys(d)]  # allele count / sum
    return d
end


"""
    geno_freq(x::Array{Union{Missing, Tuple},1})
Calculate genotype frequencies of all loci in a `PopObj`. Returns a `Dict` of
genotypes and their frequencies.
"""
function geno_freq(x::Array{Union{Missing,Tuple},1})
    d = Dict()
    # conditional testing if all genos are missing
    ismissing.(x) |> unique == [true] && return missing
    for row in x
        # sum up missing
        if row === missing
            continue
        else
        # sum up non-missing genotypes
            d[row] = get!(d, row, 0) + 1
        end
    end
    total = values(d) |> sum    # sum of all non-missing genotypes
    [d[i] = d[i] / total for i in keys(d)] # genotype count/total
    return d
end

"""
    geno_freq(x::SubArray{Union{Missing, Tuple},1})
Calculate genotype frequencies of all loci in `PopObj` split
by population using `group()`. Returns a `Dict` of genotypes and their frequencies.
"""
function geno_freq(x::SubArray{Union{Missing,Tuple},1})
    d = Dict()
    # conditional testing if all genos are missing
    ismissing.(x) |> unique == [true] && return missing
    for row in x
        # sum up missing
        if row === missing
            continue
        else
        # sum up non-missing genotypes
            d[row] = get!(d, row, 0) + 1
        end
    end
    total = values(d) |> sum    # sum of all non-missing genotypes
    [d[i] = d[i] / total for i in keys(d)] # genotype count/total
    return d
end

"""
    get_genotype(x::PopObj; sample::String, locus::String)
Return the genotype of a specific sample for specific locus in a `PopObj`.
This is a barebones variant to `isolate_genotypes` that is ~1000x faster and
suitable for development.

`get_genotype(nancycats, sample = "N115" , locus = "fca8")`

"""
function get_genotype(x::PopObj; sample::String, locus::String)
    idx = findfirst(i -> i == sample, x.samples.name)
    return getindex(x.loci[!, Symbol(locus)], idx)
end

"""
    get_sample_genotypes(x::PopObj, sample::String)
Return all the genotypes of a specific sample in a `PopObj`.
This is an extension for the internal function `get_genotype`.

`get_sample_genotypes(nancycats(), "N115")`
"""
function get_sample_genotypes(x::PopObj, sample::String)
    idx = findfirst(i -> i == sample, x.samples.name)
    map(i -> i[idx] , eachcol(x.loci))
end
