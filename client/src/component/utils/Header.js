import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-gray-800 shadow-md z-50">
      <h1 className="text-xl font-semibold">User Management</h1>
      <div className="flex items-center space-x-4">
        <Link to="/createuser">
          <button className="bg-black bg-opacity-40 hover:bg-opacity-90  text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Create a User Record
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
