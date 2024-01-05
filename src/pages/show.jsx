import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SmallCard = () => {
  const adminUser = "admin@gmail.com";
  const adminPass = "admin123";
  const adminRole = "admin";

  const employeeUser = "employee1@gmail.com";
  const employeePass = "employee123";
  const employeeRole = "employee";
  return (
    <div className="position-absolute top-0 start-0 p-3">
      <div className="card" style={{ width: "200px" }}>
        <div className="card-body">
          <h5 className="card-title">User Information</h5>

          {/* Admin Information */}
          <div>
            <p className="card-text">
              <strong>Email:</strong> {adminUser}
              <br />
              <strong>Password:</strong> {adminPass}
              <br />
              <strong>Role:</strong> {adminRole}
            </p>
          </div>
          <br />
          {/* Employee Information */}
          <div>
            <p className="card-text">
              <strong>Email:</strong> {employeeUser}
              <br />
              <strong>Password:</strong> {employeePass}
              <br />
              <strong>Role:</strong> {employeeRole}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
