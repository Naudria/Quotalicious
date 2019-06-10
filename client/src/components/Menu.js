import React from 'react'
import { Link } from 'react-router-dom';

const Menu = () =>
  <div className="ui pointing menu">
   <Link className="item" to="/" >Home</Link>
    <Link className="item" to="/all" >All Quotes</Link>
    <Link className="item" to="/favorites" >Favorites</Link>
  </div>

export default Menu