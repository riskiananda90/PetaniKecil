import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {   Menu, X } from "lucide-react";
import { motion } from "motion/react";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-charcoal/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className=" max-w-7xl mx-auto px-4 py-4">
        <div className=" flex items-center justify-between">
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

          {/* Action Button  */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button
                variant="outline"
                className="border-coral/30 text-amber-800 hover:bg-amber-600 hover:text-white transition-all duration-300"
              >
                Sign In
              </Button>
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className=" md:hidden flex items-center">
            <button
              className="text-cream hover:text-coral transition-colors p-2"
              onClick={() => {
                setMobileMenuOpen(!MobileMenuOpen);
              }}
            >
              {MobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {MobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-500 backdrop-blur-lg border-t border-white/10"
        >
          <div className="px-4 py-5 space-y-4">
            <button
              onClick={() => scrollToSection("masalah")}
              className="block w-full text-left py-2 text-cream hover:text-coral transition-colors duration-300"
            >
              Masalah
            </button>
            <button
              onClick={() => scrollToSection("fitur")}
              className="block w-full text-left py-2 text-cream hover:text-coral transition-colors duration-300"
            >
              Fitur
            </button>
            <button
              onClick={() => scrollToSection("teknologi")}
              className="block w-full text-left py-2 text-cream hover:text-coral transition-colors duration-300"
            >
              Teknologi
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="block w-full text-left py-2 text-cream hover:text-coral transition-colors duration-300"
            >
              Team
            </button>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="w-full border-coral/30 text-coral hover:bg-coral hover:text-white transition-all duration-300"
                >
                  Sign In
                </Button>
              </Link>
              <Link to="/demo">
                <Button
                  variant="outline"
                  className="w-full border-coral/30 text-coral hover:bg-coral hover:text-white transition-all duration-300"
                >
                  Demo
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default NavigationBar;
