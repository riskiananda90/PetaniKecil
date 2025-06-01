import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 px-6 py-14 text-[#F3D3BE]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-coral rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white text-lg font-bold">HD</span>
            </div>
            <h1 className="text-xl font-bold text-[#D15F45]  bg-clip-text">
              HarapanDigital
            </h1>
          </div>
          <p className="text-sm text-[#F3D3BE]/70">
            Solusi digital berbasis AI untuk mendukung petani dalam meningkatkan
            produktivitas dan efisiensi pertanian modern.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-[#F3D3BE]">
            Navigasi
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/demo" className="hover:text-coral transition">
                Demo
              </Link>
            </li>
            <li>
              <Link to="/get-started" className="hover:text-coral transition">
                Mulai
              </Link>
            </li>
            <li>
              <Link to="/features" className="hover:text-coral transition">
                Fitur
              </Link>
            </li>
          </ul>
        </div>

        {/* Sumber Daya */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-[#F3D3BE]">
            Sumber Daya
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://ibm.com/granite"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-coral transition"
              >
                IBM Granite AI
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-coral transition"
              >
                Repositori GitHub
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-coral transition">
                Kebijakan Privasi
              </a>
            </li>
          </ul>
        </div>

        {/* Media Sosial */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-[#F3D3BE]">
            Terhubung
          </h2>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              className="text-[#F3D3BE]/60 hover:text-coral transition"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-[#F3D3BE]/60 hover:text-coral transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="text-[#F3D3BE]/60 hover:text-coral transition"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:team@zerocode.com"
              className="text-[#F3D3BE]/60 hover:text-coral transition"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Garis Bawah */}
      <div className="mt-12 border-t border-[#F3D3BE]/10 pt-6 text-center text-sm text-[#F3D3BE]/50">
        © {new Date().getFullYear()} HarapanDigital — Semua hak dilindungi💡
      </div>
    </footer>
  );
}
