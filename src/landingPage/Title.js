import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import robotLayers from '../images/robotLayers.png';
// import middleLayerobot from '../images/middleLayerobot.png'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
const githubIcon = <FontAwesomeIcon icon={faGithub} size="2x" />;

const Title = () => {
  return (
    <main className="relative w-full mb-32 overflow-hidden md:flex md:justify-between">
      <div className="my-24 left md:w-3/5">
        <section className="my-10 text-5xl font-bold leading-normal md:text-6xl md:leading-normal ">
          The finest
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-100">
            Github
          </span>
          <br />
          Stats you need. <br />
        </section>
        <section className="text-gray-400 description md:w-3/5">
          Find the github stats of anyone throughout github: see what their
          favorite language, most forked repos, and most starred repos are.
        </section>
      </div>
      {/* <div className="absolute flex-col items-center justify-center hidden translate-x-1/2 translate-y-1/2 border-2 border-green-300 rounded-full md:flex md:top-1/4 left-1/3 top-96 w-28 h-28 ">
        <span>Get </span>
        <span className="rotate-45 ">{arrowUp}</span>
        <div>Started</div>
      </div> */}
      <div className="flex items-center self-center justify-center text-9xl md:w-1/2 animate-pulse ">
        {/* <img className="object-cover " src={robotLayers} alt="" srcSet="" /> */}
        {githubIcon}
      </div>
    </main>
  );
};

export default Title;
