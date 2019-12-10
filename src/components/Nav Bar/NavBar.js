import React, { Component } from 'react';
import { Link } from "react-router-dom"
// import './NavBar.css'
import { isUserWhitespacable } from '@babel/types';

class NavBar extends Component {

  handleLogout = () => {
    this.props.clearUser();
    this.props.history.push("/");
  }

  render() {

    return (
      <header>
        <div className="headerContainer">
          {/* <picture>
            <img className="logoImage" src={require('./printDestroyerMainLogo.png')} alt="Print Destroyer Logo" />
            <h4><p id="jim"></p>Print Destroyer | An Art Print Sharing App</h4>
          </picture> */}
          <nav className="navBar">
            <ul className="navList">
              {(this.props.user) ?
                <>
                  <li><Link className="nav-link" to="/">Home</Link></li>
                  <li><Link className="nav-link" to="/profile">Profile</Link></li>
                  <li><Link className="nav-link" to="/prints">Prints</Link></li>
                  <li><Link className="nav-link" to="/customers">Wish List</Link></li>
                  : <li><span className="nav-link" onClick={this.handleLogout}>Logout</span></li>
                </>
                : <li><Link className="nav-link" to="/login"></Link></li>
              }
            </ul>
          </nav>
        </div>
        </header>
        )
      }
    }
export default NavBar;