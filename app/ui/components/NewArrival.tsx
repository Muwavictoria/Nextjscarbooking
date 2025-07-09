'use client';

import Image from 'next/image';
import { useState } from 'react';

const cars = [
  { image: '/img/car2.png', name: 'Mercedes Benz car' },
  { image: '/img/car10.png', name: 'Mercedes Benz car' },
  { image: '/img/car3.png', name: 'Mercedes Benz car' },
  { image: '/img/car4.png', name: 'Mercedes Benz car' },
  { image: '/img/car9.png', name: 'Mercedes Benz car' },
  { image: '/img/car11.png', name: 'Mercedes Benz car' },
  { image: '/img/car7.png', name: 'Mercedes Benz car' },
  { image: '/img/car8.png', name: 'Mercedes Benz car' },
];

export default function ArrivalSection() {
  const [visibleCount, setVisibleCount] = useState(4);

  return (
    <section className="container mx-auto px-4 py-16">
      <h4 className="text-green-500 flex items-center text-sm font-semibold mb-2">
        <i className="bx bx-car mr-2 text-xl" /> New Arrival
      </h4>
      <h1 className="text-3xl font-bold mb-10">
        Lets check latest <span className="text-green-500">Cars</span>
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cars.slice(0, visibleCount).map((car, index) => (
          <div key={index} className="rounded-lg shadow p-4 bg-white dark:bg-gray-900">
            <div className="relative w-full h-40 mb-4">
              <Image
                src={car.image}
                alt={car.name}
                fill
                className="object-contain"
              />
            </div>
            <h5 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {car.name}
            </h5>

            <div className="flex items-center justify-between mb-2 text-yellow-400">
              <div className="flex space-x-1 text-xl">
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star-half" />
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                5.0 (5.8k Reviews)
              </span>
            </div>

            <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-300 mb-3">
              <span><i className="bx bx-error-circle mr-1" />Automatic</span>
              <span><i className="bx bx-label mr-1" />10.15km</span>
              <span><i className="bx bx-car mr-1" />Model 2023</span>
              <span><i className="bx bx-target-lock mr-1" />Hybrid</span>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-green-600">$45,623</p>
              <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 transition">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < cars.length && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setVisibleCount(visibleCount + 4)}
            className="text-green-600 hover:text-green-700 font-semibold flex items-center justify-center mx-auto gap-2"
          >
            Load More <i className="bx bx-sync text-xl" />
          </button>
        </div>
      )}
    </section>
  );
}
