import Script from "next/script";

interface JsonLdProps {
  data: Record<string, any> | Record<string, any>[];
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

// Schema.org generators
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Metabolic Health Authority",
    url: "https://metabolicscience.org",
    logo: "https://metabolicscience.org/logo.png",
    description:
      "Evidence-based medical information on weight loss, metabolism, and GLP-1 medications.",
    sameAs: [
      "https://twitter.com/metabolichealth",
      "https://facebook.com/metabolicscience",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Medical Information",
      availableLanguage: "English",
    },
  };
}

export function generateMedicalWebPageSchema({
  title,
  description,
  url,
  lastReviewed,
  reviewedBy,
}: {
  title: string;
  description: string;
  url: string;
  lastReviewed: string;
  reviewedBy: {
    name: string;
    credentials: string;
  };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: title,
    description,
    url,
    lastReviewed,
    reviewedBy: {
      "@type": "Person",
      name: reviewedBy.name,
      hasCredential: reviewedBy.credentials,
    },
    about: {
      "@type": "MedicalCondition",
      name: "Obesity",
    },
    audience: {
      "@type": "MedicalAudience",
      audienceType: "Patient",
    },
  };
}

export function generateArticleSchema({
  title,
  description,
  url,
  image,
  publishedAt,
  updatedAt,
  author,
  medicalReviewer,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  publishedAt: string;
  updatedAt?: string;
  author: { name: string; url?: string };
  medicalReviewer?: { name: string; credentials: string };
}) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    image: image || "https://metabolicscience.org/og-image.jpg",
    datePublished: publishedAt,
    author: {
      "@type": "Person",
      name: author.name,
      url: author.url,
    },
    publisher: {
      "@type": "Organization",
      name: "Metabolic Health Authority",
      logo: {
        "@type": "ImageObject",
        url: "https://metabolicscience.org/logo.png",
      },
    },
  };

  if (updatedAt) {
    schema.dateModified = updatedAt;
  }

  if (medicalReviewer) {
    schema.reviewedBy = {
      "@type": "Person",
      name: medicalReviewer.name,
      hasCredential: medicalReviewer.credentials,
    };
  }

  return schema;
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
