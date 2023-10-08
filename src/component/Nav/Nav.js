import { Link } from "react-router-dom";
import "./Nav.css";

import React from 'react'

export default function Nav() {
  return (
    <div className="nav-container">
      <h2><Link to="/">Home</Link></h2>
      <h2><Link to="/post">About</Link></h2>
      <h2><Link to="/readpost">Contact</Link></h2>
    </div>
  )
}
