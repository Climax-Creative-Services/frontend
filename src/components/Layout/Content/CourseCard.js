import React from "react";
import "./CourseCard.css";

const CourseCard = () => {
  const cardHover = (e) => {
    const toggleMenu = document.querySelector(".card");
    toggleMenu.classList.toggle("active");
  };
  return (
    <div>
      <div
        className="card"
        onMouseEnter={cardHover}
        onMouseLeave={cardHover}
        key={1}
      >
        <img
          className="card-image"
          src="https://images.unsplash.com/photo-1614248036189-09375ea8098f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
        <div className="card-text">
          <h3 className="course-teacher-name">Gerçek Dorman</h3>
          <h4 className="course-name">
            MASTER <br /> SYNTHIZER &<br /> SOUND DESIGN
          </h4>
          <p className="course-description">5 Course | 50 lesson</p>
        </div>
        {/* <div className="card-glass">
                  <div className="card-glass-inner">
                    <h3 className="course-teacher-name">Gerçek Dorman</h3>
                    <h4 className="course-name">
                      MASTER <br /> SYNTHIZER &<br /> SOUND DESIGN
                    </h4>
                    <p className="course-description">5 Course | 50 lesson</p>
                  </div>
                </div> */}

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

export default CourseCard;
