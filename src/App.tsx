import { Suspense, lazy } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@fontsource/roboto";

const CustomerList = lazy(() => import("./Components/CustomerList"));
const AddEditCustomer = lazy(() => import("./Components/AddEditCustomer"));

function App() {
   return (
      <BrowserRouter>
         <div className="container-fluid">
            <Suspense fallback={<div>Loding...</div>}>
               <Routes>
                  <Route path="/" element={<CustomerList />} />
                  <Route path="/customer-list" element={<CustomerList />} />
                  <Route
                     path="/add-edit-customer"
                     element={<AddEditCustomer />}
                  />
               </Routes>
            </Suspense>
         </div>
         <ToastContainer />
      </BrowserRouter>
   );
}

export default App;
