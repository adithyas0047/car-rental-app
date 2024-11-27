import React from "react";

const UserDetails = () => {
  return (
    <div className="user-details">
      <h3>User Details</h3>
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email Address" />
      <input type="tel" placeholder="Phone Number" />
    </div>
  );
};

export default UserDetails;
