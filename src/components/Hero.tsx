import { Button } from "@/components/ui/button";
import { Mail, Rocket, Code, Zap, Star } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/lamine.jpg";
import { useNavigation } from "@/hooks/use-navigation";
import { useEffect, useState } from "react";

// Composant de particules animées
const AnimatedParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Particules flottantes */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full animate-particle-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 4}s`
          }}
        />
      ))}
      
      {/* Particules d'accent */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`accent-${i}`}
          className="absolute w-0.5 h-0.5 bg-accent/40 rounded-full animate-particle-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${8 + Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const { scrollToSection } = useNavigation();
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const texts = [
    "Développeur Full Stack",
    "Créateur d'applications",
    "Passionné de technologie",
    "Innovateur digital"
  ];

  useEffect(() => {
    if (!isTyping) return;

    const currentFullText = texts[textIndex];
    
    if (currentText.length < currentFullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentFullText.slice(0, currentText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setIsTyping(false);
        setTimeout(() => {
          setCurrentText("");
          setTextIndex((prev) => (prev + 1) % texts.length);
          setIsTyping(true);
        }, 2000);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [currentText, textIndex, isTyping, texts]);

  const scrollToContact = () => {
    scrollToSection("contact");
  };

  const scrollToProjects = () => {
    scrollToSection("projects");
  };

  return (
    <section
      id="home"
      className="min-h-[80vh] relative flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent"></div>
      
      {/* Particules animées */}
      <AnimatedParticles />
      
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs with different animations */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-20 right-40 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: "3s" }}></div>
        
        {/* Additional animated elements with new animations */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-primary rounded-full opacity-20 animate-glow-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-12 h-12 bg-gradient-accent rounded-full opacity-30 animate-glow-pulse" style={{ animationDelay: "0.5s" }}></div>
        
        {/* Code symbols floating with enhanced animations */}
        <div className="absolute top-1/3 right-1/4 text-primary/20 animate-particle-float">
          <Code className="w-8 h-8" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-accent/20 animate-particle-float" style={{ animationDelay: "1.5s" }}>
          <Zap className="w-6 h-6" />
        </div>
        <div className="absolute top-2/3 right-1/2 text-primary/20 animate-particle-float" style={{ animationDelay: "2.5s" }}>
          <Star className="w-5 h-5" />
        </div>
        
        {/* Ripple effects */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary/20 rounded-full animate-ripple"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent/20 rounded-full animate-ripple" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced Profile Image with multiple animations */}
          <div className="mb-8 animate-fade-in">
            <div className="relative inline-block group">
              {/* Multiple glow layers */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 animate-pulse-glow"></div>
              <div className="absolute inset-0 bg-gradient-accent rounded-full blur-2xl opacity-20 animate-pulse-glow" style={{ animationDelay: "0.5s" }}></div>
              
              {/* Rotating border effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-border-dance bg-[length:200%_200%]"></div>
              
              <img
                src={profileImage}
                alt="Lamine Kama"
                className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-background shadow-glow object-cover bg-gradient-to-br from-primary/10 to-accent/10 transition-transform duration-300 group-hover:scale-105 animate-breathe"
              />
              
              {/* Floating particles around image */}
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-primary rounded-full animate-bounce-in"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-bounce-in" style={{ animationDelay: "0.2s" }}></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary rounded-full animate-bounce-in" style={{ animationDelay: "0.4s" }}></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-accent rounded-full animate-bounce-in" style={{ animationDelay: "0.6s" }}></div>
            </div>
          </div>

          {/* Enhanced Main Content with staggered animations */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-slide-up">
              <span className="text-foreground">Lamine</span>{" "}
              <span className="text-gradient-primary animate-gradient-shift bg-[length:200%_200%] animate-text-wave">Kama</span>
            </h1>
            
            {/* Typewriter effect for job title */}
            <div className="h-8 md:h-10 mb-3 flex justify-center items-center">
              <h2 className="text-lg md:text-xl text-muted-foreground">
                {currentText}
                <span className="animate-pulse-glow">|</span>
              </h2>
            </div>
            
            <p className="text-base text-muted-foreground mb-2 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              📍 Dakar, Sénégal
            </p>
            
            <div className="max-w-2xl mx-auto mb-6 animate-slide-up" style={{ animationDelay: "0.6s" }}>
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                <span className="text-gradient-accent font-semibold animate-gradient-shift bg-[length:200%_200%] animate-text-wave">
                  Créer. Innover. Déployer.
                </span>
              </p>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                Passionné par la création d'applications web performantes et intuitives. 
                Je conçois des solutions robustes du backend au frontend.
              </p>
            </div>

            {/* Enhanced CTA Buttons with hover animations */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: "0.8s" }}>
              <Button
                variant="default"
                size="lg"
                onClick={scrollToProjects}
                className="group bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 hover:rotate-1 relative overflow-hidden animate-zoom-in"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                <span className="relative z-10">Voir mes projets</span>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                className="group border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300 transform hover:scale-105 hover:-rotate-1 relative overflow-hidden animate-zoom-in"
                style={{ animationDelay: "0.1s" }}
              >
                {/* Border animation */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-all duration-300 rounded-md"></div>
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                <span className="relative z-10">Me contacter</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-in" style={{ animationDelay: "1s" }}>
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center animate-breathe">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;