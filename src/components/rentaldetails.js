import React from "react";

const RentalDetails = () => {
  return (
    <div className="rental-details">
      <h3>Rental Info</h3>
      <input type="text" placeholder="Pick-Up Location" />
      <input type="datetime-local" placeholder="Pick-Up Date & Time" />
      <input type="text" placeholder="Drop-Off Location" />
      <input type="datetime-local" placeholder="Drop-Off Date & Time" />
    </div>
  );
};

export default RentalDetails;
