import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return <nav className="nav">
        <Link to="/" className="site-title">Home</Link>
        <ul>
            <li>
                <Link to="/account">Account</Link>
            </li>
            <li>
                <Link to="/cart">Cart</Link>
            </li>
            <li>
                <Link to="/createaccount">CreateAccount</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            
        </ul>
    </nav>
}

export default Navbar;