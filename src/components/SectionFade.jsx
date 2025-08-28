import { useEffect, useState, useRef } from "react"

// Component for fading in animations when scrolling through sections using IntersectionObserver
// children: everything wrapped inside tag
// animate: specific Tailwind CSS animation 
// threshold: % visibility at which to trigger animation
export const SectionFade = ({ children, animate, threshold, className }) => {
    const [isVisible, setIsVisible] = useState(false); 
    const ref = useRef(null); 

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true); 
          }
        },
        { threshold: threshold } // animation triggers when entry is 30% visible on screen
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect(); 
    }, []);

    return (
      <div
        ref={ref}
        className={`${isVisible ? animate : "opacity-0"}  transition-opacity duration-700 ${className}`}
      >
        {children}
      </div>
    )
}