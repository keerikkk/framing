'use client';

import { useState, useEffect, useCallback } from 'react';
import { ArrowUpIcon } from 'lucide-react';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import ProgressCircle from './ProgressCircle';

export default function ScrollToTopButton() {
  const { isVisible, progress, scrollToTop } = useScrollToTop();

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 p-3 bg-gray-800 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 z-50 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label='Scroll to top'
    >
      <div className='relative w-8 h-8'>
        <ArrowUpIcon className='w-8 h-8' />
        <ProgressCircle progress={progress} />
      </div>
    </button>
  );
}
