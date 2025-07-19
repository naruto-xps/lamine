import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Eye } from "lucide-react";
import ecommerceImage from "@/assets/project-ecommerce.jpg";
import taskManagerImage from "@/assets/project-task-manager.jpg";
import analyticsImage from "@/assets/project-analytics.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Plateforme e-commerce complète avec gestion des commandes, paiements sécurisés et interface d'administration avancée. Développée avec Laravel pour le backend et Angular pour le frontend.",
      image: ecommerceImage,
      technologies: ["Laravel", "Angular", "PostgreSQL", "Stripe", "Docker"],
      githubUrl: "https://github.com/laminek/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.laminek.dev",
      featured: true,
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Application de gestion de tâches collaborative avec système de notifications en temps réel, tableaux Kanban et rapports d'activité. Architecture MERN stack.",
      image: taskManagerImage,
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
      githubUrl: "https://github.com/laminek/task-manager",
      liveUrl: "https://tasks.laminek.dev",
      featured: true,
      category: "Web App"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Tableau de bord d'analyse de données avec visualisations interactives, filtres avancées et exports PDF. Intégration avec plusieurs sources de données.",
      image: analyticsImage,
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis"],
      githubUrl: "https://github.com/laminek/analytics-dashboard",
      liveUrl: "https://analytics.laminek.dev",
      featured: false,
      category: "Data Viz"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mes <span className="bg-gradient-primary bg-clip-text text-transparent">projets</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Découvrez une sélection de mes réalisations récentes, alliant innovation technique et design moderne
            </p>
          </div>

          {/* Featured Project */}
          <div className="mb-16 animate-fade-in">
            {projects.filter(p => p.featured).slice(0, 1).map((project) => (
              <Card key={project.id} className="border-0 shadow-glow overflow-hidden group">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                      ⭐ Projet vedette
                    </Badge>
                  </div>

                  {/* Content */}
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="mb-4">
                      <Badge variant="secondary" className="mb-2">
                        {project.category}
                      </Badge>
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3">
                        Technologies utilisées
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="bg-tech-bg hover:bg-tech-hover hover:text-primary-foreground transition-all duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4">
                      <Button
                        variant="default"
                        asChild
                        className="group"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                          Voir le projet
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        asChild
                        className="group"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                          Code source
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).slice(1).concat(projects.filter(p => !p.featured)).map((project, index) => (
              <Card 
                key={project.id}
                className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 group overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <Badge className="absolute top-4 right-4 bg-card text-card-foreground">
                    {project.category}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-tech-bg"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-tech-bg">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      variant="portfolio"
                      size="sm"
                      asChild
                      className="flex-1 group"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="group"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Card className="border-0 shadow-elegant bg-gradient-accent text-accent-foreground">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Vous avez un projet en tête ?
                </h3>
                <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                  Je serais ravi de discuter de votre prochain projet et de voir comment 
                  mes compétences peuvent vous aider à le concrétiser.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => {
                    const element = document.querySelector("#contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="transform hover:scale-105 transition-all duration-300 shadow-elegant"
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

export default Projects;
