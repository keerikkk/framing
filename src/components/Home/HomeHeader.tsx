'use client';

import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const first = {
  hidden: { opacity: 0, y: -50, scale: 1.25 },
  show: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 2 },
};

const second = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
  transition: { duration: 1 },
};

const HomeHeader = () => {
  return (
    <motion.div
      initial='hidden'
      whileInView='show'
      viewport={{ amount: 0.5, once: true }}
      variants={variants}
      className='home-header'
    >
      <motion.h2 variants={first} className='font-cormorant'>
        {data.first}
      </motion.h2>
      <motion.h2 variants={second} className='absolute left-1/2 font-cormorant'>
        {data.second}
      </motion.h2>
    </motion.div>
  );
};

export default HomeHeader;

const data = {
  first: 'FRAMING',
  second: 'STUDIO',
};
