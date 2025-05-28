/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

export interface PromoBanner {
  id: number;
  imageUrl: string;
  alt: string;
  type: 'big' | 'medium'; 
}

interface PromoBannerGridProps {
  banners: PromoBanner[];
}

const PromoCard = ({ banner }: { banner: PromoBanner }) => {
  let cardContainerClasses = "rounded-xl overflow-hidden shadow-lg relative group";
  let dimensionClasses = "";
  
  if (banner.type === 'big') {
    // Apply fixed width and height for 'big' banner
    dimensionClasses = "w-full max-w-[564px] h-[504px] sm:w-[564px]"; 
  } else if (banner.type === 'medium') {
    // Apply fixed width and height for 'medium' banner
    dimensionClasses = "w-full max-w-[564px] h-[240px] sm:w-[564px]";
  }

  return (
    <div className={`${cardContainerClasses} ${dimensionClasses}`}>
      <img 
        src={banner.imageUrl} 
        alt={banner.alt} 
        className="absolute inset-0 w-full h-full object-cover z-0" // Image itself with z-index
      />
      {/* Darken overlay on hover */}
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 ease-in-out z-10"></div> 
      {/* Overlay with higher z-index */}
    </div>
  );
};

export default function PromoBannerGrid({ banners }: PromoBannerGridProps) {
  if (!banners || banners.length < 3) {
    console.warn("PromoBannerGrid expects at least 3 banners for the specified layout.");
    return null; 
  }

  const bigBanner = banners.find(b => b.type === 'big');
  const mediumBanners = banners.filter(b => b.type === 'medium');

  if (!bigBanner || mediumBanners.length < 2) {
    console.warn("PromoBannerGrid expects one 'big' banner and at least two 'medium' banners for optimal layout.");
    return (
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <p>Promo banners are not configured correctly for the intended layout.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 md:py-16 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start"> {/* items-start can help if heights differ */}
          {/* Big Banner - takes 1 logical column span */}
          <div className="md:col-span-1 flex justify-center md:justify-start"> {/* Centering for smaller screens, start for md+ */}
            <PromoCard banner={bigBanner} />
          </div>
          
          {/* Two Medium Banners - stack in the remaining space (2 logical columns) */}
          <div className="md:col-span-2 grid grid-cols-1 gap-6 md:gap-8">
            {mediumBanners.slice(0, 2).map(banner => (
              <div key={banner.id} className="flex justify-center md:justify-start"> {/* Centering for smaller screens, start for md+ */}
                <PromoCard banner={banner} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}