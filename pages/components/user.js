import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <div>{user.email}</div>
    </div>
  );
};

export default User;
