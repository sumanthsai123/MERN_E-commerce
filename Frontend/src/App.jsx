import React from "react";
import Navbar from "./components/navbar/Navbar";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import ShopCategory from "./pages/ShopCategory";
import Cart from "./pages/Cart";
import {LoginSignup} from "./pages/LoginSignup";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import menBanner from "./components/assets/banner_mens.png"
import womenBanner from './components/assets/banner_women.png'
import kidsBanner from  './components/assets/banner_kids.png'
import Checkout from './pages/Checkout';
import AdminApp from './Pages2/AdminApp'; // Importing the Admin App
import { Navigate } from 'react-router-dom';///////
import Orders from "./Components2/Orders/Orders";
import ListProduct from "./Components2/ListProduct/ListProduct";
import AddProduct from "./Components2/AddProduct/AddProduct";
import Sidebar from "./Components2/Sidebar/Sidebar";

const App = () => {
  const isAdmin = () => localStorage.getItem('role') === 'admin';
  const isUser = () => localStorage.getItem('role') === 'user';

  return (
    <> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} /*element={<LoginSignup />}*//>
        <Route path="/men" element={<ShopCategory banner={menBanner} category="men" />} />
        <Route path="/women" element={<ShopCategory banner={womenBanner} category="women" />} />
        <Route path="/kids" element={<ShopCategory banner={kidsBanner} category="kid" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/admin" element={isAdmin() ? <AdminApp /> : <Navigate to="/login" />} />
        {/* <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/listproduct' element={<ListProduct/>}/>
        <Route path='/orders' element={<Orders/>}/> */}
         <Route path='/addproduct' element={<><Sidebar/><AddProduct/></>}/>
        <Route path='/listproduct' element={<><Sidebar/><ListProduct/></>}/>
        <Route path='/orders' element={<><Sidebar/><Orders/></>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
