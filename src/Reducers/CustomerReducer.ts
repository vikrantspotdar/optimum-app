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
      setCustomer: (state, data) => {
         state.customer = state.customerList.filter(
            (x) => x.id === data.payload
         )[0];
      },
      clearCustomer: (state) => {
         state.customer = new Customer();
      },
   },
});

export const { setCustomerList, setCustomer, clearCustomer } =
   customerReducer.actions;
export default customerReducer.reducer;
