import React from "react";

const Suggestions = () => {
  return (
    <div className="suggestions">
      <h3>Recently Browsed Cars</h3>
      <div className="suggestion-cards">
        <div className="card">
          <img src="/tesla_model_y.jpeg" alt="Tesla Model Y" />
          <p>Tesla Model Y</p>
        </div>
        <div className="card">
          <img src="/mercedes-benz-a-class.jpeg" alt="Mercedes Benz A Class" />
          <p>Mercedes Benz A Class</p>
        </div>
        <div className="card">
          <img src="/mercedes-benz-g-wagon.jpeg" alt="Mercedes benz G Wagon" />
          <p>Mercedes benz G Wagon</p>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
