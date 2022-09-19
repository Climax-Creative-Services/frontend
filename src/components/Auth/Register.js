import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import classes from "./Register.module.css";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  telNo: "",
  password: "",
  confirmPassword: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  telNo: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string().required("Required"),
});
const Register = () => {
  // Formik
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });
  console.log("formik.touched", formik.touched);

  return (
    <div>
      <div className={classes["register-background"]}>
        <div className={classes["register-background-blur"]}>
          <div className={classes.register}></div>
          <div className={classes["register-card"]}>
            <h1>Register</h1>
            <div className={classes["register-card-body"]}>
              <form
                className={classes["register-form"]}
                onSubmit={formik.handleSubmit}
              >
                <div className={classes["register-form-group-fullName"]}>
                  <div
                    className={`${classes["register-form-group"]} ${classes["form-control"]}`}
                  >
                    <label
                      htmlFor="firstName"
                      className={`${classes["register-form-label"]} ${classes["firstName-label"]}`}
                    >
                      First Name
                    </label>

                    <input
                      type="text"
                      className={`${classes["register-form-control-firstName"]} ${classes.input}`}
                      id="firstName"
                      placeholder="First Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <div className={classes.error}>
                        {formik.errors.firstName}
                      </div>
                    ) : null}
                  </div>
                  <div
                    className={`${classes["register-form-group"]} ${classes["form-control"]}`}
                  >
                    <label
                      htmlFor="lastName"
                      className={`${classes["register-form-label"]} ${classes["lastName-label"]}`}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className={`${classes["register-form-control-lastName"]} ${classes.input}`}
                      id="lastName"
                      placeholder="Last Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <div className={classes.error}>
                        {formik.errors.lastName}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className={classes["register-form-group-emailAndTel"]}>
                  <div
                    className={`${classes["register-form-group"]} ${classes["form-control"]}`}
                  >
                    <label
                      htmlFor="email"
                      className={`${classes["register-form-label"]} ${classes["email-label"]}`}
                    >
                      E-Mail
                    </label>
                    <input
                      type="text"
                      className={`${classes["register-form-control-email"]} ${classes.input}`}
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
                  <div
                    className={`${classes["register-form-group"]}  ${classes["form-control"]}`}
                  >
                    <label
                      htmlFor="telNo"
                      className={`${classes["register-form-label"]} ${classes["telNo-label"]}`}
                    >
                      Tel Number
                    </label>
                    <input
                      type="text"
                      className={`${classes["register-form-control-telNo"]} ${classes.input}`}
                      id="telNo"
                      placeholder="Tel No"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.telNo}
                    />
                    {formik.touched.telNo && formik.errors.telNo ? (
                      <div className={classes.error}>{formik.errors.telNo}</div>
                    ) : null}
                  </div>
                </div>
                <div className={classes["register-form-group-password"]}>
                  <div
                    className={`${classes["register-form-group"]} ${classes["form-control"]}`}
                  >
                    <label
                      htmlFor="password"
                      className={`${classes["register-form-label"]} ${classes["password-label"]} `}
                    >
                      Password
                    </label>
                    <div id="register-password-input">
                      <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        name="password"
                        className={`${classes["register-form-control-password"]} ${classes.input}`}
                        placeholder="Password"
                      />
                    </div>
                    {formik.touched.password && formik.errors.password ? (
                      <div className={classes.error}>
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </div>
                  <div
                    className={`${classes["register-form-group"]}  ${classes["form-control"]}`}
                  >
                    <label
                      htmlFor="confirm-password"
                      className={`${classes["register-form-label"]} ${classes["confirm-password-label"]}`}
                    >
                      Confirm Password
                    </label>

                    <div id="register-confirmPassword-input">
                      <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                        className={`${classes["register-form-control-confrimPassword"]} ${classes.input}`}
                        id="confirmPassword"
                        placeholder="Confirm Password"
                      />
                    </div>
                    {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword ? (
                      <div className={classes.error}>
                        {formik.errors.confirmPassword}
                      </div>
                    ) : null}
                  </div>
                </div>
                <button type="submit" className={classes["register-button"]}>
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
