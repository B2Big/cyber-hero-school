import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Le jeu est-il gratuit ?",
      answer: "Oui, la version Web est accessible sans frais."
    },
    {
      question: "Puis-je streamer la démo ?",
      answer: "Absolument. Utilisez le hashtag #PixelHeroSchool."
    },
    {
      question: "Quel âge pour y jouer ?",
      answer: "Classé E10+ : adapté aux 10 ans et +."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4 hero-gradient">
          FAQ
        </h2>
        <p className="text-center text-xl text-muted-foreground mb-12">
          Questions fréquentes
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
            <p className="text-2xl font-bold text-accent mb-2">Notes de version</p>
            <p className="text-lg text-foreground/80">(12 juin 2025) : V 1.0</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
