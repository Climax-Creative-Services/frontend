import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./CourseList.css";

const CourseList = () => {
  const [width, setWidth] = useState(0);
  const careousel = useRef();

  useEffect(() => {
    console.log(careousel.current.scrollWidth, careousel.current.offsetWidth);
    setWidth(careousel.current.scrollWidth - careousel.current.offsetWidth);

    return () => {};
  }, []);

  const cardHover = (e) => {
    const toggleMenu = document.querySelector(".card");
    toggleMenu.classList.toggle("active");
  };
  return (
    <div className="courseList">
      <div className="card-container">
        <motion.div
          ref={careousel}
          className="slider-container"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="inner-slider"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            <div
              key={1}
              className="card"
              onMouseEnter={cardHover}
              onMouseLeave={cardHover}
            >
              <div className="card-image">
                <div className="card-glass">
                  <div className="card-glass-inner">
                    <h3 className="course-teacher-name">Gerçek Dorman</h3>
                    <h4 className="course-name">
                      MASTER <br /> SYNTHIZER &<br /> SOUND DESIGN
                    </h4>
                    <p className="course-description">5 Course | 50 lesson</p>
                  </div>
                </div>
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
            <div
              key={2}
              className="card"
              onMouseEnter={cardHover}
              onMouseLeave={cardHover}
            >
              <div className="card-image">
                <div className="card-glass">
                  <div className="card-glass-inner">
                    <h3 className="course-teacher-name">Gerçek Dorman</h3>
                    <h4 className="course-name">
                      MASTER <br /> SYNTHIZER &<br /> SOUND DESIGN
                    </h4>
                    <p className="course-description">5 Course | 50 lesson</p>
                  </div>
                </div>
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
            <div
              key={3}
              className="card"
              onMouseEnter={cardHover}
              onMouseLeave={cardHover}
            >
              <div className="card-image">
                <div className="card-glass">
                  <div className="card-glass-inner">
                    <h3 className="course-teacher-name">Gerçek Dorman</h3>
                    <h4 className="course-name">
                      MASTER <br /> SYNTHIZER &<br /> SOUND DESIGN
                    </h4>
                    <p className="course-description">5 Course | 50 lesson</p>
                  </div>
                </div>
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
            <div
              key={4}
              className="card"
              onMouseEnter={cardHover}
              onMouseLeave={cardHover}
            >
              <div className="card-image">
                <div className="card-glass">
                  <div className="card-glass-inner">
                    <h3 className="course-teacher-name">Gerçek Dorman</h3>
                    <h4 className="course-name">
                      MASTER <br /> SYNTHIZER &<br /> SOUND DESIGN
                    </h4>
                    <p className="course-description">5 Course | 50 lesson</p>
                  </div>
                </div>
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
            <div
              key={5}
              className="card"
              onMouseEnter={cardHover}
              onMouseLeave={cardHover}
            >
              <div className="card-image">
                <div className="card-glass">
                  <div className="card-glass-inner">
                    <h3 className="course-teacher-name">Gerçek Dorman</h3>
                    <h4 className="course-name">
                      MASTER <br /> SYNTHIZER &<br /> SOUND DESIGN
                    </h4>
                    <p className="course-description">5 Course | 50 lesson</p>
                  </div>
                </div>
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
            <div
              key={6}
              className="card"
              onMouseEnter={cardHover}
              onMouseLeave={cardHover}
            >
              <div className="card-image">
                <div className="card-glass">
                  <div className="card-glass-inner">
                    <h3 className="course-teacher-name">Gerçek Dorman</h3>
                    <h4 className="course-name">
                      MASTER <br /> SYNTHIZER &<br /> SOUND DESIGN
                    </h4>
                    <p className="course-description">5 Course | 50 lesson</p>
                  </div>
                </div>
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseList;
