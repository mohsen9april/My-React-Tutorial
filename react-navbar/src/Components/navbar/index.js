import React from "react";
// import { NavLink } from "react-router-dom";
import { NavLink } from './navbarElements';

const Navbar = () => {
    return(
        <>
        <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                {/* <Bars /> */}
                <NavMenu>
                    <NavLink to="/about"></NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;