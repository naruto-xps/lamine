import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Clock, Trophy, Target } from "lucide-react";

const Stats = () => {
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    hours: 0,
    technologies: 0,
    satisfaction: 0
  });

  const finalStats = {
    projects: 50,
    hours: 2500,
    technologies: 15,
    satisfaction: 100
  };

  const statsData = [
    {
      icon: <Trophy className="w-8 h-8" />,
      value: animatedStats.projects,
      label: "Projets terminés",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: animatedStats.hours,
      label: "Heures de code",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: <Code className="w-8 h-8" />,
      value: animatedStats.technologies,
      label: "Technologies maîtrisées",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: animatedStats.satisfaction,
      label: "Clients satisfaits",
      color: "text-accent",
      bgColor: "bg-accent/10",
      suffix: "%"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate counters
          Object.keys(finalStats).forEach((key) => {
            const targetValue = finalStats[key as keyof typeof finalStats];
            const duration = 2000; // 2 seconds
            const steps = 60;
            const increment = targetValue / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= targetValue) {
                current = targetValue;
                clearInterval(timer);
              }
              setAnimatedStats(prev => ({
                ...prev,
                [key]: Math.floor(current)
              }));
            }, duration / steps);
          });
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats-section" className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Statistiques en <span className="bg-gradient-primary bg-clip-text text-transparent">temps réel</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Un aperçu de mon parcours professionnel en chiffres
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat, index) => (
              <Card 
                key={stat.label}
                className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full ${stat.bgColor} flex items-center justify-center mx-auto mb-4`}>
                    <div className={stat.color}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                    {stat.value.toLocaleString()}{stat.suffix || ''}
                  </div>
                  <p className="text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievement Banner */}
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Card className="border-0 bg-gradient-primary shadow-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  🚀 Toujours en progression
                </h3>
                <p className="text-primary-foreground/90 text-lg">
                  Ces chiffres évoluent constamment grâce à ma passion pour l'apprentissage continu et l'innovation technologique
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;