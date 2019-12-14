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
    // get all users from database
    printAPIManager.getAll("users")
      .then((users) => {
        // array method to find adminstrator in users array and store them into a variable
        const loggedInUser = users.find(user => user.id === Number(userId))
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
          <img className="screenPrintPhoto" src={this.props.print.photo} alt="Screen Print" />
          <h2 className="printTitle"><b>"{this.props.print.title}"</b></h2>
          <p className="printDescription">{this.props.print.description}</p>
          <br />
          <br />
          <br />
          <p className="printCost">{this.props.print.cost}</p>
          {/* <Link to={`/prints/${this.props.print.id}`}><button className="printDetailsButton">Details</button></Link> */}
          <br />
          <br />
          <br />
          <br />
          {this.state.user.isAdmin ?
            <>
              <button type="button" className="printDeleteButton" onClick={() => this.props.delete(this.props.print.id)}>Delete Inventory</button><br /><br />
              <button type="button" className="printEditButton" onClick={() => { this.props.history.push(`/prints/${this.props.print.id}/edit`) }}>Edit Inventory</button>
            </>
            : null}
        </div>
      </div>
    )
  };
}




export default PrintCard;