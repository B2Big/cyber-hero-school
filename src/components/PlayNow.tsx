import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import gameplayImg from "@/assets/gameplay-real.png";
import qrCode from "@/assets/qr-code-real.png";

const PlayNow = () => {
  return (
    <section id="play" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4 hero-gradient">
          🕹️ Jouer dès maintenant
        </h2>
        <p className="text-center text-xl text-primary mb-12 neon-glow-cyan">
          Lance-toi dans l'aventure et sauve l'école !
        </p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Gameplay Image */}
          <div className="animate-slide-up">
            <img 
              src={gameplayImg} 
              alt="Gameplay Pixel Hero School" 
              className="rounded-2xl border-4 border-secondary shadow-[0_0_40px_rgba(255,0,110,0.4)] w-full"
            />
          </div>

          {/* Play Info */}
          <div className="space-y-8">
            <Card className="bg-card border-2 border-primary p-6 shadow-[0_0_30px_rgba(0,217,255,0.3)]">
              <h3 className="text-2xl font-bold mb-4 text-primary">Version Web (HTML5)</h3>
              <a 
                href="https://gd.games/johanito/pixel-hero-school"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 rounded-lg transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,217,255,0.6)]"
              >
                Testez le jeu ici !
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                Lien de partage : https://gd.games/johanito/pixel-hero-school
              </p>
            </Card>

            {/* QR Code */}
            <Card className="bg-card border-2 border-accent p-6 text-center shadow-[0_0_30px_rgba(255,107,53,0.3)]">
              <h3 className="text-2xl font-bold mb-4 text-accent">QR Code du jeu</h3>
              <div className="inline-block p-4 bg-background rounded-xl">
                <img 
                  src={qrCode} 
                  alt="QR Code Pixel Hero School" 
                  className="w-48 h-48 mx-auto"
                />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Scanne pour jouer sur mobile !
              </p>
            </Card>
          </div>
        </div>

        {/* Gameplay Table */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-8 text-secondary neon-glow-pink">
            Gameplay en un clin d'œil
          </h3>
          <Card className="bg-card border-2 border-border p-8">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="font-bold text-primary text-lg">Exploration</div>
                <div className="text-foreground/90">Plateformes et collectibles au sein du cerveau-école</div>
              </div>
              <div className="h-px bg-border"></div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="font-bold text-secondary text-lg">Combat</div>
                <div className="text-foreground/90">Beat-them-all léger + pouvoirs pixel-magiques pour purifier les glitchs</div>
              </div>
              <div className="h-px bg-border"></div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="font-bold text-accent text-lg">Objectifs</div>
                <div className="text-foreground/90">Délivrer chaque élève prisonnier, voyager à travers un monde magique</div>
              </div>
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground border-t border-border pt-6">
              Restriction d'âge : <span className="font-bold text-accent">E10+</span> (contenu modéré, thématique du harcèlement)
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PlayNow;
