import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userSlice";
import { validateUserCreatedData } from "../utils/validate";
import { useNavigate } from "react-router";

const UserRecord = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    isActiveStatus: true,
    userMsg: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === "isActiveStatus" ? value === "true" : value;
    setUserData({ ...userData, [name]: newValue });
  };

  const handleRecordSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, userMsg } = userData;

    const message = validateUserCreatedData(
      firstName,
      lastName,
      email,
      phone,
      userMsg
    );
    setErrorMessage(message);
    if (message) return;

    dispatch(createUser(userData));
    navigate("/");
  };

  return (
    <div className="max-w-5xl mx-auto p-6 mt-12 bg-gray-800 h-[90%] overflow-y-auto text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4"> Create User Record</h2>
      <form className="space-y-4" onSubmit={handleRecordSubmit}>
        <div className="sm:grid sm:grid-cols-2 sm:gap-2">
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="First Name"
              value={userData.firstName}
              name="firstName"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Last Name"
              value={userData.lastName}
              name="lastName"
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="firstname.lastname@example.com"
            value={userData.email}
            name="email"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Phone Number</label>
          <input
            type="tel"
            className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="1234567890"
            value={userData.phone}
            name="phone"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Status</label>
          <select
            className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={userData.isActiveStatus}
            name="isActiveStatus"
            onChange={handleChange}
          >
            <option value={true}>Active</option>
            <option value={false}>Inactive</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Your message here"
            value={userData.userMsg}
            name="userMsg"
            onChange={handleChange}
          />
        </div>
        <div>
          {errorMessage && (
            <p className="text-red-500 text-sm  mb-4">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserRecord;
