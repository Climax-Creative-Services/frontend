import React from "react";
import "./Content.css";

const Content = () => {
  const contentToggle = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    const toggleMenu = document.querySelector(".second-container");
    toggleMenu.classList.toggle("active");
    const body = document.querySelector("body");
    body.classList.toggle("active");
  };
  return (
    <div className="second-container">
      <div className="content-container">
        <div className="text-container">
          <button className="backButton" onClick={contentToggle}>
            Back
          </button>
          <h1>LOREM IPSUM</h1>
          <div className="course-detail">
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
          <div className="content-text">
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
          <div className="buttons">
            <button className="enrollButton">Enroll</button>
            <button className="priceButton">640₺</button>
          </div>
        </div>
        <div className="content-button">
          <button onClick={contentToggle}></button>
          <h1>Play Preview</h1>
        </div>
      </div>

      <div className="image-container">
        <div className="glass"></div>
      </div>
    </div>
  );
};

export default Content;
