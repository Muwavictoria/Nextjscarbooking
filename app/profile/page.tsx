'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  bookingsCount: number;
  paymentsCount: number;
}

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // In a real app, this would come from an API
  useEffect(() => {
    // Mock user data
    const mockUser: User = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'user',
      createdAt: '2023-01-15',
      bookingsCount: 3,
      paymentsCount: 3,
    };
    
    setUser(mockUser);
    setName(mockUser.name);
    setEmail(mockUser.email);
    setLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to an API
    console.log('Updating user:', { name, email });
    setEditing(false);
  };

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex justify-center items-center h-48">
          <p className="text-xl">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex justify-center items-center h-48">
          <p className="text-xl text-red-600">User not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">User Profile</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            {editing ? (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
                
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditing(false)}
                    className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center text-gray-500">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="ml-4">
                      <h2 className="text-2xl font-bold">{user.name}</h2>
                      <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setEditing(true)}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded"
                  >
                    Edit Profile
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Account Information</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Role:</span>
                        <span className="font-medium">{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Member Since:</span>
                        <span>{new Date(user.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Activity Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Total Bookings:</span>
                        <span className="font-medium">{user.bookingsCount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Total Payments:</span>
                        <span className="font-medium">{user.paymentsCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => router.push('/bookings')}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
                  >
                    View My Bookings
                  </button>
                  <button
                    onClick={() => router.push('/payments')}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded"
                  >
                    View My Payments
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}