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

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  // In a real app, this would come from an API
  useEffect(() => {
    // Mock blog data
    const mockBlogs: Blog[] = [
      {
        id: 1,
        title: 'Top 10 Cars for Summer Road Trips',
        content: 'Discover the best cars for your summer adventures. When planning a road trip, choosing the right vehicle is crucial for comfort and enjoyment. Here are our top picks for the perfect summer road trip car:\n\n1. Toyota Camry - Reliable and fuel-efficient\n2. Honda CR-V - Spacious and comfortable\n3. Subaru Outback - Great for off-road adventures\n4. Mazda CX-5 - Stylish and fun to drive\n5. Hyundai Tucson - Affordable with great features\n\nEach of these vehicles offers something unique for your summer travels. Consider your destination, the number of travelers, and your budget when making your choice.',
        imageUrl: '/img/car1.png',
        author: { name: 'John Doe' },
        createdAt: '2023-06-15',
      },
      {
        id: 2,
        title: 'How to Maintain Your Car in Hot Weather',
        content: 'Tips to keep your car running smoothly during summer months. Hot weather can be tough on your vehicle. Here are essential maintenance tips:\n\n1. Check coolant levels regularly\n2. Inspect the air conditioning system\n3. Monitor tire pressure as it increases with heat\n4. Park in shaded areas when possible\n5. Check battery and electrical connections\n6. Replace worn wiper blades\n7. Use a sunshade to protect the interior\n\nFollowing these tips will help ensure your car performs well throughout the summer heat.',
        imageUrl: '/img/car2.png',
        author: { name: 'Jane Smith' },
        createdAt: '2023-06-10',
      },
      {
        id: 3,
        title: 'Electric vs Hybrid: Which is Right for You?',
        content: 'Comparing the benefits of electric and hybrid vehicles. Both electric and hybrid vehicles offer environmental and economic benefits, but they differ in key ways:\n\nElectric Vehicles (EVs):\n- Zero emissions\n- Lower operating costs\n- Quieter operation\n- Requires charging infrastructure\n\nHybrid Vehicles:\n- Combines gas engine with electric motor\n- Better for long trips\n- No range anxiety\n- Gradual transition to electric\n\nConsider your driving habits, charging availability, and budget when choosing between these options.',
        imageUrl: '/img/car3.png',
        author: { name: 'Mike Johnson' },
        createdAt: '2023-06-05',
      },
    ];
    
    // Convert params.id to number for comparison
    const blogId = parseInt(params.id, 10);
    const foundBlog = mockBlogs.find(b => b.id === blogId);
    setBlog(foundBlog || null);
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex justify-center items-center h-48">
          <p className="text-xl">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex justify-center items-center h-48">
          <p className="text-xl text-red-600">Blog post not found</p>
        </div>
      </div>
    );
  }

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
      
      <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        {blog.imageUrl && (
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-64 object-cover"
          />
        )}
        
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>
          
          <div className="flex items-center mb-6 text-gray-600 dark:text-gray-400">
            <span>By {blog.author.name}</span>
            <span className="mx-2">•</span>
            <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {blog.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}