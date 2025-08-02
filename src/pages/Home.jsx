import React, { useState, useEffect } from 'react';
import { getApodData } from '../services/api';
import ApodCard from '../components/ApodCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const Home = () => {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchApodData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getApodData();
      setApodData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApodData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={fetchApodData} />;
  }

  return (
    <div className="space-y-6">
      {apodData && <ApodCard data={apodData} />}
    </div>
  );
};

export default Home;
