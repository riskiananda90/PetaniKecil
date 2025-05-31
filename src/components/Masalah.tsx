import { BorderBeam } from "./magicui/border-beam";
import { Card } from "./ui/card";
import { useState, useEffect, useRef } from "react";

const Masalah = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [countUp, setCountUp] = useState({
    faster: 0,
    formats: 0,
    tests: 0,
  });

  const rafId = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    setAnimationTriggered(true);

    const duration = 2000; // durasi animasi 2 detik
    const target = { faster: 90, formats: 15, tests: 1000 };

    const step = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min(
        (timestamp - startTimeRef.current) / duration,
        1
      );

      setCountUp({
        faster: Math.floor(progress * target.faster),
        formats: Math.floor(progress * target.formats),
        tests: Math.floor(progress * target.tests),
      });

      if (progress < 1) {
        rafId.current = requestAnimationFrame(step);
      }
    };

    rafId.current = requestAnimationFrame(step);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const problemPoints = [
    {
      icon: "📚",
      text: "Materi sulit dipahami siswa",
      color: "from-red-500 to-red-600",
    },
    {
      icon: "🕐",
      text: "Waktu belajar tidak terstruktur",
      color: "from-red-400 to-red-500",
    },
    {
      icon: "😓",
      text: "Kurangnya bimbingan personal",
      color: "from-red-600 to-red-700",
    },
    {
      icon: "📉",
      text: "Motivasi belajar menurun",
      color: "from-red-500 to-red-600",
    },
  ];
  
  const solutionPoints = [
    {
      icon: "🧠",
      text: "Materi adaptif berbasis AI",
      color: "from-emerald-400 to-emerald-500",
    },
    {
      icon: "🗓️",
      text: "Jadwal belajar fleksibel & terstruktur",
      color: "from-green-400 to-green-500",
    },
    {
      icon: "👩‍🏫",
      text: "Pembelajaran personal interaktif",
      color: "from-teal-400 to-teal-500",
    },
    {
      icon: "🏆",
      text: "Meningkatkan motivasi & prestasi siswa",
      color: "from-cyan-400 to-cyan-500",
    },
  ];
  
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-coral to-cream rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#F3D3BE] to-coral rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-coral/30 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-10 transition-all duration-1000 transform ${
            animationTriggered
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative inline-block">
            <h2 className="sm:text-5xl text-3xl font-bold font-poppins mb-8 leading-tight">
              <span className="bg-gradient-to-r from-coral via-[#F3D3BE] to-coral bg-clip-text text-transparent animate-gradient-x">
                From Complex
              </span>
              <br />
              <span className="text-[#F3D3BE] relative">
                to Simple
                <div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-coral to-transparent transform scale-x-0 animate-scale-x"
                  style={{ animationDelay: "0.8s" }}
                ></div>
              </span>
            </h2>
          </div>
          <p className="sm:text-2xl text-[#F3D3BE] max-w-4xl mx-auto leading-relaxed">
            Traditional development takes months. We make it
            <span className="font-semibold text-coral ml-2 relative">
              minutes
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-coral animate-pulse"></div>
            </span>
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="sm:flex  justify-center items-center sm:gap-10    ">
          {/* Before Card */}
          <div
            className={`transform transition-all duration-1000 max-w-[400px] mb-5   ${
              animationTriggered
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            <Card className="  relative overflow-hidden bg-gradient-to-br from-red-50/10 to-red-100/5 backdrop-blur-sm border border-red-200/20 p-10 h-[500px]  group  transition-all duration-500 shadow-2xl">
              <BorderBeam duration={8} size={70} />
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="text-center relative z-10">
                <div className="relative mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-600/30 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border border-red-400/20 group-hover:scale-110 transition-transform duration-300">
                    <span
                      className="text-4xl animate-bounce"
                      style={{ animationDelay: "0.5s" }}
                    >
                      😤
                    </span>
                  </div>
                  <div className="absolute -inset-4 bg-red-500/10 rounded-full blur-xl opacity-50 animate-pulse"></div>
                </div>

                <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Traditional Development
                </h3>

                <div className="space-y-3">
                  {problemPoints.map((point, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-4 transform transition-all duration-500 ${
                        animationTriggered
                          ? "translate-x-0 opacity-100"
                          : "translate-x-5 opacity-0"
                      }`}
                      style={{ transitionDelay: `${0.8 + index * 0.1}s` }}
                    >
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${point.color} rounded-full flex items-center justify-center text-white shadow-lg`}
                      >
                        {point.icon}
                      </div>
                      <span className="text-[#F3D3BE] text-lg ">
                        {point.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 py-1  bg-gradient-to-r from-red-500/10 to-red-600/5 rounded-2xl border border-red-400/20 backdrop-blur-sm">
                  <div className="text-xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                    6+ Months
                  </div>
                  <p className="text-[#F3D3BE] text-md">
                    Average Development Time
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div
            className={`transform transition-all duration-1000 w-[400px] mb-5   ${
              animationTriggered
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "0.5s" }}
          >
            <Card className="relative overflow-hidden bg-gradient-to-br from-emerald-50/10 to-green-100/5 backdrop-blur-sm border border-green-200/20 p-10  h-[500px] group  transition-all duration-500 shadow-2xl">
              <BorderBeam duration={8} reverse size={70} />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="text-center relative z-10">
                <div className="relative mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-green-600/30 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border border-emerald-400/20 group-hover:scale-110 transition-transform duration-300">
                    <span
                      className="text-4xl animate-bounce"
                      style={{ animationDelay: "0.7s" }}
                    >
                      🚀
                    </span>
                  </div>
                  <div className="absolute -inset-4 bg-emerald-500/10 rounded-full blur-xl opacity-50 animate-pulse"></div>
                </div>

                <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
                  ZeroCode Genesis
                </h3>

                <div className="space-y-3">
                  {solutionPoints.map((point, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-4 transform transition-all duration-500 ${
                        animationTriggered
                          ? "translate-x-0 opacity-100"
                          : "translate-x-5 opacity-0"
                      }`}
                      style={{ transitionDelay: `${1.0 + index * 0.1}s` }}
                    >
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${point.color} rounded-full flex items-center justify-center text-white shadow-lg`}
                      >
                        {point.icon}
                      </div>
                      <span className="text-[#F3D3BE] text-lg ">
                        {point.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 py-1 bg-gradient-to-r from-emerald-500/10 to-green-600/5 rounded-2xl border border-emerald-400/20 backdrop-blur-sm">
                  <div className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent ">
                    5 Minutes
                  </div>
                  <p className="text-[#F3D3BE] text-md">From Data to App</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="sm:grid grid-cols-2 lg:grid-cols-4 gap-4 w-[820px] hidden   mx-auto">
          {[
            {
              number: `${countUp.faster}%`,
              label: "Faster Development",
              color: "from-purple-400 to-purple-600",
              icon: "⚡",
            },
            {
              number: "0",
              label: "Coding Required",
              color: "from-blue-400 to-blue-600",
              icon: "🎯",
            },
            {
              number: `${countUp.formats}+`,
              label: "Data Formats",
              color: "from-green-400 to-green-600",
              icon: "📊",
            },
            {
              number: `${countUp.tests}+`,
              label: "Auto Tests",
              color: "from-orange-400 to-orange-600",
              icon: "🧪",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-1000 ${
                animationTriggered
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              } group `}
              style={{ transitionDelay: `${1.4 + index * 0.1}s` }}
            >
              <div className="relative p-2 w-48 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl">
                <div className="text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div
                  className={`text-6xl lg:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`}
                >
                  {stat.number}
                </div>
                <p className="text-[#F3D3BE] text-md ">{stat.label}</p>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
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
        @keyframes scale-x {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        .animate-scale-x {
          animation: scale-x 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Masalah;
