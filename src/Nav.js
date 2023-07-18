import React, { useEffect, useState } from 'react'
import logo from './Logo.png';
import './Nav.css';
const Nav = () => {
    const [show,setShow]=useState(false);
    const transitionNavBar =() => {
        if (window.scrollY > 100){
            setShow(true);
        }else{
            setShow(false);
        }
    }
    useEffect(()=>{
      window.addEventListener("scroll",transitionNavBar);
      return () => window.removeEventListener('scroll',transitionNavBar);
    },[])
    return (
        <div className={`nav ${show &&"nav_black"}`}>
            <div className='nav_content'>
                <img className="nav_logo" src={logo} alt="netflic_logo" />
                <img className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="profile" />
            </div>
        </div>
    )
}

export default Nav