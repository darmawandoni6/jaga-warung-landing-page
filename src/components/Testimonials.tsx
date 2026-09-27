import { useTranslation } from 'react-i18next'
import { Card, CardContent } from '@/components/ui/card'

export function Testimonials() {
  const { t } = useTranslation()

  const testimonials = ['one', 'two', 'three']

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">{t('testimonials.title')}</h2>
          <p className="mt-2 text-muted-foreground">{t('testimonials.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((id) => (
            <Card key={id} className="p-6">
              <CardContent className="flex flex-col gap-4 p-0">
                <p className="text-foreground italic">"{t(`testimonials.items.${id}.quote`)}"</p>
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {t(`testimonials.items.${id}.name`).charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t(`testimonials.items.${id}.name`)}</p>
                    <p className="text-sm text-muted-foreground">{t(`testimonials.items.${id}.business`)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
