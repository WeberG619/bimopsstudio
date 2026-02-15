import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSabbathMode } from "@/lib/sabbath-mode";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuth } from "@/contexts/AuthContext";
import { UserMenu } from "@/components/auth/UserMenu";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isSabbath, toggleSabbathMode } = useSabbathMode();
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/products", label: "Products" },
    { href: "/ai-services", label: "AI Services" },
    { href: "/free-tools", label: "Free Tools" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
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
          <img 
            src="/logo.png" 
            alt="BIM Ops Studio" 
            className="w-10 h-10"
          />
          <div className="flex flex-col">
            <span className={`font-heading text-xl font-bold transition-colors ${
              isScrolled 
                ? "text-deep-navy dark:text-white" 
                : "text-white"
            }`}>
              BIM Ops Studio
            </span>
            <span className={`text-xs transition-colors ${
              isScrolled 
                ? "text-[#4A9EFF]" 
                : "text-[#4A9EFF]"
            }`}>
              ADN Member
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors font-medium hover:text-blue-500 ${
                isScrolled 
                  ? "text-gray-700 dark:text-gray-300" 
                  : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          
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

          {/* Auth */}
          {user ? (
            <UserMenu isScrolled={isScrolled} />
          ) : (
            <Link href="/auth/login">
              <Button size="sm" className="bg-electric-blue hover:bg-electric-blue/90">
                <LogIn size={16} className="mr-1.5" />
                Sign In
              </Button>
            </Link>
          )}
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
            
            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-electric-blue transition-colors font-medium py-2"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>

            {/* Mobile Auth */}
            {user ? (
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href="/account"
                  className="block text-gray-700 dark:text-gray-300 hover:text-electric-blue transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  My Account
                </Link>
              </div>
            ) : (
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                  <Button size="sm" className="w-full bg-electric-blue hover:bg-electric-blue/90">
                    Sign In
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </header>
  );
}
