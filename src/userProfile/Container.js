import React from 'react';
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import UserHeader from './UserHeader';
import getUser from './getUser';
import { useEffect } from 'react';
import SocialProfile from './SocialProfile';
import UserRepos from './UserRepos';
import Loading from '../Components/Loading';
import Footer from '../Components/Footer';
const USER_URL = 'https://api.github.com/users/';
const ContainerUserProfile = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const usersData = await getUser(USER_URL + username);
      setUser(usersData);
      setLoading(false);
    })();
  }, [username]);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="w-screen min-h-screen p-10 bg-gradient-to-b text-slate-100 from-gray-600 to-slate-700">
        <UserHeader user={user} />
        <SocialProfile user={user} />
        <UserRepos userLink={USER_URL + username} />
      </div>
      <Footer />
    </>
  );
};

export default ContainerUserProfile;
