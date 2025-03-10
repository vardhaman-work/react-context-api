import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user?.username) return <h3 className="mt-4">Login Required</h3>;

  return <h3 className="mt-4">Profile: {user.username} - {user.password}</h3>;
};

export default Profile;
