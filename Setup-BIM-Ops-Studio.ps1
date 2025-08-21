# Save this script as Setup-BIM-Ops-Studio.ps1
# Run it in PowerShell from your D:\BIM_Ops_Studio directory

# Create directories if they don't exist
Write-Host "Creating directories..." -ForegroundColor Green
New-Item -ItemType Directory -Path "components\layout" -Force | Out-Null
New-Item -ItemType Directory -Path "components\landing" -Force | Out-Null
New-Item -ItemType Directory -Path "components\ui" -Force | Out-Null
New-Item -ItemType Directory -Path "lib" -Force | Out-Null
New-Item -ItemType Directory -Path "pages" -Force | Out-Null
New-Item -ItemType Directory -Path "public" -Force | Out-Null
New-Item -ItemType Directory -Path "styles" -Force | Out-Null
New-Item -ItemType Directory -Path "content\products" -Force | Out-Null
New-Item -ItemType Directory -Path "content\resources" -Force | Out-Null
New-Item -ItemType Directory -Path ".vscode" -Force | Out-Null

Write-Host "Directories created successfully!" -ForegroundColor Green

# Create package.json
Write-Host "Creating package.json..." -ForegroundColor Green
$packageJson = @'
{
  "name": "bim-ops-studio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "@next/font": "^13.0.0",
    "@tailwindcss/forms": "^0.5.3",
    "@tailwindcss/typography": "^0.5.9",
    "autoprefixer": "^10.4.14",
    "clsx": "^2.0.0",
    "framer-motion": "^10.16.4",
    "lucide-react": "^0.292.0",
    "next": "^14.0.0",
    "postcss": "^8.4.24",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "tailwind-merge": "^2.0.0",
    "tailwindcss": "^3.3.0",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0",
    "typescript": "^5.0.0"
  }
}
'@
Set-Content -Path "package.json" -Value $packageJson -Encoding UTF8

# Create tailwind.config.js
Write-Host "Creating tailwind.config.js..." -ForegroundColor Green
$tailwindConfig = @'
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-navy": "#0A1B2A",
        "electric-blue": "#3B82F6",
        "lime-accent": "#A4F837",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Outfit", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
      },
      animation: {
        "slide-up": "slideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
};
'@
Set-Content -Path "tailwind.config.js" -Value $tailwindConfig -Encoding UTF8

# Create postcss.config.js
Write-Host "Creating postcss.config.js..." -ForegroundColor Green
$postcssConfig = @'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
'@
Set-Content -Path "postcss.config.js" -Value $postcssConfig -Encoding UTF8

