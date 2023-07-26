import React, { useContext } from "react";
import userContext from "../context/userContext";
import { Navigate } from "react-router";

const Profile = () => {
  const context = useContext(userContext);
  const { user, isAuthenticated } = context;
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div className="flex justify-center items-center flex-col text-white bg-gradient-to-b from-violet-500 to-fuchsia-500 px-3 pb-4 pt-1 w-[20rem] rounded-lg ">
      <div className="flex justify-between items-center w-[100%]">
        <h1 className="text-2xl font-semibold ">Profile</h1>
        <span className="text-[12px]">User Id: {user._id}</span>
      </div>
      <div className=" flex justify-center items-center flex-col    px-6 py-8 ">
        <div>
          <i className="material-symbols-outlined text-[100px]">
            account_circle
          </i>
        </div>
        <div className="text-[24px] font-semibold">{user.name}</div>
        <div className="flex items-center">
          <i className="material-symbols-outlined">mail</i>
          <span>: {user.email}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
