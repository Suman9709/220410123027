import React, { useEffect, useState } from "react";
import { fetchUsers } from "../Api/Api.js";
import User from "./User";

const Topuser = () => {
  const [topUser, setTopUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const data = await fetchUsers();

      if (data.length === 0) {
        setError("No users found or API error.");
      } else {
        setTopUser(data[0]); 
      }
      setLoading(false);
    };

    getUsers();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Top User</h2>

      {loading ? (
        <p>Loading user...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : topUser ? (
        <User name={topUser.name} postCount={topUser.postCount} />
      ) : (
        <p className="text-gray-500">No user found.</p>
      )}
    </div>
  );
};

export default Topuser;