# Create tsconfig.json
Write-Host "Creating tsconfig.json..." -ForegroundColor Green
$tsConfig = @'
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@/components/*": ["./components/*"],
      "@/lib/*": ["./lib/*"],
      "@/content/*": ["./content/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
'@
Set-Content -Path "tsconfig.json" -Value $tsConfig -Encoding UTF8

# Create next.config.js
Write-Host "Creating next.config.js..." -ForegroundColor Green
$nextConfig = @'
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
'@
Set-Content -Path "next.config.js" -Value $nextConfig -Encoding UTF8

# Create styles/globals.css
Write-Host "Creating styles/globals.css..." -ForegroundColor Green
$globalsCss = @'
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap");

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Outfit", sans-serif;
}

.bg-grid-white-05 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
}
'@
Set-Content -Path "styles\globals.css" -Value $globalsCss -Encoding UTF8

# Create pages/_app.tsx
Write-Host "Creating pages/_app.tsx..." -ForegroundColor Green
$appTsx = @'
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
'@
Set-Content -Path "pages\_app.tsx" -Value $appTsx -Encoding UTF8

# Create pages/_document.tsx
Write-Host "Creating pages/_document.tsx..." -ForegroundColor Green
$documentTsx = @'
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
'@
Set-Content -Path "pages\_document.tsx" -Value $documentTsx -Encoding UTF8

# Create pages/index.tsx
Write-Host "Creating pages/index.tsx..." -ForegroundColor Green
$indexTsx = @'
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/landing/Hero";
import { ProblemSolution } from "@/components/landing/ProblemSolution";
import { FlagshipTools } from "@/components/landing/FlagshipTools";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Testimonials } from "@/components/landing/Testimonials";
import { Integrations } from "@/components/landing/Integrations";
import { PricingTeaser } from "@/components/landing/PricingTeaser";
import { Newsletter } from "@/components/landing/Newsletter";

export default function Home() {
  return (
    <Layout
      title="Automate Revit Workflows with AI-Powered Tools"
      description="BIM Ops Studio helps Revit users automate BIM workflows with AI-powered tools. Save time, reduce errors, and increase productivity."
    >
      <Hero />
      <ProblemSolution />
      <FlagshipTools />
      <HowItWorks />
      <Testimonials />
      <Integrations />
      <PricingTeaser />
      <Newsletter />
    </Layout>
  );
}
'@
Set-Content -Path "pages\index.tsx" -Value $indexTsx -Encoding UTF8

# Create lib/utils.ts
Write-Host "Creating lib/utils.ts..." -ForegroundColor Green
$utilsTs = @'
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}
'@
Set-Content -Path "lib\utils.ts" -Value $utilsTs -Encoding UTF8

# Create lib/sabbath-mode.ts
Write-Host "Creating lib/sabbath-mode.ts..." -ForegroundColor Green
$sabbathModeTs = @'
import { useState, useEffect } from "react";

export function useSabbathMode() {
  const [isSabbath, setIsSabbath] = useState(false);

  useEffect(() => {
    // Check if its currently Sabbath (Friday sundown to Saturday sundown)
    const checkSabbath = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      
      // Simple implementation: Sabbath is from Friday 6 PM to Saturday 6 PM
      if (day === 5 && now.getHours() >= 18) {
        // Friday after 6 PM
        setIsSabbath(true);
      } else if (day === 6 && now.getHours() < 18) {
        // Saturday before 6 PM
        setIsSabbath(true);
      } else {
        setIsSabbath(false);
      }
    };

    // Check immediately
    checkSabbath();
    
    // Check every minute
    const interval = setInterval(checkSabbath, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const toggleSabbathMode = () => {
    setIsSabbath(!isSabbath);
    localStorage.setItem("sabbath-mode", JSON.stringify(!isSabbath));
  };

  return { isSabbath, toggleSabbathMode };
}
'@
Set-Content -Path "lib\sabbath-mode.ts" -Value $sabbathModeTs -Encoding UTF8

# Create components/ui/button.tsx
Write-Host "Creating components/ui/button.tsx..." -ForegroundColor Green
$buttonTsx = @'
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
'@
Set-Content -Path "components\ui\button.tsx" -Value $buttonTsx -Encoding UTF8

# Create components/layout/Layout.tsx
Write-Host "Creating components/layout/Layout.tsx..." -ForegroundColor Green
$layoutTsx = @'
import { ReactNode } from "react";
import Head from "next/head";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CTABanner } from "./CTABanner";
import { useSabbathMode } from "@/lib/sabbath-mode";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
}

export function Layout({ children, title, description, ogImage }: LayoutProps) {
  const { isSabbath } = useSabbathMode();
  const siteTitle = title ? `${title} | BIM Ops Studio` : "BIM Ops Studio";
  const siteDescription = description || "Automate Revit workflows with AI-powered tools for BIM professionals.";
  const siteImage = ogImage || "/og-image.jpg";

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={siteImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        {!isSabbath && <CTABanner />}
        <Footer />
      </div>
    </>
  );
}
'@
Set-Content -Path "components\layout\Layout.tsx" -Value $layoutTsx -Encoding UTF8

# Create components/layout/Header.tsx
Write-Host "Creating components/layout/Header.tsx..." -ForegroundColor Green
$headerTsx = @'
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSabbathMode } from "@/lib/sabbath-mode";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isSabbath, toggleSabbathMode } = useSabbathMode();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/products", label: "Products" },
    { href: "/services", label: "Services" },
    { href: "/resources", label: "Resources" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-lg bg-electric-blue flex items-center justify-center">
            <span className="text-white font-bold text-lg">BIM</span>
          </div>
          <span className="font-heading text-xl font-bold text-deep-navy dark:text-white">
            Ops Studio
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 dark:text-gray-300 hover:text-electric-blue transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact">
            <Button>Contact Us</Button>
          </Link>
        </nav>

        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
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
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button>Contact Us</Button>
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
'@
Set-Content -Path "components\layout\Header.tsx" -Value $headerTsx -Encoding UTF8

# Create components/layout/Footer.tsx
Write-Host "Creating components/layout/Footer.tsx..." -ForegroundColor Green
$footerTsx = @'
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const footerLinks = [
    {
      title: "Products",
      links: [
        { href: "/products/revitask", label: "ReviTask" },
        { href: "/products/smartsheetlist", label: "SmartSheetList" },
        { href: "/products/folder-structure-creator", label: "Folder Structure Creator" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/services", label: "Services" },
        { href: "/contact", label: "Contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "/resources", label: "Blog" },
        { href: "/pricing", label: "Pricing" },
        { href: "/privacy", label: "Privacy Policy" },
      ],
    },
  ];

  const socialLinks = [
    { href: "https://github.com/bimopsstudio", icon: <Github size={20} />, label: "GitHub" },
    { href: "https://twitter.com/bimopsstudio", icon: <Twitter size={20} />, label: "Twitter" },
    { href: "https://linkedin.com/company/bimopsstudio", icon: <Linkedin size={20} />, label: "LinkedIn" },
    { href: "mailto:contact@bimops.studio", icon: <Mail size={20} />, label: "Email" },
  ];

  return (
    <footer className="bg-deep-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-electric-blue flex items-center justify-center">
                <span className="text-white font-bold text-lg">BIM</span>
              </div>
              <span className="font-heading text-xl font-bold">Ops Studio</span>
            </div>
            <p className="text-gray-400 mb-6">
              Automating Revit workflows with AI-powered tools for BIM professionals.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-heading text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} BIM Ops Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
'@
Set-Content -Path "components\layout\Footer.tsx" -Value $footerTsx -Encoding UTF8

# Create components/layout/CTABanner.tsx
Write-Host "Creating components/layout/CTABanner.tsx..." -ForegroundColor Green
$ctaBannerTsx = @'
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-electric-blue text-white py-4"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="font-bold text-lg">Ready to automate your BIM workflows?</h3>
          <p className="text-blue-100">Start your free trial today.</p>
        </div>
        <div className="flex space-x-4">
          <Link href="/pricing">
            <Button variant="secondary" className="bg-white text-electric-blue hover:bg-gray-100">
              View Pricing
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-electric-blue">
              Contact Sales
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
'@
Set-Content -Path "components\layout\CTABanner.tsx" -Value $ctaBannerTsx -Encoding UTF8

# Create components/landing/Hero.tsx
Write-Host "Creating components/landing/Hero.tsx..." -ForegroundColor Green
$heroTsx = @'
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-deep-navy to-blue-900 text-white">
      <div className="absolute inset-0 bg-grid-white-05" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="font-heading text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Automate Revit. <span className="text-lime-accent">Accelerate BIM.</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            BIM Ops Studio turns tedious modeling tasks into one-click workflows.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              size="lg"
              className="bg-lime-accent text-deep-navy hover:bg-lime-accent/90 font-bold"
            >
              Start Free
              <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-deep-navy"
            >
              <Play className="mr-2" size={20} />
              Watch Demo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
'@
Set-Content -Path "components\landing\Hero.tsx" -Value $heroTsx -Encoding UTF8

# Create placeholder landing components
Write-Host "Creating placeholder landing components..." -ForegroundColor Green

# ProblemSolution.tsx
$problemSolutionTsx = @'
export function ProblemSolution() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Problem → Solution</h2>
        <p className="text-center text-gray-600">This section will show a comparison table</p>
      </div>
    </section>
  );
}
'@
Set-Content -Path "components\landing\ProblemSolution.tsx" -Value $problemSolutionTsx -Encoding UTF8

# FlagshipTools.tsx
$flagshipToolsTsx = @'
export function FlagshipTools() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Flagship Tools</h2>
        <p className="text-center text-gray-600">This section will showcase our products</p>
      </div>
    </section>
  );
}
'@
Set-Content -Path "components\landing\FlagshipTools.tsx" -Value $flagshipToolsTsx -Encoding UTF8

# HowItWorks.tsx
$howItWorksTsx = @'
export function HowItWorks() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <p className="text-center text-gray-600">This section will explain the process</p>
      </div>
    </section>
  );
}
'@
Set-Content -Path "components\landing\HowItWorks.tsx" -Value $howItWorksTsx -Encoding UTF8

# Testimonials.tsx
$testimonialsTsx = @'
export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <p className="text-center text-gray-600">This section will show customer reviews</p>
      </div>
    </section>
  );
}
'@
Set-Content -Path "components\landing\Testimonials.tsx" -Value $testimonialsTsx -Encoding UTF8

# Integrations.tsx
$integrationsTsx = @'
export function Integrations() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Integrations</h2>
        <p className="text-center text-gray-600">This section will show integration partners</p>
      </div>
    </section>
  );
}
'@
Set-Content -Path "components\landing\Integrations.tsx" -Value $integrationsTsx -Encoding UTF8

# PricingTeaser.tsx
$pricingTeaserTsx = @'
export function PricingTeaser() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
        <p className="text-center text-gray-600">This section will show pricing options</p>
      </div>
    </section>
  );
}
'@
Set-Content -Path "components\landing\PricingTeaser.tsx" -Value $pricingTeaserTsx -Encoding UTF8

# Newsletter.tsx
$newsletterTsx = @'
export function Newsletter() {
  return (
    <section className="py-20 bg-electric-blue text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Newsletter</h2>
        <p className="text-center text-blue-100">This section will have a newsletter signup</p>
      </div>
    </section>
  );
}
'@
Set-Content -Path "components\landing\Newsletter.tsx" -Value $newsletterTsx -Encoding UTF8

# Create VS Code settings for Tailwind CSS support
Write-Host "Creating VS Code settings for Tailwind CSS support..." -ForegroundColor Green
$vscodeSettings = @'
{
  "css.customData": [".vscode/tailwind.json"]
}
'@
Set-Content -Path ".vscode\settings.json" -Value $vscodeSettings -Encoding UTF8

$tailwindJson = @'
{
  "version": 1.1,
  "atDirectives": [
    {
      "name": "@tailwind",
      "description": "Injects Tailwind CSS base, components, and utilities styles",
      "references": [
        {
          "name": "Tailwind CSS Documentation",
          "url": "https://tailwindcss.com/docs"
        }
      ]
    }
  ]
}
'@
Set-Content -Path ".vscode\tailwind.json" -Value $tailwindJson -Encoding UTF8

Write-Host "All files created successfully!" -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Run 'pnpm install' to install dependencies" -ForegroundColor Yellow
Write-Host "2. Run 'pnpm add class-variance-authority' to install missing package" -ForegroundColor Yellow
Write-Host "3. Run 'pnpm dev -p 8000' to start the development server" -ForegroundColor Yellow
Write-Host "4. Open http://localhost:8000 in your browser" -ForegroundColor Yellow