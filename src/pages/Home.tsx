import React from 'react';
import Navbar from '../components/Navbar';
import PrimeChecker from '../components/PrimeChecker';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <PrimeChecker />
    </div>
  );
};

export default Home;
