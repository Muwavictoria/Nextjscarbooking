'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Payment {
  id: number;
  bookingId: number;
  amount: number;
  status: string;
  paymentDate?: string;
  createdAt: string;
  booking: {
    car: {
      make: string;
      model: string;
      imageUrl?: string;
    };
    startDate: string;
    endDate: string;
    totalPrice: number;
  };
}

export default function PaymentDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [payment, setPayment] = useState<Payment | null>(null);
  const [loading, setLoading] = useState(true);

  // In a real app, this would come from an API
  useEffect(() => {
    // Mock payment data
    const mockPayments: Payment[] = [
      {
        id: 1,
        bookingId: 1,
        amount: 1250000,
        status: 'completed',
        paymentDate: '2023-07-10',
        createdAt: '2023-07-10',
        booking: {
          car: {
            make: 'Toyota',
            model: 'Camry',
            imageUrl: '/img/car1.png',
          },
          startDate: '2023-07-15',
          endDate: '2023-07-20',
          totalPrice: 1250000,
        },
      },
      {
        id: 2,
        bookingId: 2,
        amount: 1500000,
        status: 'pending',
        createdAt: '2023-08-05',
        booking: {
          car: {
            make: 'Honda',
            model: 'CR-V',
            imageUrl: '/img/car2.png',
          },
          startDate: '2023-08-10',
          endDate: '2023-08-15',
          totalPrice: 1500000,
        },
      },
      {
        id: 3,
        bookingId: 3,
        amount: 2500000,
        status: 'completed',
        paymentDate: '2023-05-25',
        createdAt: '2023-05-25',
        booking: {
          car: {
            make: 'BMW',
            model: 'X5',
            imageUrl: '/img/car3.png',
          },
          startDate: '2023-06-01',
          endDate: '2023-06-05',
          totalPrice: 2500000,
        },
      },
    ];
    
    const foundPayment = mockPayments.find(p => p.id === parseInt(params.id));
    setPayment(foundPayment || null);
    setLoading(false);
  }, [params.id]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
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
          <p className="text-xl">Loading payment details...</p>
        </div>
      </div>
    );
  }

  if (!payment) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex justify-center items-center h-48">
          <p className="text-xl text-red-600">Payment not found</p>
        </div>
      </div>
    );
  }

  const days = calculateDays(payment.booking.startDate, payment.booking.endDate);

  return (
    <div className="container mx-auto py-8">
      <button 
        className="mb-6 flex items-center text-green-600 hover:text-green-800"
        onClick={() => router.push('/payments')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Payments
      </button>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Payment Details</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Payment ID: {payment.id}
              </p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(payment.status)}`}>
              {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Booking Information</h2>
              {payment.booking.car.imageUrl && (
                <img
                  src={payment.booking.car.imageUrl}
                  alt={`${payment.booking.car.make} ${payment.booking.car.model}`}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
              )}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Car:</span>
                  <span className="font-medium">{payment.booking.car.make} {payment.booking.car.model}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Booking ID:</span>
                  <span className="font-medium">{payment.bookingId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Start Date:</span>
                  <span>{new Date(payment.booking.startDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">End Date:</span>
                  <span>{new Date(payment.booking.endDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                  <span>{days} days</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Amount:</span>
                    <span className="font-bold text-lg">UGX {payment.amount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Total Booking Price:</span>
                    <span className="font-medium">UGX {payment.booking.totalPrice.toLocaleString()}</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Payment Details</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Payment Date:</span>
                      <span>
                        {payment.paymentDate 
                          ? new Date(payment.paymentDate).toLocaleDateString()
                          : 'Not paid yet'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Created At:</span>
                      <span>{new Date(payment.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Status:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(payment.status)}`}>
                        {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {payment.status === 'pending' && (
            <div className="mt-8">
              <button
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded"
                onClick={() => console.log('Process payment', payment.id)}
              >
                Process Payment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}