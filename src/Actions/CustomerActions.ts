import axios from "axios";
import { Customer } from "../Models/Customer";

export class CustomerActions {
   public async getCustomerList() {
      return await axios.get(
         "http://localhost:5161/api/Customers/GetAllCustomers"
      );
   }

   public async deleteCustomerById(customerId: string) {
      return await axios.delete(
         "http://localhost:5161/api/Customers/Delete/" + customerId
      );
   }
   public async updateCustomer(customerId: string, customer: Customer) {
      return await axios.put(
         "http://localhost:5161/api/Customers/Update/" + customerId,
         customer
      );
   }

   public async createCustomer(customer: Customer) {
      return await axios.post(
         "http://localhost:5161/api/Customers/CreateCustomer",
         customer
      );
   }
}
