'use client';

export default function PerfectCarSearch() {
  return (
    <section className="flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-[90%] max-w-7xl bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8 capitalize">
          Let’s find your perfect car
        </h1>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {/* Brand Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Brand name
            </label>
            <select className="w-full rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <option>All brands</option>
              <option>BMW</option>
              <option>Ferrari</option>
              <option>Hyundai</option>
              <option>Nissan</option>
            </select>
          </div>

          {/* Pick-up Location */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Pick-up location
            </label>
            <select className="w-full rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <option>All Status</option>
              <option>Serena Hotel</option>
              <option>Sheraton Hotel</option>
              <option>Old Taxi Park</option>
            </select>
          </div>

          {/* Pick-up Date */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Pick-up date
            </label>
            <input
              type="date"
              className="w-full rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Drop-off Date */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Drop-off date
            </label>
            <input
              type="date"
              className="w-full rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded flex items-center justify-center gap-2"
            >
              <i className="bx bx-search"></i>
              SEARCH CAR NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
