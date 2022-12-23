import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LoggedInContext } from '../App';
// import ShowPortal from './ShowPortal';

const RenderMenuList = ({ icons }) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="flex flex-col text-xl lg:w-full lg:ml-40 lg:flex-row gap-y-10 lg:gap-y-0 lg:gap-x-10 lg:text-lg">
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/about">
        <span>About</span>
      </Link>
    </div>
  );
};

export default RenderMenuList;
