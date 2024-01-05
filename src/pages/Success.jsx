import React, { useEffect } from "react";

const Success = () => {
  useEffect(() => {
    document.title = " Submitted ";
  }, []);
  return (
    <div className="container mt-4">
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">Success!</h4>
        <p>Your reimbursement form has been successfully submitted.</p>
        <hr />
        <p className="mb-0">Thank you for your submission.</p>
      </div>
    </div>
  );
};

export default Success;
