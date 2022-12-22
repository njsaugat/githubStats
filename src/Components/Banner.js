import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const githubIcon = <FontAwesomeIcon icon={faGithub} />;

const Banner = () => {
  return (
    <div>
      <span className="mr-3 text-xl">{githubIcon}</span>
      <span className=""> Github Finder</span>
    </div>
  );
};

export default Banner;
