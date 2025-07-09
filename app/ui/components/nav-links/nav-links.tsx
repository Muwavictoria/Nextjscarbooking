'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { HomeIcon } from '@heroicons/react/24/outline';
import Logo from '../logo';
const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Cars', href: '/Cars' },
  { name: 'About Us', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function NavLinks() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full  px-0 py-1  dark:bg-gray-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo/>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-800 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Nav Links */}
                    <nav
            className={clsx(
                'w-full items-start gap-4 md:flex md:w-auto md:flex-row md:items-center md:gap-6',
                menuOpen ? 'flex flex-col mt-4' : 'hidden md:flex'
            )}
            >

          {links.map(({ name, href, icon: Icon }) => (
            <Link
              key={name}
              href={href}
              className={clsx(
                'flex items-center gap-2 rounded px-3 py-2 text-sm font-medium transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800',
                pathname === href && 'bg-sky-100 text-blue-600 dark:bg-gray-700'
              )}
            >
              {Icon && <Icon className="h-5 w-5" />}
              <span>{name}</span>
            </Link>
          ))}
          <Link
            href="/login"
            className="rounded bg-green-500 px-4 py-2 font-medium text-white transition hover:bg-green-600 md:ml-4"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
