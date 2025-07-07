'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const slides = [
  { image: '/img/car3.png' },
  { image: '/img/car4.png' },
  { image: '/img/car1.png' },
  { image: '/img/car8.png' },
];

export default function HeroSection() {
  return (
    <section className="bg-white pt-10  dark:bg-gray-900">
      <Swiper
        modules={[Navigation]}
        navigation
        loop
        className="myHome"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-16 lg:px-24 gap-8 min-h-[80vh]">
              {/* Left Text Column */}
              <div className="space-y-4 text-center md:text-left">
                <h4 className="text-sm font-semibold uppercase text-gray-600 dark:text-gray-300">
                  Welcome to Motol
                </h4>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-snug">
                  Best Way to find <br />
                  your <span className="text-green-500">Dream</span> car
                </h1>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-xl mx-auto md:mx-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
                  accusantium sint quae veritatis amet, cupiditate unde obcaecati.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                  <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition text-sm sm:text-base">
                    About More →
                  </button>
                  <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition text-sm sm:text-base">
                    Learn More →
                  </button>
                </div>
              </div>

              {/* Right Image Column with Background */}
              <div
                className="h-[300px] md:h-full w-full bg-no-repeat bg-center bg-contain"
                style={{ backgroundImage: `url('${slide.image}')` }}
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
