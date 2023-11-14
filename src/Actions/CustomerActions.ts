import axios from "axios";

export class CustomerActions {
   public async getCustomerList() {
      return await axios.get(
         "https://getinvoices.azurewebsites.net/api/Customers"
      );
   }

   public async deleteCustomerById(customerId: string) {
      return await axios.delete(
         "https://getinvoices.azurewebsites.net/api/Customer/" + customerId
      );
   }
}
