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

  createNewWishlistItem = () => {
    console.log(this.props)
    const userId = localStorage.getItem("credentials")
    const newWishListItem = {
      userId: userId,
      printId: this.props.print.id
    }
    printAPIManager.post("wishlist", newWishListItem)
      .then(() => this.props.history.push("/wishlist"))
  }

render() {
  console.log(this.props.print.id)
  console.log(this.state.user.id)
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
        <br />
        <br />
        <br />
        <br />
        {this.state.user.isAdmin ?
          <>
            <button type="button" className="printDeleteButton" onClick={() => this.props.delete(this.props.print.id)}>Delete Inventory</button><br /><br />
            <button type="button" className="printEditButton" onClick={() => { this.props.history.push(`/prints/${this.props.print.id}/edit`) }}>Edit Inventory</button>
          </>
          : <button type="button" className="button button-like" onClick={this.createNewWishlistItem}><i className="fa fa-heart"></i><span>Like</span></button>}
      </div>
    </div>
  )
};
}




export default PrintCard;