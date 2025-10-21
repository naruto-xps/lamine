import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Eye, Star, ArrowRight, Sparkles } from "lucide-react";
import ecommerceImage from "@/assets/lamine.png";
import taskManagerImage from "@/assets/bbb.png";
import analyticsImage from "@/assets/lll.png";
import { useState, useEffect } from "react";

const Projects = () => {
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

    const element = document.getElementById("projects");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Agrilegeey, une plateforme e-commerce agricole",
      description: "Agrilegeey est une plateforme e-commerce agricole conçue pour faciliter la mise en relation entre les producteurs, commerçants et acheteurs de produits agricoles.",
      image: ecommerceImage,
      technologies: ["Laravel", "Angular", "PostgreSQL", "Stripe", "Docker"],
      githubUrl: "https://github.com/laminek/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.laminek.dev",
      featured: true,
      category: "Full Stack"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Tableau de bord d'analyse de données avec visualisations interactives, filtres avancées et exports PDF. Intégration avec plusieurs sources de données.",
      image: analyticsImage,
      technologies: ["Angular", "chart.js", "Laravel", "PostgreSQL"],
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
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mes <span className="bg-gradient-primary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">projets</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Découvrez une sélection de mes réalisations récentes, alliant innovation technique et design moderne
            </p>
          </div>

          {/* Featured Project with enhanced animations */}
          <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-20'}`} style={{ animationDelay: "0.2s" }}>
            {projects.filter(p => p.featured).slice(0, 1).map((project) => (
              <Card key={project.id} className="border-0 shadow-glow hover:shadow-glow-accent transition-all duration-700 transform hover:scale-[1.02] group overflow-hidden relative">
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating particles */}
                <div className="absolute top-6 right-6 w-2 h-2 bg-primary/30 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-accent/40 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: "0.5s" }}></div>
                
                <div className="grid lg:grid-cols-2 gap-0 relative z-10">
                  {/* Enhanced Image with parallax effect */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground animate-pulse-glow">
                      <Star className="w-3 h-3 mr-1" />
                      Projet vedette
                    </Badge>
                    
                    {/* Image overlay with shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  {/* Enhanced Content */}
                  <CardContent className="p-8 flex flex-col justify-center relative">
                    <div className="mb-4">
                      <Badge variant="secondary" className="mb-2 animate-bounce-in">
                        {project.category}
                      </Badge>
                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground transition-colors duration-300">
                        {project.description}
                      </p>
                    </div>

                    {/* Enhanced Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                        <Sparkles className="w-4 h-4 mr-2 text-primary" />
                        Technologies utilisées
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="bg-tech-bg hover:bg-tech-hover hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 hover:-rotate-1"
                            style={{ transitionDelay: `${index * 0.05}s` }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Actions */}
                    <div className="flex gap-4">
                      <Button
                        variant="default"
                        asChild
                        className="group flex-1 relative overflow-hidden"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="relative z-10 flex items-center">
                            <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                            Voir le projet
                          </span>
                          {/* Button shimmer */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        asChild
                        className="group relative overflow-hidden"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="relative z-10 flex items-center">
                            <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                            Code source
                          </span>
                          {/* Button shimmer */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Other Projects with staggered animations */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).slice(1).concat(projects.filter(p => !p.featured)).map((project, index) => (
              <Card 
                key={project.id}
                className={`border-0 shadow-elegant hover:shadow-glow transition-all duration-700 transform hover:scale-105 hover:rotate-1 group overflow-hidden relative ${
                  isVisible ? 'animate-slide-in-bottom' : 'opacity-0 translate-y-20'
                }`}
                style={{ 
                  animationDelay: `${0.4 + (index * 0.15)}s`,
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                {/* Card background animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-1 h-1 bg-primary/30 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-0.5 h-0.5 bg-accent/40 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: "0.5s" }}></div>
                
                {/* Enhanced Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <Badge className="absolute top-4 right-4 bg-card text-card-foreground animate-bounce-in">
                    {project.category}
                  </Badge>
                  
                  {/* Image shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                <CardContent className="p-6 relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 group-hover:text-foreground transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Enhanced Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-tech-bg hover:bg-tech-hover hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
                          style={{ transitionDelay: `${techIndex * 0.05}s` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-tech-bg animate-pulse-glow">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Enhanced Actions */}
                  <div className="flex gap-2">
                    <Button
                      variant="portfolio"
                      size="sm"
                      asChild
                      className="flex-1 group relative overflow-hidden"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="relative z-10 flex items-center">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                          Demo
                        </span>
                        {/* Button shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="group relative overflow-hidden"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="relative z-10">
                          <Github className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                        </span>
                        {/* Button shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
