'use client'; // Needed if you're using interactivity or inside `app/` dir
import React from 'react';

export default function PaymentForm({ bookingId }: { bookingId: string }) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
          Payment Details
        </h2>

        <form method="POST" action={`/api/booking/complete-payment?booking_id=${bookingId}`}>
          {/* CSRF Token - include only if using a real backend that requires it */}
          <input type="hidden" name="booking_id" value={bookingId} />

          {/* Card Number */}
          <div className="mb-4">
            <label htmlFor="card_number" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Card Number
            </label>
            <input
              type="text"
              name="card_number"
              id="card_number"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Expiration + CVV */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="expiration_date" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Expiration Date
              </label>
              <input
                type="text"
                name="expiration_date"
                id="expiration_date"
                placeholder="MM/YYYY"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                id="cvv"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
          </div>

          {/* Billing Address */}
          <div className="mb-4">
            <label htmlFor="billing_address" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Billing Address
            </label>
            <input
              type="text"
              name="billing_address"
              id="billing_address"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition"
            >
              Complete Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
