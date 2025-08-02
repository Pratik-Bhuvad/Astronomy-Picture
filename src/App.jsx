import React from 'react';
import ThemeProvider from './context/ThemeContext';
import Header from './components/Header';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen min-w-screen box-border bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Header />
        
        <main className="max-w-6xl mx-auto px-4 py-8">
          <Home />
        </main>
        
        <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 mt-12">
          <div className="max-w-6xl mx-auto px-4 py-6 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Powered by NASA's Open Data Portal <span className='hidden md:inline-block'> | </span> <br className='block md:hidden' /> Built with React & Vite
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
