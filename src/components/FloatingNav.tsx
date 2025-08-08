import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, User, Settings, Code, FolderOpen, MessageSquare, ChevronUp } from "lucide-react";
import { useNavigation } from "@/hooks/use-navigation";

const FloatingNav = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { activeSection, scrollToSection } = useNavigation();

  const navItems = [
    { id: "home", icon: Home, label: "Accueil" },
    { id: "about", icon: User, label: "À propos" },
    { id: "services", icon: Settings, label: "Services" },
    { id: "skills", icon: Code, label: "Compétences" },
    { id: "projects", icon: FolderOpen, label: "Projets" },
    { id: "contact", icon: MessageSquare, label: "Contact" },
  ];

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsExpanded(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <div className="relative">
        {/* Navigation Items */}
        <div className={`absolute bottom-16 right-0 transition-all duration-300 ${
          isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}>
          <div className="flex flex-col space-y-3">
            {navItems.map((item, index) => (
              <Button
                key={item.id}
                variant="default"
                size="icon"
                onClick={() => handleNavClick(item.id)}
                className={`w-12 h-12 rounded-full shadow-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-gradient-primary text-primary-foreground scale-110 shadow-glow"
                    : "bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-glow"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                title={item.label}
              >
                <item.icon className="w-5 h-5" />
              </Button>
            ))}
          </div>
        </div>

        {/* Toggle Button */}
        <Button
          variant="default"
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
            isExpanded 
              ? "bg-gradient-primary text-primary-foreground rotate-180 shadow-glow" 
              : "bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground"
          }`}
        >
          <ChevronUp className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default FloatingNav; 