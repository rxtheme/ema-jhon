import React from 'react';
import '../Cart/Cart.css'
const Cart = (props) => {
   const cart = props.cart;
   const total = cart.reduce((total, prd) => total + prd.price, 0);

   let shipping = 0;
   if (total > 220) {
      shipping = 28.99;
   }
   else if (total > 70) {
      shipping = 15.99;
   } else if (total > 20) {
      shipping = 3.99;
   } else if (total > 0) {
      shipping = 2.99;

   }

   const tax = (total / 40).toFixed(2);
   const grandTotal = (total + shipping + Number(tax)).toFixed(2);


   return (
      <div className="cart__section">
         <h3>Order Summary</h3>
         <p>Order Summery: {cart.length}</p>
         <p>Shipping cost: {shipping}</p>
         <p><small>Tax + VAT: {tax}</small></p>
         <p>Total Price: {grandTotal}</p>
      </div>
   );
};

export default Cart;