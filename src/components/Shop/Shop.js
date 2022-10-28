import React from 'react';
import fakeData from '../../fakeData'
import { useState } from 'react';

const first10 = fakeData.slice(0, 10);
// const [products, setProduct] = useState(first10);

const Shop = () => {
   console.log("hello");
   return (
      <div>
         <h1>Shop</h1>
      </div>
   );
};

export default Shop;