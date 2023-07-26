import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../context/userContext";

const Navbar = () => {
  const context = useContext(userContext);
  const { isAuthenticated, Logout } = context;
  const ClickHandler = () => {
    Logout();
  };

  return (
    <div className="flex justify-between items-center px-8 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white h-16">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold ">TODO App</h1>
        <div className="flex justify-between items-center ml-4">
          <Link to="/">
            <span className="text-[16px] font-semibold ml-4">Home</span>
          </Link>
          <Link to="/profile">
            <span className="text-[16px] font-semibold ml-4">Profile</span>
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center">
        {isAuthenticated ? (
          <button
            onClick={ClickHandler}
            type="button"
            className=" text-center font-semibold bg-white rounded-full text-violet-500 px-4 py-1 mr-4 text-[16px] hover:shadow-lg"
          >
            Log out
          </button>
        ) : (
          <Link to="/login">
            <button
              type="button"
              className=" text-center font-semibold bg-white rounded-full text-violet-500 px-4 py-1 mr-4 text-[16px] hover:shadow-lg"
            >
              Log in
            </button>
          </Link>
        )}
        <div>
          <i className="material-symbols-outlined">dark_mode</i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
