import { Gamepad2, Palette, Music, BookOpen, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: Palette,
      title: t('features.pixelArt'),
      color: "primary"
    },
    {
      icon: Gamepad2,
      title: t('features.abstractLevels'),
      color: "secondary"
    },
    {
      icon: Zap,
      title: t('features.glitchEnemies'),
      color: "accent"
    },
    {
      icon: Music,
      title: t('features.soundtrack'),
      color: "primary"
    },
    {
      icon: BookOpen,
      title: t('features.narrative'),
      color: "secondary"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4 hero-gradient">
          {t('features.title')}
        </h2>
        <p className="text-center text-xl text-muted-foreground mb-12">
          {t('features.subtitle')}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="bg-card border-2 border-border p-6 hover:border-primary transition-all hover:shadow-[0_0_30px_rgba(0,217,255,0.3)] group"
              >
                <div className={`inline-flex p-4 rounded-xl mb-4 ${
                  feature.color === 'primary' ? 'bg-primary/10 text-primary' :
                  feature.color === 'secondary' ? 'bg-secondary/10 text-secondary' :
                  'bg-accent/10 text-accent'
                }`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
              </Card>
            );
          })}
        </div>

        {/* Universe Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <Card className="bg-card border-2 border-secondary p-8 shadow-[0_0_40px_rgba(255,0,110,0.2)]">
            <h3 className="text-4xl font-bold mb-6 text-secondary neon-glow-pink text-center">
              {t('features.universeTitle')}
            </h3>
            <p className="text-lg leading-relaxed text-foreground/90">
              {t('features.universeDescription')}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
