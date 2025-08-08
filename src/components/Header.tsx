import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useNavigation } from "@/hooks/use-navigation";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeSection, scrollProgress, scrollToSection } = useNavigation();

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const navItems = [
    { name: "Accueil", href: "#home", id: "home" },
    { name: "À propos", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Tech Stack", href: "#techstack", id: "techstack" },
    { name: "Projets", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavigation = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95vw] max-w-5xl rounded-2xl shadow-2xl bg-background/70 border border-border/40 backdrop-blur-lg transition-all duration-300">
      {/* Progress Bar */}
      <div 
        className="h-1 bg-gradient-primary rounded-t-2xl transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo stylisé */}
          <div 
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-primary shadow-glow text-white text-2xl font-bold select-none border-4 border-background/80 hover:scale-110 transition-transform cursor-pointer"
            onClick={() => handleNavigation("home")}
            title="Accueil"
          >
            LK
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.id)}
                className={`relative px-5 py-2 rounded-full font-medium transition-all duration-300 group shadow-sm backdrop-blur-md border border-transparent
                  ${activeSection === item.id
                    ? "bg-gradient-primary text-white shadow-glow scale-105"
                    : "bg-background/60 text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30"
                  }`}
              >
                <span className="relative z-10">{item.name}</span>
                {/* Soulignement animé */}
                <span className={`absolute left-4 right-4 -bottom-1 h-0.5 rounded-full bg-gradient-primary transition-all duration-300 ${activeSection === item.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'} group-hover:opacity-60 group-hover:scale-x-100`} />
              </button>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
              aria-label="Changer le thème"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden transition-all duration-300 hover:bg-primary/10 hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu mobile"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <nav className="mt-4 pb-4 border-t border-border/40 pt-4 flex flex-col items-center space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.id)}
                className={`w-full text-center px-5 py-3 rounded-full font-medium transition-all duration-300 group shadow-sm backdrop-blur-md border border-transparent
                  ${activeSection === item.id
                    ? "bg-gradient-primary text-white shadow-glow scale-105"
                    : "bg-background/60 text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30"
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item.name}</span>
                <span className={`absolute left-8 right-8 -bottom-1 h-0.5 rounded-full bg-gradient-primary transition-all duration-300 ${activeSection === item.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'} group-hover:opacity-60 group-hover:scale-x-100`} />
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;