import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HelpCircle, X } from "lucide-react";

const KeyboardHelp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === '?' || event.key === '/') {
        event.preventDefault();
        setShowHelp(!showHelp);
      }
      if (event.key === 'Escape') {
        setShowHelp(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showHelp]);

  useEffect(() => {
    // Show help button after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const shortcuts = [
    { key: "1-6", description: "Navigation rapide par section" },
    { key: "H", description: "Accueil" },
    { key: "A", description: "À propos" },
    { key: "S", description: "Services" },
    { key: "K", description: "Compétences" },
    { key: "P", description: "Projets" },
    { key: "C", description: "Contact" },
    { key: "Home/End", description: "Début/Fin de page" },
    { key: "?", description: "Afficher cette aide" },
    { key: "Esc", description: "Fermer l'aide" },
  ];

  if (!isVisible) return null;

  return (
    <>
      {/* Help Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => setShowHelp(!showHelp)}
        className="fixed bottom-6 left-6 z-50 rounded-full shadow-lg bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
        title="Aide navigation (?)"
      >
        <HelpCircle className="w-5 h-5" />
      </Button>

      {/* Help Modal */}
      {showHelp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="bg-background border border-border/50 rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gradient-primary">Raccourcis clavier</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowHelp(false)}
                className="hover:bg-primary/10 hover:text-primary"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="space-y-3">
              {shortcuts.map((shortcut, index) => (
                <div key={index} className="flex items-center justify-between">
                  <kbd className="px-2 py-1 bg-primary/10 text-primary rounded text-sm font-mono border border-primary/20">
                    {shortcut.key}
                  </kbd>
                  <span className="text-sm text-muted-foreground">
                    {shortcut.description}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground">
                Appuyez sur <kbd className="px-1 py-0.5 bg-primary/10 text-primary rounded text-xs border border-primary/20">Esc</kbd> pour fermer
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KeyboardHelp; 