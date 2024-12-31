'use client';

import { useState } from 'react';
import { Button } from '../UI/button';
import Modal from '../UI/Modal';

const HomeButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} className='home-button'>
        {data.text}
      </Button>
      <Modal isOpen={isModalOpen} onClose={handleModalClose} />
    </>
  );
};

export default HomeButton;

const data = {
  text: 'Забронювати',
};
