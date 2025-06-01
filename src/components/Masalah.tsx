import { BorderBeam } from "./magicui/border-beam";
import { Card } from "./ui/card";
import { useState, useEffect, useRef } from "react";

const Masalah = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const rafId = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    setAnimationTriggered(true);

    const duration = 2000; // durasi animasi 2 detik

    const step = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min(
        (timestamp - startTimeRef.current) / duration,
        1
      );


      if (progress < 1) {
        rafId.current = requestAnimationFrame(step);
      }
    };

    rafId.current = requestAnimationFrame(step);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

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
                Dari masalah
              </span>
              <br />
              <span className="text-[#F3D3BE] relative">
                ke solusi
                <div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-coral to-transparent transform scale-x-0 animate-scale-x"
                  style={{ animationDelay: "0.8s" }}
                ></div>
              </span>
            </h2>
          </div>
          <p className="sm:text-2xl text-[#F3D3BE] max-w-4xl mx-auto leading-relaxed">
           Petani bingung harus mulai dari mana? Kami beri jawabannya dalam hitungan 
            <span className="font-semibold text-coral ml-2 relative">
              menit
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-coral animate-pulse"></div>
            </span>
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="sm:flex justify-center items-center sm:gap-10">
          {/* Card Sebelum Pakai Agribot */}
          <div
            className={`transform transition-all duration-1000 w-[500px] mb-5 ${
              animationTriggered
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            <Card className="relative overflow-hidden bg-gradient-to-br from-red-50/10 to-red-100/5 backdrop-blur-sm border border-red-200/20 p-10 h-[500px] group transition-all duration-500 shadow-2xl">
              <BorderBeam duration={8} size={70} />
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-center relative z-10">
                <div className="relative mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-600/30 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border border-red-400/20 group-hover:scale-110 transition-transform duration-300">
                    <span
                      className="text-4xl animate-bounce"
                      style={{ animationDelay: "0.5s" }}
                    >
                      🌾
                    </span>
                  </div>
                  <div className="absolute -inset-4 bg-red-500/10 rounded-full blur-xl opacity-50 animate-pulse"></div>
                </div>

                <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Sebelum Agribot
                </h3>

                <div className="space-y-3">
                  {[
                    {
                      icon: "",
                      text: "Sulit mengenali penyakit tanaman",
                      color: "from-red-400 to-red-600",
                    },
                    {
                      icon: "",
                      text: "Waktu lama cari solusi",
                      color: "from-red-400 to-red-600",
                    },
                    {
                      icon: "",
                      text: "Produk pestisida sulit ditemukan",
                      color: "from-red-400 to-red-600",
                    },
                    {
                      icon: "",
                      text: "Sulit menentukan hasil panen",
                      color: "from-red-400 to-red-600",
                    },
                  ].map((point, index) => (
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
                        className={`w-2 h-2 bg-gradient-to-r ${point.color} rounded-full flex items-center justify-center text-white shadow-lg`}
                      >
                        {point.icon}
                      </div>
                      <span className="text-[#F3D3BE] text-lg text-start ">
                        {point.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 py-1 bg-gradient-to-r from-red-500/10 to-red-600/5 rounded-2xl border border-red-400/20 backdrop-blur-sm">
                  <div className="text-xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                    Lambat & Manual
                  </div>
                  <p className="text-[#F3D3BE] text-md">
                    Terlalu banyak langkah
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Card Setelah Pakai Agribot */}
          <div
            className={`transform transition-all duration-1000 w-[500px] mb-5 ${
              animationTriggered
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "0.5s" }}
          >
            <Card className="relative overflow-hidden bg-gradient-to-br from-emerald-50/10 to-green-100/5 backdrop-blur-sm border border-green-200/20 p-10 h-[500px] group transition-all duration-500 shadow-2xl">
              <BorderBeam duration={8} reverse size={70} />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-center relative z-10">
                <div className="relative mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-green-600/30 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border border-emerald-400/20 group-hover:scale-110 transition-transform duration-300">
                    <span
                      className="text-4xl animate-bounce"
                      style={{ animationDelay: "0.7s" }}
                    >
                      🤖
                    </span>
                  </div>
                  <div className="absolute -inset-4 bg-emerald-500/10 rounded-full blur-xl opacity-50 animate-pulse"></div>
                </div>

                <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
                  Setelah Pakai Agribot
                </h3>

                <div className="space-y-3">
                  {[
                    {
                      icon: "",
                      text: "Konsultasi instan lewat chat",
                      color: "from-emerald-400 to-green-600",
                    },
                    {
                      icon: "",
                      text: "Upload gambar, deteksi otomatis",
                      color: "from-emerald-400 to-green-600",
                    },
                    {
                      icon: "",
                      text: "Cari & beli produk hama langsung",
                      color: "from-emerald-400 to-green-600",
                    },
                    {
                      icon: "",
                      text: "Prediksi hasil panen",
                      color: "from-emerald-400 to-green-600",
                    },
                  ].map((point, index) => (
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
                        className={`w-2 h-2 bg-gradient-to-r ${point.color} rounded-full flex items-center justify-center text-white shadow-lg`}
                      >
                        {point.icon}
                      </div>
                      <span className="text-[#F3D3BE] text-lg text-start">
                        {point.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 py-1  bg-gradient-to-r from-emerald-500/10 to-green-600/5 rounded-2xl border border-emerald-400/20 backdrop-blur-sm">
                  <div className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
                    <span className="whitespace-nowrap">Cepat & Otomatis</span>
                  </div>
                  <p className="text-[#F3D3BE] text-md">
                    Langsung solusi di tangan
                  </p>
                </div>
              </div>
            </Card>
          </div>
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
