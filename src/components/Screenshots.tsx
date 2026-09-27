import { useTranslation } from 'react-i18next'
import { Card } from '@/components/ui/card'

export function Screenshots() {
  const { t } = useTranslation()

  const screens = [
    { id: 'pos', gradient: 'from-emerald-400 to-emerald-600' },
    { id: 'inventory', gradient: 'from-amber-400 to-slate-500' },
    { id: 'debt', gradient: 'from-blue-400 to-slate-500' },
    { id: 'reports', gradient: 'from-emerald-400 to-teal-600' },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">{t('screenshots.title')}</h2>
          <p className="mt-2 text-muted-foreground">{t('screenshots.subtitle')}</p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible">
          {screens.map((s) => (
            <Card
              key={s.id}
              className="min-w-[200px] aspect-[9/16] bg-gradient-to-br ${s.gradient} rounded-2xl overflow-hidden"
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-16 h-32 bg-white/20 rounded-lg" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
