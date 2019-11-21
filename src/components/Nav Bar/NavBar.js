import React, { Component } from 'react';
import { Link } from "react-router-dom"
// import './NavBar.css'

class NavBar extends Component {

  render(){

    return (
      <header>
        <h1 className="site-title">Print Destroyer<br />
          <small>Cut. Paste. Destroy.</small>
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/profile">Profile</Link></li>
            <li><Link className="nav-link" to="/prints">Prints</Link></li>
            <li><Link className="nav-link" to="/wishlist">Wish List</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}
export default NavBar;