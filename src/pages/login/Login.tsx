import React, { useState } from "react";
import { logo, loginImage } from "../../assets";
import "./login.scss";
import TextField from "../../components/inputField/TextField";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const history = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("invalid email").required(" email required"),
      password: Yup.string()
        .min(6, "must be 6 characters or more")
        .required("Please Enter your password"),
    }),

    onSubmit: (values: any) => {
      console.log(values);
      if (values) {
        history("/dashboard/user");
      }
    },
  });
  return (
    <div className="login">
      <div className="login__imgContainer">
        <div className="login__imgLogo">
          <img src={logo} alt="img" />
        </div>
        <div className="login__imgLoginbg">
          <img src={loginImage} alt="img" />
        </div>
      </div>
      <div className="login__loginContainer">
        <form onSubmit={formik.handleSubmit}>
          <h1>Welcome!</h1>
          <p>Enter details to login</p>
          <div>
            <TextField
              placeholder="Email"
              type="email"
              value={formik.values.email}
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <p
                style={{
                  color: "red",
                  marginBottom: "10px",
                  marginTop: "10px",
                  fontSize: "15px",
                }}
              >
                {formik.errors.email}
              </p>
            ) : null}
          </div>
          <div className="login__divInput">
            <TextField
              placeholder="Password"
              className="inputmg"
              value={formik.values.password}
              type={!toggle ? "password" : "text"}
              onChange={formik.handleChange}
              name="password"
              onBlur={formik.handleBlur}
            />
            <p onClick={handleToggle}>Show</p>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <p style={{ color: "red", marginTop: "10px", fontSize: "15px" }}>
              {formik.errors.password}
            </p>
          ) : null}
          <p className="login__para">Forgot PASSWORD?</p>
          <div className="login__btn">
            <button data-testid="submit" type="submit">
              LOG IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
