/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import ArticleCard from './ArticleCard';

interface Article {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

interface ArticleSectionProps {
  articles: Article[];
}

export default function ArticleSection({ articles }: ArticleSectionProps) {
  return (
    <section className="py-10 md:py-16 bg-gradient-to-r from-[#6B46C1] to-[#3B82F6]"> {/* Purple to Blue Gradient */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 md:mb-12 text-center">
          Informasi Untuk Kembangkan Eventmu
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-10 md:gap-y-12 mb-10 md:mb-14">
          {articles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
        <div className="text-center">
          <button
            type="button"
            className="bg-white text-[#915EFF] px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
            aria-label="Baca Artikel Lainnya"
          >
            Baca Artikel Lainnya
          </button>
        </div>
      </div>
    </section>
  );
}