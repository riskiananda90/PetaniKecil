import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Sprout,
  User,
  Bell,
  Timer,
  Wheat,
  TrendingUp,
  Package,
  Camera,
  MessageCircle,
  TimerReset,
} from "lucide-react";
import Agribot from "@/components/Dahsboard/Agribot";
import Difabot from "@/components/Dahsboard/Difabot";
import Learnmate from "@/components/Dahsboard/LearnMate";
import { Link } from "react-router-dom";
import HeaderNotif from "@/components/headerNotif";

const Dashboard = () => {
  const [activeBot, setActiveBot] = useState<string | null>(null);

  const renderBotComponent = () => {
    switch (activeBot) {
      case "agribot":
        return <Agribot onBack={() => setActiveBot(null)} />;
      case "difabot":
        return <Difabot onBack={() => setActiveBot(null)} />;
      case "learnmate":
        return <Learnmate onBack={() => setActiveBot(null)} />;
      default:
        return null;
    }
  };

  if (activeBot) {
    return renderBotComponent();
  }

  return (
    <div className="min-h-screen bg-stone-900 text-white">
      <HeaderNotif/>
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-stone-800">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center font-bold text-white">
            HD
          </div>
          <h1 className="text-xl font-semibold">HarapanDigital</h1>
        </Link>
        <div className="flex items-center space-x-4">
          <button className="p-1 hover:bg-gray-700 rounded-full transition-colors">
            <div className="p-2  bg-amber-800 rounded-full flex items-center justify-center">
              <Bell size={16} className="" />
            </div>
          </button>
          <button className="p-1 hover:bg-gray-700 rounded-full transition-colors">
            <div className="w-8 h-8 bg-amber-800 rounded-full flex items-center justify-center">
              <User />
            </div>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-72 p-6 border-r border-stone-800">
          <div className="rounded-2xl p-6 border  border-stone-800">
            <h2 className="text-lg font-semibold mb-6 text-gray-200">
              Quick Action
            </h2>
            <div className="space-y-4">
              <Button
                onClick={() => setActiveBot("agribot")}
                className="w-full text-white font-medium py-3 bg-transparent border-2 border-stone-800 rounded-xl hover:bg-amber-700/10 hover:border-amber-700 transition-all duration-200 hover:scale-105"
              >
                <Sprout className="w-5 h-5 mr-2" />
                Agribot
              </Button>
              <Button
                onClick={() => setActiveBot("difabot")}
                variant="outline"
                className="w-full bg-transparent border-2  border-stone-800 text-gray-300 hover:bg-gray-700 hover:bg-amber-700/10 hover:border-amber-700 font-medium py-3 rounded-xl transition-all duration-200 hover:scale-105"
              >
                <Wheat className="w-5 h-5 mr-2" />
                Prediksi panen
              </Button>
              <Button
                disabled
                // onClick={() => setActiveBot("comingsoon")}
                variant="outline"
                className="w-full bg-transparent border-2   disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:border-stone-800    border-stone-800 text-gray-300 hover:bg-gray-700 hover:bg-amber-700/10 hover:border-amber-700 font-medium py-3 rounded-xl transition-all duration-200 hover:scale-105"
              >
                <Timer className="w-5 h-5 mr-2" />
                Segera Hadir
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1  p-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              AI Assistant Suite
            </h1>
            <p className="text-gray-400 mb-12 text-lg">
              Pilih assistant AI yang sesuai dengan kebutuhan Anda
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Agribot Card */}
              <Card
                className=" border-stone-800 hover:border-orange-500 transition-all duration-300 cursor-pointer hover:scale-105 group"
                onClick={() => setActiveBot("agribot")}
              >
                <CardHeader className="pb-4 flex flex-col items-center justify-center  ">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Sprout className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-orange-400 transition-colors">
                    Agribot
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Asisten Pertanian Pintar
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Chat konsultasi pertanian real-time</li>
                    <li>• Deteksi penyakit tanaman via gambar</li>
                    <li>• Rekomendasi produk pengendalian hama</li>
                    <li>• Prediksi waktu dan hasil panen</li>
                    <li>• Analisis kondisi tanah dan cuaca</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Difabot Card */}
              <Card
                className=" border-stone-800 hover:border-orange-500 transition-all duration-300 cursor-pointer hover:scale-105 group"
                onClick={() => setActiveBot("prediksi")}
              >
                <CardHeader className="pb-4 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-8 h-8 text-white text-center" />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-orange-400 transition-colors">
                    Prediksi Panen
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Analisis Hasil dan Waktu Panen
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Prediksi waktu panen optimal</li>
                    <li>• Estimasi hasil panen dalam ton</li>
                    <li>• Analisis faktor cuaca dan iklim</li>
                    <li>• Rekomendasi peningkatan kualitas</li>
                    <li>• Perencanaan strategi panen</li>
                  </ul>
                </CardContent>
              </Card>
              <Card
                className="cursor-not-allowed opacity-50    border-stone-800 transition-all duration-300 "
                // onClick={() => setActiveBot("prediksi")}
              >
                <CardHeader className="pb-4 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <TimerReset className="w-8 h-8 text-white text-center" />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-orange-400 transition-colors">
                    Segera hadir
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Segera hadir
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Segera hadir</li>
                    <li>• Segera hadir</li>
                    <li>• Segera hadir</li>
                    <li>• Segera hadir</li>
                    <li>• Segera hadir</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Features Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-center text-white">
                Fitur Unggulan Agribot
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6 rounded-xl border  border-stone-800">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">
                    Chat Konsultasi
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Konsultasi pertanian 24/7 dengan AI expert
                  </p>
                </div>
                <div className="text-center p-6 rounded-xl border  border-stone-800">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">
                    Deteksi Penyakit
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Identifikasi penyakit tanaman melalui foto
                  </p>
                </div>
                <div className="text-center p-6 rounded-xl border  border-stone-800">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">
                    Rekomendasi Produk
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Saran produk terbaik untuk mengatasi hama
                  </p>
                </div>
                <div className="text-center p-6 rounded-xl border  border-stone-800">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">
                    Prediksi Panen
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Estimasi waktu panen dan hasil optimal (ton)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
