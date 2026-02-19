import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Metabolic Health Authority",
  description: "Our privacy policy explains how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-sm text-gray-500 mb-8">Last updated: February 19, 2026</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Overview</h2>
          <p>
            Metabolic Health Authority ("we," "our," or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
            when you visit our website.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>
          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name and email address (when subscribing to our newsletter)</li>
            <li>Health-related information (when using our calculators)</li>
            <li>Demographic information</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">Automatically Collected Information</h3>
          <p>When you visit our website, we automatically collect certain information, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>IP address and browser type</li>
            <li>Pages visited and time spent</li>
            <li>Referring website</li>
            <li>Device information</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide and maintain our website</li>
            <li>Send newsletters and updates (with your consent)</li>
            <li>Improve our content and user experience</li>
            <li>Analyze website usage and trends</li>
            <li>Prevent fraud and ensure security</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your browsing experience. 
            You can control cookies through your browser settings. We use:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Essential cookies:</strong> Required for website functionality</li>
            <li><strong>Analytics cookies:</strong> Help us understand website usage (Google Analytics)</li>
            <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Services</h2>
          <p>We may use third-party services that collect information:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Google Analytics:</strong> For website analytics</li>
            <li><strong>Affiliate partners:</strong> When you click on product links</li>
            <li><strong>Hosting providers:</strong> For website infrastructure</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal 
            information. However, no method of transmission over the internet is 100% secure, and 
            we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Children's Privacy</h2>
          <p>
            Our website is not intended for children under 13. We do not knowingly collect personal 
            information from children under 13. If you believe we have collected information from 
            a child under 13, please contact us.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes 
            by posting the new policy on this page and updating the "Last updated" date.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p className="mt-2">
            <strong>Email:</strong> privacy@metabolichealthauthority.com
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Affiliate Disclosure</h2>
          <p>
            This website contains affiliate links. We may receive a commission when you purchase 
            products through our links, at no additional cost to you. This helps support our 
            mission to provide free, evidence-based health information.
          </p>
        </div>
      </div>
    </div>
  );
}
