import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import './NavBar.css'
import { isUserWhitespacable } from '@babel/types';
import printAPIManager from '../../modules/printAPIManager';

class NavBar extends Component {

  state = {
    user: {
      isAdmin: false
    }
  }

  componentDidMount() {
    const userId = localStorage.getItem("credentials")
    console.log(userId)
    // get all users from database
    printAPIManager.getAll("users")
      .then((users) => {
        // array method to find adminstrator in users array and store them into a variable
        const loggedInUser = users.find(user => user.id === Number(userId))
        console.log(loggedInUser)
        // set user to administrator
        this.setState({
          user: loggedInUser
        })
      })
  }

  handleLogout = () => {
    console.log(this.props.history)
    this.props.clearUser();
    this.props.history.push("/");
  }

  render() {

    return (
      <header>
        <div className="headerContainer">
          <nav className="navBar">
            <ul className="navList">
              {(this.props.user) ?
                <>
          {/* <picture>
            <img className="logoImage" src={require('./printDestroyerMainLogo.png')} alt="Print Destroyer Logo" />
          </picture> */}
                  <li><Link className="nav-link" to="/profile">Profile</Link></li>
                  <li><Link className="nav-link" to="/prints">Prints</Link></li>
                  <li><Link className="nav-link" to="/customers">Wish List</Link></li>
                  <li><Link className="nav-link" onClick={this.handleLogout}>Log Out</Link></li>
                  <hr />
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