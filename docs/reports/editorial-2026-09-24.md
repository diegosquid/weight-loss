# Editorial revision — September 24, 2026

## Scope and rationale

Today's scheduled review is `content/metabolism/muscle-and-metabolism.mdx`, retaining its URL and original publication date of March 20, 2024. Updated date is September 24, 2026. No new or future queued article was published. Work is isolated on the coordinator's daily branch; the owner's four untracked reports remain untouched.

The old text overstated the daily calorie advantage of muscle, used an unsupported activity-calorie table, conflated adding muscle with replacing fat, generalized lean-mass losses and prescribed rigid training/protein targets. The revision answers the core search question directly, explains the measurement limitations and replaces those claims with bounded evidence. It also removes unsupported age-related and sleep-effect assertions rather than retaining uncited precision.

## First-party search observations

- Bing, correct metabolicscience.org property, Web page table, September 16–22: this article had **174 impressions, 3 clicks, 1.72% CTR and average position 3.40**. These are page metrics, not commercial events or unique people.
- Its associated-query table included questions about increased muscle and metabolic rate, calories per pound/kilogram at rest, lean-mass loss and evidence for resistance training. The highest displayed query had 7 impressions and no clicks; several related phrases had 4 impressions each. This supports an explanatory title and evidence-first answer, not a claim of large buyer demand.
- Search Console, correct domain property and exact article filter, Web search, August 27–September 23: **0 clicks, 0 impressions, no query rows**. This is the displayed filtered result, not an indexing diagnosis or site-wide zero. Initial access attempts were in the wrong Chrome profile; the connected work profile provided access without changing account permissions.
- No ClickBank sales or revenue report was evaluated today; weekly reconciliation remains Friday's task. Do not infer purchases from these search observations.

## Sources and corrections

Research checked September 24, 2026:

- Wang et al., PMID 20962155, DOI `10.3945/ajcn.2010.29885`: tissue-model estimates and applicability limits. Arithmetic now distinguishes adding tissue from a same-weight substitution and is explicitly hypothetical.
- Look et al., PMID 39996356 / PMC11965027: DXA terminology and the SURMOUNT-1 substudy, with population, duration, sponsor and limits identified. The publisher's correction, DOI `10.1111/dom.70050`, was read and linked; its figure-unit correction is acknowledged.
- Binmahfoz et al., PMID 40909191 / PMC12406911: randomized-trial synthesis, outcome-specific certainty and longer-duration limitations. No guaranteed muscle preservation, resting-metabolism increase or added scale loss is claimed.
- CDC adult activity guidance: general activity targets, distinguished from an individual program.
- Joint GLP-1 nutrition advisory, PMID 40452753 / PMC12125019: nutrition, training and functional assessment, without individualized protein doses or medication instructions.
- Pontzer et al., PMID 34385400: body-composition-adjusted expenditure across adulthood, with population-level limits.
- NHS Strength and Flex video page: free alternative and suitability guidance.

Where the web reader could not load NCBI pages, public abstracts/full-text XML were read through the Europe PMC API; source XML receipts remain outside Git in the editorial state directory. No credentials or private reporting keys were exposed. Primary journal/publisher records and official public-health guidance support the revision; secondary search snippets were not used as clinical evidence.

## Commercial path and validation

The article still links to the beginner-workout guide, subscription/cancellation guide and disclosed FITin56 assessment using its existing fixed source `mm`. The commercial callout now follows the educational explanation, with a visible commission disclosure, free alternative and explicit limits on product evidence. No direct paid link, new offer, product-price claim or tracking configuration was added.

Six operational tests, production build (177 generated pages), affiliate-pilot verification and SEO export validation (171 canonical pages) passed. Titles, descriptions, JSON-LD, links and footnote targets passed validation; original publication and new modification dates were checked. At an actual 390 × 844 browser viewport, page width equaled scroll width (384 px); the 480 px table scrolled inside its 352 px container by 128 px. The title, dates, callout and disclosure were visually inspected; all 15 rendered footnote references resolved.

This is a preparation record, not proof of publication. Completion requires the public release hash, exact public/export article comparison, public metadata and links, actual mobile inspection and an isolated QA journey. Dated production, article and browser receipts are stored in `~/.local/state/metabolic-science/editorial/`; only then does `editorial-job.mjs complete` record success. IndexNow acceptance is logged independently and is not proof of indexing, ranking or sales.
