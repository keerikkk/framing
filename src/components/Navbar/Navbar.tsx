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
      <header className='fixed left-0 right-0 top-0 z-50 bg-blue-bright bg-opacity-30 px-4 py-3 backdrop-blur-sm dark:bg-black-light dark:bg-opacity-15'>
        <div className='container mx-auto flex items-center justify-between px-4 py-2 md:px-24 lg:px-32'>
          <Link
            href='/'
            className='text-2xl font-bold tracking-widest text-paragraph-light dark:text-gray-200'
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
              className='rounded-md border-gray-700 bg-transparent p-2 text-paragraph-dark hover:bg-blue-bright hover:text-blue-dark dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white md:hidden'
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
    { title: 'ГОЛОВНА', to: '#home' },
    { title: 'ПРО НАС', to: '#about-us' },
    { title: 'ПЕРЕВАГИ', to: '#benefits' },
    { title: 'ЦІНИ', to: '#pricelist' },
    { title: 'КОНТАКТИ', to: '#contact' },
  ],
};
