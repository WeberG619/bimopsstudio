import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSabbathMode } from "@/lib/sabbath-mode";
import { useTheme } from "@/contexts/ThemeContext";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isSabbath, toggleSabbathMode } = useSabbathMode();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/products", label: "Products" },
    { href: "/technical-specs", label: "Technical Specs" },
    { href: "/services", label: "Services" },
    { href: "/resources", label: "Resources" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md py-2" 
          : "bg-black/20 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-lg bg-electric-blue flex items-center justify-center">
            <span className="text-white font-bold text-lg">BIM</span>
          </div>
          <span className={`font-heading text-xl font-bold transition-colors ${
            isScrolled 
              ? "text-deep-navy dark:text-white" 
              : "text-white"
          }`}>
            Ops Studio
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors font-medium hover:text-lime-accent ${
                isScrolled 
                  ? "text-gray-700 dark:text-gray-300" 
                  : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`transition-colors font-medium hover:text-lime-accent ${
              isScrolled 
                ? "text-gray-700 dark:text-gray-300" 
                : "text-white"
            }`}
          >
            Contact Us
          </Link>
          
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 ${
              isScrolled 
                ? "text-gray-700 dark:text-gray-300" 
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        <button
          className={`md:hidden transition-colors ${
            isScrolled 
              ? "text-gray-700 dark:text-gray-300" 
              : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-electric-blue transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-gray-700 dark:text-gray-300 hover:text-electric-blue transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            
            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-electric-blue transition-colors font-medium py-2"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
