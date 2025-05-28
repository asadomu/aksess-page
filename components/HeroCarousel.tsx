/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface HeroImage {
  id: number;
  src: string;
  alt: string;
}

interface HeroCarouselProps {
  images: HeroImage[];
  autoPlayInterval?: number;
}

export default function HeroCarousel({ images, autoPlayInterval = 5000 }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [goToNext, autoPlayInterval, images.length]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-[16/6] bg-gray-200 flex items-center justify-center rounded-2xl overflow-hidden">
        <p className="text-gray-500">No hero images available.</p>
      </div>
    );
  }
  
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0); 
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
    setTouchStart(0); 
  };

  return (
    <section 
      className="relative w-full aspect-[16/6] overflow-hidden bg-slate-100 rounded-2xl"
      aria-roledescription="carousel"
      aria-label="Promotional Events"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`hero-slide absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          role="group"
          aria-roledescription="slide"
          aria-label={`${image.alt || `Slide ${index + 1}`}`}
          aria-hidden={index !== currentIndex}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          {/* Text and Button Overlay Removed */}
        </div>
      ))}

      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-3 sm:left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-60 transition-opacity z-20 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="sm:w-7 sm:h-7" />
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-3 sm:right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-60 transition-opacity z-20 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="sm:w-7 sm:h-7" />
          </button>

          <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2.5 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ease-in-out ${
                  index === currentIndex ? 'bg-white scale-125' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}