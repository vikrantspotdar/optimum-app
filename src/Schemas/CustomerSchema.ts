import * as Yup from "yup";

export const CustomerSchema = Yup.object({
   id: Yup.string().required("Customer Id is required field."),
   firstname: Yup.string().required("First Name is required field."),
   lastname: Yup.string().required("Last Name is required field."),
   email: Yup.string().required("Email Id is required field."),
   phone_Number: Yup.string().required("Phone No. is required field."),
   country_code: Yup.string().required("Country Code is required field."),
   gender: Yup.string().required("Gender is required field."),
   balance: Yup.string().required("Balance is required field."),
});
