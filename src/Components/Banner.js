import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
const githubIcon = <FontAwesomeIcon icon={faGithub} />;

const Banner = () => {
  return (
    <Link to={'/'}>
      <span className="mr-3 text-xl">{githubIcon}</span>
      <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-100">
        Github Finder
      </span>
    </Link>
  );
};

export default Banner;
