import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import BreadCrums from "../components/BreadCrums/BreadCrums";
import { useParams } from "react-router-dom";
import { DescriptionBox } from '../components/DescriptionBox/DescriptionBox'
import { RelatedProducts } from '../components/RelatedProducts/RelatedProducts'
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import './CSS/Product.css'
const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
 
  const product = all_product.find((e) => e.id === Number(productId));
 
  return (
    <div className="productDisplay-conatiner">
      <BreadCrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  );
};

export default Product;
