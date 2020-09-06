import React, { useEffect,useState } from "react";
import './Nav.css';


function Nav() {
    const [show,handleShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true)
        }else handleShow(false);
    });
    return()=>{
        window.removeEventListener("scroll");
    }
    },[]);
  return (
    <div className={`nav ${show && "nav_bg"}`}>
        <img class="nav_logo" src="NetCinélogo.png" alt="NeTCinélogo"></img>
    </div>
  );
}

export default Nav;
