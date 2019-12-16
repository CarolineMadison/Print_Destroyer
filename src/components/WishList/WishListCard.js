// this component handles rendering jsx for a single wishlist item

import React, { Component } from 'react'

class WishListCard extends Component {

    render() {

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