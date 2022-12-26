import React, { useState } from 'react';
import { useEffect } from 'react';
import getUser from './getUser';
//add icons
import {
  faEye,
  faInfo,
  faLink,
  faStar,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Repos from '../Components/Repos';
const eyeIcon = <FontAwesomeIcon icon={faEye} />;
const starIcon = <FontAwesomeIcon icon={faStar} />;
const infoIcon = <FontAwesomeIcon icon={faInfo} />;
const forkIcon = <FontAwesomeIcon icon={faUtensils} />;
const linkIcon = <FontAwesomeIcon icon={faLink} />;

const UserRepos = ({ userLink }) => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    (async () => {
      const usersData = await getUser(`${userLink}/repos`);
      setRepos(usersData);
    })();
  }, [userLink]);

  const renderRepos = repos.map((repo) => {
    return (
      <div
        className="flex flex-col w-11/12 gap-2 p-5 m-5 transition-all rounded-lg shadow-lg bg-slate-700 hover:bg-slate-800 md:m-10 md:w-9/12 shadow-gray-900"
        key={repo.id}
      >
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          <h3 className="tracking-wider">
            {linkIcon} {repo.name}
          </h3>
        </a>
        <section className="leading-6 md:leading-7">{repo.description}</section>
        <div className="flex gap-10">
          <span className="flex items-center px-3 bg-black rounded-lg text-sky-300 bg-opacity-20 ">
            <span className="mr-2">{eyeIcon}</span> {repo.watchers}
          </span>
          <span className="flex items-center px-3 text-green-400 bg-black rounded-lg bg-opacity-20 ">
            <span className="mr-2">{starIcon}</span> {repo.stargazers_count}
          </span>
          <span className="flex items-center px-3 text-pink-300 bg-black rounded-lg bg-opacity-20 ">
            <span className="mr-2">{infoIcon}</span> {repo.open_issues_count}
          </span>
          <span className="flex items-center px-3 text-yellow-300 bg-black rounded-lg bg-opacity-20 ">
            <span className="mr-2">{forkIcon}</span> {repo.forks}
          </span>
        </div>
      </div>
    );
  });
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Repos repos={repos} />
      <h1 className="text-xl font-bold">Latest Repositories</h1>
      {renderRepos}
    </div>
  );
};

export default UserRepos;
