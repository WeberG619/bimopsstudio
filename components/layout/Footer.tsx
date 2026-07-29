import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { href: "/services", label: "Services" },
        { href: "/ai-services", label: "How It Works" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
      ],
    },
  ];

  const socialLinks = [
    { href: "https://github.com/WeberG619", icon: <Github size={20} />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/weber-gouin-94a0b537b/", icon: <Linkedin size={20} />, label: "LinkedIn" },
    { href: "mailto:info@bimopsstudio.com", icon: <Mail size={20} />, label: "Email" },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/logo.png"
                  alt="BIM Ops Studio"
                  className="w-10 h-10"
                />
                <span className="font-heading text-xl font-bold">BIM Ops Studio</span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
              AI-powered BIM workflow implementation for architecture and engineering firms.
            </p>
            <div className="space-y-1 mb-6">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                <span className="text-gray-500">General:</span>{" "}
                <a href="mailto:info@bimopsstudio.com" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  info@bimopsstudio.com
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                <span className="text-gray-500">Direct:</span>{" "}
                <a href="mailto:weber@bimopsstudio.com" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  weber@bimopsstudio.com
                </a>
              </p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-heading text-lg font-semibold mb-4 text-gray-900 dark:text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} BIM Ops Studio. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500 dark:text-gray-400">
              <Link href="/privacy" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
