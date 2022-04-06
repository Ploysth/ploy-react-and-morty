import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        
            <ul className="nav_container">
                <Link to="/">home</Link>
                <Link to="/random">random character</Link>
                <Link to="/favourites">favourites</Link>
            </ul>
        
    )
}

export default Navbar;