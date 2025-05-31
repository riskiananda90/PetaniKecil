import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Masalah from "@/components/Masalah";
import MouseLight from "@/components/mouseLight";
import NavigationBar from "@/components/NavigationBar";
import Team from "@/components/Team";
import TechStack from "@/components/TechStack";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      <main className="">
        <MouseLight
          bgColor="bg-charcoal"
          glowColor="rgba(255,135,50,0.08)"
          id="hero"
        >
          <Hero />
        </MouseLight>

        <MouseLight
          id="masalah"
          bgColor="bg-stone-900"
          glowColor="rgba(150,200,255,0.15)"
        >
          <Masalah />
        </MouseLight>

        <MouseLight
          id="fitur"
          bgColor="bg-neutral-900"
          glowColor="rgba(200,255,180,0.15)"
        >
          <Features />
        </MouseLight>

        <MouseLight
          id="teknologi"
          bgColor="bg-zinc-900"
          glowColor="rgba(255,180,255,0.15)"
        >
          <TechStack />
        </MouseLight>

        <MouseLight
          id="team"
          bgColor="bg-neutral-900"
          glowColor="rgba(255,255,180,0.15)"
        >
          <Team />
          <Footer />
        </MouseLight>
      </main>
    </div>
  );
};

export default Index;
