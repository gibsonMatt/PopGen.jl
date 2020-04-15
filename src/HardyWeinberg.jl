export hwe_test, hwe

"""
    locus_chi_sq(locus::T) where T <: GenotypeArray
Calculate the chi square statistic and p-value for a locus
Returns a tuple with chi-square statistic, degrees of freedom, and p-value
"""
function chisq_locus(locus::T) where T <: GenotypeArray
    ## Get expected number of genotypes in a locus
    expected = geno_count_expected(locus)

    ## Get observed number of genotypes in a locus
    observed = geno_count_observed(locus)

    chisq_stat = expected
    @inbounds for genotype in keys(expected)
        o = get(observed, genotype, 0)
        e = get(expected, genotype, 0)
        chisq_stat[genotype] = (o - e)^2 / e
    end
    chisq_stat = values(chisq_stat) |> sum
    n_geno_exp = length(expected)
    n_alleles = length(unique_alleles(locus))
    #return n_geno_exp, n_alleles
    df = n_geno_exp - n_alleles

    if df > 0
        chisq_dist = Distributions.Chisq(df)
        p_val = 1 - Distributions.cdf(chisq_dist, chisq_stat)
    else
        p_val = missing
    end
    return (chisq_stat, df, p_val)
end


"""
    hwe_test(data::PopData; by_pop::Bool = false; correction = "none")
Calculate chi-squared test of HWE for each locus and returns observed and
expected heterozygosity with chi-squared, degrees of freedom and p-values for
each locus. Use `by_pop = true` to perform this separately for each population
(default: by_pop = false) and return a NamedTuple of DataFrames with the names
corresponding to the population names. Use `correction =` to specify a P-value
adjustment method for multiple testing.

#### example
`hwe_test(gulfsharks(), correction = "bh")` \n
`hwe_test(gulfsharks(), by_pop = true, correction = "bh")` \n


### `correction` methods (case insensitive)
- `"bonferroni"` : Bonferroni adjustment
- `"holm"` : Holm adjustment
- `"hochberg"` : Hochberg adjustment
- `"bh"` : Benjamini-Hochberg adjustment
- `"by"` : Benjamini-Yekutieli adjustment
- `"bl"`  : Benjamini-Liu adjustment
- `"hommel"` : Hommel adjustment
- `"sidak"` : Šidák adjustment
- `"forward stop"` or `"fs"` : Forward-Stop adjustment
- `"bc"` : Barber-Candès adjustment
"""
@inline function hwe_test(data::PopData; by_pop::Bool = false, correction::String = "none")
    if !by_pop
        tmp = @groupby data.loci :locus {chisq = chisq_locus(:genotype)}
        out_table = @map tmp {:locus, chisq = getindex(:chisq, 1), df = getindex(:chisq, 2), P =  getindex(:chisq, 3)}
    else
        tmp = @groupby data.loci (:locus, :population) {chisq = chisq_locus(:genotype)}
        out_table = @map tmp {:locus, :population, chisq = getindex(:chisq, 1), df = getindex(:chisq, 2), P =  getindex(:chisq, 3)}
    end
    if correction == "none"
        return out_table
    else
        # remove any spaces from the corection method and create the adjustment columname
        # the whitespace removal is really just for "forward stop"
        column_name = Symbol("P_"*filter(i -> !isspace(i), correction))
        transform(out_table, column_name => multitest_missing(out_table.columns.P, correction))
    end
end

const hwe = hwe_test
