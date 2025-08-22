'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateBlogPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // In a real app, this would send data to an API
    setTimeout(() => {
      setLoading(false);
      router.push('/blog');
    }, 1000);
  };

  return (
    <div className="container mx-auto py-8">
      <button 
        className="mb-6 flex items-center text-green-600 hover:text-green-800"
        onClick={() => router.push('/blog')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Blog
      </button>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden max-w-2xl mx-auto">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl font-bold mb-6">Create New Blog Post</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="title" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                placeholder="Enter blog title"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="imageUrl" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Image URL (Optional)
              </label>
              <input
                type="text"
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                placeholder="Enter image URL"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="content" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Content
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={10}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                placeholder="Write your blog content here..."
                required
              />
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded disabled:opacity-50"
              >
                {loading ? 'Creating...' : 'Create Blog Post'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}