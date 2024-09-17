import { useState, useEffect, useCallback } from 'react';

export const useScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const smoothProgress = useCallback((currentProgress: number) => {
    setProgress((prev) => prev + (currentProgress - prev) * 0.1);
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const calculatedProgress = (scrollTop / scrollHeight) * 100;

      smoothProgress(calculatedProgress);
      setIsVisible(scrollTop > 300);
    };

    const handleScroll = () => {
      requestAnimationFrame(toggleVisibility);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [smoothProgress]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return { isVisible, progress, scrollToTop };
};
