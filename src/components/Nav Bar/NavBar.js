import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

  render() {

    return (
      <div className="headerContainer">
          <nav className="navBar">
            <picture>
              <img className="logoImage" src={require('./Logo.jpg')} alt="Print Destroyer Logo" />
              {/* <img className="logoImageTwo" src={require('./LogoTwo.jpg')} alt="Print Destroyer Logo" />
              <img className="logoImageThree" src={require('./LogoThree.jpg')} alt="Print Destroyer Logo" /> */}
              <h4><p id="jim">Jim Madison's</p>Print Destroyer | An Art Print Sharing App</h4>
            </picture> < hr/>
            <ul className="navList">
              <li><Link className="nav-link" to="/">Home</Link></li>
              <li><Link className="nav-link" to="/profile">Profile</Link></li>
              <li><Link className="nav-link" to="/prints">Prints</Link></li>
              <li><Link className="nav-link" to="/wishlist">Favorites</Link></li>
            </ul> 
          </nav>
        </div>
    )
  }
}
export default NavBar;