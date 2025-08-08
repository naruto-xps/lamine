import { useNavigation } from "@/hooks/use-navigation";
import { Check, Circle } from "lucide-react";

const StepNavigation = () => {
  const { activeSection } = useNavigation();

  const steps = [
    { id: "home", label: "Accueil", completed: true },
    { id: "about", label: "À propos", completed: activeSection !== "home" },
    { id: "services", label: "Services", completed: ["services", "skills", "techstack", "projects", "contact"].includes(activeSection) },
    { id: "skills", label: "Compétences", completed: ["skills", "techstack", "projects", "contact"].includes(activeSection) },
    { id: "projects", label: "Projets", completed: ["projects", "contact"].includes(activeSection) },
    { id: "contact", label: "Contact", completed: activeSection === "contact" },
  ];

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-4">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center space-x-3 group">
            {/* Step indicator */}
            <div className="relative">
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                step.completed 
                  ? "bg-gradient-primary scale-110 shadow-glow" 
                  : "bg-muted-foreground/30 group-hover:bg-primary/50"
              }`}>
                {step.completed && (
                  <Check className="w-2 h-2 text-primary-foreground absolute inset-0 m-auto" />
                )}
              </div>
              
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className={`absolute left-1.5 top-3 w-0.5 h-8 transition-all duration-300 ${
                  step.completed ? "bg-gradient-primary" : "bg-muted-foreground/20"
                }`} />
              )}
            </div>

            {/* Step label */}
            <div className={`text-sm font-medium transition-all duration-300 ${
              step.completed 
                ? "text-primary" 
                : "text-muted-foreground group-hover:text-foreground"
            }`}>
              {step.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepNavigation; 