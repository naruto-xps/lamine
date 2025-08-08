import { useEffect } from 'react';
import { useNavigation } from './use-navigation';

export const useKeyboardNavigation = () => {
  const { scrollToSection } = useNavigation();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Only handle if not typing in an input
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (event.key) {
        case '1':
          scrollToSection('home');
          break;
        case '2':
          scrollToSection('about');
          break;
        case '3':
          scrollToSection('services');
          break;
        case '4':
          scrollToSection('skills');
          break;
        case '5':
          scrollToSection('projects');
          break;
        case '6':
          scrollToSection('contact');
          break;
        case 'h':
        case 'H':
          scrollToSection('home');
          break;
        case 'a':
        case 'A':
          scrollToSection('about');
          break;
        case 's':
        case 'S':
          scrollToSection('services');
          break;
        case 'k':
        case 'K':
          scrollToSection('skills');
          break;
        case 'p':
        case 'P':
          scrollToSection('projects');
          break;
        case 'c':
        case 'C':
          scrollToSection('contact');
          break;
        case 'Home':
          scrollToSection('home');
          break;
        case 'End':
          scrollToSection('contact');
          break;
        case ' ':
          // Prevent space from scrolling the page
          event.preventDefault();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [scrollToSection]);
}; 