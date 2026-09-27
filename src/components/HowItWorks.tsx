import { useTranslation } from 'react-i18next'

export function HowItWorks() {
  const { t } = useTranslation()

  const steps = ['download', 'setup', 'start']

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">{t('howItWorks.title')}</h2>
          <p className="mt-2 text-muted-foreground">{t('howItWorks.subtitle')}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {steps.map((step, i) => (
            <div key={step} className="flex-1 flex flex-col items-center text-center gap-3">
              <div className="size-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                {i + 1}
              </div>
              <h3 className="font-semibold text-foreground">{t(`howItWorks.steps.${step}.title`)}</h3>
              <p className="text-muted-foreground text-sm">{t(`howItWorks.steps.${step}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
