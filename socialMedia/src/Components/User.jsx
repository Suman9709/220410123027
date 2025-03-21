import React from "react";

const User = ({ name, postCount }) => {
  return (
    <div className="border p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500">Posts: {postCount}</p>
    </div>
  );
};

export default User;
