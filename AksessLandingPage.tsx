/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import type { HeroImage } from './components/HeroCarousel'; // Import HeroImage type
import EventCarousel from './components/EventCarousel';
import PromoBannerGrid from './components/PromoBannerGrid';
import type { PromoBanner } from './components/PromoBannerGrid';
import ArticleSection from './components/ArticleSection';
import Footer from './components/Footer';

// Placeholder data
const popularEventsData = [
  { id: 1, imageUrl: 'https://picsum.photos/seed/event1/640/240', organizerIconUrl: 'https://picsum.photos/seed/icon1/32/32', organizerName: 'Rismada Al Huda', title: 'Itikaf Masjid Al Huda', description: 'Agenda Itikaf di Masjid Jami\' Al Huda, Komplek Timah, Depok', date: '20-29 Mar 2025', price: 'Rp 25.000' },
  { id: 2, imageUrl: 'https://picsum.photos/seed/event2/640/240', organizerIconUrl: 'https://picsum.photos/seed/icon2/32/32', organizerName: 'Wahana Trip', title: 'Explore Cappadocia', description: 'Eksplorasi kuliner dan budaya Turki selama sepekan', date: '7-13 Mei 2025', price: 'Rp 4.000.000' },
  { id: 3, imageUrl: 'https://picsum.photos/seed/event3/640/240', organizerIconUrl: 'https://picsum.photos/seed/icon3/32/32', organizerName: 'Akad Tech', title: 'Digital&Tech Week', description: 'Exhibition workshop tentang digital world dan teknologi', date: '10 Jan 2025', price: 'Rp 85.000' },
  { id: 4, imageUrl: 'https://picsum.photos/seed/event4/640/240', organizerIconUrl: 'https://picsum.photos/seed/icon4/32/32', organizerName: 'ArtFestivals', title: 'Modern Art Showcase', description: 'Discover contemporary artists and their groundbreaking work.', date: '15-18 Jun 2025', price: 'Rp 50.000' },
];

const exploreEventsData = [
  { id: 5, imageUrl: 'https://picsum.photos/seed/event5/640/240', organizerIconUrl: 'https://picsum.photos/seed/icon5/32/32', organizerName: 'Music Mania', title: 'Summer Fest Concert', description: 'Live music from top bands under the stars.', date: '22-24 Jul 2025', price: 'Rp 150.000' },
  { id: 6, imageUrl: 'https://picsum.photos/seed/event6/640/240', organizerIconUrl: 'https://picsum.photos/seed/icon6/32/32', organizerName: 'Foodie Finds', title: 'Gourmet Food Expo', description: 'Taste the best dishes from local and international chefs.', date: '05-07 Aug 2025', price: 'Rp 75.000' },
  { id: 7, imageUrl: 'https://picsum.photos/seed/event7/640/240', organizerIconUrl: 'https://picsum.photos/seed/icon7/32/32', organizerName: 'Tech Connect', title: 'Future Innovators Summit', description: 'Network with leaders and explore future technologies.', date: '12-14 Sep 2025', price: 'Rp 200.000' },
  { id: 8, imageUrl: 'https://picsum.photos/seed/event8/640/240', organizerIconUrl: 'https://picsum.photos/seed/icon8/32/32', organizerName: 'Wellness Retreats', title: 'Mind & Body Expo', description: 'Discover paths to a healthier and more mindful lifestyle.', date: '01-03 Oct 2025', price: 'Rp 120.000' },
];

const articlesData = [
  { id: 1, imageUrl: 'https://picsum.photos/seed/article1/600/400', title: '5 Cara Biar Nggak Kehabisan Tiket Event Favorit', description: 'Pernah nggak sih kamu kelewatan event seru cuma karena kehabisan tiket? Duh, nyesek! Apalagi kalau itu...' },
  { id: 2, imageUrl: 'https://picsum.photos/seed/article2/600/400', title: 'Capek Ngurus Registrasi Event Manual? Ini Solusi Buat Kamu!', description: 'Masih ngurus pendaftaran event pakai Excel dan form gratisan? Yuk upgrade cara kerja kamu! Selain bikin tim kewalahan, cara manual rentan...' },
  { id: 3, imageUrl: 'https://picsum.photos/seed/article3/600/400', title: 'Bikin Event Tapi Bingung Gimana Ukur Kesuksesannya?', description: 'Suksesnya event nggak cuma soal tiket sold out. Banyak hal untuk tahu apakah acara kamu benar-benar impactful. Berikut ini empat cara mudah...' },
];

const heroImages: HeroImage[] = [
  {
    id: 1,
    src: 'https://picsum.photos/seed/hero_main_event/1600/600',
    alt: 'Buat Eventmu Berkesan dengan Aksess.id',
  },
  {
    id: 2,
    src: 'https://picsum.photos/seed/hero_explore/1600/600',
    alt: 'Explore Exciting Opportunities',
  },
  {
    id: 3,
    src: 'https://picsum.photos/seed/hero_discover/1600/600',
    alt: 'Discover New Experiences',
  },
];

const promoBannersData: PromoBanner[] = [
    { id: 1, imageUrl: 'https://picsum.photos/seed/promo_fixed_big_564_504/564/504', alt: 'Kamu Punya Event? Buat Event-mu Sekarang', type: 'big' },
    { id: 2, imageUrl: 'https://picsum.photos/seed/promo_fixed_medium1_564_240/564/240', alt: 'Jadikan Event-mu Lebih Mudah dengan Aksess.id!', type: 'medium' },
    { id: 3, imageUrl: 'https://picsum.photos/seed/promo_fixed_medium2_564_240/564/240', alt: 'FAQ - Temukan jawaban dari pertanyaan-mu di sini', type: 'medium' },
];


export default function AksessLandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
          <HeroCarousel images={heroImages} />
        </div>
        <EventCarousel title="Event Populer Untuk Mu!" events={popularEventsData} />
        <PromoBannerGrid banners={promoBannersData} />
        <EventCarousel title="Explore Event" events={exploreEventsData} />
        <ArticleSection articles={articlesData} />
      </main>
      <Footer />
    </div>
  );
}