import React from "react";
import "./navbar.css";

class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar">
               <div className="navbar-main">
                   Laugh-Out-Loud
               </div>
               <div className="navbar-sub">
                   Jokes
               </div>
            </div>
        )
    }
}

export default Navbar;