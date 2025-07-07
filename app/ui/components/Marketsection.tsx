'use client';

import Image from 'next/image';

export default function MarketSection() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center gap-12 px-20 py-10 bg-white dark:bg-gray-900">
      {/* Text Content */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h4 className="text-green-500 text-sm font-semibold flex items-center gap-2">
          <i className="bx bx-car text-lg" />
          About us
        </h4>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-snug">
          World’s largest <span className="text-green-500">Car<br />Dealer</span> Marketplace
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque distinctio ex mollitia voluptatibus porro
          corrupti, fuga explicabo sequi quos architecto velit, corporis impedit odit, expedita itaque? Tempore nesciunt
          illo aperiam!
        </p>

        <div className="space-y-2">
          <p className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
            <i className="bx bx-last-page mt-1 text-green-500" />
            Lorem ipsum dolor, sit amet consectetur
          </p>
          <p className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
            <i className="bx bx-last-page mt-1 text-green-500" />
            Lorem ipsum dolor, sit amet consectetur
          </p>
          <p className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
            <i className="bx bx-last-page mt-1 text-green-500" />
            Lorem ipsum dolor, sit amet consectetur
          </p>
        </div>

        <button className="mt-4 inline-flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition">
          Discover More
          <i className="bx bx-right-arrow-alt text-xl" />
        </button>
      </div>

      {/* Image */}
      <div className="w-full lg:w-1/2">
        <div className="relative h-[300px] md:h-[400px] lg:h-[450px] w-full">
          <Image
            src="/img/car3.png" // path must be inside /public
            alt="Market Car"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
