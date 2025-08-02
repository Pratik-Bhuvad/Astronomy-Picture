import React from 'react';
import { BsCalendar, BsImage, BsPlayCircle } from 'react-icons/bs';

const ApodCard = ({ data }) => {
  const { title, explanation, date, url, media_type, hdurl } = data;

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      weekday: 'long'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const renderMedia = () => {
    if (media_type === 'video') {
      return (
        <div className="relative group">
          <iframe
            src={url}
            className="w-full h-64 md:h-80 lg:h-96 rounded-lg shadow-lg"
            frameBorder="0"
            allowFullScreen
            title={title}
          />
          <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full flex items-center space-x-2">
            <BsPlayCircle className="w-4 h-4" />
            <span className="text-sm">Video</span>
          </div>
        </div>
      );
    }

    return (
      <div className="relative group ">
        <img
          src={url}
          alt={title}
          className="w-fit h-fit md:h-fit lg:h-fit md:w-full object-cover rounded-lg shadow-lg"
          loading="lazy"
        />
        <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full flex items-center space-x-2">
          <BsImage className="w-4 h-4" />
          <span className="text-sm">Image</span>
        </div>
        {hdurl && (
          <a
            href={hdurl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full text-sm transition-colors duration-200"
          >
            HD View
          </a>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 lg:max-w-full">
      {/* Media Section */}
      <div className="p-2 pb-0">
        {renderMedia()}
      </div>

      {/* Content Section */}
      <div className="p-2 space-y-4">
        {/* Date */}
        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
          <BsCalendar className="w-4 h-4" />
          <span className="text-sm font-medium">{formatDate(date)}</span>
        </div>

        {/* Title */}
        <h1 className="!text-lg md:!text-xl font-bold text-gray-800 dark:text-white leading-tight">
          {title}
        </h1>

        {/* Description */}
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg text-justify px-0.5 leading-relaxed">
            {explanation}
          </p>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <span className='max-w-2/4 md:max-w-fit text-justify'>NASA Astronomy Picture of the Day</span>
            <span className="font-medium">{media_type === 'video' ? 'Video' : 'Photography'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApodCard;
