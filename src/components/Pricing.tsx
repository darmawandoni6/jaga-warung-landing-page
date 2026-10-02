import { useTranslation } from 'react-i18next'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DOWNLOAD_URL } from '@/lib/constants'

export function Pricing() {
  const { t } = useTranslation()

  return (
    <section id="harga" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">{t('pricing.title')}</h2>
          <p className="mt-2 text-muted-foreground">{t('pricing.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 border-primary ring-4 ring-primary/10">
            <CardHeader className="text-center">
              <Badge className="bg-primary text-primary-foreground w-fit mx-auto">
                {t('pricing.free.badge')}
              </Badge>
              <CardTitle className="text-2xl mt-4">{t('pricing.free.name')}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold text-foreground">{t('pricing.free.price')}</span>
                <span className="text-muted-foreground ml-2">{t('pricing.free.period')}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {(t('pricing.free.features', { returnObjects: true }) as string[]).map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-primary">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Button className="w-full" asChild>
                <a
                  href={DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('pricing.free.cta')}
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="opacity-60">
            <CardHeader className="text-center">
              <Badge variant="secondary" className="w-fit mx-auto">
                {t('pricing.premium.badge')}
              </Badge>
              <CardTitle className="text-2xl mt-4">{t('pricing.premium.name')}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold text-foreground">{t('pricing.premium.price')}</span>
                <span className="text-muted-foreground ml-2">{t('pricing.premium.period')}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {(t('pricing.premium.features', { returnObjects: true }) as string[]).map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-muted-foreground">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full" disabled>
                {t('pricing.premium.cta')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
