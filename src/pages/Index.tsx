import Hero from "@/components/Hero";
import Trailer from "@/components/Trailer";
import Vision from "@/components/Vision";
import PlayNow from "@/components/PlayNow";
import Features from "@/components/Features";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Trailer />
      <Vision />
      <PlayNow />
      <Features />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
