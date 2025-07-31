'use client'; // only needed in app/ directory if using interactivity
import { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    car_name: '',
    number_plate: '',
    car_price: '',
    car_seats: '',
    pickup_location: '',
    dropoff_location: '',
    pickup_date: '',
    return_date: '',
    car_brand: '',
  });

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-10 px-4">
      {/* Booking Form */}
      <form
        method="POST"
        action="/api/booking" // Adjust as needed
        className="max-w-5xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-6"
      >
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Book a Car</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input name="car_name" label="Car Name" />
          <Input name="number_plate" label="Number Plate" />
          <Input name="car_price" label="Car Price per day" />
          <Input name="car_seats" label="Car Seats" />
          <Input name="pickup_location" label="Pickup Location" />
          <Input name="dropoff_location" label="Dropoff Location" />
          <Input name="pickup_date" label="Pickup Date" type="date" />
          <Input name="return_date" label="Return Date" type="date" />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Continue
          </button>
        </div>
      </form>

      {/* Search Section */}
      <div className="mt-10 max-w-5xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-6">
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">200+</span>{' '}
            CAR TYPES AND BRANDS
          </p>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Search Your <span className="text-indigo-600 dark:text-indigo-400">Best Cars</span>
          </h2>
        </div>

        <form method="GET" action="/api/search">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <Input name="car_brand" label="Car Brand" />
            <Input name="pickup_location" label="Pickup Location" />
            <Input name="pickup_date" label="Pickup Date" type="date" />
            <Input name="return_date" label="Return Date" type="date" />
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// Reusable Input component
function Input({ label, name, type = 'text' }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm
          focus:ring-indigo-500 focus:border-indigo-500
          dark:bg-gray-700 dark:text-white dark:border-gray-600"
      />
    </div>
  );
}
