import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Register.css";

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
      <div className="register-background">
        <div className="register-background-blur">
          <div className="register"></div>
          <div className="register-card">
            <h1>Register</h1>
            <div className="register-card-body">
              <form className="register-form" onSubmit={formik.handleSubmit}>
                <div className="register-form-group-fullName ">
                  <div className="register-form-group form-control">
                    <label
                      htmlFor="firstName"
                      className="register-form-label firstName-label"
                    >
                      First Name
                    </label>

                    <input
                      type="text"
                      className="register-form-control-firstName input"
                      id="firstName"
                      placeholder="First Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <div className="error">{formik.errors.firstName}</div>
                    ) : null}
                  </div>
                  <div className="register-form-group form-control">
                    <label
                      htmlFor="lastName"
                      className="register-form-label lastName-label"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="register-form-control-lastName input"
                      id="lastName"
                      placeholder="Last Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <div className="error">{formik.errors.lastName}</div>
                    ) : null}
                  </div>
                </div>
                <div className="register-form-group-emailAndTel ">
                  <div className="register-form-group form-control">
                    <label
                      htmlFor="email"
                      className="register-form-label email-label"
                    >
                      E-Mail
                    </label>
                    <input
                      type="text"
                      className="register-form-control-email input"
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
                  <div className="register-form-group  form-control">
                    <label
                      htmlFor="telNo"
                      className="register-form-label telNo-label"
                    >
                      Tel Number
                    </label>
                    <input
                      type="text"
                      className="register-form-control-telNo input"
                      id="telNo"
                      placeholder="Tel No"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.telNo}
                    />
                    {formik.touched.telNo && formik.errors.telNo ? (
                      <div className="error">{formik.errors.telNo}</div>
                    ) : null}
                  </div>
                </div>
                <div className="register-form-group-password ">
                  <div className="register-form-group form-control">
                    <label
                      htmlFor="password"
                      className="register-form-label password-label"
                    >
                      Password
                    </label>
                    <div id="register-password-input">
                      <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        name="password"
                        className="register-form-control-password input"
                        placeholder="Password"
                      />
                    </div>
                    {formik.touched.password && formik.errors.password ? (
                      <div className="error">{formik.errors.password}</div>
                    ) : null}
                  </div>
                  <div className="register-form-group  form-control">
                    <label
                      htmlFor="confirm-password"
                      className="register-form-label confirm-password-label"
                    >
                      Confirm Password
                    </label>

                    <div id="register-confirmPassword-input">
                      <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                        className="register-form-control-confrimPassword input"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                      />
                    </div>
                    {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword ? (
                      <div className="error">
                        {formik.errors.confirmPassword}
                      </div>
                    ) : null}
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
