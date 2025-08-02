import React from 'react';
import { FaRocket, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-full mx-auto px-2 py-2 lg:px-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-500 rounded-lg">
              <FaRocket className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="!text-base font-bold text-gray-800 dark:text-white">
                NASA APOD
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 max-w-32 md:max-w-fit">
                Astronomy Picture of the Day
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              <a
                href="https://apod.nasa.gov/apod/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <span className="text-sm hidden md:inline-block">Visit NASA APOD</span>
                <span className="text-sm flex md:hidden">
                  <FaExternalLinkAlt className="w-4 h-4" />
                </span>
              </a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
