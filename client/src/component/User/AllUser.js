import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchAllUsers } from "../features/userSlice";
import UserCard from "./UserCard";
import { useNavigate } from "react-router";
import LoadingShimmerUI from "../../pages/LoadingShimmerUI";

const AllUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users, status, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  if (status === "loading") return <LoadingShimmerUI />;
  if (status === "failed")
    return <div className="text-center text-red-400">Error: {error}</div>;

  const handleEdit = (userId) => {
    navigate(`/edit/${userId}`);
  };

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-900 h-[90%] overflow-y-auto text-white">
      <h1 className="text-3xl font-semibold mb-6">User Records</h1>
      <div className="space-y-4">
        {users.length === 0 ? (
          <div className="text-center text-gray-400">No users found</div>
        ) : (
          users.map((user) => (
            <UserCard
              key={user._id}
              user={user}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AllUser;
