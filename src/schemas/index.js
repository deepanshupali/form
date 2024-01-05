import * as Yup from "yup";

export const basicSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  employeeID: Yup.string()
    .required("Employee ID is required")
    .matches(/^EMP/, 'Employee ID must start with "EMP"'),
  department: Yup.string().required("Department is required"),

  expenseType: Yup.string().required("Expense Type is required"),
  receiptUpload: Yup.mixed().required("Receipt is required"),
  expenseDate: Yup.date()
    .required("Expense Date is required")
    .max(new Date(), "Expense Date cannot be in the future"),
  amount: Yup.number()
    .required("Amount is required")
    .positive("Amount must be positive")
    .max(1000000, "Amount is too high"),
  expenseDescription: Yup.string().required("Expense Description is required"),
});
