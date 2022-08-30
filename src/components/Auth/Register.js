import React, { useState } from "react";
import "./Register.css";
const Register = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const handleConfirmPasswordChange = (evnt) => {
    setConfirmPasswordInput(evnt.target.value);
  };
  const togglePassword = (event) => {
    event.preventDefault();
    const toggleMenu = document.querySelector(".hide-show-password-btn");
    toggleMenu.classList.toggle("active");
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const toggleConfirmPassword = (event) => {
    event.preventDefault();
    const toggleMenu = document.querySelector(".hide-show-confirmPassword-btn");
    toggleMenu.classList.toggle("active");
    if (confirmPasswordType === "password") {
      setConfirmPasswordType("text");
      return;
    }
    setConfirmPasswordType("password");
  };
  return (
    <div>
      <div className="register-background">
        <div className="register-background-blur">
          <div className="register"></div>
          <div className="register-card">
            <h1>Register</h1>
            <div className="register-card-body">
              <form className="register-form">
                <div className="register-form-group-fullName ">
                  <div className="register-form-group">
                    <label
                      htmlFor="firstName"
                      className="register-form-label firstName-label"
                    >
                      First Name
                    </label>

                    <input
                      type="text"
                      className="register-form-control-firstName"
                      id="firstName"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="register-form-group">
                    <label
                      htmlFor="lastName"
                      className="register-form-label firstName-label"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="register-form-control-lastName "
                      id="lastName"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="register-form-group-emailAndTel ">
                  <div className="register-form-group">
                    <label
                      htmlFor="email"
                      className="register-form-label email-label"
                    >
                      E-Mail
                    </label>
                    <input
                      type="text"
                      className="register-form-control-email"
                      id="email"
                      placeholder="E-Mail"
                    />
                  </div>
                  <div className="register-form-group">
                    <label
                      htmlFor="telNo"
                      className="register-form-label telNo-label"
                    >
                      Tel Number
                    </label>
                    <input
                      type="text"
                      className="register-form-control-telNo"
                      id="telNo"
                      placeholder="Tel No"
                    />
                  </div>
                </div>
                <div className="register-form-group-password ">
                  <div className="register-form-group">
                    <label
                      htmlFor="password"
                      className="register-form-label password-label"
                    >
                      Password
                    </label>
                    <div id="register-password-input">
                      <input
                        type={passwordType}
                        onChange={handlePasswordChange}
                        value={passwordInput}
                        name="password"
                        className="form-control"
                        placeholder="Password"
                      />

                      <button
                        className="hide-show-password-btn"
                        onClick={togglePassword}
                      ></button>
                    </div>
                  </div>
                  <div className="register-form-group">
                    <label
                      htmlFor="confirm-password"
                      className="register-form-label confirm-password-label"
                    >
                      Confirm Password
                    </label>
                    <div id="register-confirmPassword-input">
                      <input
                        type={confirmPasswordType}
                        onChange={handleConfirmPasswordChange}
                        value={confirmPasswordInput}
                        className="register-form-control-password"
                        id="confirm-password"
                        placeholder="Confirm Password"
                      />
                      <button
                        className="hide-show-confirmPassword-btn"
                        onClick={toggleConfirmPassword}
                      ></button>
                    </div>
                  </div>
                </div>
                <button type="submit" className="register-button">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
