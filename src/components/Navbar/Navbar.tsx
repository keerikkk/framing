'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import Drawer from './Drawer';
import NavbarLinkList from './NavbarLinkList';
import Link from 'next/link';
import ThemeSwitch from '../UI/ThemeSwitch';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className='fixed left-0 right-0 top-0 z-50 bg-[#0F0F0F] bg-opacity-15 px-4 py-3 backdrop-blur-sm'>
        <div className='container mx-auto flex items-center justify-between px-4 py-2 md:px-24 lg:px-32'>
          <Link
            href='/'
            className='text-2xl font-bold tracking-widest text-gray-200'
          >
            {data.title}
          </Link>

          <div className='flex items-center gap-4'>
            <NavbarLinkList
              className='hidden gap-4 md:flex lg:gap-8'
              links={data.links}
            />

            <ThemeSwitch />

            <button
              className='rounded-md border-gray-700 bg-transparent p-2 text-gray-300 hover:bg-gray-800 hover:text-white md:hidden'
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
        </div>
      </header>

      {isMenuOpen && (
        <div
          className='bg-black fixed inset-0 z-40 bg-opacity-50 md:hidden'
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
