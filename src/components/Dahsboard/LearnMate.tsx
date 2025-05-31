import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MarkdownRenderer from "../MarkDown";
import {
  ArrowLeft,
  Send,
  Book,
  GraduationCap,
  Star,
  Target,
  Clock,
  Award,
} from "lucide-react";
import { toast } from "sonner";
import MouseLight from "../mouseLight";
import TextareaAutosize from "react-textarea-autosize";
interface Message {
  type: "bot" | "user";
  content: string;
  timestamp: string;
}

interface LearnmateProps {
  onBack: () => void;
}

const Learnmate = ({ onBack }: LearnmateProps) => {
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      content:
        "Selamat datang di Learnmate! Saya adalah asisten belajar untuk teman-teman di desa terpencil. Pilih kelas Anda dan mari mulai perjalanan belajar yang menyenangkan! Saya akan membantu dengan materi pembelajaran, latihan soal, dan menjawab semua pertanyaan seputar pelajaran.",
      timestamp: "22:26",
    },
  ]);

  const grades = [
    {
      id: "sd1-3",
      label: "SD Kelas 1-3",
      color: "from-green-500 to-emerald-600",
      description: "Dasar-dasar membaca, menulis, dan berhitung",
      level: "Pemula",
    },
    {
      id: "sd4-6",
      label: "SD Kelas 4-6",
      color: "from-blue-500 to-cyan-600",
      description: "Pendalaman materi dan konsep dasar",
      level: "Menengah",
    },
    {
      id: "smp",
      label: "SMP",
      color: "from-purple-500 to-violet-600",
      description: "Konsep abstrak dan pemecahan masalah",
      level: "Lanjutan",
    },
    {
      id: "sma",
      label: "SMA",
      color: "from-orange-500 to-red-600",
      description: "Persiapan universitas dan karir",
      level: "Mahir",
    },
  ];

  const subjects = [
    { name: "MTK", icon: "📊", color: "text-blue-400" },
    { name: "B.Indo", icon: "📚", color: "text-green-400" },
    { name: "Biologi", icon: "🔬", color: "text-purple-400" },
    { name: "IPS", icon: "🌍", color: "text-yellow-400" },
    { name: "B.Inggris", icon: "🌐", color: "text-cyan-400" },
    { name: "Seni", icon: "🎨", color: "text-pink-400" },
  ];

  const learningFeatures = [
    {
      icon: Book,
      title: "Materi Interaktif",
      description: "Penjelasan lengkap dengan contoh nyata",
      color: "text-blue-400",
    },
    {
      icon: Target,
      title: "Latihan Soal",
      description: "Berbagai tingkat kesulitan sesuai kemampuan",
      color: "text-green-400",
    },
    {
      icon: Clock,
      title: "Belajar Fleksibel",
      description: "Sesuaikan waktu belajar dengan rutinitas",
      color: "text-orange-400",
    },
    {
      icon: Award,
      title: "Progress Tracking",
      description: "Pantau kemajuan dan pencapaian belajar",
      color: "text-purple-400",
    },
  ];

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const handleGradeSelect = (gradeId: string) => {
    setSelectedGrade(gradeId);
    const grade = grades.find((g) => g.id === gradeId);

    const botMessage: Message = {
      type: "bot",
      content: `Excellent choice! Anda telah memilih ${
        grade?.label
      }. Sekarang saya siap membantu pembelajaran ${grade?.level.toLowerCase()} Anda. Mari eksplorasi dunia pengetahuan bersama! Pilih mata pelajaran yang ingin dipelajari atau tanyakan langsung tentang topik tertentu.`,
      timestamp: new Date().toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, botMessage]);
    toast.success(`Kelas ${grade?.label} berhasil dipilih!`);
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    setIsLoading(true);
    const newMessage = {
      type: "user" as const,
      content: message,
      timestamp: new Date().toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessage("");

    try {
      const response = await fetch("http://localhost:3001/api/text-prediksi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          diagnosisText: message,
          judul: grades.find((g) => g.id === selectedGrade)?.label || "",
        }),
      });
      const data = await response.json();

      const botResponse = {
        type: "bot" as const,
        content:
          data.advice.parts[0].text ||
          "Maaf, terjadi kesalahan saat memproses.",
        timestamp: new Date().toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, botResponse]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot" as const,
          content: "Gagal menghubungi server.",
          timestamp: new Date().toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubjectSelect = (subject: string) => {
    if (!selectedGrade) {
      toast.error("Silakan pilih kelas terlebih dahulu!");
      return;
    }
    setMessage(
      `Saya ingin belajar ${subject}, bisa dijelaskan materi dasarnya?`
    );
  };

  return (
    <MouseLight bgColor="bg-neutral-900" glowColor="rgba(255,255,180,0.15)">
      <div className="h-[1000px]  text-white">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[rgba(150,200,255,0.15)]">
          <div className="flex items-center space-x-4">
            <Button
              onClick={onBack}
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white hover:"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                  Learnmate
                </h1>
                <p className="text-sm text-gray-400">AI Learning Assistant</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-[calc(120vh)]">
          {/* Sidebar */}
          <div className="w-80 p-6 border-r border-[rgba(150,200,255,0.15)] overflow-y-auto">
            {/* Grade Selection */}
            <div className=" rounded-2xl p-6 border border-gray-600 mb-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-200 flex items-center">
                <Star className="w-5 h-5 mr-2 text-orange-400" />
                Pilih Jenjang
              </h2>
              <div className="space-y-3">
                {grades.map((grade) => (
                  <Card
                    key={grade.id}
                    className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedGrade === grade.id
                        ? `bg-gradient-to-r ${grade.color} border-transparent`
                        : " border-gray-600 hover:border-orange-500"
                    }`}
                    onClick={() => handleGradeSelect(grade.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-white">
                            {grade.label}
                          </h3>
                          <p className="text-xs text-gray-300 mt-1">
                            {grade.description}
                          </p>
                          <span className="inline-block mt-2 px-2 py-1 bg-black bg-opacity-30 rounded-full text-xs text-gray-200">
                            {grade.level}
                          </span>
                        </div>
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {selectedGrade && (
              <div className=" rounded-2xl p-6 border border-gray-600">
                <h2 className="text-lg font-semibold mb-4 text-gray-200 flex items-center">
                  <Book className="w-5 h-5 mr-2 text-orange-400" />
                  Mata Pelajaran
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  {subjects.map((subject, index) => (
                    <Button
                      key={index}
                      onClick={() => handleSubjectSelect(subject.name)}
                      variant="outline"
                      size="sm"
                      className="bg-transparent border-gray-600 text-gray-300 hover: hover:border-orange-500 hover:text-orange-400 transition-all duration-200 justify-start p-3 h-auto"
                    >
                      <span className="mr-2 text-lg">{subject.icon}</span>
                      <span className="text-xs">{subject.name}</span>
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {!selectedGrade ? (
              // Welcome Screen
              <div className="flex-1 flex items-center justify-center p-8">
                <div className="max-w-5xl mx-auto text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-orange-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                    <GraduationCap className="w-16 h-16 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                    Welcome to Learnmate!
                  </h2>
                  <p className="text-gray-400 text-xl mb-12 max-w-3xl mx-auto">
                    Platform pembelajaran AI yang dirancang khusus untuk siswa
                    di desa terpencil. Akses pendidikan berkualitas kapan saja,
                    di mana saja.
                  </p>

                  {/* Grade Cards */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {grades.map((grade) => (
                      <Card
                        key={grade.id}
                        className=" border-gray-600 hover:border-orange-500 transition-all duration-300 cursor-pointer hover:scale-105 group"
                        onClick={() => handleGradeSelect(grade.id)}
                      >
                        <CardHeader className="pb-4">
                          <div
                            className={`w-16 h-16 bg-gradient-to-br ${grade.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto`}
                          >
                            <GraduationCap className="w-8 h-8 text-white" />
                          </div>
                          <CardTitle className="text-lg text-white group-hover:text-orange-400 transition-colors text-center">
                            {grade.label}
                          </CardTitle>
                          <p className="text-sm text-gray-400 text-center">
                            {grade.description}
                          </p>
                          <div className="flex justify-center">
                            <span className="inline-block px-3 py-1 bg-black  rounded-full text-xs text-gray-300">
                              {grade.level}
                            </span>
                          </div>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {learningFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="text-center p-6  rounded-xl border border-gray-600 hover:border-orange-500 transition-all duration-300"
                      >
                        <feature.icon
                          className={`w-12 h-12 ${feature.color} mx-auto mb-4`}
                        />
                        <h3 className="font-semibold text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <>
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
                        className={`max-w-3xl ${
                          msg.type === "user"
                            ? "  border-gray-600 flex-wrap text-white"
                            : " border-gray-600 text-gray-100"
                        }`}
                      >
                        <CardContent className="">
                          {msg.type === "bot" && (
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full flex items-center justify-center mr-3">
                                <GraduationCap className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-sm font-medium text-orange-400">
                                Learnmate
                              </span>
                            </div>
                          )}
                          <p className="text-sm leading-relaxed break-words break-all">
                            <MarkdownRenderer markdownText={msg.content} />
                          </p>
                          <p className="text-xs mt-3 opacity-60">
                            {msg.timestamp}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                  <div ref={bottomRef} />
                  {isLoading && (
                    <div className="flex justify-start">
                      <Card className="border-[rgba(255,135,50,0.08)] text-gray-100 max-w-3xl">
                        <CardContent>
                          <div className="flex items-center mb-3">
                            <div className=" p-2  rounded-full flex items-center bg-gradient-to-r from-orange-400 to-pink-400 justify-center mr-3">
                              <GraduationCap
                                size={16}
                                className=" text-white"
                              />
                            </div>
                            <span className="text-sm font-medium text-amber-600">
                              Learnmate
                            </span>
                          </div>
                          <div className="flex space-x-1 mt-6">
                            <div className="w-2 h-2 bg-amber-700 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-amber-700 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-amber-700 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <div className="p-6 border-t border-[rgba(150,200,255,0.15)]">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 relative">
                      <TextareaAutosize
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSendMessage();
                          }
                        }}
                        placeholder="Tanyakan tentang materi pelajaran, minta penjelasan konsep, atau latihan soal..."
                        minRows={1}
                        maxRows={6}
                        className="w-full resize-none rounded-lg border border-[rgba(255,135,50,0.08)] bg-transparent text-white placeholder-gray-400 pr-12 py-2 px-3 focus:border-amber-700 focus:ring-amber-700 focus:outline-none placeholder:text-sm "
                      />
                    </div>
                    <Button
                      onClick={handleSendMessage}
                      className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white"
                    >
                      <Send className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* Quick Subject Buttons */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    {subjects.slice(0, 4).map((subject, index) => (
                      <Button
                        key={index}
                        onClick={() => handleSubjectSelect(subject.name)}
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-gray-400 hover: hover:border-orange-500 hover:text-orange-400 transition-all"
                      >
                        <span className="mr-2">{subject.icon}</span>
                        {subject.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </MouseLight>
  );
};

export default Learnmate;
