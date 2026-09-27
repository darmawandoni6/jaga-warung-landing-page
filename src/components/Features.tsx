import { useTranslation } from 'react-i18next'
import { Package, CreditCard, FileText, Banknote, BarChart3, WifiOff } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export function Features() {
  const { t } = useTranslation()

  const features = [
    { id: 'pos', Icon: CreditCard },
    { id: 'inventory', Icon: Package },
    { id: 'reports', Icon: FileText },
    { id: 'debt', Icon: Banknote },
    { id: 'offline', Icon: WifiOff },
    { id: 'expenses', Icon: BarChart3 },
  ]

  return (
    <section id="fitur" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">{t('features.title')}</h2>
          <p className="mt-2 text-muted-foreground">{t('features.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <Card key={f.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <f.Icon className="size-6 text-primary" />
                </div>
                <CardTitle>{t(`features.items.${f.id}.title`)}</CardTitle>
                <CardDescription>{t(`features.items.${f.id}.desc`)}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
