'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Booking {
  id: number;
  car: {
    make: string;
    model: string;
    imageUrl?: string;
  };
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: string;
}

export default function BookingsPage() {
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  // In a real app, this would come from an API
  useEffect(() => {
    // Mock booking data
    const mockBookings: Booking[] = [
      {
        id: 1,
        car: {
          make: 'Toyota',
          model: 'Camry',
          imageUrl: '/img/car1.png',
        },
        startDate: '2023-07-15',
        endDate: '2023-07-20',
        totalPrice: 1250000,
        status: 'confirmed',
      },
      {
        id: 2,
        car: {
          make: 'Honda',
          model: 'CR-V',
          imageUrl: '/img/car2.png',
        },
        startDate: '2023-08-10',
        endDate: '2023-08-15',
        totalPrice: 1500000,
        status: 'pending',
      },
      {
        id: 3,
        car: {
          make: 'BMW',
          model: 'X5',
          imageUrl: '/img/car3.png',
        },
        startDate: '2023-06-01',
        endDate: '2023-06-05',
        totalPrice: 2500000,
        status: 'completed',
      },
    ];
    
    setBookings(mockBookings);
    setLoading(false);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex justify-center items-center h-48">
          <p className="text-xl">Loading your bookings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Bookings</h1>
      </div>
      
      {bookings.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
          <h2 className="text-xl font-semibold mb-4">No bookings yet</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            You haven't made any car bookings yet.
          </p>
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded"
            onClick={() => router.push('/Cars')}
          >
            Browse Cars
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((booking) => (
            <div 
              key={booking.id} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              {booking.car.imageUrl && (
                <img
                  src={booking.car.imageUrl}
                  alt={`${booking.car.make} ${booking.car.model}`}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold">
                    {booking.car.make} {booking.car.model}
                  </h2>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(booking.status)}`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Start Date:</span>
                    <span>{new Date(booking.startDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">End Date:</span>
                    <span>{new Date(booking.endDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Total Price:</span>
                    <span className="font-semibold">UGX {booking.totalPrice.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded text-sm"
                    onClick={() => router.push(`/bookings/${booking.id}`)}
                  >
                    View Details
                  </button>
                  {booking.status === 'pending' && (
                    <button
                      className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded text-sm"
                      onClick={() => console.log('Cancel booking', booking.id)}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}