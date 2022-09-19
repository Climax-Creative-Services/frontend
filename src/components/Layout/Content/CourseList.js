import React from "react";
import CourseCard from "./CourseCard";

import classes from "./CourseList.module.css";

const CourseList = () => {
  return (
    <div className={classes.courseList}>
      <div className={classes["card-container"]}>
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
