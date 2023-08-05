import React from "react";
import '../App.css'
import { Outlet } from "react-router-dom";
const Header=()=>{
    return(
       <>
       <header className="header">
            <h3 className="header-title">
                Social Media For Travellers
            </h3>
            
        </header>
        <Outlet></Outlet>
    </>
    )
}
export default Header;