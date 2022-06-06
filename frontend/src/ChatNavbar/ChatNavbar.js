import React from 'react'
import "./ChatNavbar.css"
import { Link } from "react-router-dom";

export default function ChatNavbar(props) {

const name  = props.name

  return (
    <div className="navbar">
      <ul className="navList">
      <li className="navItems backHome">
          <Link to="/" className="navLink">
            <div className="fas fa-home"></div>
            <div>Home</div>
          </Link>
        </li>
        <li className="navItems chatroomName">
        <div className="fas fa-magnifying-glass-location"></div>
          <p className="navName">{name}</p>
        </li>
        <li className='navItems logout'>
        <Link to="/home" className="navLink">
            <div className="fas fa-right-from-bracket"></div>
            Logout
          </Link>
          
        </li>
      </ul>
      {console.log(name)}
    </div>
  );
}
