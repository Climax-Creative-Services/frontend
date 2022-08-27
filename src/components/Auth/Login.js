import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-background">
      <div className="login-background-blur">
        <div className="login"></div>
        <div className="login-card">
          <h1>Login</h1>
          <div className="login-card-body">
            <form className="login-form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>
            </form>
            <p>
              Not registered? <span> Create an account </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
