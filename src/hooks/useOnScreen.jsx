import { useEffect, useState } from 'react';

const useOnScreen = (ref, rootMargin = '0px') => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          console.log('Intersection ratio:', entry.intersectionRatio); // Log intersection ratio
          setIntersecting(entry.isIntersecting);
        },
        {
          rootMargin: '0px',
          threshold: 0.0 // Trigger as soon as even one pixel is visible
        }
      );
      
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, rootMargin]); // Ensure dependencies are correctly listed here

  return isIntersecting;
};


export default useOnScreen;
