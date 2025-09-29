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
    <section id="stats-section" className="py-2 bg-secondary/20">
     
    </section>
  );
};

export default Stats;