import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import ts from 'typescript';
import matter from 'gray-matter';

// Validate the exported purchase path and historical URL/attribution invariants.
const review = '/metabolism/plant-based-cookbook-review/';
const read = (route) => fs.readFileSync(path.join('dist', route, 'index.html'), 'utf8');
const html = read(review);
assert(html.includes('Affiliate disclosure:'), 'Missing disclosure before assessment');
assert(html.includes('Commercial disclosure'), 'Missing disclosure beside paid link');
assert(html.includes('have not purchased the cookbook'), 'Missing assessment limitation');
assert(/Published[\s\S]{0,30}September 9, 2026/.test(html), 'Calendar date shifted during export');
assert(html.includes('https://www.nhs.uk/healthier-families/recipes/'), 'Missing free alternative');
assert(html.includes(`rel="canonical" href="https://metabolicscience.org${review.slice(0, -1)}"`)
  || html.includes(`rel="canonical" href="https://metabolicscience.org${review}"`), 'Invalid review canonical');
const paidLink = html.match(/<a\b[^>]*href="https:\/\/f751e-kaqes3dg09q3zji27o36\.hop\.clickbank\.net[^>]*>/)?.[0];
assert(paidLink?.includes('tid=ms_pb_direct_review'), 'Static/no-JS attribution missing');
assert(paidLink.includes('rel="sponsored nofollow noopener"'), 'Paid link rel missing');
assert(paidLink.includes('referrerPolicy="no-referrer"') || paidLink.includes('referrerpolicy="no-referrer"'), 'Referrer must be omitted');

for (const [slug, source] of [['supplements-for-weight-loss', 'sg'], ['natural-thermogenics', 'nt']]) {
  const guide = read(`/supplements/${slug}/`);
  assert(guide.includes(`${review}?source=${source}`), `Missing source link: ${source}`);
  assert(!guide.includes('.hop.clickbank.net'), 'Guides should lead through the assessment');
}

const moduleCode = ts.transpileModule(fs.readFileSync('lib/affiliate.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 },
}).outputText;
const { affiliateHopLink, isAffiliateOffer } = await import(`data:text/javascript;base64,${Buffer.from(moduleCode).toString('base64')}`);
for (const [input, expected] of [['sg', 'sg'], ['nt', 'nt'], ['direct', 'direct'], [null, 'direct'], ['email=private@example.com', 'direct'], ['https://example.com', 'direct']]) {
  const link = new URL(affiliateHopLink('plantbc', input));
  assert.equal(link.hostname, 'f751e-kaqes3dg09q3zji27o36.hop.clickbank.net');
  assert.equal(link.search, `?tid=ms_pb_${expected}_review`);
  assert(/^[a-z0-9_]{1,100}$/.test(link.searchParams.get('tid')), 'Unsupported ClickBank TID');
}

const fitnessReview = '/metabolism/fitin56-review/';
const fitnessHtml = read(fitnessReview);
assert(fitnessHtml.includes('Affiliate disclosure:') && fitnessHtml.includes('Commercial disclosure'), 'FITin56 disclosure missing');
assert(fitnessHtml.includes('have not purchased FITin56') && !fitnessHtml.includes('have not purchased the cookbook'), 'Wrong offer assessment limitation');
assert(fitnessHtml.includes('quarterly plan renews automatically'), 'FITin56 recurring billing warning missing');
assert(fitnessHtml.includes('https://www.nhs.uk/live-well/exercise/strength-exercises/'), 'FITin56 free alternative missing');
assert(/rel="canonical" href="https:\/\/metabolicscience\.org\/metabolism\/fitin56-review\/?"/.test(fitnessHtml), 'Wrong FITin56 canonical');
const fitnessLink = fitnessHtml.match(/<a\b[^>]*href="https:\/\/f3ef6zycj9ffmox0xpya6rauem\.hop\.clickbank\.net[^>]*>/)?.[0];
assert(fitnessLink?.includes('tid=ms_f56_direct_review'), 'FITin56 no-JS fallback missing');
assert(fitnessLink.includes('rel="sponsored nofollow noopener"'), 'FITin56 paid link qualification missing');
assert(/referrerpolicy="no-referrer"/i.test(fitnessLink), 'FITin56 referrer must be omitted');
assert(!fitnessHtml.includes('f751e-kaqes3dg09q3zji27o36.hop.clickbank.net'), 'Cookbook CTA leaked into FITin56 review');
assert(!html.includes('f3ef6zycj9ffmox0xpya6rauem.hop.clickbank.net'), 'FITin56 CTA leaked into cookbook review');
for (const [slug, source] of [['muscle-and-metabolism', 'mm'], ['boosting-metabolism', 'bm']]) {
  assert(read(`/metabolism/${slug}/`).includes(`${fitnessReview}?source=${source}`), `Missing FITin56 incoming path: ${source}`);
}
for (const [input, expected] of [['mm', 'mm'], ['bm', 'bm'], ['direct', 'direct'], [null, 'direct'], ['sg', 'direct'], ['qa', 'direct'], ['condition=private', 'direct'], ['email=private@example.com', 'direct']]) {
  const link = new URL(affiliateHopLink('fitin56', input));
  assert.equal(link.hostname, 'f3ef6zycj9ffmox0xpya6rauem.hop.clickbank.net');
  assert.equal(link.search, `?tid=ms_f56_${expected}_review`);
}
assert.equal(new URL(affiliateHopLink('plantbc', 'mm')).search, '?tid=ms_pb_direct_review', 'Sources must remain offer-specific');
assert(isAffiliateOffer('fitin56') && isAffiliateOffer('plantbc') && !isAffiliateOffer('unknown') && !isAffiliateOffer('__proto__'), 'Unknown offers must not render');

const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8');
assert(sitemap.includes(review.slice(0, -1)), 'Review missing from sitemap');
assert(sitemap.includes(fitnessReview.slice(0, -1)), 'FITin56 review missing from sitemap');
assert(read('/metabolism/').includes(fitnessReview.slice(0, -1)), 'FITin56 missing from category');
assert(read('/metabolism/').includes(review.slice(0, -1)), 'Review missing from category');
const baseline = execFileSync('git', ['ls-tree', '-r', '--name-only', '91e4e6b', 'content'], { encoding: 'utf8' })
  .trim().split('\n').filter(f => /\.mdx?$/.test(f));
for (const file of baseline) {
  const route = '/' + file.replace(/^content\//, '').replace(/\.mdx?$/, '') + '/';
  const exported = read(route);
  assert(!/HONcode|Dr\. Sarah Chen|Dr\. Michael Rodriguez|Dr\. James Wilson|"reviewedBy"/.test(exported), `Unverified authority: ${route}`);
  assert(!exported.includes('.hop.clickbank.net'), `Unexpected affiliate placement: ${route}`);
  const current = matter(fs.readFileSync(file, 'utf8')).data;
  const original = matter(execFileSync('git', ['show', `91e4e6b:${file}`], { encoding: 'utf8' })).data;
  assert.equal(current.publishedAt, original.publishedAt, `Publication date changed: ${route}`);
  assert.equal(current.author, 'editorial-team', `Unverified byline: ${route}`);
  assert.equal(current.medicalReviewer, undefined, `Unverified reviewer: ${route}`);
}
assert(!/HONcode|50,000|100%.*MD|Dr\. Sarah Chen/.test(read('/')), 'Unsupported homepage authority');
console.log(`Pilot verified: ${baseline.length} historical URLs, both offers, four incoming paths, canonicals/disclosures and offer-specific private-data-safe TIDs.`);
