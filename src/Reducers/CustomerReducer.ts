import { createSlice } from "@reduxjs/toolkit";
import { Customer } from "../Models/Customer";

const customer: Customer = new Customer();
const customerList: Array<Customer> = [];

const initialState = {
   customer: customer,
   customerList: customerList,
};

const customerReducer = createSlice({
   name: "customer",
   initialState: initialState,
   reducers: {
      setCustomerList: (state, data) => {
         state.customerList = data.payload;
      },
   },
});

export const { setCustomerList } = customerReducer.actions;
export default customerReducer.reducer;
