// import React from "react";
// import "./item.css";
// import { Link } from "react-router-dom";

// const Item = (props) => {
  
//   return (
//     <div className="item">
//       <div className="card">
//         <Link to={`/product/${props.id}`}>
//         <img src={props.image} alt="" />
//         </Link>
//         <p className="name">{props.name}</p>
//         <div className="price">
//           <p className="new-price">${props.new_price}</p>
//           <p className="old-price">${props.old_price}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Item;


import React, { useContext } from "react";
import "./item.css";
import { Link } from "react-router-dom";
import all_product from "../assets/all_product";
import { ShopContext } from "../../context/ShopContext";

const Item = (props) => {
    // const { product } = props;
    const {addToCart} = useContext(ShopContext)
    

  
  return (
    <div className="item">
      <div className="card">
        <Link to={`/product/${props.id}`}>
          <img onClick={window.scrollTo(0,0)} className="product-img" src={props.image} alt={props.name} />
        </Link>
        <div className="card-content">
          <p className="name">{props.name}</p>
          <div className="price">
            <p className="new-price">${props.new_price}</p>
            {props.old_price && <p className="old-price">${props.old_price}</p>}
          </div>
          <div className="add-to-cart">
             <button onClick={()=>{addToCart(props.id)}}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
