import React from 'react';
import './Product.css';
import Card from '../Card/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
   const { img, name, price, stock } = props.product;
   // console.log(props.product);
   return (
      <div className='product'>
         <div className="product__img">
            <img src={img} alt="Product Image" />
         </div>

         <div className="product__details">
            <h4>{name}</h4>
            <div className="product__bottom">
               <div className="product__bottom_left">
                  <p>By: </p>
                  <p>Price: ${price}</p>
                  <small>Only {stock} left in stock - order soon</small>
                  <button
                     onClick={() => props.handleProductAdd(props.product)}>
                     <FontAwesomeIcon icon={faCartShopping} />
                     add to cart
                  </button>

               </div>
               <div className="product__bottom_right">
                  <p>🌟🌟🌟🌟🌟</p>
                  <h5>Features</h5>
                  <Card />

               </div>
            </div>

         </div>

      </div>
   );
};

export default Product;