import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold-500/20 bg-gradient-to-b from-cream-200 to-sand-300 text-ink-700">
      <div className="container-content grid gap-12 py-16 sm:py-20 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl text-ink-900">
            Letícia<span className="text-clay-600"> Correia</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-600">
            {siteConfig.tagline}
          </p>
          <div className="mt-6 flex gap-4 text-sm">
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-clay-600">
              Instagram
            </a>
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-clay-600">
              Facebook
            </a>
            <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-clay-600">
              TikTok
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-600/70">
            Navegação
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-clay-600">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/agendar" className="hover:text-clay-600">
                Agendar
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-600/70">
            Contactos
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>{siteConfig.address.line1}</li>
            <li>{siteConfig.address.line2}</li>
            <li>
              <a href={siteConfig.contact.phoneHref} className="hover:text-clay-600">
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>
            <li className="pt-2 text-ink-600/70">
              {siteConfig.hours.map((h) => (
                <span key={h.days} className="block">
                  {h.days}: {h.time}
                </span>
              ))}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-900/10">
        <div className="container-content flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-600/70 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="/politica-de-privacidade" className="hover:text-clay-600">
              Política de Privacidade
            </Link>
            <span>Portugal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
