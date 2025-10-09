import { useTranslation } from "react-i18next";

const Trailer = () => {
  const { t } = useTranslation();
  
  return (
    <section id="trailer" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4 hero-gradient">
          {t('trailer.title')}
        </h2>
        <p className="text-center text-xl text-muted-foreground mb-12">
          {t('trailer.subtitle')}
        </p>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border-4 border-primary shadow-[0_0_30px_rgba(0,217,255,0.5)]">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/La-7lydp4Bg"
                title="Pixel Hero School - Bande-annonce"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-card border-2 border-secondary rounded-xl p-8 shadow-[0_0_30px_rgba(255,0,110,0.3)]">
            <h3 className="text-3xl font-bold mb-4 text-secondary neon-glow-pink">
              {t('trailer.insiderTitle')}
            </h3>
            <p className="text-lg mb-6 text-foreground">
              {t('trailer.insiderDescription')}
            </p>
            <a 
              href="https://pixel-hero-school.kit.com/e6d26ec199"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,110,0.6)]"
            >
              {t('trailer.newsletterButton')}
            </a>
          </div>
        </div>

        {/* Theme Music */}
        <div className="mt-20">
          <h3 className="text-4xl font-bold text-center mb-8 text-accent neon-glow-orange">
            {t('trailer.themeTitle')}
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border-4 border-accent shadow-[0_0_30px_rgba(255,107,53,0.5)]">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/3gOcU5nYQKk"
                  title="Pixel Hero School - Thème officiel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trailer;
