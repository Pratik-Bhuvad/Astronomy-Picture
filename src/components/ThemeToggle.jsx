import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { BsSun, BsMoon } from 'react-icons/bs';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="z-50 p-3 rounded-full !bg-white dark:!bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <BsSun className="w-5 h-5 text-yellow-500" />
      ) : (
        <BsMoon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  );
};

export default ThemeToggle;
