import React from 'react';

interface ProgressCircleProps {
  progress: number;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ progress }) => {
  return (
    <svg
      className='absolute left-0 top-0 h-8 w-8 -rotate-90'
      viewBox='0 0 32 32'
    >
      <circle
        className='text-gray-600'
        strokeWidth='4'
        stroke='currentColor'
        fill='transparent'
        r='14'
        cx='16'
        cy='16'
      />
      <circle
        className='text-white'
        strokeWidth='4'
        strokeDasharray={100}
        strokeDashoffset={100 - progress}
        strokeLinecap='round'
        stroke='currentColor'
        fill='transparent'
        r='14'
        cx='16'
        cy='16'
      />
    </svg>
  );
};

export default ProgressCircle;
