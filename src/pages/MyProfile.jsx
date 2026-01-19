// src/pages/MyProfile.jsx
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await updateUserProfile(name, photo);
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-green-800 text-center mb-8">
        My Profile
      </h1>

      <div className="flex flex-col items-center gap-4 mb-6">
        <img
          src={user?.photoURL || "https://i.ibb.co/5Wq6ZkP/user.png"}
          alt="User"
          className="w-24 h-24 rounded-full object-cover border"
        />

        <p className="text-lg font-semibold">{user?.email}</p>
      </div>

      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered w-full"
        />

        <input
          type="text"
          placeholder="Photo URL"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          className="input input-bordered w-full"
        />

        <button className="btn bg-green-700 text-white w-full hover:bg-green-800">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
