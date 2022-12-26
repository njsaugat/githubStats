import React from 'react';
import Navbar from '../Components/Navbar';
import Title from './Title';
import Promotion from './Promotion';
import TryService from './TryService';
import Footer from '../Components/Footer';
// import Footer from './Footer';
const Home = () => {
  return (
    <>
      <div className="absolute top-0 z-10">
        <Navbar transparent={true} />
      </div>
      <div className="p-10 pr-0 overflow-hidden text-white bg-black md:pl-20 lg:pl-32">
        <Title />
        <Promotion />
        <TryService />
      </div>
      <Footer />
    </>
  );
};

export default Home;
