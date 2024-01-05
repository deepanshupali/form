import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { auth } = useAuth();

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center mt-5">
        <div className="col-12 col-lg-6 col-md-6 col-xxl-5">
          <div className="card p-4">
            <div className="text-center mb-4">
              <h2 className="fw-bold">Welcome to Home</h2>
              <p>{auth ? `You are ${auth}` : ""}</p>
            </div>
            <div className="row mt-2 d-flex flex-column align-items-center">
              <div className="col-8 mb-3">
                <Link to="/form" className="btn btn-primary w-100">
                  Go to Form
                </Link>
                {auth === "admin" && (
                  <div className="text-danger mt-2">
                    Admin can't access form
                  </div>
                )}
              </div>
              <div className="col-8 mb-2">
                <Link to="/admin" className="btn btn-success w-100">
                  Go to Admin
                </Link>
                {auth === "employee" && (
                  <div className="text-danger mt-2">
                    Employee can't access admin
                  </div>
                )}
              </div>
              <div className="col-8 mb-3">
                <Link to="/" className="btn btn-outline-primary w-100">
                  Go to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
