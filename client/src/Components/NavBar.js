import React from "react";

export default function Navbar(){
    return <nav className="nav">
        <a href="/" className="site-title">Home</a>
        <ul>
            <li>
                <a href="/account">Account</a>
            </li>
            <li>
                <a href="/cart">Cart</a>
            </li>
        </ul>
    </nav>
}