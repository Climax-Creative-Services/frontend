import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Login.css";

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Password Required"),
});

const Login = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });
  console.log("formik.touched", formik.touched);
  return (
    <div className="login-background">
      <div className="login-background-blur">
        <div className="login"></div>
        <div className="login-card">
          <h1>Login</h1>
          <div className="login-card-body">
            <form className="login-form" onSubmit={formik.handleSubmit}>
              <div className="login-form-control">
                <input
                  type="text"
                  id="email"
                  placeholder="E-Mail"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="login-form-control">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="error">{formik.errors.password}</div>
                ) : null}
              </div>
              <button type="submit">Login</button>
            </form>
            <p>
              Not registered?{" "}
              <Link to={"/join"} style={{ textDecoration: "none" }}>
                <span>Create an account </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
