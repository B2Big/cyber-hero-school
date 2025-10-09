import { Youtube, Mail, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="py-12 border-t-2 border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-card to-background"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 hero-gradient">Suivez-nous</h3>
            <div className="flex justify-center gap-6">
              <a 
                href="https://www.youtube.com/@PixelHeroSchool"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-card border-2 border-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition-all hover:shadow-[0_0_20px_rgba(0,217,255,0.4)]"
              >
                <Youtube className="w-5 h-5 text-primary" />
                <span className="text-foreground font-semibold">{t('footer.youtube')}</span>
              </a>
              <a 
                href="https://www.notion.so/Pixel-Hero-School-2104938f5206800787cbe97c1bb999bb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-card border-2 border-secondary px-6 py-3 rounded-lg hover:bg-secondary/10 transition-all hover:shadow-[0_0_20px_rgba(255,0,110,0.4)]"
              >
                <Globe className="w-5 h-5 text-secondary" />
                <span className="text-foreground font-semibold">{t('footer.website')}</span>
              </a>
              <a 
                href="mailto:johan.dev.pro@gmail.com"
                className="flex items-center gap-2 bg-card border-2 border-accent px-6 py-3 rounded-lg hover:bg-accent/10 transition-all hover:shadow-[0_0_20px_rgba(255,107,53,0.4)]"
              >
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-foreground font-semibold">{t('footer.contact')}</span>
              </a>
            </div>
          </div>

          {/* Quote */}
          <div className="max-w-2xl mx-auto p-6 border-l-4 border-primary bg-card/50 rounded-r-xl">
            <p className="text-xl italic text-foreground/90">
              {t('footer.quote')}
            </p>
          </div>

          {/* Hashtag */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground">
              Partagez vos retours sur le gameplay et le message anti-harcèlement !
            </p>
            <p className="text-2xl font-bold text-primary mt-2 neon-glow-cyan">
              {t('footer.hashtag')}
            </p>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              {t('footer.copyright')}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              France – Nice / Cannes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
