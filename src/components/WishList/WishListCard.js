// this component handles rendering jsx for a single wishlist item
// jsx that will render a single print card for logged in user print id in wishlist (wishlist.printId)

import React, { Component } from 'react'
// import './prints.css'

class WishListCard extends Component {

    // FOR LOGGED IN USER, RENDER PRINTS IN WISHLIST
    render() {
        console.log(this.props.result.print)
        console.log(this.props.result.id)
        return (
            <div className="card">
                <div className="card-content">
                    <img className="screenPrintPhoto" src={this.props.result.print.photo} alt="Screen Print" />
                    <h2 className="printTitle"><b>"{this.props.result.print.title}"</b></h2>
                    <p className="printDescription">{this.props.result.print.description}</p>
                    <br />
                    <br />
                    <br />
                    <p className="printCost">{this.props.result.print.cost}</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    {/* this button needs delete functionality to unlike and remove from wishlist */}
                    <button type="button" className="button button-like" onClick={() => this.props.delete(this.props.result.id)}><i className="fa fa-heart"></i><span>Unlike</span></button>
                </div>
            </div>

        )
    }
}


export default WishListCard;