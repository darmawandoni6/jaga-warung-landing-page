import { useTranslation } from 'react-i18next'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQ() {
  const { t } = useTranslation()

  const items = ['free', 'offline', 'data', 'export', 'multi', 'support', 'language']

  return (
    <section id="faq" className="py-20 bg-muted">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">{t('faq.title')}</h2>
        </div>

        <Accordion type="single" collapsible className="rounded-lg border bg-card">
          {items.map((id, i) => (
            <AccordionItem key={id} value={`item-${i}`} className="px-4">
              <AccordionTrigger>{t(`faq.items.${id}.q`)}</AccordionTrigger>
              <AccordionContent>{t(`faq.items.${id}.a`)}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
