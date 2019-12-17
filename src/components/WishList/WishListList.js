// THIS COMPONENT HANDLES RENDERING A LIST OF CUSTOMER CARDS 
// ONLY THE ADMINISTRATOR SEES THIS COMPONENT

import React, { Component } from 'react'
import WishListCard from './WishListCard'
import printAPIManager from '../../modules/printAPIManager'

class WishListList extends Component {
    //define what this component needs to render
    state = {
        wishlist: []
    }

    componentDidMount() {
        // get all users from database
        printAPIManager.getAllWishlistItems()
            .then((results) => {
                console.log(results)
                const userId = localStorage.getItem("credentials")
                console.log(userId)
                const wishListForLoggedInUser = results.filter(result => result.userId === Number(userId))
                console.log(wishListForLoggedInUser)
                this.setState({
                    wishlist: wishListForLoggedInUser
                })
            })
    }

    delete = id => {
        printAPIManager.delete("wishlist", id)
            .then(() => {
                printAPIManager.getAllWishlistItems("wishlist")
                    .then((results) => {
                        console.log(results)
                        const userId = localStorage.getItem("credentials")
                        console.log(userId)
                        const newWishListForLoggedInUser = results.filter(result => result.user.id === Number(userId))
                        this.setState({
                            wishlist: newWishListForLoggedInUser
                        })
                    })
            })
    }


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