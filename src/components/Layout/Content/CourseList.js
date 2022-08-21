import React from "react";
import "./CourseList.css";

const CourseList = () => {
  return (
    <div>
      <div className="card-container">
        <div className="card-image">
          <div className="card-glass"></div>
        </div>
        <div className="button-container">
          <div className="enroll-now">
            <a className="enroll-button">Enroll Now</a>
          </div>
          <div className="buy-for">
            <a className="buy-button">Buy for $9.99</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
