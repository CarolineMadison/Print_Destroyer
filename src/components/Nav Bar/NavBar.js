import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import './NavBar.css'
import { isUserWhitespacable } from '@babel/types';

class NavBar extends Component {

  handleLogout = () => {
    console.log(this.props.history)
    this.props.clearUser();
    this.props.history.push("/");
  }

  render() {

    return (
      <header>
        <div className="headerContainer">
          {/* <picture>
            <img className="logoImage" src={require('./printDestroyerMainLogo.png')} alt="Print Destroyer Logo" />
          </picture> */}
          <nav className="navBar">
            <ul className="navList">
              {(this.props.user) ?
                <>
                  <li><Link className="nav-link" to="/profile">Profile</Link></li>
                  <li><Link className="nav-link" to="/prints">Prints</Link></li>
                  <li><Link className="nav-link" to="/customers">Wish List</Link></li>
                  <li><Link className="nav-link" onClick={this.handleLogout}>Log Out</Link></li>
                </>
                : null
              }
            </ul>
          </nav>
        </div>
        </header>
        )
      }
    }
export default withRouter(NavBar);