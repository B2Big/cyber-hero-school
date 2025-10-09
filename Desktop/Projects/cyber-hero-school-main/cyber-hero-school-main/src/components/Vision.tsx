import schoolImg from "@/assets/school.webp";
import { useTranslation } from "react-i18next";

const Vision = () => {
  const { t } = useTranslation();
  const visionPoints = [
    {
      title: t('vision.point1Title'),
      description: t('vision.point1Desc'),
      color: "primary"
    },
    {
      title: t('vision.point2Title'),
      description: t('vision.point2Desc'),
      color: "secondary"
    },
    {
      title: t('vision.point3Title'),
      description: t('vision.point3Desc'),
      color: "accent"
    },
    {
      title: t('vision.point4Title'),
      description: t('vision.point4Desc'),
      color: "primary"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4 hero-gradient">
          {t('vision.title')}
        </h2>
        <p className="text-center text-xl text-accent mb-12 font-bold">
          {t('vision.objective')}
        </p>

        {/* Project Objectives */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card border-2 border-secondary rounded-2xl p-8 shadow-[0_0_30px_rgba(255,0,110,0.3)]">
            <h3 className="text-3xl font-bold mb-6 text-secondary text-center">{t('vision.pedagogyTitle')}</h3>
            <p className="text-foreground/90 text-lg leading-relaxed">
              {t('vision.pedagogyDescription')}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <img 
              src={schoolImg} 
              alt="Pixel Hero School" 
              className="rounded-2xl border-4 border-primary shadow-[0_0_40px_rgba(0,217,255,0.4)] w-full"
            />
          </div>

          <div className="order-1 md:order-2 space-y-6">
            {visionPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary transition-all hover:shadow-[0_0_20px_rgba(0,217,255,0.3)]"
              >
                <h3 className={`text-2xl font-bold mb-3 ${
                  point.color === 'primary' ? 'text-primary' :
                  point.color === 'secondary' ? 'text-secondary' :
                  'text-accent'
                }`}>
                  {point.title}
                </h3>
                <p className="text-foreground/90">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
