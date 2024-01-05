import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  useEffect(() => {
    document.title = "Admin";
  }, []);

  const expenseData = [
    { id: 1, name: "John Doe", type: "Travel", amount: 100 },
    { id: 2, name: "Jane Smith", type: "Meal", amount: 50 },
    { id: 3, name: "Bob Johnson", type: "Accommodation", amount: 200 },
  ];

  return (
    <div className="container mt-4">
      <div className="position-relative">
        <span className="position-absolute top-0 end-0 d-none d-sm-block">
          <Link to="/" className="fs-5  primary ">
            Go to Login
          </Link>
        </span>
      </div>
      <div className="row justify-content-md-center">
        <div className="col-md-12 text-center">
          <h2 className="mb-4">Admin Dashboard</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">S.NO</th>
                <th scope="col">Employee Name</th>
                <th scope="col">Expense Type</th>
                <th scope="col">Amount</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenseData.map((expense, index) => (
                <tr key={expense.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{expense.name}</td>
                  <td>{expense.type}</td>
                  <td>${expense.amount}</td>
                  <td className="d-flex justify-content-between">
                    <button className="btn btn-warning">Approved</button>
                    <button className="btn btn-success">Completed</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
