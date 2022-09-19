import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import classes from "./Login.module.css";

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
    <div className={classes["login-background"]}>
      <div className={classes["login-background-blur"]}>
        <div className={classes.login}></div>
        <div className={classes["login-card"]}>
          <h1>Login</h1>
          <div className={classes["login-card-body"]}>
            <form
              className={classes["login-form"]}
              onSubmit={formik.handleSubmit}
            >
              <div className={classes["login-form-control"]}>
                <input
                  type="text"
                  id="email"
                  placeholder="E-Mail"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className={classes.error}>{formik.errors.email}</div>
                ) : null}
              </div>
              <div className={classes["login-form-control"]}>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className={classes.error}>{formik.errors.password}</div>
                ) : null}
              </div>
              <button type="submit">Login</button>
            </form>
            <p className={classes["not-registered"]}>
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
