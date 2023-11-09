import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Dashboard from "./admin-page/Dashboard";
import Login from "./admin-page/Login";
import Resetpassword from "./admin-page/Resetpassword";
import Forgotpassword from "./admin-page/Forgotpassword";
import MainLayout from "./components/MainLayout";
import Enquiries from "./admin-page/Enquiries";
import StaffList from "./admin-page/StaffList";
import Blogcatlist from "./admin-page/Blogcatlist";
import Orders from "./admin-page/Orders";
import Customers from "./admin-page/Customers";
import Colorlist from "./admin-page/Colotlist";
import Categorylist from "./admin-page/Categorylist";
import Brandlist from "./admin-page/Brandlist";
import Productlist from "./admin-page/Productlist";
import Addblog from "./admin-page/Addblog";
import Addblogcat from "./admin-page/Addblogcat";
import Addcolor from "./admin-page/Addcolor";
import Addcat from "./admin-page/Addcat";
import Addbrand from "./admin-page/Addbrand";
import Addproduct from "./admin-page/Addproduct";
import Couponlist from "./admin-page/Couponlist";
import AddCoupon from "./admin-page/AddCoupon";
import ViewEnq from "./admin-page/ViewEnq";
import ViewOrder from "./admin-page/ViewOrder";

import Updateproduct from "./admin-page/UpdateProduct";
import AddCategory from "./admin-page/AddCategory";
import UpdateCategory from "./admin-page/UpdateCategory";
import UpdateStore from "./admin-page/UpdateStore";
import AddStore from "./admin-page/AddStore";
import AddUser from "./admin-page/AddUser";
import CategoryDetail from "./admin-page/CategoryDetail";
import ProductDetail from "./admin-page/ProductDetail";
import StoreDetail from "./admin-page/StoreDetail";
import HomePage from "./user-page/HomePage";
import ContactPage from "./user-page/ContactPage";
import AboutPage from "./user-page/AboutPage";
import ServicePage from "./user-page/ServicePage";
import StorePage from "./user-page/StorePage";
import AddStaff from "./admin-page/AddStaff";
import UpdateUser from "./admin-page/UpdateUser";
import Cookies from "js-cookie";
import UserDetail from "./admin-page/UserDetail";
import StaffDetail from "./admin-page/StaffDetail";
import UpdateStaff from "./admin-page/UpdateStaff";
import ProductPage from "./user-page/ProductPage";
import Checkout from "./user-page/Checkout";
import Logout from "./components/Logout";
import Register from "./user-page/Register";

import UpdateOrder from "./admin-page/UpdateOrder";

import OrderDetail from "./admin-page/OrderDetail";

import QRCode from "./components/QRCode";

// Store
import StoreDashboard from "./store-page/StoreDashboard";
import StoreOrder from "./store-page/StoreOrder";
import StoreView from "./store-page/StoreView";
import UpdateStoreOrder from "./store-page/UpdateStoreOrder";


// Get a cookie
const id = Cookies.get("id");
const role = Cookies.get("role");
console.log(id);
console.log(role);

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/*" element={<Login />} />
        
        {role === "User" ? (
          <Route >
            <Route path="/home" element={<HomePage />}/>
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/*" element={<HomePage />} />
          </Route>
        ) : null}
        {role === "Admin" ? (
          <Route path="/admin" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="enquiries" element={<Enquiries />} />
            <Route path="enquiries/:id" element={<ViewEnq />} />
            <Route path="list-staff" element={<StaffList />} />
            <Route path="add-staff" element={<AddStaff />} />
            <Route path="coupon-list" element={<Couponlist />} />
            <Route path="coupon" element={<AddCoupon />} />
            <Route path="coupon/:id" element={<AddCoupon />} />
            <Route path="blog-category-list" element={<Blogcatlist />} />
            <Route path="blog-category" element={<Addblogcat />} />
            <Route path="blog-category/:id" element={<Addblogcat />} />
            <Route path="orders" element={<Orders />} />
            <Route path="order/:id" element={<ViewOrder />} />
            <Route path="customers" element={<Customers />} />
            <Route path="list-color" element={<Colorlist />} />
            <Route path="color" element={<Addcolor />} />
            <Route path="color/:id" element={<Addcolor />} />
            <Route path="list-category" element={<Categorylist />} />
            <Route path="category" element={<Addcat />} />
            <Route path="category/:id" element={<Addcat />} />
            <Route path="list-brand" element={<Brandlist />} />
            <Route path="brand" element={<Addbrand />} />
            <Route path="brand/:id" element={<Addbrand />} />
            <Route path="list-product" element={<Productlist />} />
            <Route path="add-product" element={<Addproduct />} />
            <Route path="add-store" element={<AddStore />} />
            <Route path="update-product/:id" element={<Updateproduct />} />
            <Route path="add-category" element={<AddCategory />} />
            <Route path="update-store/:id" element={<UpdateStore />} />
            <Route path="update-category/:id" element={<UpdateCategory />} />
            <Route path="add-user" element={<AddUser />} />
            <Route path="update-user/:id" element={<UpdateUser />} />
            <Route path="category-detail/:id" element={<CategoryDetail />} />
            <Route path="product-detail/:id" element={<ProductDetail />} />
            <Route path="store-detail/:id" element={<StoreDetail />} />
            <Route path="user-detail/:id" element={<UserDetail />} />
            <Route path="staff-detail/:id" element={<StaffDetail />} />
            <Route path="update-staff/:id" element={<UpdateStaff />} />
            <Route path="update-order/:id" element={<UpdateOrder />} />
            <Route path="order-detail/:id" element={<OrderDetail />} />
            <Route path="/admin/*" element={<MainLayout />} />
          </Route>
        ) : null}

        {role === "Staff" ? (
          <Route path="/admin" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="/admin/*" element={<Dashboard />} />
            <Route path="update-order/:id" element={<UpdateOrder />} />
          </Route>
        ) : null}

        {role === "Store" ? (
          <Route path="/store" element={<StoreView />}>
            <Route index element={<StoreDashboard />} />
            <Route path="store-order" element={<StoreOrder />} />
            <Route path="*" element={<StoreDashboard />} />
            <Route path="update-storeOrder/:id" element={<UpdateStoreOrder />} />
          </Route>
        ) : null}

      </Routes>
    </Router>
  );
}

export default App;