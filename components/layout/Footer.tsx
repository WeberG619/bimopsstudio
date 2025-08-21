import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { href: "/", label: "Professional Sheet Creator" },
        { href: "/technical", label: "Technical Details" },
        { href: "/pricing", label: "Pricing" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/contact", label: "Contact" },
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
    <footer className="bg-deep-navy dark:bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.png" 
                alt="BIM Ops Studio" 
                className="w-10 h-10"
              />
              <span className="font-heading text-xl font-bold">BIM Ops Studio</span>
            </div>
            <p className="text-gray-400 dark:text-gray-300 mb-6">
              Professional Sheet Creator - Automate Revit sheet generation with the power of Revit API.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors"
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
                      className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} BIM Ops Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
