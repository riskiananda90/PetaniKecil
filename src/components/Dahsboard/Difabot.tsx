import { Button } from "@/components/ui/button";
import { ArrowLeft, BarChart3, Calendar, MapPin, Sprout } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

interface PredictionData {
  cropType: string;
  plantingDate: string;
  location: string;
  expectedYield: string;
  harvestDate: string;
  confidence: number;
}

interface HarvestPredictionProps {
  onBack: () => void;
}

const HarvestPrediction = ({ onBack }: HarvestPredictionProps) => {
  const [predictionData, setPredictionData] = useState<PredictionData | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    cropType: "",
    plantingDate: "",
    location: "",
    soilType: "",
    climate: "",
  });

  const handlePredict = async () => {
    if (!formData.cropType || !formData.plantingDate || !formData.location) {
      toast.error("Mohon lengkapi semua data yang diperlukan");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const mockPrediction: PredictionData = {
        cropType: formData.cropType,
        plantingDate: formData.plantingDate,
        location: formData.location,
        expectedYield: "2.5 - 3.2 ton/ha",
        harvestDate: "2025-09-15",
        confidence: 87,
      };

      setPredictionData(mockPrediction);
      setIsLoading(false);
      toast.success("Prediksi berhasil dibuat!");
    }, 2000);
  };

  return (
      <div className="min-h-screen text-white bg-zinc-900">
        {/* Header */}
        <div className="flex items-center justify-between p-4 lg:p-6 border-b border-[rgba(255,180,255,0.15)]">
          <div className="flex items-center space-x-3 lg:space-x-4">
            <Button
              onClick={onBack}
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white hover:bg-gray-700 p-2"
            >
              <ArrowLeft className="w-4 h-4 lg:w-5 lg:h-5" />
            </Button>
            <div className="flex items-center space-x-2 lg:space-x-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
              </div>
              <div>
                <h1 className="text-base lg:text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Prediksi Hasil Panen
                </h1>
                <p className="text-xs lg:text-sm text-gray-400 hidden sm:block">
                  Prediksi hasil panen berdasarkan data pertanian
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row h-[calc(100vh)]">
          {/* Sidebar - Input Form */}
          <div className="w-full lg:w-80 p-4 lg:p-6 border-b lg:border-b-0 lg:border-r border-[rgba(255,180,255,0.15)]">
            <div className="bg-zinc-800/50 rounded-2xl p-4 lg:p-6 border border-[rgba(255,180,255,0.15)]">
              <h2 className="text-lg font-semibold mb-4 lg:mb-6 text-gray-200">
                Data Pertanian
              </h2>

              <div className="space-y-3 lg:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Jenis Tanaman
                    </label>
                    <select
                      value={formData.cropType}
                      onChange={(e) =>
                        setFormData({ ...formData, cropType: e.target.value })
                      }
                      className="w-full p-2.5 lg:p-3 bg-zinc-700 border border-[rgba(255,180,255,0.15)] rounded-lg text-white text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Pilih tanaman</option>
                      <option value="padi">Padi</option>
                      <option value="jagung">Jagung</option>
                      <option value="kedelai">Kedelai</option>
                      <option value="cabai">Cabai</option>
                      <option value="tomat">Tomat</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Tanggal Tanam
                    </label>
                    <input
                      type="date"
                      value={formData.plantingDate}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          plantingDate: e.target.value,
                        })
                      }
                      className="w-full p-2.5 lg:p-3 bg-zinc-700 border border-[rgba(255,180,255,0.15)] rounded-lg text-white text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Lokasi
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Jawa Barat"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      className="w-full p-2.5 lg:p-3 bg-zinc-700 border border-[rgba(255,180,255,0.15)] rounded-lg text-white text-sm lg:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Jenis Tanah
                    </label>
                    <select
                      value={formData.soilType}
                      onChange={(e) =>
                        setFormData({ ...formData, soilType: e.target.value })
                      }
                      className="w-full p-2.5 lg:p-3 bg-zinc-700 border border-[rgba(255,180,255,0.15)] rounded-lg text-white text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Pilih jenis tanah</option>
                      <option value="liat">Tanah Liat</option>
                      <option value="berpasir">Tanah Berpasir</option>
                      <option value="lempung">Tanah Lempung</option>
                      <option value="humus">Tanah Humus</option>
                    </select>
                  </div>
                </div>

                <Button
                  onClick={handlePredict}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-2.5 lg:py-3 text-sm lg:text-base mt-4"
                >
                  {isLoading ? "Memprediksi..." : "Prediksi Hasil Panen"}
                </Button>
              </div>

              <div className="mt-6 lg:mt-3 p-2 lg:p-2 border-[rgba(255,180,255,0.15)] border rounded-lg text-[10px]">
                <h3 className="text-blue-400 mb-2 text-sm lg:text-base">
                  Tips Akurat:
                </h3>
                <ul className=" text-gray-300 space-y-1">
                  <li>• Masukkan data yang akurat</li>
                  <li>• Perhatikan kondisi cuaca terkini</li>
                  <li>• Update data secara berkala</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content - Prediction Results */}
          <div className="flex-1 p-4 lg:p-6 overflow-y-auto">
            {!predictionData ? (
              <div className="flex items-center justify-center h-full min-h-[300px] lg:min-h-0">
                <div className="text-center px-4">
                  <Sprout className="w-12 h-12 lg:w-16 lg:h-16 text-gray-500 mx-auto mb-4" />
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-400 mb-2">
                    Fitur dalam perbaikan
                  </h3>
                  <p className="text-sm lg:text-base text-gray-500 max-w-md mx-auto">
                    harap menunggu fitur ini sampai bulan 12-12-2025
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4 lg:space-y-6">
                <div className="bg-zinc-800/50 rounded-2xl p-4 lg:p-6 border border-[rgba(255,180,255,0.15)]">
                  <h3 className="text-lg lg:text-xl font-semibold mb-4 text-gray-200">
                    Hasil Prediksi
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-6">
                    <div className="bg-zinc-700/50 p-3 lg:p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Sprout className="w-4 h-4 lg:w-5 lg:h-5 text-green-400" />
                        <span className="text-xs lg:text-sm text-gray-300">
                          Tanaman
                        </span>
                      </div>
                      <p className="text-base lg:text-lg font-semibold text-white capitalize">
                        {predictionData.cropType}
                      </p>
                    </div>

                    <div className="bg-zinc-700/50 p-3 lg:p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <BarChart3 className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400" />
                        <span className="text-xs lg:text-sm text-gray-300">
                          Perkiraan Hasil
                        </span>
                      </div>
                      <p className="text-base lg:text-lg font-semibold text-white">
                        {predictionData.expectedYield}
                      </p>
                    </div>

                    <div className="bg-zinc-700/50 p-3 lg:p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="w-4 h-4 lg:w-5 lg:h-5 text-purple-400" />
                        <span className="text-xs lg:text-sm text-gray-300">
                          Perkiraan Panen
                        </span>
                      </div>
                      <p className="text-base lg:text-lg font-semibold text-white">
                        {new Date(
                          predictionData.harvestDate
                        ).toLocaleDateString("id-ID")}
                      </p>
                    </div>

                    <div className="bg-zinc-700/50 p-3 lg:p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400" />
                        <span className="text-xs lg:text-sm text-gray-300">
                          Tingkat Kepercayaan
                        </span>
                      </div>
                      <p className="text-base lg:text-lg font-semibold text-white">
                        {predictionData.confidence}%
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-800/50 rounded-2xl p-4 lg:p-6 border border-[rgba(255,180,255,0.15)]">
                  <h3 className="text-base lg:text-lg font-semibold mb-4 text-gray-200">
                    Rekomendasi
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-900/30 border border-green-700/50 rounded-lg">
                      <p className="text-green-300 text-xs lg:text-sm">
                        ✓ Kondisi pertumbuhan optimal untuk{" "}
                        {predictionData.cropType}
                      </p>
                    </div>
                    <div className="p-3 bg-blue-900/30 border border-blue-700/50 rounded-lg">
                      <p className="text-blue-300 text-xs lg:text-sm">
                        ℹ Pantau cuaca 2 minggu sebelum panen untuk hasil
                        maksimal
                      </p>
                    </div>
                    <div className="p-3 bg-yellow-900/30 border border-yellow-700/50 rounded-lg">
                      <p className="text-yellow-300 text-xs lg:text-sm">
                        ⚠ Siapkan sistem pengairan cadangan jika diperlukan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
  );
};

export default HarvestPrediction;
