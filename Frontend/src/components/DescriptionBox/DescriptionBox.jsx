import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div    className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An eCommerce website is an online destination where buyers shop for goods 
              and sellers offer products and services. It's the hub of information about 
              a company and what they sell. On an eCommerce website, you'll find product 
              listings, eCommerce blog content, company history, and contact information.</p>
              <p>
              Most e-commerce websites prominently display products or services for sale 
              on their homepage. Look for product images, prices, and links to product categories or listings.
              </p>
        </div>
    </div>
  )
}
