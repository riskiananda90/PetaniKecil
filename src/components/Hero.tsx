import { Button } from "./ui/button";
import { Code, Database, Zap, Sparkles } from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "./magicui/interactive-grid-pattern";
import { WordRotate } from "./magicui/word-rotate";

const rotatingTexts = [
  " Belajar Interaktif ",
  " Pertanian Pintar ",
  " Edukasi Inklusif ",
];

const floatingIcons = [
  { Icon: Code, style: { top: "20%", left: "10%" } },
  { Icon: Database, style: { top: "30%", right: "15%" } },
  { Icon: Zap, style: { bottom: "25%", left: "20%" } },
  { Icon: Sparkles, style: { bottom: "35%", right: "10%" } },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center text-white overflow-hidden bg-gradient-hero">
      {floatingIcons.map(({ Icon, style }, i) => (
        <div
          key={i}
          className="absolute opacity-30 animate-pulse hidden sm:block"
          style={{ width: 32, height: 32, ...style }}
        >
          <Icon className="w-full h-full" />
        </div>
      ))}

      {/* Title */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg gradient-text">
        <span className="">Harapan</span> Digital
      </h1>

      {/* Rotating Subtitle */}
      <p className="text-2xl sm:text-2xl md:text-3xl mb-6 font-semibold flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-2">
        <h1>Hadirkan</h1>
        <span>
          <WordRotate
            className="text-2xl sm:text-2xl md:text-3xl gradient-text font-bold dark:text-white"
            words={rotatingTexts}
          />
        </span>
        <h1>dengan AgriBot, DifiBot & LearnMate</h1>
      </p>

      <p className="sm:text-2xl text-[#F3D3BE] max-w-4xl mx-auto leading-relaxed">
        Solusi AI untuk menunjang <strong>pertanian cerdas</strong>,{" "}
        <strong>pendidikan inklusif</strong> bagi penyandang tunanetra, dan{" "}
        <strong>pembelajaran interaktif</strong> untuk siswa
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-5">
        <Button className="text-[#F3D3BE] cursor-pointer relative hover:text-black bg-[#D15F45] hover:bg-[#F3D3BE] px-6 py-3 sm:px-8 sm:py-4 rounded-md font-semibold shadow-lg text-sm sm:text-base">
          Mulai uji coba
          <BorderBeam duration={8} size={70} />
        </Button>
      </div>

      <div className="pointer-events-none fixed inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full opacity-20 bg-yellow-300 animate-float"
            style={{
              width: 4 + Math.random() * 4,
              height: 4 + Math.random() * 4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern */}
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] pointer-events-none"
        )}
        width={20}
        height={20}
        squares={[80, 80]}
        squaresClassName="hover:fill-blue-500"
      />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
