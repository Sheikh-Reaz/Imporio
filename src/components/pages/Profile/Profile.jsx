import React, { use, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const Profile = () => {
  const { user, setUser, updateUser } = use(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Name cannot be empty!");
      return;
    }

    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("Profile updated successfully!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-6">
      {/* Neumorphic card */}

      <div
        className="flex flex-col items-center gap-4 w-full max-w-lg 
        bg-[#e6e9ef] p-8 rounded-2xl shadow-[8px_8px_16px_#c9ccd3,-8px_-8px_16px_#ffffff]
        transition-all duration-300 hover:shadow-[12px_12px_24px_#c9ccd3,-12px_-12px_24px_#ffffff]"
      >
        <h1 className="text-4xl font-bold ">My Profile</h1>
        {/* Profile image */}
        <img
          src={user?.photoURL || "https://i.ibb.co/2YjKzK9/default-user.png"}
          alt="User"
          className="w-32 h-32 rounded-xl object-cover 
          shadow-[inset_4px_4px_8px_#c9ccd3,inset_-4px_-4px_8px_#ffffff]"
        />

        {/* User */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#333]">
            {user?.displayName || "Unknown User"}
          </h2>
          <p className="text-gray-600 text-sm">
            {user?.email || "No email provided"}
          </p>
        </div>

        <div className="w-3/4 h-px bg-linear-to-r from-transparent via-gray-400/30 to-transparent my-2"></div>

        {/* form */}
        <form
          onSubmit={handleUpdate}
          className="flex flex-col gap-4 w-full text-left mt-2"
        >
          <div>
            <label className="text-gray-700 text-sm ml-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 p-3 rounded-xl bg-[#e6e9ef] text-gray-800 
              shadow-[inset_4px_4px_8px_#c9ccd3,inset_-4px_-4px_8px_#ffffff] 
              focus:outline-none focus:shadow-[inset_2px_2px_4px_#c9ccd3,inset_-2px_-2px_4px_#ffffff]"
            />
          </div>

          <div>
            <label className="text-gray-700 text-sm ml-1">Photo URL</label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="w-full mt-1 p-3 rounded-xl bg-[#e6e9ef] text-gray-800 
              shadow-[inset_4px_4px_8px_#c9ccd3,inset_-4px_-4px_8px_#ffffff] 
              focus:outline-none focus:shadow-[inset_2px_2px_4px_#c9ccd3,inset_-2px_-2px_4px_#ffffff]"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-3 py-3 font-semibold text-gray-700 rounded-xl 
            bg-[#e6e9ef] shadow-[6px_6px_12px_#c9ccd3,-6px_-6px_12px_#ffffff]
            hover:shadow-[inset_4px_4px_8px_#c9ccd3,inset_-4px_-4px_8px_#ffffff]
            active:shadow-[inset_6px_6px_12px_#c9ccd3,inset_-6px_-6px_12px_#ffffff]
            transition-all duration-200"
          >
            Save Changes
          </button>
        </form>
      </div>

      <ToastContainer autoClose={1500} />
    </div>
  );
};

export default Profile;