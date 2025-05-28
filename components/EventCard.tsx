/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

interface EventCardProps {
  imageUrl: string;
  organizerIconUrl: string;
  organizerName: string;
  title: string;
  description: string;
  date: string;
  price: string;
}

export default function EventCard({
  imageUrl,
  organizerIconUrl,
  organizerName,
  title,
  description,
  date,
  price,
}: EventCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col w-[290px] sm:w-[320px] md:w-[350px] flex-shrink-0 snap-start">
      <div className="px-4 pt-4 pb-3"> {/* Adjusted padding for organizer info */}
        <div className="flex items-center">
          <img 
            src={organizerIconUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(organizerName)}&background=e0e0e0&color=666666&size=32&font-size=0.4&bold=true`} 
            alt={`${organizerName} logo`} 
            className="w-7 h-7 rounded-full mr-2.5 flex-shrink-0 object-cover border border-gray-200" 
          />
          <span className="text-sm text-gray-700 font-medium truncate" title={organizerName}>{organizerName}</span>
        </div>
      </div>
      
      <div className="aspect-[16/6] w-full overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-800 mb-1.5 leading-tight" title={title}>{title}</h3>
        <p className="text-sm text-gray-600 mb-3 leading-snug min-h-[40px]"> {/* min-h to prevent jump on short desc */}
          {description.length > 80 ? description.substring(0, 80) + '...' : description}
        </p>
        
        <hr className="border-gray-200 my-3" />
        
        <div className="flex items-center justify-between mt-auto"> {/* Aligns this block to bottom if description height varies */}
          <div> {/* Left side: Date and Price stacked */}
            <p className="text-xs text-gray-500 mb-0.5">{date}</p>
            <p className="text-xl font-bold text-gray-800">{price}</p>
          </div>
          <div> {/* Right side: Button */}
            <button
              type="button"
              className="bg-[#915EFF] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#7e4fe1] transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#915EFF] focus:ring-opacity-50"
              aria-label={`Beli tiket untuk ${title}`}
            >
              Beli Tiket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}