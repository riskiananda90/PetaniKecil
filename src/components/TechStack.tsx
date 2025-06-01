import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { MagicCard } from "./magicui/magic-card";

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFlow, setActiveFlow] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const flowInterval = setInterval(() => {
      setActiveFlow((prev) => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(flowInterval);
  }, []);

const technologies = [
  {
    name: "IBM Granite AI",
    icon: "🧠",
    description: "NLP & LLM",
    color: "from-indigo-500 to-indigo-700",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/30",
    details: "Digunakan untuk Natural Language Processing dan tugas LLM berbasis Granite AI.",
  },
  {
    name: "React",
    icon: "⚛️",
    description: "Frontend Framework",
    color: "from-cyan-400 to-cyan-600",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    details: "Membangun antarmuka pengguna modern dan responsif.",
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    description: "Utility-first CSS",
    color: "from-teal-400 to-teal-600",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/30",
    details: "Styling cepat dan konsisten dengan pendekatan utility class.",
  },
  {
    name: "Node.js & Express",
    icon: "💚",
    description: "Backend Server",
    color: "from-green-500 to-green-700",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    details: "Server-side JavaScript dan routing API dengan Express.",
  },
  {
    name: "MongoDB",
    icon: "🍃",
    description: "NoSQL Database",
    color: "from-emerald-500 to-emerald-700",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    details: "Penyimpanan data fleksibel berbasis dokumen JSON.",
  },
  {
    name: "ML Plant Disease Model",
    icon: "🌿",
    description: "Plant Disease Detection",
    color: "from-lime-500 to-lime-700",
    bgColor: "bg-lime-500/10",
    borderColor: "border-lime-500/30",
    details: "Model pembelajaran mesin untuk memprediksi penyakit pada tanaman dari gambar.",
  },
  {
    name: "Tokopedia Recommender",
    icon: "🛒",
    description: "Product Recommendation",
    color: "from-yellow-500 to-yellow-700",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    details: "Sistem rekomendasi produk berdasarkan analisis data Tokopedia.",
  },
  {
  name: "imgbb",
  icon: "🌐", 
  description: "Image Hosting",
  color: "from-pink-500 to-pink-700",
  bgColor: "bg-pink-500/10",
  borderColor: "border-pink-500/30",
  details: "Layanan hosting gambar yang digunakan untuk menyimpan dan mengakses gambar secara online.",
}
];


const architectureFlow = [
  {
    id: 1,
    title: "Data Input",
    subtitle: "User Upload & Input",
    icon: "🌱",
    description:
      "Pengguna mengunggah data tanaman atau memasukkan pertanyaan. Gambar daun digunakan untuk prediksi penyakit.",
    color: "from-green-500 to-green-700",
    bgColor: "bg-green-500/10",
  },
  {
    id: 2,
    title: "AI Processing",
    subtitle: "Granite & ML Model",
    icon: "🧠",
    description:
      "Granite AI menganalisis pertanyaan berbasis teks, sementara model ML memproses gambar tanaman untuk mendeteksi penyakit.",
    color: "from-indigo-500 to-indigo-700",
    bgColor: "bg-indigo-500/10",
  },
  {
    id: 3,
    title: "Recommendation",
    subtitle: "Solusi & Produk",
    icon: "🛒",
    description:
      "Sistem memberikan rekomendasi solusi dan produk dari Tokopedia berdasarkan hasil diagnosis.",
    color: "from-yellow-500 to-yellow-700",
    bgColor: "bg-yellow-500/10",
  },
  {
    id: 4,
    title: "Presentation",
    subtitle: "Frontend Interface",
    icon: "⚛️",
    description:
      "Hasil ditampilkan melalui antarmuka pengguna interaktif berbasis React dan Tailwind.",
    color: "from-cyan-500 to-cyan-700",
    bgColor: "bg-cyan-500/10",
  },
];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-coral to-transparent rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-[#F3D3BE] to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-20 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative inline-block">
            <h2 className="text-6xl md:text-7xl font-bold font-poppins mb-8 leading-tight">
              <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent animate-gradient-flow">
                Powered by
              </span>
              <br />
              <span className="bg-gradient-to-r from-coral via-[#F3D3BE] to-coral bg-clip-text text-transparent animate-gradient-flow">
                Cutting-Edge Tech
              </span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-coral to-transparent animate-pulse" />
          </div>
          <p className="text-2xl  max-w-4xl mx-auto leading-relaxed mt-6 text-[#F3D3BE] ">
            Built on enterprise-grade technologies for
            <span className="font-bold text-coral mx-2">
              maximum reliability
            </span>
            and
            <span className="font-bold text-[#F3D3BE] mx-2">
              peak performance
            </span>
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredTech(index)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <Card
                className={`relative overflow-hidden ${tech.bgColor} backdrop-blur-sm border ${tech.borderColor} p-0 text-center group cursor-pointer hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl`}
              >
                <MagicCard
                  gradientColor="#D9D9D955"
                  className="p-4 "
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br  opacity-0 group-hover:opacity-5 transition-opacity duration-500 `}
                  />

                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className={`absolute inset-0 rounded-lg bg-gradient-to-r  p-[1px]`}
                    >
                      <div className="w-full h-full rounded-lg bg-transparent" />
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="text-5xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      {tech.icon}
                    </div>
                    <h3
                      className={`font-bold text-[#F3D3BE] mb-2 text-[#F3D3BE] group-hover:bg-gradient-to-r group-hover:${tech.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}
                    >
                      {tech.name}
                    </h3>
                    <p className="text-[#F3D3BE]/60 text-sm mb-3">
                      {tech.description}
                    </p>

                    {/* Expandable details */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        hoveredTech === index
                          ? "max-h-20 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pt-3 border-t border-[#F3D3BE]/10">
                        <p className="text-xs text-[#F3D3BE]/50">{tech.details}</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating particles */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-[#F3D3BE]/40 rounded-full animate-float"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${20 + i * 20}%`,
                          animationDelay: `${i * 0.5}s`,
                          animationDuration: `${2 + i * 0.5}s`,
                        }}
                      />
                    ))}
                  </div>
                </MagicCard>
              </Card>
            </div>
          ))}
        </div>

        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "0.8s" }}
        >
          <Card className="relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-10 shadow-2xl">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, coral 2px, transparent 2px)`,
                  backgroundSize: "50px 50px",
                }}
              />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-16">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-coral to-[#F3D3BE] bg-clip-text text-transparent mb-4">
                  Architecture Overview
                </h3>
                <p className="text-[#F3D3BE]/70 text-lg">
                  From data to deployment in minutes, not months
                </p>
              </div>

              {/* Flow Steps */}
              <div className="relative">
                {/* Progress Line Container */}
                <div className="absolute top-16 left-0 right-0 h-1 z-10 hidden md:block">
                  {/* Background line */}
                  <div className="absolute inset-0 bg-gradient-to-r from-coral/20 via-coral/30 to-coral/20 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-20">
                  {architectureFlow.map((step, index) => (
                    <div
                      key={step.id}
                      className={`text-center  group cursor-pointer transform transition-all duration-700 ${
                        activeFlow === index
                          ? "scale-110 -translate-y-2"
                          : activeFlow > index
                          ? "scale-105"
                          : "hover:scale-105"
                      }`}
                    >
                      {/* Step Container */}
                      <div
                        className={`relative ${
                          step.bgColor
                        } rounded-2xl p-6 h-[300px] border-white/10 transition-all duration-500  ${
                          activeFlow === index
                            ? "shadow-2xl border-coral/50 bg-gradient-to-br from-white/10 to-white/5"
                            : activeFlow > index
                            ? "shadow-xl   bg-gradient-to-br from-white/5 to-white/2"
                            : "border-white/10 hover:shadow-xl hover:border-white/20"
                        }`}
                      >
                        {/* Active glow effect */}
                        {activeFlow === index && (
                          <div className="absolute -inset-1 bg-gradient-to-r from-coral/20 to-[#F3D3BE]/20 rounded-2xl blur-lg animate-pulse" />
                        )}

                        <div className="relative z-10">
                          <div
                            className={`relative w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transition-all duration-500 ${
                              activeFlow === index
                                ? "bg-gradient-to-br from-coral to-[#F3D3BE] animate-bounce shadow-coral/50"
                                : activeFlow > index
                                ? `bg-gradient-to-br ${step.color} shadow-xl`
                                : `bg-gradient-to-br ${step.color} group-hover:shadow-xl`
                            }`}
                          >
                            <span
                              className={`text-2xl transition-all duration-300 ${
                                activeFlow === index ? "scale-110" : ""
                              }`}
                            >
                              {step.icon}
                            </span>

                            {/* Completion indicator */}
                            {activeFlow > index && (
                              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs">✓</span>
                              </div>
                            )}

                            {/* Active pulse effect */}
                            {activeFlow === index && (
                              <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
                            )}
                          </div>

                          {/* Step number */}
                          <div
                            className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold transition-all duration-300 ${
                              activeFlow >= index
                                ? "bg-coral scale-110"
                                : "bg-gray-500"
                            }`}
                          >
                            {step.id}
                          </div>

                          {/* Content */}
                          <h4
                            className={`font-bold mb-2 text-lg transition-all duration-300 ${
                              activeFlow === index ? "text-coral" : "text-[#F3D3BE]"
                            }`}
                          >
                            {step.title}
                          </h4>
                          <p
                            className={`text-sm mb-3 font-medium transition-all duration-300 ${
                              activeFlow === index
                                ? "text-[#F3D3BE]"
                                : `bg-gradient-to-r ${step.color} bg-clip-text text-transparent`
                            }`}
                          >
                            {step.subtitle}
                          </p>
                          <p
                            className={`text-sm leading-relaxed transition-all duration-300 ${
                              activeFlow === index
                                ? "text-[#F3D3BE]/90"
                                : "text-[#F3D3BE]/60"
                            }`}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Connection Arrow - Enhanced */}
                      {index < architectureFlow.length - 1 && (
                        <div className="hidden md:flex absolute top-16 -right-6 z-30 items-center justify-center">
                          <div
                            className={`transition-all duration-500 ${
                              activeFlow > index
                                ? "text-coral scale-125 animate-pulse"
                                : activeFlow === index
                                ? "text-[#F3D3BE] scale-110"
                                : "text-[#F3D3BE]/40"
                            }`}
                          ></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/10">
                {[
                  { label: "Processing Speed", value: "< 30s", icon: "⚡" },
                  { label: "Accuracy Rate", value: "99.9%", icon: "🎯" },
                  { label: "Uptime", value: "99.99%", icon: "🛡️" },
                  { label: "Global CDN", value: "150+", icon: "🌍" },
                ].map((stat, index) => (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-coral mb-2 group-hover:text-[#F3D3BE] transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-[#F3D3BE]/60 text-sm group-hover:text-[#F3D3BE]/80 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>

      <style>{`
        @keyframes gradient-flow {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-8px) rotate(120deg);
          }
          66% {
            transform: translateY(4px) rotate(240deg);
          }
        }

        .animate-gradient-flow {
          animation: gradient-flow 4s ease-in-out infinite;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TechStack;
