import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { basicSchema } from "../schemas";
import { Link, useNavigate } from "react-router-dom";

const RequestForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = " Request Form ";
  }, []);
  const [otherDepartmentText, setOtherDepartmentText] = useState("");
  const [paymentType, setPaymentType] = useState("");

  // formik below
  const onSubmit = () => {
    navigate("/success");
  };
  const {
    values,
    errors,
    touched,

    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      employeeID: "",
      department: "",
      expenseType: "",
      receiptUpload: null,
      expenseDate: "",
      amount: 0,
      expenseDescription: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  const handlePaymentTypeChange = (event) => {
    setPaymentType(event.target.value);
  };

  const handleOtherDepartmentChange = (event) => {
    setOtherDepartmentText(event.target.value);
  };

  return (
    <div className="container">
      <div className="position-relative ">
        <span className="position-absolute top-0 end-0 d-none d-sm-block">
          <Link to="/" className="fs-5  primary ">
            Go to Login
          </Link>
        </span>
      </div>

      <div className="row m-5">
        <h1 className="mb-4">Reimbursement Form</h1>
        <div className="col-12">
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-6 ">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                value={values.firstName}
                onChange={handleChange}
                id="firstName"
                onBlur={handleBlur}
                type="text"
                className={`form-control ${
                  errors.firstName && touched.firstName ? "is-invalid" : ""
                }`}
              />
              {errors.firstName && touched.firstName && (
                <p className="error">{errors.firstName}</p>
              )}
            </div>

            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                className={`form-control ${
                  errors.lastName && touched.lastName ? "is-invalid" : ""
                }`}
                id="lastName"
              />
              {errors.lastName && touched.lastName && (
                <p className="error">{errors.lastName}</p>
              )}
            </div>
            <div className="col-12">
              <label htmlFor="employeeID" className="form-label">
                Employee ID
              </label>
              <input
                value={values.employeeID}
                onChange={handleChange}
                id="employeeID"
                onBlur={handleBlur}
                type="text"
                className={`form-control ${
                  errors.employeeID && touched.employeeID ? "is-invalid" : ""
                }`}
                placeholder=""
              />
              {errors.employeeID && touched.employeeID && (
                <p className="error">{errors.employeeID}</p>
              )}
            </div>

            <div className="col-12">
              <label htmlFor="department" className="form-label">
                Department
              </label>
              <select
                value={values.department}
                onChange={handleChange}
                onBlur={handleBlur}
                id="department"
                className={`form-select ${
                  errors.department && touched.department ? "is-invalid" : ""
                }`}
              >
                <option defaultValue>Choose...</option>
                <option>Supply Chain</option>
                <option>Sales</option>
                <option>Marketing</option>
                <option>Other(Specify)</option>
              </select>
              {errors.department && touched.department && (
                <p className="error">{errors.department}</p>
              )}

              {values.department === "Other(Specify)" && (
                <div className="mt-2">
                  <label htmlFor="otherDepartment" className="form-label">
                    Specify Other Department
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="otherDepartment"
                    value={otherDepartmentText}
                    onChange={handleOtherDepartmentChange}
                  />
                </div>
              )}
            </div>
            <div className="col-12">
              <label htmlFor="expenseType" className="form-label">
                Expense Type
              </label>
              <select
                value={values.expenseType}
                onChange={handleChange}
                onBlur={handleBlur}
                id="expenseType"
                className={`form-select ${
                  errors.expenseType && touched.expenseType ? "is-invalid" : ""
                }`}
              >
                <option defaultValue>Choose...</option>
                <option>Out Of Pocket</option>

                <option>Transportation</option>
                <option>Office Supplies</option>
                <option>Equipment Purchase/Repair</option>
                <option>Miscellaneous</option>
              </select>
              {errors.expenseType && touched.expenseType && (
                <p className="error">{errors.expenseType}</p>
              )}
            </div>

            <div className="col-12">
              <label htmlFor="receiptUpload" className="form-label">
                Upload Receipt
              </label>
              <input
                // value={values.receiptUpload}
                onChange={(event) => {
                  // Assign the selected file directly to the values object
                  values.receiptUpload = event.currentTarget.files[0];
                  handleChange(event);
                }}
                onBlur={handleBlur}
                id="receiptUpload"
                type="file"
                className={`form-control ${
                  errors.receiptUpload && touched.receiptUpload
                    ? "is-invalid"
                    : " "
                }`}
                accept=".pdf, .jpg, .jpeg, .png"
              />
              {errors.receiptUpload && touched.receiptUpload && (
                <p className="error">{errors.receiptUpload}</p>
              )}

              <div className="form-text">
                Upload a PDF, JPG, or PNG file (max size: 5MB).
              </div>
            </div>

            <div className="col-md-6">
              <label htmlFor="expenseDate" className="form-label">
                Expense Date:
              </label>
              <input
                value={values.expenseDate}
                onChange={handleChange}
                onBlur={handleBlur}
                id="expenseDate"
                type="date"
                className={`form-control ${
                  errors.expenseDate && touched.expenseDate ? "is-invalid" : ""
                }`}
              />
              {errors.expenseDate && touched.expenseDate && (
                <p className="error">{errors.expenseDate}</p>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="amount" className="form-label">
                Amount
              </label>
              <input
                value={values.amount}
                onChange={handleChange}
                onBlur={handleBlur}
                id="amount"
                type="number"
                className={`form-control ${
                  errors.amount && touched.amount ? "is-invalid" : ""
                }`}
              />
              {errors.amount && touched.amount && (
                <p className="error">{errors.amount}</p>
              )}
            </div>

            <div className="col-12">
              <label className="form-label col-2">Payment Type</label>

              <div className="form-check form-check-inline ">
                <input
                  type="radio"
                  className="form-check-input "
                  id="paymentCash"
                  name="paymentType"
                  onChange={handlePaymentTypeChange}
                />
                <label className="form-check-label " htmlFor="paymentCash">
                  Cash
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  id="paymentCreditCard"
                  name="paymentType"
                  onChange={handlePaymentTypeChange}
                />
                <label className="form-check-label" htmlFor="paymentCreditCard">
                  Credit Card
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  id="paymentBankTransfer"
                  name="paymentType"
                  checked={paymentType === "BankTransfer"}
                  onChange={handlePaymentTypeChange}
                />
                <label
                  className="form-check-label"
                  htmlFor="paymentBankTransfer"
                >
                  Bank Transfer
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  id="paymentOther"
                  name="paymentType"
                  checked={paymentType === "Other"}
                  onChange={handlePaymentTypeChange}
                />
                <label className="form-check-label" htmlFor="paymentOther">
                  Other
                </label>
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="expenseDescription" className="form-label">
                Expense Description
              </label>
              <textarea
                value={values.expenseDescription}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-control ${
                  errors.expenseDescription && touched.expenseDescription
                    ? "is-invalid"
                    : ""
                }`}
                id="expenseDescription"
                rows="5"
                placeholder="Enter a description of the expense..."
              ></textarea>
              {errors.expenseDescription && touched.expenseDescription && (
                <p className="error">{errors.expenseDescription}</p>
              )}
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
