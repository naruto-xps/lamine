import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
// import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";
import StepNavigation from "@/components/StepNavigation";
import KeyboardHelp from "@/components/KeyboardHelp";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";

const Index = () => {
  useKeyboardNavigation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <StepNavigation />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        {/* <Skills /> */}
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <FloatingNav />
      <KeyboardHelp />
    </div>
  );
};

export default Index;
