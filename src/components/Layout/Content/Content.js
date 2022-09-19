import React from "react";
import { useState } from "react";
import classes from "./Content.module.css";
import CourseList from "./CourseList";

const Content = () => {
  const [isClicked, setIsClicked] = useState(false);

  const contentToggleHandler = () => {
    setIsClicked(!isClicked);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    const toggleMenu = document.querySelector(".second-container");
    toggleMenu.classList.toggle("active");
    const body = document.querySelector("body");
    body.classList.toggle("active");
  };

  return (
    <div
      className={`${classes["second-container"]} ${
        isClicked && classes.active
      }`}
    >
      <div className={classes["content-container"]}>
        <div className={classes["text-container"]}>
          <button className={classes.backButton} onClick={contentToggleHandler}>
            Back
          </button>
          <h1>LOREM IPSUM</h1>
          <div className={classes["course-detail"]}>
            <p>
              3 <span>Courses</span>
            </p>
            <p>
              30 <span>Lessons</span>
            </p>
            <p>
              <span>Introduced By</span> Stew Wai
            </p>
          </div>
          <div className={classes["content-text"]}>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </div>
          <div className={classes.buttons}>
            <button className={classes.enrollButton}>Enroll</button>
            <button className={classes.priceButton}>640₺</button>
          </div>
        </div>
        <div className={classes["content-button"]}>
          <button onClick={contentToggleHandler}></button>
          <h1>Play Preview</h1>
        </div>
      </div>

      <div className={classes["image-container"]}>
        <div className={classes.glass}></div>
      </div>
      <CourseList />
    </div>
  );
};

export default Content;
