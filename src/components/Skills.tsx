import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Server, 
  Database, 
  Wrench, 
  Palette,
  Globe,
  ShieldCheck,
  GitBranch
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend",
      color: "bg-gradient-primary",
      skills: [
        { name: "Angular", level: 90, icon: "🅰️" },
        { name: "React", level: 85, icon: "⚛️" },
        { name: "TypeScript", level: 88, icon: "🔷" },
        { name: "HTML/CSS", level: 95, icon: "🎨" },
        { name: "Tailwind CSS", level: 90, icon: "💨" },
        { name: "Bootstrap", level: 85, icon: "🅱️" }
      ]
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend",
      color: "bg-gradient-accent",
      skills: [
        { name: "Laravel", level: 92, icon: "🐘" },
        { name: "Node.js", level: 88, icon: "🟢" },
        { name: "Express.js", level: 85, icon: "🚀" },
        { name: "PHP", level: 90, icon: "🐘" },
        { name: "REST API", level: 88, icon: "🔗" },
        { name: "GraphQL", level: 75, icon: "📊" }
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Base de données",
      color: "bg-gradient-primary",
      skills: [
        { name: "PostgreSQL", level: 88, icon: "🐘" },
        { name: "MySQL", level: 90, icon: "🐬" },
        { name: "MongoDB", level: 82, icon: "🍃" },
        { name: "Redis", level: 78, icon: "📦" }
      ]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Outils & DevOps",
      color: "bg-gradient-accent",
      skills: [
        { name: "Docker", level: 85, icon: "🐳" },
        { name: "Git", level: 92, icon: "📝" },
        { name: "Linux", level: 80, icon: "🐧" },
        { name: "AWS", level: 75, icon: "☁️" },
        { name: "CI/CD", level: 78, icon: "🔄" }
      ]
    }
  ];

  const additionalSkills = [
    { icon: <ShieldCheck className="w-5 h-5" />, name: "JWT & OAuth2", category: "Sécurité" },
    { icon: <GitBranch className="w-5 h-5" />, name: "Git Flow", category: "Versioning" },
    { icon: <Globe className="w-5 h-5" />, name: "API Integration", category: "Intégration" },
    { icon: <Palette className="w-5 h-5" />, name: "UI/UX Design", category: "Design" }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mes <span className="bg-gradient-primary bg-clip-text text-transparent">compétences</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Un aperçu de mes compétences techniques et de mon niveau d'expertise dans chaque domaine
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={category.title}
                className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center text-white mr-4 shadow-glow`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill.name}
                        className="animate-slide-in"
                        style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <span className="mr-2 text-lg">{skill.icon}</span>
                            <span className="font-medium text-foreground">{skill.name}</span>
                          </div>
                          <span className="text-sm text-muted-foreground font-medium">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
              Compétences complémentaires
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalSkills.map((skill, index) => (
                <Card 
                  key={skill.name}
                  className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 group cursor-default"
                  style={{ animationDelay: `${0.5 + (index * 0.1)}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="w-12 h-12 rounded-full bg-tech-bg group-hover:bg-tech-hover group-hover:text-primary-foreground flex items-center justify-center transition-all duration-300">
                        {skill.icon}
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {skill.name}
                    </h4>
                    <Badge variant="secondary" className="text-xs">
                      {skill.category}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="bg-gradient-primary rounded-lg p-8 text-primary-foreground shadow-glow">
              <h3 className="text-2xl font-bold mb-4">
                Prêt à collaborer ?
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Ces compétences sont au service de vos projets. Discutons de vos besoins !
              </p>
              <button 
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-elegant"
              >
                Commencer un projet
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;