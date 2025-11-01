import { useEffect, useRef, ReactNode } from 'react';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  animation?: 'fade' | 'left' | 'right' | 'scale' | 'stagger';
  delay?: number;
  className?: string;
}

export const ScrollAnimationWrapper = ({ 
  children, 
  animation = 'fade',
  delay = 0,
  className = '' 
}: ScrollAnimationWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            element.classList.add('animate-in');
          }, delay);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay]);

  const animationClass = animation === 'stagger' 
    ? 'scroll-animate-stagger'
    : `scroll-animate${animation !== 'fade' ? `-${animation}` : ''}`;

  return (
    <div ref={ref} className={`${animationClass} ${className}`}>
      {children}
    </div>
  );
};
