'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Booking {
  id: number;
  car: {
    make: string;
    model: string;
    year: number;
    color: string;
    pricePerDay: number;
    imageUrl?: string;
  };
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: string;
  createdAt: string;
}

export default function BookingDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [booking, setBooking] = useState<Booking | null>(null);
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
          year: 2022,
          color: 'White',
          pricePerDay: 250000,
          imageUrl: '/img/car1.png',
        },
        startDate: '2023-07-15',
        endDate: '2023-07-20',
        totalPrice: 1250000,
        status: 'confirmed',
        createdAt: '2023-07-10',
      },
      {
        id: 2,
        car: {
          make: 'Honda',
          model: 'CR-V',
          year: 2023,
          color: 'Silver',
          pricePerDay: 300000,
          imageUrl: '/img/car2.png',
        },
        startDate: '2023-08-10',
        endDate: '2023-08-15',
        totalPrice: 1500000,
        status: 'pending',
        createdAt: '2023-08-05',
      },
      {
        id: 3,
        car: {
          make: 'BMW',
          model: 'X5',
          year: 2022,
          color: 'Black',
          pricePerDay: 500000,
          imageUrl: '/img/car3.png',
        },
        startDate: '2023-06-01',
        endDate: '2023-06-05',
        totalPrice: 2500000,
        status: 'completed',
        createdAt: '2023-05-25',
      },
    ];
    
    const foundBooking = mockBookings.find(b => b.id === parseInt(params.id));
    setBooking(foundBooking || null);
    setLoading(false);
  }, [params.id]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const calculateDays = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex justify-center items-center h-48">
          <p className="text-xl">Loading booking details...</p>
        </div>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex justify-center items-center h-48">
          <p className="text-xl text-red-600">Booking not found</p>
        </div>
      </div>
    );
  }

  const days = calculateDays(booking.startDate, booking.endDate);

  return (
    <div className="container mx-auto py-8">
      <button 
        className="mb-6 flex items-center text-green-600 hover:text-green-800"
        onClick={() => router.push('/bookings')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Bookings
      </button>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Booking Details</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Booking ID: {booking.id}
              </p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(booking.status)}`}>
              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Car Information</h2>
              {booking.car.imageUrl && (
                <img
                  src={booking.car.imageUrl}
                  alt={`${booking.car.make} ${booking.car.model}`}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
              )}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Make:</span>
                  <span className="font-medium">{booking.car.make}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Model:</span>
                  <span className="font-medium">{booking.car.model}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Year:</span>
                  <span className="font-medium">{booking.car.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Color:</span>
                  <span className="font-medium">{booking.car.color}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Price per Day:</span>
                  <span className="font-medium">UGX {booking.car.pricePerDay.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Booking Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Dates</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Start Date:</span>
                      <span>{new Date(booking.startDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">End Date:</span>
                      <span>{new Date(booking.endDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                      <span>{days} days</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Payment</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Total Price:</span>
                      <span className="font-bold text-lg">UGX {booking.totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Booking Details</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Booking Date:</span>
                      <span>{new Date(booking.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Status:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(booking.status)}`}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex space-x-4">
            {booking.status === 'pending' && (
              <>
                <button
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded"
                  onClick={() => console.log('Confirm booking', booking.id)}
                >
                  Confirm Booking
                </button>
                <button
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded"
                  onClick={() => console.log('Cancel booking', booking.id)}
                >
                  Cancel Booking
                </button>
              </>
            )}
            {booking.status === 'confirmed' && (
              <button
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded"
                onClick={() => console.log('Cancel booking', booking.id)}
              >
                Cancel Booking
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}