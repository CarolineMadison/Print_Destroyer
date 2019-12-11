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
    // get all users from database
    printAPIManager.getAll("users")
      .then((users) => {
        // array method to find adminstrator in users array and store them into a variable
        const administrator = users.find(user => user.isAdmin === true)
        console.log(administrator)
        // set user to administrator
        this.setState({
          user: administrator
        })
      })
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h5 className="printTitle"><b>{this.props.print.title}</b></h5>
          <img src={this.props.print.photo} alt="Screen Print" />
          <Link to={`/prints/${this.props.print.id}`}><button>Details</button></Link>
          {/* conditional that shows button if admin is in state */}
          {this.state.user.isAdmin} ?
          <>
            <div className="deleteAndEditButtons">
              <button type="button" onClick={() => this.props.delete(this.props.print.id)}>Delete</button>
              <button type="button" onClick={() => { this.props.history.push(`/prints/${this.props.print.id}/edit`) }}>Edit</button>
            </div>
            : null }
          </>
        </div>
      </div>
    )
  };
}




export default PrintCard;