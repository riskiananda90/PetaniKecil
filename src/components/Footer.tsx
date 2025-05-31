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
          <p className="text-sm text-cream/70">
            Turn your spreadsheets into fully working applications with the
            power of AI and no-code.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-cream">Navigation</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/demo" className="hover:text-coral transition">
                Demo
              </Link>
            </li>
            <li>
              <Link to="/get-started" className="hover:text-coral transition">
                Get Started
              </Link>
            </li>
            <li>
              <Link to="/features" className="hover:text-coral transition">
                Features
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-cream">Resources</h2>
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
                GitHub Repo
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-coral transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-cream">Connect</h2>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              className="text-cream/60 hover:text-coral transition"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-cream/60 hover:text-coral transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="text-cream/60 hover:text-coral transition"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:team@zerocode.com"
              className="text-cream/60 hover:text-coral transition"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-cream/10 pt-6 text-center text-sm text-cream/50">
        © {new Date().getFullYear()} HarapanDigital— All rights reserved💡
      </div>
    </footer>
  );
}
