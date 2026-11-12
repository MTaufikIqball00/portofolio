import { siteConfig } from "@/config/site";
import { Metadata } from "next";

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  path?: string;
}

export function constructMetadata({
  title,
  description,
  path = "",
}: GenerateMetadataProps = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.positioning}`;

  const pageDescription =
    description ||
    `${siteConfig.heroSubtext} Portofolio rekayasa perangkat lunak berbasis repositori GitHub nyata.`;

  const canonicalUrl = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      siteName: `${siteConfig.fullName} Portfolio`,
      images: [
        {
          url: siteConfig.avatarUrl,
          width: 400,
          height: 400,
          alt: `${siteConfig.fullName} GitHub Profile`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary",
      title: pageTitle,
      description: pageDescription,
      images: [siteConfig.avatarUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generatePersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    image: siteConfig.avatarUrl,
    sameAs: [siteConfig.githubUrl],
    jobTitle: siteConfig.positioning,
    description: siteConfig.heroSubtext,
    email: siteConfig.email,
    alumniOf: {
      "@type": "EducationalOrganization",
      name: siteConfig.education.institution,
      alternateName: siteConfig.education.institutionShort,
    },
  };
}
