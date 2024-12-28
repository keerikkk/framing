'use client';

import CountUp from 'react-countup';
import { motion } from 'framer-motion';

export interface ExperienceProps {
  title: {
    value: number;
    text: string;
  };
  text: string;
}

const variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const Experience = ({ title, text }: ExperienceProps) => {
  return (
    <motion.article
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.5 }}
      variants={variants}
      className='flex flex-col gap-2 border-r border-blue-dark py-2 pe-3 text-right text-blue-dark dark:border-white dark:text-white md:gap-5 md:py-4 md:pe-8'
    >
      <h3 className='font-cormorant text-3xl md:text-5xl'>
        <CountUp end={title.value} enableScrollSpy scrollSpyOnce />
        {title.text}
      </h3>
      <p className='text-sm md:text-xl'>{text}</p>
    </motion.article>
  );
};

export default Experience;
