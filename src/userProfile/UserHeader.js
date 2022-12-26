import React from 'react';

const UserHeader = ({ user }) => {
  const { location, blog, twitter_username } = user;
  const userInfo = [
    {
      title: 'location',
      location: location,
    },
    {
      title: 'website',
      website: blog,
    },
    {
      title: 'twitter',
      twitter: twitter_username,
    },
  ];

  const renderUserInfo = userInfo.map((info, index) => {
    return (
      info[info.title] && (
        <div
          key={index}
          className="flex flex-col items-center w-auto p-3 m-3 text-white rounded-md shadow-lg shadow-gray-900"
        >
          <span className="text-sm text-gray-400 capitalize">{info.title}</span>
          <span className="text-xl font-bold">{info[info.title]}</span>
        </div>
      )
    );
  });
  return (
    <div className="flex flex-col items-center justify-center w-full gap-10 header lg:flex-row ">
      <div className="left ">
        <img
          src={user.avatar_url}
          alt=""
          srcSet=""
          className="rounded-md w-72 h-72"
        />
      </div>
      <div className="right">
        <div className="flex items-center gap-5 my-5 title ">
          <h1 className="text-2xl font-bold ">{user.name}</h1>
          <span className="px-3 text-green-400 bg-black rounded-lg bg-opacity-20">
            {user.type}
          </span>
          {user.hireable && (
            <span className="px-3 bg-black rounded-lg text-sky-300 bg-opacity-20">
              Hireable
            </span>
          )}
        </div>
        <section className="mb-10 leading-6 tracking-wide">{user.bio}</section>
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-2 py-3 tracking-wide uppercase border-2 border-white rounded-md "
        >
          Visit Github Profile
        </a>

        <div className="flex flex-wrap items-center self-center justify-center my-10 userInfo">
          {renderUserInfo}
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
