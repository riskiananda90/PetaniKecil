import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MarkdownRenderer from "../MarkDown";
import {
  ArrowLeft,
  Send,
  Camera,
  Sprout,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useEffect, useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";
interface AgribotProps {
  onBack: () => void;
}

type Product = {
  title: string;
  price: string;
  image: string;
  shop: string;
  url: string;
};
const Agribot = ({ onBack }: AgribotProps) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const [message, setMessage] = useState("");
  const [isLoadImage, setIsloadimage] = useState("");
  const [chatMode, setChatMode] = useState("Pertanian");
  const [isJudul, setIsJudul] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content:
        "Selamat datang di Agribot - Asisten Pertanian Pintar! Saya dapat membantu Anda dengan: identifikasi hama dan penyakit tanaman, rekomendasi pupuk dan pestisida, jadwal tanam dan panen optimal, analisis kondisi tanah, dan tips perawatan tanaman modern. Silakan upload gambar tanaman atau ajukan pertanyaan langsung!",
      timestamp: "22:26",
      Product: [],
    },
  ]);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleJudul = () => {
    setIsJudul((prev) => {
      const newIsJudul = !prev;
      setChatMode(newIsJudul ? "CariProduct" : "Pertanian");
      return newIsJudul;
    });
    console.log(chatMode);
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
      Product: [],
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessage("");

    try {
      if (chatMode === "Pertanian") {
        const response = await fetch(`${baseUrl}api/text-prediksi`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            diagnosisText: message,
            judul: chatMode,
          }),
        });
        const data = await response.json();

        const botResponse = {
          type: "bot" as const,
          content: data.advice || "Maaf, terjadi kesalahan saat memproses.",
          timestamp: new Date().toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          Product: [],
        };
        setMessages((prev) => [...prev, botResponse]);
      } else {
        const response = await fetch(`${baseUrl}api/text-prediksi`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            diagnosisText: message,
            judul: chatMode,
          }),
        });
        const data = await response.json();
        console.log(data.advice);

        const botResponse = {
          type: "bot" as const,
          content: "Berikut product yang anda cari : ",
          timestamp: new Date().toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          Product: data.advice,
        };
        console.log();

        setMessages((prev) => [...prev, botResponse]);
      }
    } catch (err) {
      console.log(err);

      setMessages((prev) => [
        ...prev,
        {
          type: "bot" as const,
          content: "Gagal menghubungi server.",
          timestamp: new Date().toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          Product: [],
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = () => {
    fileInputRef.current?.click();
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    setIsloadimage("Memprediksi");

    const reader = new FileReader();
    reader.onload = async () => {
      const base64Image = reader.result as string;

      try {
        setTimeout(() => {
          setIsloadimage("Sabar ya ");
          setTimeout(() => {
            setIsloadimage("Sedikit lagi nih! ");
          }, 20000);
        }, 15000);
        const response = await fetch(`${baseUrl}api/image-prediksi`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            imageBase64: base64Image,
          }),
        });
        setIsloadimage("");
        const data = await response.json();
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            content: data.advice || "Tidak ada hasil prediksi",
            timestamp: new Date().toLocaleTimeString("id-ID", {
              hour: "2-digit",
              minute: "2-digit",
            }),
            Product: [],
          },
        ]);
      } catch {
        toast.error("maaf server lagi sibuk");
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            content: "Gagal mengirim gambar ke server",
            timestamp: new Date().toLocaleTimeString("id-ID", {
              hour: "2-digit",
              minute: "2-digit",
            }),
            Product: [],
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    reader.readAsDataURL(file);
  };
  return (
    <div className="min-h-screen bg-charcoal  text-white">
      <div className="flex items-center justify-between p-6 border-b border-[rgba(255,135,50,0.08)]">
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
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Sprout className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Agribot
              </h1>
              <p className="text-sm text-gray-400">Asisten Pertanian Pintar</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-80px)]">
        <div className="w-72 p-6 border-r border-[rgba(255,135,50,0.08)]">
          <div className="rounded-2xl p-6 text-[13px] border border-[rgba(255,135,50,0.08)]">
            <h2 className="text-sm font-semibold mb-6 text-gray-200">
              Cara Penggunaan Agribot
            </h2>
            <ul className="space-y-4 text-gray-300 list-disc list-inside">
              <li>
                <span className="text-white">
                  Konsultasi Pertanian:
                </span>
                <br />
                Ketik pertanyaan di kolom chat Agribot contoh: <i className=" text-green-600">  Bagaimana cara
                merawat tanaman cabai?.</i> Jawaban akan muncul otomatis.
              </li>
              <li>
                <span className="text-white">
                  Deteksi Penyakit Tanaman:
                </span>
                <br />
                Klik tombol <i className=" text-green-600">kamera</i>, unggah gambar tanamanmu,
                lalu pilih jenis tanaman. Tunggu hingga hasil diagnosis muncul.
              </li>
              <li>
                <span className="text-white">
                  Rekomendasi Produk :
                </span>
                <br />
                Klik tombol <i className=" text-green-600">Cari produk</i> lalu ketik di kolom chat product apa yang ingin anda cari, Agribot akan
                menampilkan 5 produk rekomendasi. Klik produk untuk membuka di
                Tokopedia.
              </li>
            </ul>
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
                  className={`max-w-3xl ${
                    msg.type === "user"
                      ? "border-[rgba(255,135,50,0.08)] text-white"
                      : " border-[rgba(255,135,50,0.08)] text-gray-100"
                  }`}
                >
                  <CardContent className="">
                    {msg.type === "bot" && (
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-3">
                          <Sprout className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-green-400">
                          Agribot
                        </span>
                      </div>
                    )}
                    <p className="text-sm leading-relaxed break-words break-all ">
                      <MarkdownRenderer markdownText={msg.content} />
                    </p>
                    {msg && msg.Product.length > 0 && (
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {msg.Product.map((product: Product, index) => (
                          <div
                            key={index}
                            className="border border-[rgba(255,135,50,0.08)] p-3 rounded shadow hover:border-green-700 cursor-pointer flex items-center gap-3"
                            onClick={() => window.open(product.url, "_blank")}
                          >
                            <img
                              src={product.image}
                              alt={product.title}
                              className="w-20 h-20 object-cover rounded"
                            />
                            <div className="flex flex-col">
                              <span className="font-normal line-clamp-2 ">
                                {product.title}
                              </span>
                              <span className="text-green-700 font-bold">
                                {product.price}
                              </span>
                              <span className="text-sm text-gray-500">
                                {product.shop}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    <p className="text-xs mt-3 opacity-60">{msg.timestamp}</p>
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
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-3">
                        <Sprout className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-green-400">
                        Agribot
                      </span>
                    </div>
                    <div className="flex space-x-1 mt-6 items-center">
                      <div className=" text-[12px]">{isLoadImage} </div>
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full animate-bounce"></div>
                      <div
                        className="w-1.5 h-1.5 bg-green-600 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-1.5 h-1.5 bg-green-600 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-[rgba(255,135,50,0.08)]">
            <div className="flex items-center space-x-4 ">
              <div
                onClick={handleImageUpload}
                className="border-[rgba(255,135,50,0.08)] transition-colors duration-200 border  text-gray-400 hover:bg-gray-700 hover:border-green-500 hover:text-green-400 p-2 rounded-lg"
              >
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <Camera className="w-5 h-5 p-0.5" />
              </div>
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
                  placeholder="Tanyakan tentang pertanian, hama, pupuk, atau upload gambar tanaman..."
                  minRows={1}
                  maxRows={6}
                  className="w-full resize-none rounded-lg border border-[rgba(255,135,50,0.08)] bg-transparent placeholder:text-sm text-white placeholder:text-gray-500 pr-12 py-2 px-3 focus:border-green-500 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <Button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <Button
                onClick={handleJudul}
                variant="outline"
                size="sm"
                className={`border-[rgba(255,135,50,0.08)] cursor-pointer text-gray-400 hover:bg-gray-700 hover:border-green-500 hover:text-green-400 ${
                  isJudul ? "bg-gray-700 text-green-400 border-green-500 " : ""
                }`}
              >
                {" "}
                Cari produk
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agribot;
