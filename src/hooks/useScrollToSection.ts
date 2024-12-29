import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToSection() {
  const location = useLocation();

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    }
  }, [location]);

  return scrollToSection;
}