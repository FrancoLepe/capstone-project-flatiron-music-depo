import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return <nav className="nav">
        <Link to="/" className="site-title">Home</Link>
        <ul>
            <li>
                <Link to="/account">Account</Link>
            </li>
            <li>
                <Link to="/cart">Cart</Link>
            </li>
            
        </ul>
    </nav>
}