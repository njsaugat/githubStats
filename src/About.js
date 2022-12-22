import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Components/Navbar';

const About = () => {
  return (
    <div className="flex flex-col items-center w-screen min-h-screen bg-gradient-to-b text-slate-100 from-gray-600 to-slate-700 ">
      <Navbar />
      <div className="flex flex-col items-center justify-center w-11/12 py-4 mt-20 transition-all rounded-lg bg-slate-700 hover:bg-slate-800 md:w-1/2 lg:w-2/5">
        <h1 className="m-4 text-2xl font-bold">About This project</h1>
        <section>This is a react app to leave Feedback</section>
        <section>Version 1.0.0</section>
        <Link to="/" className="text-purple-600 underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default About;
