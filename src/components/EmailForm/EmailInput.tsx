'use client';

import { useState } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';

import { Button } from '../UI/button';

export function EmailInput() {
  const [email, setEmail] = useState('');
  const notify = () =>
    toast.error('На жаль, ця функція поки не працює😥', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: Bounce,
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    notify();
    // Reset the input field after submission
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className='mx-auto w-3/4 md:w-2/3'>
      <div className='flex items-center overflow-auto bg-white'>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={data.placeholder}
          required
          className='flex-grow bg-white px-4 py-2 text-gray-700 focus:outline-none'
        />
        <Button
          type='submit'
          className='m-1 bg-cream-light px-6 py-3 font-medium text-blue-dark transition-colors duration-300 hover:bg-cream-bright dark:bg-teal-light dark:text-white dark:hover:bg-teal-bright'
        >
          Надіслати
        </Button>

        <ToastContainer
          position='bottom-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='colored'
          transition={Bounce}
        />
      </div>
    </form>
  );
}

const data = {
  placeholder: 'Введіть вашу електронну адресу',
};
