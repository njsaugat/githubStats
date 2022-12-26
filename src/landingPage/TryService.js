import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} beat />;

const TryService = () => {
  return (
    <div className="flex items-center justify-between w-11/12 p-20 my-10 rounded-2xl bg-gradient-to-b from-gray-600 to-black-50">
      <div className="w-3/5 left">
        <h1 className="my-5 text-5xl font-bold leading-tight md:leading-snug">
          Let’s start Githubing now!
        </h1>
        <span className="w-11/12 text-gray-400">
          Everything you need to find the best repo anywhere on the planet.
        </span>
      </div>
      <div className="w-1/4 right">
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
            Start &nbsp; {searchIcon}ing
          </button>
        </a>
      </div>
    </div>
  );
};

export default TryService;
