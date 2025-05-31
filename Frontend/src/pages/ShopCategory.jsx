import React from "react";
import "./CSS/ShopCategory.css";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

import Item from "/src/components/item/Item";



const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="shopCategoryBanner" src={props.banner} alt="" />
      {/* <div className="shop-indexShort">
        <p>
          <span>Showing 1-12</span>out of 36 Items
        </p>

        <div className="sort">
          Sort by <img src={dropDownIcon} alt="" />
        </div>
      </div> */}
      <div className="shopCategory-product">
        {all_product.map((item) => {
          if (props.category === item.category) {
            return (
              <Item
                id={item.id}
                key={item.id}
                name={item.name}
                image={item.image}
                old_price={item.old_price}
                new_price={item.new_price}
              />
            )
          }else{
            return null
          }
        })}
      </div>
      <div className="explore">
        <button>Explore More</button>
      </div>
    </div>
  );
};

export default ShopCategory;
