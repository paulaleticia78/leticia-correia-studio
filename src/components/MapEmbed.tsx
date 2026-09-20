import { siteConfig } from "@/config/site";

export default function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl shadow-soft">
      <iframe
        title={`Localização do ${siteConfig.name}`}
        src={siteConfig.address.mapsEmbedUrl}
        width="100%"
        height="420"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
