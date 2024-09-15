'use client';

import { useState } from 'react';
import { Button } from '../UI/button';

export function EmailInput() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Submitted email:', email);
    // Reset the input field after submission
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className='w-3/4 md:w-2/3 mx-auto'>
      <div className='flex items-center  overflow-auto bg-white'>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={data.placeholder}
          required
          className='flex-grow px-4 py-2 text-gray-700 focus:outline-none'
        />
        <Button
          type='submit'
          className='bg-teal-light text-white px-6 py-3 m-1 font-medium hover:bg-teal-bright transition-colors duration-300'
        >
          Submit
        </Button>
      </div>
    </form>
  );
}

const data = {
  placeholder: 'Enter Your Email Adress',
};
