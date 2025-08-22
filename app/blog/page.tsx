'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Blog {
  id: number;
  title: string;
  content: string;
  imageUrl?: string;
  author: {
    name: string;
  };
  createdAt: string;
}

export default function BlogPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  // In a real app, this would come from an API
  useEffect(() => {
    // Mock blog data
    const mockBlogs: Blog[] = [
      {
        id: 1,
        title: 'Top 10 Cars for Summer Road Trips',
        content: 'Discover the best cars for your summer adventures...',
        imageUrl: '/img/car1.png',
        author: { name: 'John Doe' },
        createdAt: '2023-06-15',
      },
      {
        id: 2,
        title: 'How to Maintain Your Car in Hot Weather',
        content: 'Tips to keep your car running smoothly during summer months...',
        imageUrl: '/img/car2.png',
        author: { name: 'Jane Smith' },
        createdAt: '2023-06-10',
      },
      {
        id: 3,
        title: 'Electric vs Hybrid: Which is Right for You?',
        content: 'Comparing the benefits of electric and hybrid vehicles...',
        imageUrl: '/img/car3.png',
        author: { name: 'Mike Johnson' },
        createdAt: '2023-06-05',
      },
    ];
    
    setBlogs(mockBlogs);
    setLoading(false);
  }, []);

  const handleViewBlog = (id: number) => {
    router.push(`/blog/${id}`);
  };

  const handleCreateBlog = () => {
    router.push('/blog/create');
  };

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex justify-center items-center h-48">
          <p className="text-xl">Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog</h1>
        <button 
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleCreateBlog}
        >
          Create Blog Post
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div 
            key={blog.id} 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => handleViewBlog(blog.id)}
          >
            {blog.imageUrl && (
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {blog.content.substring(0, 100)}...
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                <span>By {blog.author.name}</span>
                <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}