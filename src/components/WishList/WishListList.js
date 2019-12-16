// THIS COMPONENT HANDLES RENDERING A LIST OF CUSTOMER CARDS 
// ONLY THE ADMINISTRATOR SEES THIS COMPONENT

import React, { Component } from 'react'
import WishListCard from './WishListCard'
import printAPIManager from '../../modules/printAPIManager'

// import './prints.css'

class WishListList extends Component {
    //define what this component needs to render
    state = {
        wishlist: []
    }

    componentDidMount() {
        // get all users from database
        printAPIManager.getAllWishlistItems()
            .then((results) => {
                const userId = localStorage.getItem("credentials")
                const wishListForLoggedInUser = results.filter(result => result.user.id === Number(userId))
                console.log(wishListForLoggedInUser)
                // console.log(results)
                this.setState({
                    wishlist: wishListForLoggedInUser
                })
            })
    }

    // delete = id => {
    //     printAPIManager.delete("users", id)
    //         .then(() => {
    //             printAPIManager.getAll("users")
    //                 .then((newUsers) => {
    //                     this.setState({
    //                         users: newUsers
    //                     })
    //                 })
    //         })
    // }

    render() {
        console.log(this.state.wishlist)
        return (
            <>
                <h1><u>Wish List</u></h1>
                <div className="container-cards">
                    {/* map over wishList array in state and for each item renders a print card */}
                    {this.state.wishlist.map(result =>
                        <WishListCard
                            key={result.id}
                            result={result}
                            delete={this.delete}
                            {...this.props}
                        />
                    )}
                </div>
            </>
        )
    }
}

export default WishListList;