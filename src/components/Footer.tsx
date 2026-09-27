import { useTranslation } from 'react-i18next'
import { ShieldCheck } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-foreground text-white/70 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-6 text-primary" />
            <div>
              <div className="font-bold text-white">Jaga Warung</div>
              <div className="text-sm">{t('footer.tagline')}</div>
            </div>
          </div>

          <nav className="flex gap-6">
            <a href="#fitur" className="hover:text-white transition-colors">
              {t('footer.nav.features')}
            </a>
            <a href="#harga" className="hover:text-white transition-colors">
              {t('footer.nav.pricing')}
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              {t('footer.nav.faq')}
            </a>
          </nav>
        </div>

        <Separator className="bg-white/10 my-6" />

        <p className="text-center text-sm">{t('footer.copyright')}</p>
      </div>
    </footer>
  )
}
