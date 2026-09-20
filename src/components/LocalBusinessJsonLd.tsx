import { siteConfig } from "@/config/site";

export default function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: siteConfig.name,
    image: `${siteConfig.url}/images/branding/og-image.jpg`,
    url: siteConfig.url,
    telephone: siteConfig.contact.phoneHref.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: "Porto",
      postalCode: "4200-224",
      addressCountry: "PT",
    },
    ...(siteConfig.hours.every((h) => h.time.startsWith("["))
      ? {}
      : {
          openingHoursSpecification: siteConfig.hours
            .filter((h) => !h.time.startsWith("[") && h.time.toLowerCase() !== "encerrado")
            .map((h) => ({
              "@type": "OpeningHoursSpecification",
              dayOfWeek: h.days,
              description: h.time,
            })),
        }),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.googleRating.value,
      reviewCount: siteConfig.googleRating.count,
    },
    sameAs: [siteConfig.social.instagram],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
