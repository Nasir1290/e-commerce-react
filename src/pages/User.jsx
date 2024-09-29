import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa"; // For the edit icon

import AOS from "aos";
import "aos/dist/aos.css";
import useAuth from "../hooks/useAuth";
import Loading from "../components/shared/Loading";

const User = () => {
  const { user, loading } = useAuth();
  const firstLetter = user?.displayName.charAt(0);
  console.log(user);

  const [activeSection, setActiveSection] = useState("orderHistory");
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Render Edit Profile Form
  const renderEditProfile = () => (
    <div className="mt-4" >
      <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Username</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            defaultValue={user?.displayName}
          />
        </div>
        <div>
          <label className="block mb-1">Contact No.</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            defaultValue={user?.contact}
          />
        </div>
        <div>
          <label className="block mb-1">Address</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            defaultValue={user?.address}
          />
        </div>
        <button className="bg-blue-500 text-white p-2 rounded mt-2">
          Save Changes
        </button>
      </form>
    </div>
  );

  // Render Change Password Form
  const renderChangePassword = () => (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-4">Change Password</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Old Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">New Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Confirm Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <button className="bg-blue-500 text-white p-2 rounded mt-2">
          Update Password
        </button>
      </form>
    </div>
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* User Info Section */}
      <div className="flex flex-col items-center justify-center gap-4">
        {/* User Image with Edit Icon */}
        <div className="relative" >
          {user?.photoURL ? (
            <img
              className="h-32 w-32 md:h-52 md:w-52 rounded-full border-3 object-cover overflow-hidden"
              src={user?.photoURL}
              alt={user?.displayName}
            />
          ) : (
            <div className="flex items-center justify-center bg-gray-400 h-32 w-32 md:h-48 md:w-48 rounded-full text-white text-4xl font-semibold uppercase">
              {firstLetter}
            </div>
          )}

          <button className="absolute bottom-2 right-2 bg-gray-800 text-white p-2 rounded-full">
            <FaEdit />
          </button>
        </div>
        {/* User Name and Email */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold">{user?.displayName}</h1>
          <p className="text-gray-600">{user?.email}</p>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={() => setActiveSection("editProfile")}
          className={`${
            activeSection === "editProfile"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } p-2 rounded`}
        >
          Edit Profile
        </button>

        {/* <button
          onClick={() => setActiveSection("orderHistory")}
          className={`${
            activeSection === "orderHistory"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } p-2 rounded`}
        >
          Order History
        </button> */}

        <button
          onClick={() => setActiveSection("changePassword")}
          className={`${
            activeSection === "changePassword"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } p-2 rounded`}
        >
          Change Password
        </button>
      </div>

      {/* Conditional Rendering of Forms or Table */}
      <div>
        {activeSection === "editProfile" && renderEditProfile()}
        {/* {activeSection === "orderHistory" && renderOrderHistory()} */}
        {activeSection === "changePassword" && renderChangePassword()}
      </div>
    </div>
  );
};

export default User;
