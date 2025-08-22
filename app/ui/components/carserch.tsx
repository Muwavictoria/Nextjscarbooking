'use client';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchCars, clearCars } from '@/app/lib/carSlice';
import { AppDispatch } from '@/app/lib/store';

export default function PerfectCarSearch() {
  const dispatch = useDispatch<AppDispatch>();
  
  // State for search parameters
  const [make, setMake] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  // Brand options
  const brandOptions = [
    'All brands',
    'Toyota',
    'BMW',
    'Mercedes',
    'Audi',
    'Honda',
    'Ford',
    'Hyundai',
    'Nissan'
  ];
  
  // Location options
  const locationOptions = [
    'All Locations',
    'Kampala',
    'Entebbe',
    'Mbarara',
    'Gulu',
    'Jinja'
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Dispatch search action with parameters
    const searchParams: any = {};
    
    if (make && make !== 'All brands') {
      searchParams.make = make;
    }
    
    if (startDate) {
      searchParams.startDate = startDate;
    }
    
    if (endDate) {
      searchParams.endDate = endDate;
    }
    
    // Clear previous search results
    dispatch(clearCars());
    
    // Dispatch search
    dispatch(searchCars(searchParams) as any);
  };

  return (
    <section className="flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-[90%] max-w-7xl bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8 capitalize">
          Let's find your perfect car
        </h1>

        <form onSubmit={handleSearch}>
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {/* Brand Name */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Brand name
              </label>
              <select 
                className="w-full rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={make}
                onChange={(e) => setMake(e.target.value)}
              >
                {brandOptions.map((brand) => (
                  <option key={brand} value={brand === 'All brands' ? '' : brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            {/* Pick-up Location */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Pick-up location
              </label>
              <select className="w-full rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {locationOptions.map((location) => (
                  <option key={location} value={location === 'All Locations' ? '' : location}>
                    {location}
                  </option>
                ))}
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
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
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
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
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
        </form>
      </div>
    </section>
  );
}
