'use client';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

interface HeaderProps {
  title: string;
  className?: string;
}

const Header = ({ title, className }: HeaderProps) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 'all', once: true }}
      className={cn(
        'relative z-10 text-left font-cormorant text-4xl text-blue-dark dark:text-white sm:text-5xl lg:text-6xl',
        className,
      )}
    >
      {title}
    </motion.h1>
  );
};

export default Header;
