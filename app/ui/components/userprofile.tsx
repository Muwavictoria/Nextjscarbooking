'use client';
import { useState } from 'react';

export default function Profile() {
  const [isModalOpen, setModalOpen] = useState(false);

  // Dummy bookings
  const bookings = [
    {
      number_plate: 'ABC123',
      car_name: 'Civic',
      brand: 'Honda',
      color: 'Red',
      price: '$80/day',
      seats: 4,
    },
    {
      number_plate: 'XYZ789',
      car_name: 'Model 3',
      brand: 'Tesla',
      color: 'Black',
      price: '$120/day',
      seats: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-8">
        {/* Profile Image and Edit */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="/img/default.jpg"
              className="w-14 h-14 rounded-full object-cover"
              alt="User"
            />
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Vickie</h2>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Edit Profile
          </button>
        </div>

        {/* Booked Cars Table */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Vickie&apos;s Booked Cars
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  {['Car', 'Number Plate', 'Car Name', 'Brand', 'Color', 'Price', 'Seats'].map((heading) => (
                    <th
                      key={heading}
                      className="px-4 py-2 text-left text-sm font-semibold text-gray-600 dark:text-gray-300"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-100 dark:divide-gray-700">
                {bookings.map((car, i) => (
                  <tr key={i}>
                    <td className="px-4 py-2">
                      <img
                        src="/img/car2.png"
                        alt="Car"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">{car.number_plate}</td>
                    <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">{car.car_name}</td>
                    <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">{car.brand}</td>
                    <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">{car.color}</td>
                    <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">{car.price}</td>
                    <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">{car.seats}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Edit Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-lg">
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-medium text-gray-800 dark:text-white">Edit Profile</h4>
                <button
                  onClick={() => setModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  &times;
                </button>
              </div>
              <form className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Photo</label>
                  <input
                    type="file"
                    className="mt-1 block w-full text-sm text-gray-900 dark:text-gray-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
                  <input
                    type="text"
                    defaultValue="Vickie"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                  <input
                    type="email"
                    placeholder="example@example.com"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                  <input
                    type="password"
                    placeholder="New Password"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    type="button"
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    onClick={() => setModalOpen(false)}
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white rounded hover:bg-gray-400 dark:hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
