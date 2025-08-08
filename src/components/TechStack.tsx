import { useState } from "react";
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
  X
} from "lucide-react";

const TechStack = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const techCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend",
      color: "bg-gradient-primary",
      technologies: [
        {
          name: "Angular",
          icon: "🅰️",
          level: 90,
          experience: "2+ ans",
          description: "Framework principal pour mes applications entreprise. Maîtrise complète d'Angular 15+, RxJS, NgRx pour la gestion d'état, et Angular Material.",
          projects: ["SamaSchool Platform", "E-commerce Dashboard", "Analytics Tool"],
          advantages: ["Architecture modulaire", "TypeScript natif", "Écosystème riche"]
        },
        {
          name: "React",
          icon: "⚛️",
          level: 85,
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
          level: 92,
          experience: "1+ ans",
          description: "Framework PHP principal. Maîtrise d'Eloquent ORM, Queue Jobs, Events, API Resources, et écosystème Laravel (Horizon, Telescope).",
          projects: ["API E-commerce", "SaaS Platform", "CRM System"],
          advantages: ["Eloquent ORM", "Écosystème complet", "Communauté active"]
        },
        {
          name: "Spring Boot",
          icon: "☕",
          level: 88,
          experience: "1+ ans",
          description: "Framework Java pour le développement d'applications enterprise. Maîtrise de Spring Security, Spring Data JPA, Spring Cloud, et microservices.",
          projects: ["Enterprise APIs", "Microservices", "Banking System"],
          advantages: ["Enterprise ready", "Spring ecosystem", "Performance"]
        }
        // {
        //   name: "REST API",
        //   icon: "🔗",
        //   level: 88,
        //   experience: "4+ ans",
        //   description: "Conception d'APIs RESTful respectant les standards. Documentation Swagger, versioning, et bonnes pratiques de sécurité.",
        //   projects: ["Toutes mes applications"],
        //   advantages: ["Standard universel", "Cacheable", "Stateless"]
        // }
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
          level: 78,
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
          level: 85,
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
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tech Stack <span className="bg-gradient-primary bg-clip-text text-transparent">interactif</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cliquez sur une technologie pour découvrir mon expérience et mes projets réalisés
            </p>
          </div>

          {/* Interactive Tech Grid */}
          <div className="space-y-8">
            {techCategories.map((category, categoryIndex) => (
              <div key={category.title} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center text-white mr-4 shadow-glow`}>
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
                      className={`border-0 shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 cursor-pointer animate-slide-in ${
                        selectedTech === tech.name ? 'ring-2 ring-primary shadow-glow' : ''
                      }`}
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (techIndex * 0.05)}s` }}
                      onClick={() => handleTechClick(tech.name)}
                    >
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl mb-2">{tech.icon}</div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {tech.name}
                        </h4>
                        <div className="w-full bg-secondary rounded-full h-2 mb-2">
                          <div 
                            className="bg-gradient-primary h-2 rounded-full transition-all duration-700"
                            style={{ width: `${tech.level}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {tech.level}% • {tech.experience}
                        </div>
                        <Badge 
                          variant="secondary" 
                          className="mt-2 text-xs bg-tech-bg hover:bg-tech-hover hover:text-primary-foreground transition-all duration-300"
                        >
                          Cliquer pour détails
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Detail Modal */}
          {selectedTechData && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
              <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto border-0 shadow-glow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center">
                      <span className="text-3xl mr-3">{selectedTechData.icon}</span>
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
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {/* Description */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Mon expérience</h4>
                      <p className="text-muted-foreground">
                        {selectedTechData.description}
                      </p>
                    </div>

                    {/* Projects */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Projets réalisés</h4>
                      <div className="grid gap-2">
                        {selectedTechData.projects.map((project, index) => (
                          <div key={index} className="flex items-center text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                            {project}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Advantages */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Pourquoi j'utilise {selectedTechData.name}</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedTechData.advantages.map((advantage, index) => (
                          <Badge 
                            key={index}
                            variant="secondary"
                            className="bg-tech-bg hover:bg-tech-hover hover:text-primary-foreground transition-all duration-300"
                          >
                            {advantage}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Niveau de maîtrise</h4>
                      <div className="w-full bg-secondary rounded-full h-3">
                        <div 
                          className="bg-gradient-primary h-3 rounded-full transition-all duration-700"
                          style={{ width: `${selectedTechData.level}%` }}
                        ></div>
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

          {/* CTA */}
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Card className="border-0 bg-gradient-primary shadow-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  🚀 Toujours en apprentissage
                </h3>
                <p className="text-primary-foreground/90 text-lg mb-6">
                  Je me forme continuellement aux dernières technologies pour offrir des solutions toujours plus innovantes
                </p>
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
                  Discutons de votre projet
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