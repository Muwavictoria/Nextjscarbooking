'use client';

import { Input } from "./input";
import { Button } from "./Button";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-4 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Logo + Contact Info */}
        <div>
          <h1 className="text-2xl font-bold mb-3">
            car <span className="text-green-500">Booking</span>.com
          </h1>
          <p className="text-sm mb-4 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit tempora ut, maxime distinctio ipsam.
          </p>
          <p className="flex items-center gap-2 text-sm mb-1 text-gray-300">
            <i className="bx bx-phone text-green-500"></i> +256759474617
          </p>
          <p className="flex items-center gap-2 text-sm mb-1 text-gray-300">
            <i className="bx bx-location-plus text-green-500"></i> P.O Box 245, Obote Road, Lira City
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-300">
            <i className="bx bx-envelope text-green-500"></i> carbooking@gmail.com
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-xl font-semibold mb-3">Quick Links</h5>
          <ul className="space-y-2 text-sm text-gray-300">
            {['About Us', 'Products', 'Blog', 'Contact Us'].map((link, i) => (
              <li key={i} className="flex items-center gap-2 hover:text-white cursor-pointer">
                <i className="bx bx-chevron-right text-green-500"></i>{link}
              </li>
            ))}
          </ul>
        </div>

        {/* Support Center */}
        <div>
          <h5 className="text-xl font-semibold mb-3">Support Center</h5>
          <ul className="space-y-2 text-sm text-gray-300">
            {['Auto spares', 'Booking Tips', 'Affiliates', 'FAQs'].map((item, i) => (
              <li key={i} className="flex items-center gap-2 hover:text-white cursor-pointer">
                <i className="bx bx-chevron-right text-green-500"></i>{item}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h5 className="text-xl font-semibold mb-3">Newsletter</h5>
          <p className="text-sm text-gray-400 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, numquam optio!
          </p>
          <Input
            type="text"
            placeholder="Your Email"
            className="mb-3 bg-gray-800 text-white border border-gray-700 focus:ring-green-500"
          />
          <Button className="w-full bg-green-500 hover:bg-green-600">
            Subscribe Now <i className="bx bxl-telegram ml-2 text-lg" />
          </Button>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} <span className="text-green-500">carBooking.com</span> All Rights Reserved</p>
        <div className="flex space-x-4 mt-4 md:mt-0 text-xl">
          <i className="bx bxl-facebook hover:text-white cursor-pointer"></i>
          <i className="bx bxl-twitter hover:text-white cursor-pointer"></i>
          <i className="bx bxl-linkedin hover:text-white cursor-pointer"></i>
          <i className="bx bxl-youtube hover:text-white cursor-pointer"></i>
        </div>
      </div>
    </footer>
  );
}
