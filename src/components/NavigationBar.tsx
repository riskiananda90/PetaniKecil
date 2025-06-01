import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import HeaderNotif from "./headerNotif";
const NavigationBar = () => {
  const [isScrolled, setScrolled] = useState(false);
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const HandleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", HandleScroll);
    return () => window.removeEventListener("scroll", HandleScroll);
  });
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };
  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-charcoal/90 backdrop-blur-lg shadow-lg" : "bg-charcoal"
      }`}
    >
      <div className=" max-w-7xl mx-auto px-4 py-1 ">
        <HeaderNotif />
        <div className=" flex items-center justify-between mt-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center font-bold text-white">
              HD
            </div>
            <h1 className="text-lg sm:text-xl font-bold gradient-text">
              Harapan Digital
            </h1>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 mx-3">
            <button
              onClick={() => scrollToSection("masalah")}
              className=" text-amber-50 font-medium hover:text-amber-600 transition-colors duration-300"
            >
              Masalah
            </button>
            <button
              onClick={() => scrollToSection("fitur")}
              className=" text-amber-50 font-medium hover:text-amber-600 transition-colors duration-300"
            >
              Fitur
            </button>
            <button
              onClick={() => scrollToSection("teknologi")}
              className=" text-amber-50 font-medium hover:text-amber-600 transition-colors duration-300"
            >
              Teknologi
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className=" text-amber-50 font-medium hover:text-amber-600 transition-colors duration-300"
            >
              Team
            </button>
          </div>
          {/* Action Button */}
          <div className="hidden md:flex items-center space-x-5">
            <Link to="/login" tabIndex={0}>
              <Button
                variant="outline"
                className="border-coral/40 text-amber-800 font-semibold px-6 py-2 rounded-lg
                 hover:bg-amber-600 hover:text-white transition-all duration-300 shadow-md
                 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Sign In
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle mobile menu"
              className="text-[#F3D3BE] hover:text-coral transition-colors p-2 rounded-md
               focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 focus:ring-offset-slate-900"
              onClick={() => setMobileMenuOpen(!MobileMenuOpen)}
            >
              {MobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile menu */}
          {MobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden bg-gray-700/90 backdrop-blur-md border-t border-white/20 shadow-lg"
            >
              <div className="px-6 py-6 space-y-4">
                {["masalah", "fitur", "teknologi", "team"].map((section) => (
                  <button
                    key={section}
                    onClick={() => {
                      scrollToSection(section);
                      setMobileMenuOpen(false); // close menu on click
                    }}
                    className=" w-full text-left py-3 text-[#F3D3BD] font-medium text-lg
                     hover:text-coral transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-coral rounded-md"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}

                <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link to="/login" tabIndex={0}>
                    <Button
                      variant="outline"
                      className="w-full border-coral/40 text-coral font-semibold px-5 py-2 rounded-lg
                       hover:bg-coral hover:text-white transition-all duration-300 shadow-md
                       focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 focus:ring-offset-slate-900"
                    >
                      Sign In
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
