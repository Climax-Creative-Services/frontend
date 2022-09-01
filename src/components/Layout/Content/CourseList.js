import React from "react";
import CourseCard from "./CourseCard";

import "./CourseList.css";

const CourseList = () => {
  return (
    <div className="courseList">
      <div className="card-container">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

export default CourseList;
