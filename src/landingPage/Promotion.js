import React from 'react';
// import promotion from '../images/promotion.png';

const Promotion = () => {
  return (
    <div className="my-32 md:flex">
      <div className="my-10 left md:w-1/2">
        <h1 className="my-5 text-5xl font-bold leading-tight md:mt-10 md:leading-snug">
          Let's start searching in a few easy steps.
        </h1>
        <span className="w-1/3 text-gray-400 ">
          The github stats can be useful to people using the github excessively.
          Helps navigate a person's profile with more clarity.
        </span>
        <br />
        <a
          href="#search-input"
          onClick={() => {
            document.querySelector('#search-input').classList.toggle('active');
            setTimeout(() => {
              //make it async
              document.querySelector('#search-input input').focus();
            }, 500);
          }}
        >
          <button className="px-5 py-3 my-10 text-black rounded-lg bg-gradient-to-t from-green-500 to-green-100">
            Get Started
          </button>
        </a>
      </div>
      <div className="w-11/12 md:w-2/5">
        {/* <img src={promotion} alt="" /> */}
      </div>
    </div>
  );
};

export default Promotion;
