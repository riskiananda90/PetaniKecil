import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Mic, MicOff, Volume2, Eye, User } from "lucide-react";
import { toast } from "sonner";
import MouseLight from "../mouseLight";

interface Message {
  type: "bot" | "user";
  content: string;
  timestamp: string;
  hasAudio?: boolean;
}

interface DifabotProps {
  onBack: () => void;
}

const Difabot = ({ onBack }: DifabotProps) => {
  const [isListening, setIsListening] = useState(false);
  const [isProssesVn, setisProssesVn] = useState(false);
  const [isProcessing, setisProcessing] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      content:
        "Selamat datang di Difabot! Saya adalah asisten belajar khusus untuk teman-teman tunanetra. Anda dapat berinteraksi dengan saya menggunakan suara. Cukup tekan tombol mikrofon dan sampaikan pertanyaan Anda melalui voice note. Saya siap membantu menjelaskan materi pelajaran, menjawab pertanyaan umum, serta menemani proses belajar Anda sehari-hari.",
      timestamp: "22:26",
      hasAudio: true,
    },
  ]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const handleVoiceInput = async () => {
    if (isListening) {
      setIsListening(false);
      setisProssesVn(true);

      // Simulate processing
      setTimeout(() => {
        const userMessage: Message = {
          type: "user",
          content: "Apa yang ada di depan saya?",
          timestamp: new Date().toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };

        setMessages((prev) => [...prev, userMessage]);

        setisProssesVn(false);
        setisProcessing(true);
        setTimeout(() => {
          const botResponse: Message = {
            type: "bot",
            content:
              "Saya melihat sebuah ruangan dengan meja dan kursi. Di atas meja terdapat laptop yang terbuka dan beberapa buku. Pencahayaan ruangan cukup terang dari jendela sebelah kanan. Tidak ada rintangan di depan Anda dalam radius 2 meter.",
            timestamp: new Date().toLocaleTimeString("id-ID", {
              hour: "2-digit",
              minute: "2-digit",
            }),
            hasAudio: true,
          };
          setMessages((prev) => [...prev, botResponse]);

          setisProcessing(false);
          toast.success("Audio deskripsi telah diputar");
        }, 2000);
      }, 2000);
    } else {
      setIsListening(true);
      toast.info("Mendengarkan... Silakan berbicara");
    }
  };
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setisProssesVn(true);

      const userMessage: Message = {
        type: "user",
        content: "Foto diupload untuk dideskripsikan",
        timestamp: new Date().toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, userMessage]);

      // Simulate image processing
      setTimeout(() => {
        const descriptions = [
          "Saya melihat sebuah taman dengan bunga-bunga berwarna merah dan kuning yang sedang mekar. Ada bangku kayu di sebelah kiri dan jalan setapak yang mengarah ke depan. Cuaca terlihat cerah dengan sedikit awan di langit biru.",
          "Ini adalah foto makanan di atas piring. Saya melihat nasi putih, ayam goreng yang berwarna kecoklatan, sayuran hijau yang terlihat seperti kangkung, dan sambal merah di samping. Ada juga segelas air putih di sebelah piring.",
          "Foto menunjukkan seseorang sedang membaca buku di ruang tamu. Orang tersebut duduk di sofa berwarna coklat, dengan lampu meja menyala di sebelahnya. Di latar belakang terlihat rak buku dan beberapa tanaman hias.",
        ];

        const randomDescription =
          descriptions[Math.floor(Math.random() * descriptions.length)];

        const botResponse: Message = {
          type: "bot",
          content: randomDescription,
          timestamp: new Date().toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          hasAudio: true,
        };

        setMessages((prev) => [...prev, botResponse]);
        setisProssesVn(false);

        // Simulate text-to-speech
        toast.success("Deskripsi gambar telah diputar dalam audio");
      }, 3000);
    }
  };

  const playAudio = (message: string) => {
    toast.info("Memutar audio: " + message.substring(0, 50) + "...");
    // In real app, this would use text-to-speech API
  };

  return (
    <MouseLight bgColor="bg-zinc-900" glowColor="rgba(255,180,255,0.15)">
      <div className="min-h-screen text-white">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[rgba(255,180,255,0.15)]">
          <div className="flex items-center space-x-4">
            <Button
              onClick={onBack}
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white hover:bg-gray-700"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Difabot
                </h1>
                <p className="text-sm text-gray-400">
                  Asisten untuk Tuna Netra
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-[calc(100vh-80px)]">
          {/* Sidebar */}
          <div className="w-72 p-6 border-r border-[rgba(255,180,255,0.15)]">
            <div className="rgba(255,180,255,0.15) rounded-2xl p-6 border border-[rgba(255,180,255,0.15)]">
              <h2 className="text-lg font-semibold mb-6 text-gray-200">
                Kontrol Suara
              </h2>
              <div className="space-y-4">
                <Button
                  onClick={handleVoiceInput}
                  disabled={isProssesVn}
                  className={`w-full py-4 text-lg font-medium rounded-xl transition-all duration-200 ${
                    isListening
                      ? "bg-red-500 hover:bg-red-600 animate-pulse"
                      : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  } ${
                    isProssesVn
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:scale-105"
                  }`}
                >
                  {isListening ? (
                    <>
                      <MicOff className="w-6 h-6 mr-2" />
                      Stop Recording
                    </>
                  ) : isProssesVn ? (
                    <>
                      <div className="w-6 h-6 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Mic className="w-6 h-6 mr-2" />
                      Mulai Bicara
                    </>
                  )}
                </Button>
              </div>

              <div className="mt-8 p-4 border-[rgba(255,180,255,0.15)] border rounded-lg">
                <h3 className="font-medium text-blue-400 mb-2">
                  Tips Penggunaan:
                </h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Tekan mic untuk berbicara</li>
                  <li>• Semua output dalam bentuk audio</li>
                  <li>• Tanya apapun yang ingin diketahui</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <Card
                    className={`max-w-3xl border-[rgba(255,180,255,0.15)] ${
                      msg.type === "user" ? " text-white" : " text-gray-100"
                    }`}
                  >
                    <CardContent className="">
                      {msg.type === "bot" && (
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                              <Eye className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm font-medium text-blue-400">
                              Difabot
                            </span>
                          </div>
                          {msg.hasAudio && (
                            <Button
                              onClick={() => playAudio(msg.content)}
                              size="sm"
                              variant="ghost"
                              className="text-blue-400 hover:text-blue-300 hover:bg-gray-700"
                            >
                              <Volume2 className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      )}
                      <p className="text-sm leading-relaxed font-medium">
                        {msg.content}
                      </p>
                      <p className="text-xs mt-3 opacity-60">{msg.timestamp}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}

              {isProssesVn && (
                <div className="flex justify-end">
                  <Card className="rgba(255,180,255,0.15) border-[rgba(255,180,255,0.15)]">
                    <CardContent>
                      <div className="flex items-center mb-3">
                        <span className="text-sm font-medium text-blue-400">
                          Saya
                        </span>
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center ml-3">
                          <User className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div className="flex space-x-1 mt-6">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
              {isProcessing && (
                <div className="flex justify-start">
                  <Card className="rgba(255,180,255,0.15) border-[rgba(255,180,255,0.15)]">
                    <CardContent>
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                          <Eye className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-blue-400">
                          Difabot
                        </span>
                      </div>
                      <div className="flex space-x-1 mt-6">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Voice Controls */}
            <div className="p-6 border-t border-[rgba(255,180,255,0.15)]">
              <div className="flex justify-center space-x-6">
                <Button
                  onClick={handleVoiceInput}
                  disabled={isProssesVn}
                  size="lg"
                  className={`w-16 h-16 rounded-full transition-all duration-200 ${
                    isListening
                      ? "bg-red-500 hover:bg-red-600 animate-pulse scale-110"
                      : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  } ${isProssesVn ? "opacity-50" : "hover:scale-110"}`}
                >
                  {isListening ? (
                    <MicOff className="w-8 h-8" />
                  ) : (
                    <Mic className="w-8 h-8" />
                  )}
                </Button>
              </div>

              <p className="text-center text-sm text-gray-400 mt-4">
                {isListening
                  ? "Mendengarkan... Silakan berbicara"
                  : isProssesVn
                  ? "Memproses input Anda..."
                  : "Tekan mikrofon untuk berbicara"}
              </p>
            </div>
          </div>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          accept="image/*"
          className="hidden"
          capture="environment"
        />
      </div>
    </MouseLight>
  );
};

export default Difabot;
