import React, { useEffect } from "react";
import { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import SmallCard from "./show";

const Login = () => {
  const usersData = {
    users: [
      {
        user: "admin@gmail.com",
        pass: "admin123",
        role: "admin",
      },
      {
        user: "employee1@gmail.com",
        pass: "employee123",
        role: "employee",
      },
    ],
  };

  const { setAuth } = useAuth();
  const [isValid, setValid] = useState(true);

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    document.title = " Login ";
  }, []);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    // Validate email
    const regEx = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
    let emailTrue = regEx.test(formData.email);
    if (!emailTrue || !formData.email) {
      newErrors.email = "Email is required";
      setValid(false);
    }
    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required";

      setValid(false);
    }
    setErrors(newErrors);
    setValid(true);
    return isValid;
  };

  const handleAuth = () => {
    const user = usersData.users.find(
      (userData) =>
        userData.user === formData.email && userData.pass === formData.password
    );

    if (user) {
      // Authentication successful
      setAuth(user.role);
      navigate("/home");
    } else {
      // Authentication failed
      setValid(false);
    }
  };
  // login function
  const handleLogin = (e) => {
    e.preventDefault();

    if (validateForm()) {
      handleAuth();
    }
  };
  return (
    <div className="container">
      <SmallCard />
      <div className="row w-100 d-flex justify-content-center align-items-center main_div ">
        <div className="col-12 col-lg-6 col-md-6 col-xxl-5">
          <div className=" card py-3 px-2 h-4">
            <div className="division">
              <div className="row">
                <div className="col-6 mx-auto mb-4">
                  <span className="main-heading">Login Form</span>
                </div>
              </div>
              <form className="myform" onSubmit={handleLogin} noValidate>
                <div className="mb-3">
                  <div className="mb-3">
                    <input
                      type="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="name@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email ? (
                      <div className="invalid-feedback">Enter valid email</div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="mb-3 position-relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`form-control ${
                        errors.password ? "is-invalid" : ""
                      }`}
                      placeholder="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    <p
                      className="show"
                      onClick={handleTogglePassword}
                      style={{
                        cursor: "pointer",

                        marginLeft: "5px",
                      }}
                    >
                      {showPassword ? "hide" : "show"}
                    </p>
                    {errors.password ? (
                      <div className="invalid-feedback">
                        Enter valid password
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="my-3">
                    <button
                      type="submit"
                      className="btn col-12 btn-primary btn-lg"
                    >
                      Login
                    </button>
                    <p className={`dn ${!isValid ? "invalid-feedback" : ""}`}>
                      Invalid username or password
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
