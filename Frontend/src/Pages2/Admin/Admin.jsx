import React from 'react'

// import './Admin.css'
import {Routes,Route} from 'react-router-dom'  
import AddProduct from '../../Components2/AddProduct/AddProduct'
import ListProduct from '../../Components2/ListProduct/ListProduct'
import Orders from '../../Components2/Orders/Orders'
// import Sidebar from '../../Components2/Sidebar/Sidebar'
import add_product_icon from '../../components/assets/Adminadd.png';
import list_product_icon from '../../components/assets/orderlist.png';
import '../../Components2/Sidebar/Sidebar.css'
import {Link} from 'react-router-dom'

const Admin = () => {
  return (
    <div className='admin'>
      <div className='sidebar'>
              <Link to={'/addproduct'} style={{textDecoration:"none"}}>
                  <div className='sidebar-item'>
                      <img src={add_product_icon} alt="" />
                      <p>Add Product</p>
                  </div>
              </Link>
              <Link to={'/listproduct'} style={{textDecoration:"none"}}>
                  <div className='sidebar-item'>
                      <img src={list_product_icon} alt="" />
                      <p>Product List</p>
                  </div>
              </Link>
              <Link to={'/orders'} style={{textDecoration:"none"}}>
                  <div className='sidebar-item'>
                      <img src={list_product_icon} alt="" />
                      <p>Orders List</p>
                  </div>
              </Link>

        </div>
      {/* <Sidebar/> */}
      {/* <Routes>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/listproduct' element={<ListProduct/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes> */}
    </div>
  )
}

export default Admin