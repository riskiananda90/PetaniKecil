import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sprout, Eye, GraduationCap, User, Bell } from "lucide-react";
import Agribot from "@/components/Dahsboard/Agribot";
import Difabot from "@/components/Dahsboard/Difabot";
import Learnmate from "@/components/Dahsboard/LearnMate";
import { Link } from "react-router-dom";

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
                  <Eye className="w-5 h-5 mr-2" />
                  Difabot
                </Button>
                <Button
                  onClick={() => setActiveBot("learnmate")}
                  variant="outline"
                  className="w-full bg-transparent border-2  border-stone-800 text-gray-300 hover:bg-gray-700 hover:bg-amber-700/10 hover:border-amber-700 font-medium py-3 rounded-xl transition-all duration-200 hover:scale-105"
                >
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Learnmate
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-8">
            <div className="max-w-4xl mx-auto">
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
                  <CardHeader className="pb-4">
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
                      <li>• Identifikasi hama dan penyakit tanaman</li>
                      <li>• Rekomendasi pupuk dan pestisida</li>
                      <li>• Jadwal tanam dan panen optimal</li>
                      <li>• Analisis kondisi tanah</li>
                      <li>• Tips perawatan tanaman modern</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Difabot Card */}
                <Card
                  className=" border-stone-800 hover:border-orange-500 transition-all duration-300 cursor-pointer hover:scale-105 group"
                  onClick={() => setActiveBot("difabot")}
                >
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-orange-400 transition-colors">
                      Difabot
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Asisten untuk Tuna Netra
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Interaksi dengan suara</li>
                      <li>• Deskripsi gambar real-time</li>
                      <li>• Pengenalan objek di sekitar</li>
                      <li>• Output audio yang jelas</li>
                      <li>• Navigasi dengan voice command</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Learnmate Card */}
                <Card
                  className=" border-stone-800 hover:border-orange-500 transition-all duration-300 cursor-pointer hover:scale-105 group"
                  onClick={() => setActiveBot("learnmate")}
                >
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-orange-400 transition-colors">
                      Learnmate
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Platform Belajar Desa Terpencil
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Akses pembelajaran berdasarkan kelas</li>
                      <li>• Materi yang mudah dipahami</li>
                      <li>• Tanya jawab interaktif</li>
                      <li>• Latihan soal dan kuis</li>
                      <li>• Progress tracking belajar</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Features Section */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold mb-8 text-center text-white">
                  Teknologi AI Terdepan untuk Semua
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-6 rounded-xl border  border-stone-800">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sprout className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">
                      Smart Agriculture
                    </h3>
                    <p className="text-gray-400 text-sm">
                      AI untuk optimasi pertanian modern
                    </p>
                  </div>
                  <div className="text-center p-6 rounded-xl border  border-stone-800">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">
                      Accessibility
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Teknologi untuk semua kalangan
                    </p>
                  </div>
                  <div className="text-center p-6 rounded-xl border  border-stone-800">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">Education</h3>
                    <p className="text-gray-400 text-sm">
                      Pembelajaran untuk desa terpencil
                    </p>
                  </div>
                  <div className="text-center p-6 rounded-xl border  border-stone-800">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                    <h3 className="font-semibold text-white mb-2">
                      Innovation
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Solusi inovatif berbasis AI
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
