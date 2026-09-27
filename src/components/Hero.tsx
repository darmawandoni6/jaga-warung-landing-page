import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 to-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              {t('hero.headline')}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {t('hero.subhead')}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg">{t('hero.cta.download')}</Button>
              <Button size="lg" variant="outline">
                {t('hero.cta.demo')}
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="w-64 h-[500px] mx-auto bg-foreground rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-card rounded-[2.5rem] overflow-hidden flex flex-col">
                <div className="h-8 bg-primary/10 flex items-center justify-center">
                  <div className="w-16 h-1 bg-muted rounded-full" />
                </div>
                <div className="flex-1 bg-muted/30 p-4">
                  <div className="grid grid-cols-3 gap-2">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square bg-primary/20 rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-primary">5,000+</div>
            <div className="text-muted-foreground">{t('hero.stats.warungs')}</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-primary">50,000+</div>
            <div className="text-muted-foreground">{t('hero.stats.transactions')}</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-primary">4.8</div>
            <div className="text-muted-foreground">{t('hero.stats.rating')}</div>
          </Card>
        </div>
      </div>
    </section>
  )
}
