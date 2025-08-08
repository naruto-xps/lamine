import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Accueil", href: "#home" },
    { name: "À propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/naruto-xps",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/lamine-kama",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:laminekama038@gmail.com",
      label: "Email"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                Lamine Kama
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Développeur Full Stack passionné, créant des expériences web 
                modernes et performantes. Basé à Dakar, Sénégal.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="portfolio"
                    size="icon"
                    asChild
                    className="hover:text-primary"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>📍 Dakar, Sénégal</p>
                <a
                  href="mailto:lamine.kama@example.com"
                  className="block hover:text-primary transition-colors duration-300"
                >
                  ✉️ lamine.kama@example.com
                </a>
                <p>🕒 Disponible pour nouveaux projets</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Copyright */}
              <div className="text-muted-foreground text-sm mb-4 md:mb-0">
                <p className="flex items-center">
                  © {currentYear} Lamine Kama. Fait avec{" "}
                  <Heart className="w-4 h-4 text-red-500 mx-1" />{" "}
                  à Dakar
                </p>
              </div>

              {/* Back to Top */}
              <Button
                variant="portfolio"
                size="sm"
                onClick={scrollToTop}
                className="group"
              >
                <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
                Retour en haut
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-border">
            <div className="text-center text-muted-foreground text-xs">
              <p>
                Ce site a été conçu et développé avec React, TypeScript et Tailwind CSS
              </p>
              <p className="mt-1">
                Hébergé sur Vercel • Code source disponible sur{" "}
                <a
                  href="https://github.com/laminek/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;