import { BorderBeam } from "./magicui/border-beam";
import { useNavigate } from "react-router-dom";

const featuresData: Feature[] = [
  {
    id: "agribot",
    icon: "🌾",
    title: "AgriBot Assistant",
    description:
      "Asisten cerdas untuk pertanian yang memberikan saran optimal berdasarkan kondisi tanaman dan cuaca, didukung oleh Granite AI.",
    color: "orange",
    points: [
      {
        title: "Rekomendasi Cerdas",
        desc: "Berikan rekomendasi pupuk, pestisida, dan tindakan pertanian berdasarkan data tanah, cuaca, dan tanaman.",
      },
      {
        title: "Deteksi Hama Otomatis",
        desc: "Unggah gambar tanaman dan AgriBot akan mendeteksi jenis hama dan memberikan solusi yang tepat.",
      },
      {
        title: "Interaksi Natural",
        desc: "Gunakan bahasa alami untuk bertanya dan mendapatkan jawaban real-time ",
      },
    ],
    buttonText: "Coba AgriBot",
  },
  {
    id: "harvestai",
    icon: "📈",
    title: "HarvestAI Predictor",
    description:
      "Sistem prediksi hasil panen berbasis AI yang memanfaatkan  kondisi saat ini untuk meningkatkan perencanaan pertanian.",
    color: "pink",
    points: [
      {
        title: "Prediksi Hasil Panen",
        desc: "Prediksi kuantitas dan waktu panen berdasarkan data historis, pola cuaca, dan kondisi tanaman.",
      },
      {
        title: "Kalender Tanam Pintar",
        desc: "Saran waktu tanam dan panen optimal berdasarkan lokasi geografis dan jenis tanaman.",
      },
      {
        title: "Analitik Pertanian",
        desc: "Tampilkan data visual untuk mendukung keputusan pertanian berbasis data.",
      },
    ],
    buttonText: "Lihat Prediksi",
  },
];

type FeaturePoint = {
  title: string;
  desc: string;
};

type Feature = {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: "orange" | "pink";
  points: FeaturePoint[];
  buttonText: string;
};

const FeatureCard = ({ feature }: { feature: Feature }) => {
  const colorClasses = {
    orange: {
      bg: "bg-orange-500/20",
      dot: "bg-orange-500",
      textGradient: "from-orange-400 to-pink-600",
      buttonBg: "bg-orange-500 hover:bg-orange-600",
      focusRing: "focus:ring-orange-500",
    },
    pink: {
      bg: "bg-pink-500/20",
      dot: "bg-pink-500",
      textGradient: "from-pink-400 to-purple-600",
      buttonBg: "bg-pink-500 hover:bg-pink-600",
      focusRing: "focus:ring-pink-500",
    },
  };
  const navigate = useNavigate()
  const c = colorClasses[feature.color];

  return (
    <div className="transform transition-all duration-500 hover:scale-105 bg-gradient-hero">
      <div
        className={`backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 shadow-2xl  transition-all duration-300 h-[580px] flex flex-col justify-between`}
      >
        <BorderBeam
          duration={4}
          size={100}
          reverse
          className={`from-transparent ${c.textGradient} to-transparent`}
        />
        <div className="mb-6">
          <div
            className={`${c.bg} rounded-xl flex items-center justify-center w-16 h-16 mb-4`}
          >
            <span className="text-2xl">{feature.icon}</span>
          </div>
          <h3
            className={`text-3xl font-bold bg-gradient-to-r ${c.textGradient} bg-clip-text text-transparent mb-4`}
          >
            {feature.title}
          </h3>
          <p className="text-amber-100/70 text-lg leading-relaxed">
            {feature.description}
          </p>
        </div>

        <div className="space-y-4 mb-8 ">
          {feature.points.map(({ title, desc }: FeaturePoint, idx: number) => (
            <div className="flex items-start gap-4" key={idx}>
              <div
                className={`${c.dot} w-2 h-2 rounded-full mt-2 flex-shrink-0`}
              ></div>
              <div>
                <h4 className="font-semibold text-amber-100 mb-1">{title}</h4>
                <p className="text-amber-100/60 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className={`${c.buttonBg} w-full mb-1 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 ${c.focusRing} focus:ring-offset-2 focus:ring-offset-slate-900`}
          onClick={() => navigate(`/login`)}
        >
          {feature.buttonText}
        </button>
      </div>
    </div>
  );
};

const Features = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 px-4 relative bg-gradient-hero min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-amber-100">Resolusi Pertanian</span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
              Powered by AI
            </span>
          </h2>
          <p className="text-xl text-amber-100/70 max-w-3xl mx-auto">
            Dua fitur cerdas untuk membantu petani membuat keputusan lebih baik,
            lebih cepat, dan lebih akurat.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {featuresData.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        <div className="mt-16 transform transition-all duration-500">
          <div className="bg-slate-800/30 backdrop-blur-lg border border-slate-700/30 rounded-2xl p-8 text-center shadow-xl">
            <BorderBeam
              duration={6}
              delay={3}
              size={100}
              className="from-transparent via-blue-500 to-transparent"
            />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Harmoni Teknologi & Alam
            </h3>
            <p className="text-amber-100/70 text-lg max-w-3xl mx-auto mb-6">
              AgriBot dan HarvestAI bekerja berdampingan untuk menciptakan
              ekosistem pertanian yang cerdas. Dari rekomendasi harian hingga
              prediksi panen — semuanya ditenagai oleh Granite AI.
            </p>
            <div className="flex justify-center">
              <button  onClick={() => navigate(`/login`)} className="px-8 py-3 bg-slate-700/50 border border-blue-500/30 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900">

                Lihat Kolaborasi Cerdas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
