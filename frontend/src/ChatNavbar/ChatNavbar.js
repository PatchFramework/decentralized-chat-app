import React from 'react'
import "./ChatNavbar.css"
import { Link } from "react-router-dom";

export default function ChatNavbar(props) {

const name  = props.name

  return (
    <div className="navbar">
      <ul className="navList">
      <li className="navItems">
          <Link to="/" className="navLink">
            <div className="fas fa-home"></div>
            Go back to Chat Selector
          </Link>
        </li>
        <li className="navItems">
          <p className="navName">{name}</p>
        </li>
      </ul>
      {console.log(name)}
    </div>
  );
}
