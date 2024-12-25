'use client';

import { ArrowUpIcon } from 'lucide-react';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import ProgressCircle from './ProgressCircle';

export default function ScrollToTopButton() {
  const { isVisible, progress, scrollToTop } = useScrollToTop();

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-50 rounded-full bg-gray-800 p-3 text-white shadow-lg transition-all duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-10 opacity-0'
      }`}
      aria-label='Scroll to top'
    >
      <div className='relative h-8 w-8'>
        <ArrowUpIcon className='h-8 w-8' />
        <ProgressCircle progress={progress} />
      </div>
    </button>
  );
}
