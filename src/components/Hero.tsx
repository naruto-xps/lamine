import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Code, Rocket } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/lamine-kama-portrait.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70 dark:bg-background/80"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-float">
        <Code className="w-8 h-8 text-primary" />
      </div>
      <div className="absolute top-40 right-20 opacity-20 animate-float" style={{ animationDelay: "1s" }}>
        <Rocket className="w-6 h-6 text-accent" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-20 animate-float" style={{ animationDelay: "2s" }}>
        <Github className="w-8 h-8 text-primary" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <img
              src={profileImage}
              alt="Lamine Kama"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-primary shadow-glow object-cover"
            />
          </div>

          {/* Main Content */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Lamine</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Kama</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">
              Développeur Full Stack
            </h2>
            
            <p className="text-lg text-muted-foreground mb-2">
              📍 Dakar, Sénégal
            </p>
            
            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                <span className="bg-gradient-accent bg-clip-text text-transparent font-semibold">
                  Créer. Innover. Déployer.
                </span>
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Passionné par la création d'applications web performantes et intuitives. 
                Je conçois des solutions robustes du backend au frontend.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                variant="hero"
                size="lg"
                onClick={scrollToProjects}
                className="group"
              >
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Voir mes projets
              </Button>
              <Button
                variant="accent"
                size="lg"
                onClick={scrollToContact}
                className="group"
              >
                <Mail className="w-5 h-5" />
                Me contacter
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <Button
                variant="portfolio"
                size="icon"
                asChild
                className="hover:text-primary"
              >
                <a
                  href="https://github.com/laminek"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="portfolio"
                size="icon"
                asChild
                className="hover:text-primary"
              >
                <a
                  href="https://linkedin.com/in/lamine-kama"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="portfolio"
                size="icon"
                asChild
                className="hover:text-primary"
              >
                <a
                  href="mailto:lamine.kama@example.com"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="portfolio"
                size="icon"
                className="hover:text-accent"
                title="Télécharger CV"
              >
                <Download className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;