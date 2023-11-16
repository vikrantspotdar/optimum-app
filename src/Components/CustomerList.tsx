import { useEffect, useState } from "react";
import { Customer } from "../Models/Customer";
import { CustomerActions } from "../Actions/CustomerActions";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useDispatch, useSelector } from "react-redux";
import { setCustomer, setCustomerList } from "../Reducers/CustomerReducer";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

function CustomerList() {
   const customerActions: CustomerActions = new CustomerActions();

   const dispatch = useDispatch();

   const customerList: Array<Customer> = useSelector(
      (state) => state?.customerReducer.customerList
   );

   const [listLoading, setListLoading] = useState<boolean>(true);

   const onComponentLoading = () => {
      const getData = async () => {
         const response = await customerActions.getCustomerList();
         dispatch(setCustomerList(response.data));
      };
      if (listLoading) {
         getData();
         setListLoading(false);
      }
   };

   const navigate = useNavigate();

   const navigateToAdd = (customerId: string) => {
      if (customerId !== "0") {
         dispatch(setCustomer(customerId));
      }
      navigate("/add-edit-customer", { replace: true });
   };

   useEffect(onComponentLoading, [listLoading]);

   const deleteCustomerById = async (customerId: string) => {
      const response = await customerActions.deleteCustomerById(customerId);
      setListLoading(true);
   };

   return (
      <>
         <div className="row">
            <div className="col-md-12">
               <table className="table table-bordered table-stripped">
                  <thead>
                     <tr>
                        <th>Sr.No.</th>
                        <th>CustomerId</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Phone_Number</th>
                        <th>Country_code</th>
                        <th>Gender</th>
                        <th>Balance</th>
                        <th>Delete</th>
                        <th>Edit</th>
                     </tr>
                  </thead>
                  <tbody>
                     {customerList.map((x: Customer, index) => (
                        <tr key={x.id}>
                           <td>{index + 1}.</td>
                           <td>{x.id}</td>
                           <td>{x.firstname}</td>
                           <td>{x.lastname}</td>
                           <td>
                              <a href="mailto:{x.email}" target="_blank">
                                 {x.email}
                              </a>
                           </td>
                           <td>{x.phone_Number}</td>
                           <td>{x.country_code}</td>
                           <td>{x.gender}</td>
                           <td>$ {x.balance}</td>
                           <td>
                              <IconButton
                                 aria-label="delete"
                                 onClick={() => deleteCustomerById(x.id)}
                              >
                                 <DeleteIcon />
                              </IconButton>
                           </td>
                           <td>
                              <IconButton
                                 aria-label="delete"
                                 onClick={() => navigateToAdd(x.id)}
                              >
                                 <EditNoteIcon />
                              </IconButton>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
            <div className="col-md-12 text-right">
               <button
                  onClick={() => navigateToAdd("0")}
                  className="btn btn-success"
               >
                  Add New user
               </button>
            </div>
         </div>
      </>
   );
}

export default CustomerList;
