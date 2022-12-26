import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Components/Loading';
import getUsers from './getUsers';
// import { useState } from 'react'

const Users = () => {
  const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState([{}]);
  const { searchterm } = useParams();
  console.log(searchterm);
  useEffect(() => {
    (async () => {
      if (searchterm) {
        setUsers([{}]);
        const usersData = await getUsers(searchterm);
        setUsers(usersData);
        setLoading(false);
      }
    })();
    return () => {
      setUsers([{}]);
      setLoading(true);
    };
  }, [searchterm]);
  if (isLoading) {
    return <Loading />;
  }
  console.log(users);
  const renderUsers = users.map((user) => {
    return (
      <div
        className="flex items-center w-3/5 p-3 m-3 text-white rounded-md shadow-lg user shadow-gray-900 md:w-1/4"
        key={user.id}
      >
        <div className="w-10 h-10 m-4 left">
          <img
            src={user.avatar_url}
            alt=""
            srcSet=""
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col right">
          <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-100 to-green-50">
            {user.login}
          </span>
          <Link to={`/user/${user.login}`}>
            <span className="text-sm text-gray-400">Visit Profile</span>
          </Link>
        </div>
      </div>
    );
  });
  return (
    <>
      <h1 className="my-3 text-xl text-center text-white">
        The search results for '<span className="font-bold">{searchterm}</span>'
        are:
      </h1>
      <div className="flex flex-wrap items-center justify-center w-full gap-5 users ">
        {renderUsers}
      </div>
    </>
  );
};

export default Users;
