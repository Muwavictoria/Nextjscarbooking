// app/Cars/layout.tsx
import React from 'react';
import Navbar from '../ui/Navbar/navbar';
import Footer from '../ui/components/footer';
import Sidebar from '../ui/car/SideBar';


export default function CarsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Navbar/>
    
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <Sidebar />
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    </main>
    <Footer/>
    </>
  );
}
