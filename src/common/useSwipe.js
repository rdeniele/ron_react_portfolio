import { useEffect } from 'react';

export default function useSwipe(elementRef, onSwipeLeft, onSwipeRight) {
  useEffect(() => {
    if (!elementRef.current) return;
    
    let touchStartX = 0;
    const element = elementRef.current;
    
    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };
    
    const handleTouchEnd = (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      
      // If the swipe distance is significant
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          // Swiped left
          onSwipeLeft();
        } else {
          // Swiped right
          onSwipeRight();
        }
      }
    };
    
    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [elementRef, onSwipeLeft, onSwipeRight]);
}