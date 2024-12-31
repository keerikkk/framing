'use client';

import { motion } from 'framer-motion';

const HomeDescription = () => {
  return (
    <div className='absolute bottom-1/4 right-1/3 max-w-xs translate-x-1/3 translate-y-1/4 md:right-[10%] md:-translate-x-[10%]'>
      <motion.p
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 2 }}
        className='text-center text-lg text-paragraph-dark dark:text-gray-400 md:text-left md:text-xl'
      >
        {data.content}
      </motion.p>
    </div>
  );
};

export default HomeDescription;

const data = {
  content:
    'Елегантність у кожній деталі. Framing Studio - це місце, де мистецтво починається з точності.',
};
