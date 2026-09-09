import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Metabolic Science handles calculator inputs, preferences and affiliate links.",
  alternates: { canonical: "https://metabolicscience.org/privacy/" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="mb-4 text-4xl font-serif font-bold text-gray-900">Privacy Policy</h1>
      <p className="mb-8 text-sm text-gray-500">Updated September 9, 2026</p>
      <div className="prose prose-lg max-w-none text-gray-700">
        <h2>Using this website</h2>
        <p>Metabolic Science provides educational articles and browser-based calculators. The current website has no account registration or newsletter signup. The site hosting provider may process ordinary request information, such as IP addresses, browser details and requested URLs, to serve and secure the website.</p>
        <h2>Calculators and search</h2>
        <p>Calculator inputs and results are processed in your browser. Our calculator code does not send them to a server or affiliate partner. Site search also runs locally against the article index.</p>
        <h2>Preferences</h2>
        <p>Your light or dark theme preference may be stored in your browser’s local storage. You can clear it through your browser settings.</p>
        <h2>Affiliate links and measurement</h2>
        <p>When you choose a ClickBank affiliate link, you leave our website. ClickBank and the seller handle that visit under their own privacy policies and may use cookies to attribute a purchase to an affiliate.</p>
        <p>Our affiliate URLs contain fixed campaign codes that distinguish links reached through our supplement guides from links reached directly through a product analysis. We do not add names, email addresses, calculator inputs, health profiles or free-text searches to those codes. A code describes a link’s context, not a diagnosis or profile of its reader.</p>
        <p>The current site code does not install Google Analytics or an advertising pixel. ClickBank referral reporting and search engine webmaster reports are separate from on-site visitor analytics.</p>
        <h2>Purchases and third-party websites</h2>
        <p>We do not collect payment details or process orders. Review the seller’s terms and ClickBank’s privacy information before submitting personal or payment information. Their practices are governed by their own policies.</p>
        <h2>Affiliate disclosure</h2>
        <p>We may earn a commission when you purchase through a disclosed affiliate link, at no additional cost to you. We explain the commercial relationship on the relevant article and near its purchase link.</p>
        <h2>Changes</h2>
        <p>We update this page when the site’s data handling changes and show the update date above.</p>
      </div>
    </div>
  );
}
