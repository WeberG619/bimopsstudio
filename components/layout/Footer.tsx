import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { href: "/", label: "Professional Sheet Creator" },
        { href: "/technical", label: "Technical Details" },
        { href: "/contact", label: "Early Access" },
      ],
    },
  ];

  // Custom X (Twitter) icon component
  const XIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
    </svg>
  );

  const socialLinks = [
    { href: "https://github.com/WeberG619", icon: <Github size={20} />, label: "GitHub" },
    { href: "https://x.com/BIMOpsStudio", icon: <XIcon />, label: "X" },
    { href: "https://www.linkedin.com/in/weber-gouin-94a0b537b", icon: <Linkedin size={20} />, label: "LinkedIn" },
    { href: "mailto:weber@bimopsstudio.com", icon: <Mail size={20} />, label: "Email" },
  ];

  return (
    <footer className="bg-deep-navy dark:bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
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
