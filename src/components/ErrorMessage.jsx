import React from 'react';
import { BiError } from 'react-icons/bi';
import { MdRefresh } from 'react-icons/md';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4 p-6">
      <BiError className="w-16 h-16 text-red-500" />
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Oops! Something went wrong
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-center max-w-md">
        {message}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
        >
          <MdRefresh className="w-4 h-4" />
          <span>Try Again</span>
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
