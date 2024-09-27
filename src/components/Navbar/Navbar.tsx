'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import Drawer from './Drawer';
import NavbarLinkList from './NavbarLinkList';
import Link from 'next/link';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className='fixed top-0 left-0 right-0 z-50 px-4 py-3 bg-[#0F0F0F] bg-opacity-15 backdrop-blur-sm'>
        <div className='container mx-auto flex items-center justify-between px-4 md:px-24 lg:px-32 py-2'>
          <Link
            href='/'
            className='font-bold text-2xl text-gray-200 tracking-widest'
          >
            {data.title}
          </Link>

          <NavbarLinkList
            className='hidden md:flex gap-4 lg:gap-8'
            links={data.links}
          />

          <button
            className='md:hidden bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white p-2 rounded-md'
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
            <span className='sr-only'>Toggle menu</span>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden'
          onClick={toggleMenu}
        ></div>
      )}

      <Drawer onClick={toggleMenu} links={data.links} isOpen={isMenuOpen} />
    </>
  );
}

const data = {
  title: 'FRAMING',
  links: [
    { title: 'HOME', to: '#home' },
    { title: 'ABOUT US', to: '#about-us' },
    { title: 'BENEFITS', to: '#benefits' },
    { title: 'PRICE', to: '#pricelist' },
    { title: 'CONTACT', to: '#contact' },
  ],
};
