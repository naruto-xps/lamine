import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Target, Zap, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion",
      description: "Amour du code et des technologies modernes"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Précision",
      description: "Attention aux détails et qualité du code"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Applications rapides et optimisées"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Travail d'équipe et communication"
    }
  ];

  const techStack = [
    "Laravel", "Angular", "React", "Node.js", "TypeScript", "PostgreSQL", 
    "MongoDB", "Docker", "Git", "REST API", "JWT", "OAuth2"
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              À propos de <span className="bg-gradient-primary bg-clip-text text-transparent">moi</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Découvrez mon parcours, mes valeurs et ma passion pour le développement web
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Biography */}
            <div className="animate-slide-in">
              <Card className="border-0 shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">
                    Mon parcours
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Passionné par la création d'applications web performantes et intuitives, 
                      je conçois des solutions robustes du backend au frontend. Fort d'une 
                      solide expérience avec <span className="text-primary font-medium">Laravel</span>, 
                      <span className="text-primary font-medium"> Angular</span>, 
                      <span className="text-primary font-medium"> Node.js</span> et 
                      <span className="text-primary font-medium"> PostgreSQL</span>, 
                      j'allie créativité, rigueur et efficacité.
                    </p>
                    <p>
                      Basé à <span className="text-accent font-medium">Dakar, Sénégal</span>, 
                      je travaille avec des équipes locales et internationales pour créer 
                      des expériences web exceptionnelles. Mon approche combine les meilleures 
                      pratiques de développement avec une attention particulière à l'expérience utilisateur.
                    </p>
                    <p>
                      Toujours à l'affût des dernières technologies, je me forme continuellement 
                      pour offrir des solutions modernes et évolutives à mes clients et collaborateurs.
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4 text-foreground">
                      Technologies favorites
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techStack.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="bg-tech-bg hover:bg-tech-hover hover:text-primary-foreground transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Values */}
            <div className="animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Mes valeurs
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <Card 
                    key={value.title}
                    className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 flex justify-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground group-hover:shadow-glow transition-all duration-300">
                          {value.icon}
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold mb-2 text-foreground">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Stats */}
              <Card className="mt-8 border-0 shadow-elegant bg-gradient-primary">
                <CardContent className="p-6">
                  <div className="grid grid-cols-3 gap-4 text-center text-primary-foreground">
                    <div>
                      <div className="text-2xl font-bold">5+</div>
                      <div className="text-sm opacity-90">Années d'expérience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">50+</div>
                      <div className="text-sm opacity-90">Projets réalisés</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-sm opacity-90">Clients satisfaits</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;