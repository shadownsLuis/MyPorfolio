import React, { useState } from "react";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
import { TfiControlSkipForward, TfiControlSkipBackward } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`h-screen p-5 bg-gray-800 ${isCollapsed ? 'w-16' : 'w-40'} transition-width duration-300`}>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="text-white mb-5 focus:outline-none"
      >
        {isCollapsed ? <TfiControlSkipBackward /> : <TfiControlSkipForward />}
      </button>
      <ul className="text-white">
        <li className="flex items-center gap-4 mb-4">
          <FaHome />
          {!isCollapsed && <Link to="/" className="hover:underline">Home</Link> }
        </li>
        <li className="flex items-center gap-4 mb-4">
          <FaUser />
          {!isCollapsed && <Link to="/profile" className="hover:underline">Profile</Link>}
        </li>
        <li className="flex items-center gap-4 mb-4">
          <FaCog />
          {!isCollapsed && <Link to="/settings" className="hover:underline">Settings</Link>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
