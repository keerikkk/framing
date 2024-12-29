'use client';

import { motion } from 'framer-motion';

interface HeaderTextProps {
  text?: string;
}

const HeaderText = ({ text }: HeaderTextProps) => {
  return (
    <motion.p
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.5, once: true }}
      transition={{ duration: 1 }}
      className='text-paragraph-dark dark:text-gray-400'
    >
      {text}
    </motion.p>
  );
};

export default HeaderText;
