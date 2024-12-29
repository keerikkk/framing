'use client';

import { motion } from 'framer-motion';

import BenefitsPageHeader from './BenefitsHeader/BenefitsPageHeader';
import BenefitList from './BenefitList';

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const BenefitsPage = () => {
  return (
    <section id='#benefits' className='bg-blue-light dark:bg-black-light'>
      <motion.div
        variants={variants}
        initial='hidden'
        whileInView='show'
        viewport={{ amount: 0.5, once: true }}
        className='container mx-auto flex flex-col gap-1 px-2 py-24 sm:grid sm:grid-cols-2 md:grid-cols-3 xl:gap-4'
      >
        <BenefitsPageHeader />
        <BenefitList />
      </motion.div>
    </section>
  );
};

export default BenefitsPage;
