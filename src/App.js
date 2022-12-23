import { useState } from 'react';
import Container from './searchUsers/Container';
import Navbar from './Components/Navbar';
import './style.css';
import Users from './searchUsers/Users';
import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import ContainerUserProfile from './userProfile/Container';
import About from './About';
import Home from './landingPage/Home';
import Footer from './Components/Footer';
// export const LoggedInContext = createContext();

const GithubSearcher = () => {
  // const [users, setUsers] = useState([]);
  const { searchTerm } = useParams();

  return (
    <div className="w-screen min-h-screen bg-gradient-to-tr from-slate-500 to-slate-600 ">
      <Navbar />
      {/* <Container  /> */}
      {<Users searchTerm={searchTerm} />}
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

function App() {
  // const [searchTerm, setSearchTerm] = useState('');
  //   const [users, setUsers] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');
  // const [loading, setLoading] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/users/:searchterm"
          element={
            <GithubSearcher
            // loading={loading}
            // setLoading={setLoading}
            // searchTerm={searchTerm}
            // setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route path="/user/:username" element={<ContainerUserProfile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
