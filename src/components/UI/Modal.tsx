'use client';

import { motion } from 'framer-motion';
import { InstagramIcon, PhoneIcon, MailIcon, X } from 'lucide-react';
import Link from 'next/link';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ModalHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className='mb-8'>
      <h2 className='text-2xl font-bold'>{data.header.title}</h2>
      <p className='text-sm font-light'>{data.header.description}</p>
      <button
        className='absolute right-2 top-2 text-gray-400 hover:text-gray-600 dark:text-white dark:hover:text-gray-300'
        onClick={onClose}
      >
        <X className='h-6 w-6' />
      </button>
    </div>
  );
}

function ContactItem({
  icon: Icon,
  href,
  children,
}: {
  icon: React.ElementType;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <p className='mb-4 flex items-center'>
      <Icon className='mr-2 h-5 w-5' />
      <Link href={href} className='underline'>
        {children}
      </Link>
    </p>
  );
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className='fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black-main bg-opacity-50 backdrop-blur-sm'
      onClick={onClose}
      initial='hidden'
      animate='visible'
      exit='hidden'
      variants={backdropVariants}
    >
      <motion.div
        className='relative mx-auto max-w-7xl rounded-md bg-cream-light p-12 shadow-lg dark:bg-teal-light'
        onClick={(event) => event.stopPropagation()}
        initial='hidden'
        animate='visible'
        exit='hidden'
        variants={modalVariants}
      >
        <ModalHeader onClose={onClose} />

        {data.contacts.map((contact) => (
          <ContactItem
            key={contact.text}
            icon={contact.icon}
            href={contact.href}
          >
            {contact.text}
          </ContactItem>
        ))}
      </motion.div>
    </motion.div>
  );
}

const data = {
  header: {
    title: "Зв'яжіться з нами",
    description:
      "Якщо у вас є якісь запитання або пропозиції, будь ласка, зв'яжіться з нами.",
  },
  contacts: [
    {
      icon: PhoneIcon,
      href: 'tel:+380509958359',
      text: '+38 (050) 995-83-59',
    },
    {
      icon: MailIcon,
      href: 'mailto:framing.studio.uz@gmail.com',
      text: 'framing.studio.uz@gmail.com',
    },
    {
      icon: InstagramIcon,
      href: 'https://www.instagram.com/fraaming',
      text: 'Наш інстаграм',
    },
  ],
};
