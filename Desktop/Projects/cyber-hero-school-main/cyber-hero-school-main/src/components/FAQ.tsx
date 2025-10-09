import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();
  const faqs = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1')
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2')
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3')
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4 hero-gradient">
          {t('faq.title')}
        </h2>
        <p className="text-center text-xl text-muted-foreground mb-12">
          {t('faq.subtitle')}
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border-2 border-border rounded-xl px-6 hover:border-primary transition-colors"
              >
                <AccordionTrigger className="text-xl font-bold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-foreground/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center p-8 bg-card border-2 border-accent rounded-xl">
            <p className="text-2xl font-bold text-accent mb-2">{t('faq.releaseNotes')}</p>
            <p className="text-lg text-foreground/80">{t('faq.version')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
