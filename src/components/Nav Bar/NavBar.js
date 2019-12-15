import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import './NavBar.css'
import { isUserWhitespacable } from '@babel/types';
import printAPIManager from '../../modules/printAPIManager';

class NavBar extends Component {

  state = {
    user: {}

  }

  componentDidMount() {
    const userId = localStorage.getItem("credentials")
    // get all users from database
    printAPIManager.getAll("users")
      .then((users) => {
        // array method to find adminstrator in users array and store them into a variable
        const loggedInUser = users.find(user => user.id === Number(userId))
        if (loggedInUser !== null) {
          this.setState({
            user: loggedInUser,
          })
        } else {
          return null
        }
    })
  }

  handleLogout = () => {
    this.props.clearUser();
    this.props.history.push("/");
  }

  // FRIDAY:  WE WANT THE NAVBAR TO CHANGE DEPENDING ON IF A REGULAR USER IS SIGNED IN (SAME NAV), IF IT'S THE ADMIN WHO IS LOGGED IN (DIFFERENT NAV), AND IF NO ONE IS LOGGED IN (NO NAV)
  render() {
    console.log(this.state)
    const userId = localStorage.getItem("credentials")
    return (
      <header>
       <div className="headerContainer">
       
          {Number(userId) && Number(userId) !== 1 ?
            <nav className="navBar">
              <ul className="navList">
                <>
                  <li><Link className="nav-link" to="/profile">Profile</Link></li>
                  <li><Link className="nav-link" to="/prints">Prints</Link></li>
                  <li><Link className="nav-link" to="/wishlist">Wish List</Link></li>
                  <li><Link className="nav-link" onClick={this.handleLogout}>Log Out</Link></li>
                  <hr />
                </>
              </ul>
            </nav> : null}
          {Number(userId) === 1 ?
            <nav className="navBar">
              <ul className="navList">
                <>
                  <li><Link className="nav-link" to="/profile">Profile</Link></li>
                  <li><Link className="nav-link" to="/prints">Inventory</Link></li>
                  <li><Link className="nav-link" to="/customers">Customers</Link></li>
                  <li><Link className="nav-link" onClick={this.handleLogout}>Log Out</Link></li>
                  <hr />
                </>
              </ul>
            </nav> : null}
            </div>
      </header> 
       
    )
  }
}
export default withRouter(NavBar);

// if someone logged in show nav

// if someone logged in is Jim show different nav

// else null


// OLD CODE TO REMOVE ERRORS FOR NOW.... WORK ON THIS ON MONDAY!!!!!

// import React, { Component } from 'react';
// import { Link, withRouter } from "react-router-dom"
// import './NavBar.css'
// import { isUserWhitespacable } from '@babel/types';
// import printAPIManager from '../../modules/printAPIManager';

// class NavBar extends Component {

//   state = {
//     user: {
//       isAdmin: false
//     }
//   }

//   componentDidMount() {
//     const userId = localStorage.getItem("credentials")
//     // get all users from database
//     printAPIManager.getAll("users")
//       .then((users) => {
//         // array method to find adminstrator in users array and store them into a variable
//         const loggedInUser = users.find(user => user.id === Number(userId))
//         // set user to administrator
//         this.setState({
//           user: loggedInUser
//         })
//       })
//     }

//   handleLogout = () => {
//     this.props.clearUser();
//     this.props.history.push("/");
//   }

//   // FRIDAY:  WE WANT THE NAVBAR TO CHANGE DEPENDING ON IF A REGULAR USER IS SIGNED IN (SAME NAV), IF IT'S THE ADMIN WHO IS LOGGED IN (DIFFERENT NAV), AND IF NO ONE IS LOGGED IN (NO NAV)
//   render() {

//     return (
//       <header>
//         <div className="headerContainer">
//           <nav className="navBar">
//             <ul className="navList">
//               {(this.props.user) ?
//                 <>
//                   <li><Link className="nav-link" to="/profile">Profile</Link></li>
//                   <li><Link className="nav-link" to="/prints">Prints</Link></li>
//                   <li><Link className="nav-link" to="/wishlist">Wish List</Link></li>
//                   <li><Link className="nav-link" onClick={this.handleLogout}>Log Out</Link></li>
//                   <hr />
//                 </>
//                 : null
//               }
//             </ul>
//           </nav>
//         </div>
//         </header>
//         )
//       }
//     }
// export default withRouter(NavBar);