import { FormControl, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Customer } from "../Models/Customer";
import { CustomerSchema } from "../Schemas/CustomerSchema";
import { useDispatch, useSelector } from "react-redux";
import { clearCustomer } from "../Reducers/CustomerReducer";
import { CustomerActions } from "../Actions/CustomerActions";
import { toast } from "react-toastify";

const AddEditCustomer = () => {
   const navigate = useNavigate();

   const navigateToBackPage = () => {
      dispatch(clearCustomer());
      navigate("/", { replace: true });
   };

   const customer: Customer = useSelector(
      (state) => state?.customerReducer.customer
   );

   const customerActions: CustomerActions = new CustomerActions();

   const customerList: Array<Customer> = useSelector(
      (state) => state?.customerReducer.customerList
   );

   const {
      values,
      touched,
      errors,
      handleBlur,
      handleChange,
      handleSubmit,
      handleReset,
   } = useFormik({
      initialValues: customer,
      validationSchema: CustomerSchema,
      onReset: () => {
         handleSubmit();
      },
      onSubmit: async (values) => {
         if (customerList.filter((x) => x.id === values.id).length === 0) {
            const response = await customerActions.createCustomer(values);
         } else {
            const response = await customerActions.updateCustomer(
               values.id,
               values
            );
         }
         toast.success("Data is saved successfully.");
      },
   });

   const dispatch = useDispatch();

   return (
      <>
         <div className="row">
            <div className="col-md-12">
               <div className="card mt-20">
                  <div className="card-header">
                     <h3>Add/Edit Customer</h3>
                  </div>
                  <div className="card-body">
                     <div className="row">
                        <div className="col-md-3 mb-10">
                           <FormControl fullWidth>
                              <TextField
                                 label="Customer Id"
                                 required
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.id}
                                 name="id"
                                 error={touched.id && errors.id ? true : false}
                              />
                           </FormControl>
                        </div>
                        <div className="col-md-3 mb-10">
                           <FormControl fullWidth>
                              <TextField
                                 label="First Name"
                                 required
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.firstname}
                                 name="firstname"
                                 error={
                                    touched.firstname && errors.firstname
                                       ? true
                                       : false
                                 }
                              />
                           </FormControl>
                        </div>
                        <div className="col-md-3 mb-10">
                           <FormControl fullWidth>
                              <TextField
                                 label="Last Name"
                                 required
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.lastname}
                                 name="lastname"
                                 error={
                                    touched.lastname && errors.lastname
                                       ? true
                                       : false
                                 }
                              />
                           </FormControl>
                        </div>
                        <div className="col-md-3 mb-10">
                           <FormControl fullWidth>
                              <TextField
                                 label="Email"
                                 required
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.email}
                                 name="email"
                                 error={
                                    touched.email && errors.email ? true : false
                                 }
                              />
                           </FormControl>
                        </div>
                        <div className="col-md-3 mb-10">
                           <FormControl fullWidth>
                              <TextField
                                 label="Phone"
                                 required
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.phone_Number}
                                 name="phone_Number"
                                 error={
                                    touched.phone_Number && errors.phone_Number
                                       ? true
                                       : false
                                 }
                              />
                           </FormControl>
                        </div>
                        <div className="col-md-3 mb-10">
                           <FormControl fullWidth>
                              <TextField
                                 label="Country Code"
                                 required
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.country_code}
                                 name="country_code"
                                 error={
                                    touched.country_code && errors.country_code
                                       ? true
                                       : false
                                 }
                              />
                           </FormControl>
                        </div>
                        <div className="col-md-3 mb-10">
                           <FormControl fullWidth>
                              <TextField
                                 label="Gender"
                                 required
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.gender}
                                 name="gender"
                                 error={
                                    touched.gender && errors.gender
                                       ? true
                                       : false
                                 }
                              />
                           </FormControl>
                        </div>
                        <div className="col-md-3 mb-10">
                           <FormControl fullWidth>
                              <TextField
                                 label="Balance"
                                 required
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.balance}
                                 name="balance"
                                 error={
                                    touched.balance && errors.balance
                                       ? true
                                       : false
                                 }
                              />
                           </FormControl>
                        </div>
                     </div>
                  </div>
                  <div className="card-footer">
                     <div className="row">
                        <div className="col-md-6">
                           <button
                              onClick={navigateToBackPage}
                              className="btn btn-primary"
                           >
                              Back
                           </button>
                        </div>
                        <div className="col-md-6 text-right">
                           <button
                              onClick={handleReset}
                              className="btn btn-default"
                           >
                              Reset
                           </button>
                           <button
                              onClick={handleSubmit}
                              className="btn btn-success"
                           >
                              Save
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default AddEditCustomer;
