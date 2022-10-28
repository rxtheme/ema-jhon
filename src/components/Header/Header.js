import React from 'react';
import Logo from '../../images/logo.png';
import '../Header/Header.css'

const Header = () => {
   return (
      <div>
         <div className='header__logo'>
            <img src={Logo} alt="Logo" />
         </div>

         <nav className='main__nav'>
            <a href="/shop">Shop</a>
            <a href="/review">Order Review</a>
            <a href="/manage">Manage</a>
         </nav>
      </div>
   );
};

export default Header;