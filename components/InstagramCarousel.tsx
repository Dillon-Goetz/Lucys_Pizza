// src/components/InstagramCarousel.tsx
"use client"; // This component uses client-side hooks and libraries

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import InstagramEmbed from './InstagramEmbed'; // Your existing component

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface InstagramCarouselProps {
  postUrls: string[];
}

const InstagramCarousel: React.FC<InstagramCarouselProps> = ({ postUrls }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {postUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <InstagramEmbed permalink={url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InstagramCarousel;