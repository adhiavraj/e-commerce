import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import cart_icon from "../../assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import all_product from '../../assets/all_product'


const Navbar = () => {

    const [menu, setMenu] = useState("shop")

    const {getTotalCartItem} = useContext(ShopContext)

    var fColor = "black"
    var fWeight = "700"

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>THEECOM</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration: "none", color: fColor, fontWeight: fWeight}} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu("mens")}}><Link style={{textDecoration: "none", color: fColor, fontWeight: fWeight}} to='/mens'>Mens</Link>{menu === "mens" ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu("womens")}}><Link style={{textDecoration: "none", color: fColor, fontWeight: fWeight}} to='/womens'>Womens</Link>{menu === "womens" ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration: "none", color: fColor, fontWeight: fWeight}} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'>
                <button>Login</button>
            </Link>
            <Link to='/cart'>
                <img src={cart_icon} alt='login_button' />
            </Link>
            <div className="nav-cart-count">
                {getTotalCartItem()}
            </div>
        </div> 
    </div>
  )
}

export default Navbar