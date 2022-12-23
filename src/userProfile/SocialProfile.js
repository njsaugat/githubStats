import {
  faBoxesPacking,
  faStore,
  faUserGroup,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const followersIcon = <FontAwesomeIcon icon={faUsers} />;
const followingIcon = <FontAwesomeIcon icon={faUserGroup} />;
const reposIcon = <FontAwesomeIcon icon={faBoxesPacking} />;
const storeIcon = <FontAwesomeIcon icon={faStore} />;

const SocialProfile = ({ user }) => {
  const { followers, following, public_repos, public_gists } = user;
  const socialProfile = [
    {
      icon: followersIcon,
      title: 'followers',
      followers,
    },
    {
      icon: followingIcon,
      title: 'following',
      following,
    },
    {
      icon: reposIcon,
      title: 'public_repos',
      public_repos,
    },
    {
      icon: storeIcon,
      title: 'public_gists',
      public_gists,
    },
  ];

  const renderSocialProfile = socialProfile.map((profile, index) => {
    return (
      <div
        className="flex items-center justify-between w-1/3 p-3 rounded-md shadow-lg md:w-1/6 md:px-5 shadow-gray-900"
        key={index}
      >
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 capitalize">
            {profile.title.replaceAll('_', ' ')}
          </span>
          <span className="text-3xl font-bold md:text-4xl">
            {profile[profile.title]}
          </span>
        </div>

        <span className="text-xl text-green-300 md:text-2xl">
          {profile.icon}
        </span>
      </div>
    );
  });
  return (
    <div className="flex flex-wrap items-center justify-center w-full gap-10 my-10">
      {renderSocialProfile}
    </div>
  );
};

export default SocialProfile;
