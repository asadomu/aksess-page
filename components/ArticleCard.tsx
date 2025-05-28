/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

interface ArticleCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

export default function ArticleCard({ imageUrl, title, description }: ArticleCardProps) {
  return (
    <div className="flex flex-col group"> {/* Removed bg-white, shadow, rounded-xl from here */}
      <div className="rounded-lg overflow-hidden shadow-lg mb-4">
        <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" 
        />
      </div>
      <div className="p-1"> {/* Minimal padding, relies on section for spacing */}
        <h3 className="text-md font-bold text-white mb-2 leading-snug group-hover:text-purple-300 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-200 leading-relaxed opacity-90">
          {description.length > 100 ? description.substring(0, 100) + '...' : description}
        </p>
      </div>
    </div>
  );
}