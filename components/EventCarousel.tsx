/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import EventCard from './EventCard';

interface Event {
  id: number;
  imageUrl: string;
  organizerIconUrl: string;
  organizerName: string;
  title: string;
  description: string;
  date: string;
  price: string;
}

interface EventCarouselProps {
  title: string;
  events: Event[];
}

export default function EventCarousel({ title, events }: EventCarouselProps) {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 md:mb-10">{title}</h2>
        <div 
          className="flex overflow-x-auto space-x-5 md:space-x-8 pb-6 -mb-6 no-scrollbar snap-x snap-mandatory" // Added more spacing
          role="list"
          aria-label={title}
        >
          {events.map((event, index) => (
            // Add left/right padding to the container instead of individual cards for peek effect
            <div key={event.id} role="listitem" className="snap-center shrink-0"> 
              <EventCard {...event} />
            </div>
          ))}
           {/* Spacers for visual padding at start/end of scrollable area if needed, but container padding is better */}
        </div>
      </div>
    </section>
  );
}