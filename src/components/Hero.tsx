import { Button } from "@/components/ui/button";
import { Mail, Rocket } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/lamine.jpg";
import { useNavigation } from "@/hooks/use-navigation";

const Hero = () => {
  const { scrollToSection } = useNavigation();

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
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-20 right-40 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: "3s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-6 animate-fade-in">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 animate-pulse-glow"></div>
              <img
                src={profileImage}
                alt="Lamine Kama"
                className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-primary/20 shadow-glow object-cover bg-gradient-to-br from-primary/10 to-accent/10"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Lamine</span>{" "}
              <span className="text-gradient-primary">Kama</span>
            </h1>
            
            <h2 className="text-lg md:text-xl text-muted-foreground mb-3">
              Développeur Full Stack
            </h2>
            
            <p className="text-base text-muted-foreground mb-2">
              📍 Dakar, Sénégal
            </p>
            
            <div className="max-w-2xl mx-auto mb-6">
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                <span className="text-gradient-accent font-semibold">
                  Créer. Innover. Déployer.
                </span>
              </p>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                Passionné par la création d'applications web performantes et intuitives. 
                Je conçois des solutions robustes du backend au frontend.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="default"
                size="lg"
                onClick={scrollToProjects}
                className="group bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Voir mes projets
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                className="group border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Me contacter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;