import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <AiOutlineLoading3Quarters className="w-12 h-12 text-blue-500 animate-spin" />
      <p className="text-gray-600 dark:text-gray-300 text-lg">
        Loading today's cosmic wonder...
      </p>
    </div>
  );
};

export default LoadingSpinner;
