import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Target, Zap, Users, GraduationCap, BookOpen, Lightbulb, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion",
      description: "Amour du code et des technologies modernes"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Apprentissage",
      description: "Curiosité et envie de progresser continuellement"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation",
      description: "Créativité dans la résolution de problèmes"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Travail d'équipe et partage de connaissances"
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
              Découvrez mon parcours académique, mes projets et ma passion pour le développement web
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
                      Je suis actuellement <span className="text-primary font-medium">étudiant en 2ème année</span> à 
                      l'<span className="text-accent font-medium">ISEP-AT</span>, où je développe mes compétences 
                      en développement web et en technologies modernes. Passionné par la création d'applications 
                      web performantes et intuitives, je me spécialise dans les technologies comme 
                      <span className="text-primary font-medium"> Laravel</span>, 
                      <span className="text-primary font-medium"> Angular</span>, 
                      <span className="text-primary font-medium"> React</span> et 
                      <span className="text-primary font-medium"> Node.js</span>.
                    </p>
                    <p>
                      Basé à <span className="text-accent font-medium">Dakar, Sénégal</span>, 
                      je combine mes études avec des projets personnels et des collaborations 
                      pour enrichir mon expérience pratique. Mon approche allie théorie académique 
                      et application concrète pour créer des solutions web innovantes.
                    </p>
                    <p>
                      Toujours curieux et avide d'apprendre, je me forme continuellement aux 
                      dernières technologies et méthodologies pour préparer mon avenir professionnel 
                      dans le développement web.
                    </p>
                  </div>

                  {/* Education Info */}
                  <div className="mt-6 p-4 bg-gradient-primary/10 rounded-lg border border-primary/20">
                    <div className="flex items-center mb-3">
                      <GraduationCap className="w-5 h-5 text-primary mr-2" />
                      <h4 className="font-semibold text-foreground">Formation actuelle</h4>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p><span className="font-medium">ISEP-AT</span> - 2ème année</p>
                      <p>Développement web et technologies modernes</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4 text-foreground flex items-center">
                      <BookOpen className="w-5 h-5 mr-2 text-primary" />
                      Technologies étudiées
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

              {/* Updated Stats for Student */}
              <Card className="mt-8 border-0 shadow-elegant bg-gradient-primary">
                <CardContent className="p-6">
                  <div className="grid grid-cols-3 gap-4 text-center text-primary-foreground">
                    <div>
                      <div className="text-2xl font-bold">2ème</div>
                      <div className="text-sm opacity-90">Année d'études</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">3+</div>
                      <div className="text-sm opacity-90">Projets réalisés</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-sm opacity-90">Motivation</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
{/* Additional Info Card */}
              <Card className="mt-6 border-0 shadow-elegant bg-gradient-accent/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Lightbulb className="w-5 h-5 text-accent mr-2" />
                    <h4 className="font-semibold text-foreground">Objectifs</h4>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Maîtriser les technologies web modernes</p>
                    <p>• Développer des projets innovants</p>
                    <p>• Préparer mon insertion professionnelle</p>
                    <p>• Contribuer à l'écosystème tech sénégalais</p>
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