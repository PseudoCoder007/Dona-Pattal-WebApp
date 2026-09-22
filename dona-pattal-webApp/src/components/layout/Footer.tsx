import Link from 'next/link';
import { siteConfig } from '@/content/site';

export function Footer() {
  return (
    <footer className="bg-paper text-ink pt-16 pb-12 px-6 lg:px-8 border-t border-stone">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-lg text-ink">SAHLOK ECO PRODUCTS LLP</span>
            </div>
            <p className="text-xs text-muted">Location: Mirzapur, Uttar Pradesh</p>
            <p className="text-xs leading-relaxed text-muted max-w-sm">
              {siteConfig.business.description}
            </p>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brick">Navigation</h4>
            <ul className="space-y-2 text-xs text-muted">
              {siteConfig.footer.links.map((link) => (
                <li key={link.href}>
                  <Link className="hover:text-brick transition-colors" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brick">Factory Contact</h4>
            <div className="space-y-2 text-xs text-muted leading-relaxed">
              <p><strong className="text-ink">Owner:</strong> {siteConfig.footer.contact.owner}</p>
              <p><strong className="text-ink">Address:</strong> {siteConfig.footer.contact.address}</p>
              <p><strong className="text-ink">Call:</strong> <a className="hover:text-brick transition-colors text-ink font-semibold" href={`tel:${siteConfig.contact.phoneDisplay.replace(/\s/g, '')}`}>{siteConfig.contact.phoneDisplay}</a></p>
              <p><strong className="text-ink">WhatsApp:</strong> <a className="hover:text-emerald-700 transition-colors text-emerald-800 font-semibold" href={siteConfig.footer.contact.whatsapp} target="_blank" rel="noopener noreferrer">Chat with us ({siteConfig.contact.phoneDisplay})</a></p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-stone flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted">
          <p>{siteConfig.footer.copyright}</p>
          <p className="text-[11px]">{siteConfig.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
