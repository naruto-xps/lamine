import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Shield, 
  Plug, 
  Wrench, 
  Code, 
  Database, 
  Smartphone,
  Rocket,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { useState, useEffect } from "react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("services");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Développement d'applications web",
      description: "Création d'applications web modernes, responsive et performantes avec les dernières technologies",
      features: [
        "Applications SPA (Single Page Application)",
        "PWA (Progressive Web App)",
        "Interface utilisateur intuitive",
        "Optimisation SEO"
      ],
      technologies: ["Angular", "React", "Laravel", "Node.js"],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Création d'API sécurisées",
      description: "Développement d'APIs REST et GraphQL robustes avec authentification et autorisation",
      features: [
        "APIs RESTful",
        "Authentification JWT",
        "OAuth2 & SSO",
        "Documentation Swagger"
      ],
      technologies: ["Laravel", "Node.js", "Express", "JWT"],
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: <Plug className="w-8 h-8" />,
      title: "Intégration de systèmes",
      description: "Intégration fluide avec des services tiers, systèmes de paiement et APIs externes",
      features: [
        "Systèmes de paiement (Stripe, PayPal)",
        "APIs tierces (Google, Facebook)",
        "Services cloud (AWS, Azure)",
        "Webhooks & synchronisation"
      ],
      technologies: ["REST", "GraphQL", "Webhooks", "Cloud"],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Maintenance & évolution",
      description: "Support technique, mise à jour et évolution de vos applications existantes",
      features: [
        "Maintenance corrective",
        "Optimisation de performance",
        "Mise à jour technologique",
        "Support technique"
      ],
      technologies: ["Monitoring", "DevOps", "CI/CD", "Docker"],
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  const additionalServices = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Audit de code",
      description: "Analyse et amélioration de la qualité de votre codebase"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Optimisation BDD",
      description: "Amélioration des performances de vos bases de données"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile-First",
      description: "Développement avec une approche mobile prioritaire"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Déploiement",
      description: "Mise en production et configuration serveur"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mes <span className="bg-gradient-primary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Des solutions complètes pour donner vie à vos projets web, du concept à la mise en production
            </p>
          </div>

          {/* Main Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className={`border-0 shadow-elegant hover:shadow-glow transition-all duration-700 transform hover:scale-105 hover:-rotate-1 group relative overflow-hidden ${
                  isVisible ? 'animate-slide-in-bottom' : 'opacity-0 translate-y-20'
                }`}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent/40 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: "0.5s" }}></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start mb-6">
                    <div className={`w-16 h-16 rounded-xl ${service.bgColor} flex items-center justify-center mr-4 group-hover:shadow-glow transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12 relative overflow-hidden`}>
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <div className={`${service.color} relative z-10`}>
                        {service.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features with staggered animation */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Sparkles className="w-4 h-4 mr-2 text-primary" />
                      Inclus :
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex} 
                          className="flex items-center text-muted-foreground group-hover:text-foreground transition-all duration-300 transform hover:translate-x-2"
                          style={{ transitionDelay: `${featureIndex * 0.1}s` }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 animate-pulse-glow"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies with hover effects */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Technologies :</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={tech}
                          variant="secondary"
                          className="bg-tech-bg hover:bg-tech-hover hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 hover:-rotate-1"
                          style={{ transitionDelay: `${techIndex * 0.05}s` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced CTA Button */}
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 transform hover:scale-105 relative overflow-hidden"
                    onClick={() => {
                      const element = document.querySelector("#contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    <span className="relative z-10 flex items-center">
                      Discuter de ce service
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    {/* Button shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Services with enhanced animations */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: "0.4s" }}>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center py-2">
              Services complémentaires
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <Card 
                  key={service.title}
                  className={`border-0 shadow-elegant hover:shadow-glow transition-all duration-500 transform hover:scale-105 hover:rotate-1 group relative overflow-hidden ${
                    isVisible ? 'animate-zoom-in' : 'opacity-0 scale-50'
                  }`}
                  style={{ 
                    animationDelay: `${0.5 + (index * 0.1)}s`,
                    transitionDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Card background animation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="mb-4 flex justify-center">
                      <div className="w-12 h-12 rounded-full bg-tech-bg group-hover:bg-tech-hover group-hover:text-primary-foreground flex items-center justify-center transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12 relative overflow-hidden">
                        {/* Icon shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <div className="relative z-10">
                          {service.icon}
                        </div>
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Services;