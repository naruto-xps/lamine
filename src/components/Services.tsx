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
  Rocket
} from "lucide-react";

const Services = () => {
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
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mes <span className="bg-gradient-primary bg-clip-text text-transparent">services</span>
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
                className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className={`w-16 h-16 rounded-xl ${service.bgColor} flex items-center justify-center mr-4 group-hover:shadow-glow transition-all duration-300`}>
                      <div className={service.color}>
                        {service.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Inclus :</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Technologies :</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge 
                          key={tech}
                          variant="secondary"
                          className="bg-tech-bg hover:bg-tech-hover hover:text-primary-foreground transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    onClick={() => {
                      const element = document.querySelector("#contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Discuter de ce service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Services */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
              Services complémentaires
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <Card 
                  key={service.title}
                  className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 group"
                  style={{ animationDelay: `${0.5 + (index * 0.1)}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="w-12 h-12 rounded-full bg-tech-bg group-hover:bg-tech-hover group-hover:text-primary-foreground flex items-center justify-center transition-all duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Process CTA */}
          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Card className="border-0 bg-gradient-primary shadow-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  Comment je travaille ?
                </h3>
                <div className="grid md:grid-cols-4 gap-6 mb-6">
                  <div className="text-primary-foreground">
                    <div className="text-3xl font-bold mb-2">1</div>
                    <div className="text-sm opacity-90">Analyse des besoins</div>
                  </div>
                  <div className="text-primary-foreground">
                    <div className="text-3xl font-bold mb-2">2</div>
                    <div className="text-sm opacity-90">Conception & planning</div>
                  </div>
                  <div className="text-primary-foreground">
                    <div className="text-3xl font-bold mb-2">3</div>
                    <div className="text-sm opacity-90">Développement agile</div>
                  </div>
                  <div className="text-primary-foreground">
                    <div className="text-3xl font-bold mb-2">4</div>
                    <div className="text-sm opacity-90">Livraison & support</div>
                  </div>
                </div>
                <Button 
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                  onClick={() => {
                    const element = document.querySelector("#contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Démarrer un projet
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;