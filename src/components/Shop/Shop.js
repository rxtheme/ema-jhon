import React from 'react';
import { useState } from 'react';
import './Shop.css'
import fakeData from '../../fakeData/products.json';
import Product from '../Products/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
   const first10 = fakeData.slice(30, 60);
   const [products, setProducts] = useState(first10);


   // Cart concept
   const [cart, setCart] = useState([]);
   // just test a console log

   const handleProductAdd = (product) => {
      console.log("Product Added", product);
      const newCart = [...cart, product];
      setCart(newCart);

   }

   return (

      <div className='shop__container'>

         <div className="shop__leftSide">
            <h3>Shop leftBar</h3>
         </div>

         <div className="shop__feed">

            {
               products.map(pd =>
                  <Product
                     handleProductAdd={handleProductAdd}
                     product={pd}>

                  </Product>)
            }

         </div>

         <div className="shop__cart">
            <Cart cart={cart} />


         </div>

      </div >
   );

};

export default Shop;