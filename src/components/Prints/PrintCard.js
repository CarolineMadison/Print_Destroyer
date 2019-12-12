// this component handles rendering jsx for a single print

import React, { Component } from 'react'
import './prints.css'
import printAPIManager from '../../modules/printAPIManager'
import { Link } from "react-router-dom";

class PrintCard extends Component {

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

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <img src={this.props.print.photo} alt="Screen Print" />
          <h2 className="printTitle"><b>"{this.props.print.title}"</b></h2>
          <br />
          <br />
          <Link to={`/prints/${this.props.print.id}`}><button className="detailsButton">Details</button></Link>
          <br />
          <br />
          {/* conditional that shows button if admin is in state */}
        </div>
      </div>
    )
  };
}




export default PrintCard;