import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Server, 
  Database, 
  Wrench, 
  Palette,
  Globe,
  ShieldCheck,
  GitBranch,
  X,
  Sparkles,
  Zap,
  Star,
  Rocket,
  ArrowRight
} from "lucide-react";

const TechStack = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
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

    const element = document.getElementById("techstack");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const techCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend",
      color: "bg-gradient-primary",
      technologies: [
        {
          name: "Angular",
          icon: "🅰️",
          level: 70,
          experience: "2+ ans",
          description: "Framework principal pour mes applications entreprise. Maîtrise complète d'Angular 15+, RxJS, NgRx pour la gestion d'état, et Angular Material.",
          projects: ["SamaSchool Platform", "E-commerce Dashboard", "Analytics Tool"],
          advantages: ["Architecture modulaire", "TypeScript natif", "Écosystème riche"]
        },
        {
          name: "React",
          icon: "⚛️",
          level: 65,
          experience: "2+ ans",
          description: "Utilisé pour des projets modernes et des prototypes rapides. Hooks, Context API, et intégration avec Next.js pour le SSR.",
          projects: ["Portfolio Sites", "Landing Pages", "MVP Prototypes"],
          advantages: ["Composants réutilisables", "Communauté active", "Performance"]
        },
        {
          name: "TypeScript",
          icon: "🔷",
          level: 88,
          experience: "1+ ans",
          description: "Langage de choix pour tous mes projets. Typage fort, interfaces complexes, et intégration parfaite avec Angular et React.",
          projects: ["Tous mes projets récents"],
          advantages: ["Typage statique", "IntelliSense", "Moins d'erreurs"]
        },
        {
          name: "Bootstrap",
          icon: "🎨",
          level: 90,
          experience: "1+ ans",
          description: "Framework CSS pour un développement rapide et responsive. Maîtrise des composants Bootstrap, système de grille, et personnalisation avec Sass.",
          projects: ["Portfolio", "Dashboards", "Landing Pages"],
          advantages: ["Développement rapide", "Responsive design", "Composants prêts"]
        },
        {
          name: "flutter",
          icon: "🦋",
          level: 40,
          experience: "1+ ans",
          description: "Framework UI pour la création d'applications nativement compilées pour mobile, web et bureau à partir d'une seule base de code.",
          projects: ["Mobile Apps", "Web Apps"],
          advantages: ["Développement rapide", "UI expressive", "Performance native"]
        }
      ]
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend",
      color: "bg-gradient-accent",
      technologies: [
        {
          name: "Laravel",
          icon: "🐘",
          level: 60,
          experience: "1+ ans",
          description: "Framework PHP principal. Maîtrise d'Eloquent ORM, Queue Jobs, Events, API Resources, et écosystème Laravel (Horizon, Telescope).",
          projects: ["API E-commerce", "SaaS Platform", "CRM System"],
          advantages: ["Eloquent ORM", "Écosystème complet", "Communauté active"]
        },
        {
          name: "Spring Boot",
          icon: "☕",
          level: 40,
          experience: "1+ ans",
          description: "Framework Java pour le développement d'applications enterprise. Maîtrise de Spring Security, Spring Data JPA, Spring Cloud, et microservices.",
          projects: ["Enterprise APIs", "Microservices", "Banking System"],
          advantages: ["Enterprise ready", "Spring ecosystem", "Performance"]
        }
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Base de données",
      color: "bg-gradient-primary",
      technologies: [
        {
          name: "PostgreSQL",
          icon: "🐘",
          level: 88,
          experience: "1+ ans",
          description: "SGBD relationnel avancé. Maîtrise des requêtes complexes, indexation, fonctions stockées, et optimisation de performance.",
          projects: ["Applications entreprise", "Analytics Platform"],
          advantages: ["ACID compliance", "Extensible", "Performance"]
        },
        {
          name: "MongoDB",
          icon: "🍃",
          level: 82,
          experience: "1+ ans",
          description: "Base NoSQL pour les données flexibles. Aggregation pipeline, indexing, et intégration avec Node.js via Mongoose.",
          projects: ["Chat Apps", "Content Management", "Logs System"],
          advantages: ["Schéma flexible", "Horizontal scaling", "JSON natif"]
        },
        {
          name: "Redis",
          icon: "📦",
          level: 30,
          experience: "1+ ans",
          description: "Cache en mémoire et broker de messages. Sessions, cache de requêtes, et queues pour les tâches asynchrones.",
          projects: ["Cache système", "Sessions", "Background jobs"],
          advantages: ["Ultra rapide", "Structures de données", "Pub/Sub"]
        }
      ]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "DevOps & Outils",
      color: "bg-gradient-accent",
      technologies: [
        {
          name: "Docker",
          icon: "🐳",
          level: 55,
          experience: "1+ ans",
          description: "Containerisation pour le développement et la production. Docker Compose pour les environnements multi-services.",
          projects: ["Tous les projets récents"],
          advantages: ["Isolation", "Portabilité", "Reproductibilité"]
        },
        {
          name: "Git",
          icon: "📝",
          level: 92,
          experience: "2+ ans",
          description: "Maîtrise complète de Git, Git Flow, branching strategies, et collaboration en équipe via GitHub/GitLab.",
          projects: ["Tous mes projets"],
          advantages: ["Versioning", "Collaboration", "Branching"]
        },
        {
          name: "AWS",
          icon: "☁️",
          level: 75,
          experience: "1+ an",
          description: "Services cloud pour le déploiement. EC2, RDS, S3, et Lambda pour les applications serverless.",
          projects: ["Production deployments"],
          advantages: ["Scalabilité", "Fiabilité", "Services managed"]
        }
      ]
    }
  ];

  const handleTechClick = (techName: string) => {
    setSelectedTech(selectedTech === techName ? null : techName);
  };

  const selectedTechData = techCategories
    .flatMap(category => category.technologies)
    .find(tech => tech.name === selectedTech);

  return (
    <section id="techstack" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tech Stack <span className="bg-gradient-primary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">interactif</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cliquez sur une technologie pour découvrir mon expérience et mes projets réalisés
            </p>
          </div>

          {/* Interactive Tech Grid */}
          <div className="space-y-8">
            {techCategories.map((category, categoryIndex) => (
              <div key={category.title} className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center text-white mr-4 shadow-glow animate-pulse-glow`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.technologies.map((tech, techIndex) => (
                    <Card 
                      key={tech.name}
                      className={`border-0 shadow-elegant hover:shadow-glow transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer relative overflow-hidden ${
                        selectedTech === tech.name ? 'ring-2 ring-primary shadow-glow animate-bounce-in' : ''
                      } ${
                        isVisible ? 'animate-slide-in-bottom' : 'opacity-0 translate-y-20'
                      }`}
                      style={{ 
                        animationDelay: `${(categoryIndex * 0.1) + (techIndex * 0.05)}s`,
                        transitionDelay: `${techIndex * 0.05}s`
                      }}
                      onClick={() => handleTechClick(tech.name)}
                    >
                      {/* Card background animation */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Floating particles */}
                      <div className="absolute top-2 right-2 w-1 h-1 bg-primary/30 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-2 left-2 w-0.5 h-0.5 bg-accent/40 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: "0.5s" }}></div>
                      
                      <CardContent className="p-4 text-center relative z-10 group">
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                          {tech.name}
                        </h4>
                        <div className="w-full bg-secondary rounded-full h-2 mb-2 relative overflow-hidden">
                          <div 
                            className="bg-gradient-primary h-2 rounded-full transition-all duration-700 animate-progress-fill"
                            style={{ width: `${tech.level}%` }}
                          ></div>
                          {/* Progress bar shimmer */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </div>
                        <div className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {tech.level}% • {tech.experience}
                        </div>
                        <Badge 
                          variant="secondary" 
                          className="mt-2 text-xs bg-tech-bg hover:bg-tech-hover hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
                        >
                          <Sparkles className="w-3 h-3 mr-1" />
                          Cliquer pour détails
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Tech Detail Modal */}
          {selectedTechData && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
              <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto border-0 shadow-glow relative overflow-hidden">
                {/* Modal background animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent"></div>
                
                <CardContent className="p-6 relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center">
                      <span className="text-3xl mr-3 animate-bounce-in">{selectedTechData.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">
                          {selectedTechData.name}
                        </h3>
                        <p className="text-muted-foreground">
                          {selectedTechData.experience} d'expérience • Niveau {selectedTechData.level}%
                        </p>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setSelectedTech(null)}
                      className="hover:bg-primary/10 transition-colors duration-300"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {/* Description */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <Zap className="w-4 h-4 mr-2 text-primary" />
                        Mon expérience
                      </h4>
                      <p className="text-muted-foreground">
                        {selectedTechData.description}
                      </p>
                    </div>

                    {/* Projects */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <Star className="w-4 h-4 mr-2 text-primary" />
                        Projets réalisés
                      </h4>
                      <div className="grid gap-2">
                        {selectedTechData.projects.map((project, index) => (
                          <div 
                            key={index} 
                            className="flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300 transform hover:translate-x-2"
                            style={{ transitionDelay: `${index * 0.1}s` }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 animate-pulse-glow"></div>
                            {project}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Advantages */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <Sparkles className="w-4 h-4 mr-2 text-primary" />
                        Pourquoi j'utilise {selectedTechData.name}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedTechData.advantages.map((advantage, index) => (
                          <Badge 
                            key={index}
                            variant="secondary"
                            className="bg-tech-bg hover:bg-tech-hover hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 hover:-rotate-1"
                            style={{ transitionDelay: `${index * 0.05}s` }}
                          >
                            {advantage}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Progress Bar */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Niveau de maîtrise</h4>
                      <div className="w-full bg-secondary rounded-full h-3 relative overflow-hidden">
                        <div 
                          className="bg-gradient-primary h-3 rounded-full transition-all duration-700 animate-progress-fill"
                          style={{ width: `${selectedTechData.level}%` }}
                        ></div>
                        {/* Progress bar shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {selectedTechData.level}% de maîtrise
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Enhanced CTA */}
          <div className={`text-center mt-12 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: "0.6s" }}>
            <Card className="border-0 bg-gradient-primary shadow-glow hover:shadow-glow-accent transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary animate-gradient-shift bg-[length:200%_200%] opacity-20"></div>
              
              <CardContent className="p-8 relative z-10">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4 flex items-center justify-center">
                  <Rocket className="w-6 h-6 mr-2 animate-bounce-in" />
                  Toujours en apprentissage
                </h3>
                <p className="text-primary-foreground/90 text-lg mb-6">
                  Je me forme continuellement aux dernières technologies pour offrir des solutions toujours plus innovantes
                </p>
                <Button 
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
                  onClick={() => {
                    const element = document.querySelector("#contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    Discutons de votre projet
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  {/* Button shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;