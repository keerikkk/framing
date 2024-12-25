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
    <form onSubmit={handleSubmit} className='mx-auto w-3/4 md:w-2/3'>
      <div className='flex items-center overflow-auto bg-white'>
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
          className='m-1 bg-teal-light px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-teal-bright'
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
