import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();
  const studios = [
    {
      name: "Studio GOSTY",
      location: "École Les Moulins (Nice/Cannes)",
      members: ["Whitney", "Aïcha", "Abdoul", "Malik", "William", "Khadijat", "Yassine", "Saif", "Amine", "Nassim"]
    },
    {
      name: "Studio EPIC-LAND",
      location: "École Digue des Français 1",
      members: ["Ismaël", "Kemissy", "Wanessa", "Morgan", "Ayden", "Lina", "Joey", "Leyna", "Samy", "Boubaker", "Firas", "Bayazid"]
    },
    {
      name: "Studio NEW GAME INFINIT",
      location: "École Digue des Français 2",
      members: ["Gabriel", "Oumayma", "Anfel", "Inaya", "Kalim", "Mayssène", "Mohamed", "Taha-Amine", "El-Hakim", "Yassine", "Raynour", "Alyssa"]
    },
    {
      name: "Studio PASTEK RIDE",
      location: "École Bois de Boulogne",
      members: ["Aïcha", "Iyed", "Asma", "Rafik", "Lina", "Aïckel", "Sabri", "Kelvin", "Imad", "Zacharia", "Kaylia", "Wissam", "Maliza"]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4 hero-gradient">
          {t('team.title')}
        </h2>
        <p className="text-center text-xl text-primary mb-12 neon-glow-cyan">
          {t('team.subtitle')}
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {studios.map((studio, index) => (
            <Card 
              key={index}
              className="bg-card border-2 border-border p-6 hover:border-primary transition-all hover:shadow-[0_0_30px_rgba(0,217,255,0.2)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-primary">{studio.name}</h3>
              </div>
              <p className="text-sm text-accent mb-4">{studio.location}</p>
              <div className="flex flex-wrap gap-2">
                {studio.members.map((member, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-muted rounded-full text-sm text-foreground/90"
                  >
                    {member}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Credits */}
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="bg-card border-2 border-secondary p-6 text-center">
            <p className="text-lg">
              <span className="font-bold text-secondary">{t('team.supervision')} :</span>{" "}
              <span className="text-foreground/90">Magali R. · Fanny S. · Emilie P. · Robin A.</span>
            </p>
          </Card>

          <Card className="bg-card border-2 border-accent p-6 text-center">
            <p className="text-lg">
              <span className="font-bold text-accent">{t('team.director')} :</span>{" "}
              <span className="text-foreground/90">Johan B.</span>
            </p>
          </Card>

          <Card className="bg-card border-2 border-primary p-6 text-center">
            <p className="text-lg font-bold text-primary">
              {t('team.location')}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              {t('team.locationDesc')}
            </p>
          </Card>
        </div>

        {/* External Credits */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">{t('team.externalCreditsTitle')}</h3>
          <div className="space-y-4">
            <Card className="bg-card border border-border p-4">
              <p className="text-foreground/90">
                <span className="font-bold text-primary">{t('team.engine')} - Gdevelop:</span>{" "}
                <a href="https://gdevelop.io/fr-fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://gdevelop.io/fr-fr
                </a>
              </p>
            </Card>
            <Card className="bg-card border border-border p-4">
              <p className="text-foreground/90">
                <span className="font-bold text-secondary">{t('team.pixelArtTool')}:</span>{" "}
                <a href="https://www.piskelapp.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                  Piskel
                </a>
              </p>
            </Card>
            <Card className="bg-card border border-border p-4">
              <p className="text-foreground/90">
                <span className="font-bold text-accent">{t('team.music')} - Bosca Ceoil: The Blue Album:</span>{" "}
                <a href="https://yurisizov.itch.io/boscaceoil-blue" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  https://yurisizov.itch.io/boscaceoil-blue
                </a>
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
