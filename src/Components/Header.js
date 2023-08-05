import React from "react";
import '../App.css'
import { Outlet } from "react-router-dom";
const Header=()=>{
    return(
       <>
       <header className="header">
            <h3 className="header-title">
               TravelMedia.in
            </h3>
            
        </header>
        Social Media For Travellers
        <Outlet></Outlet>
    </>
    )
}
export default Header;
