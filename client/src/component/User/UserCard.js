import React from "react";

const UserCard = ({ user, onEdit, onDelete }) => (
  <div>
    {console.log(user)}
    <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col space-y-4">
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-shrink-0 w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
          <span className="text-2xl font-semibold text-white">
            {user?.email?.charAt(0) || "N/A"}
          </span>
        </div>
        <div className="text-white flex-1">
          <h2 className="text-xl font-bold">Email: {user.email}</h2>
          <h6 className="text-lg ">
            Name:
            {user.firstName != undefined
              ? user.firstName + " " + user.lastName
              : "Edit to update your Record"}
          </h6>
          <p>Contact Number : {user.phoneNumber}</p>
          <p
            className={` ${
              user.isActiveStatus ? "text-green-400" : "text-red-400"
            }`}
          >
            Status: {user.isActiveStatus ? "Active" : "Inactive"}
          </p>
          {user.msg && <p className=" text-gray-300">Message: {user.msg}</p>}
        </div>
      </div>
      <div className="flex justify-between items-center border-t border-gray-600 pt-4">
        <div className="text-gray-500 text-sm">
          <p>Created At: {new Date(user.createdAt).toLocaleDateString()}</p>
          <p>Updated At: {new Date(user.updatedAt).toLocaleDateString()}</p>
        </div>
        <div className="flex-shrink-0 flex space-x-2">
          <button
            onClick={() => onEdit(user._id)}
            className="px-3 py-2 bg-black bg-opacity-40 hover:bg-opacity-90 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(user._id)}
            className="px-3 py-2 border-white bg-black bg-opacity-40 hover:bg-opacity-90 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default UserCard;
