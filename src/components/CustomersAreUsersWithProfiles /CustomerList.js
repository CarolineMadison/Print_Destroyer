// THIS COMPONENT HANDLES RENDERING A LIST OF CUSTOMER CARDS 
// ONLY THE ADMINISTRATOR SEES THIS COMPONENT

import React, { Component } from 'react'
import CustomerCard from './CustomerCard'
import printAPIManager from '../../modules/printAPIManager'
// import './prints.css'

class CustomerList extends Component {
    //define what this component needs to render
    state = {
        users: []
    }

    // 
    componentDidMount() {
        // const userId = localStorage.getItem("credentials")
        // get all prints from database
        // get all users from database
        // printAPIManager.getAll("prints")
        //     .then((prints) => {
        printAPIManager.getAll("users")
            .then((users) => {
                // use find to find the user who is currently logged in
                // array method to find adminstrator in users array and store them into a variable
                // const loggedInUser = users.find(user => user.id === Number(userId))
                // set prints array in database to state
                // set user to administrator
                this.setState({
                    users: users
                })
            })
        // })
    }

    delete = id => {
        printAPIManager.delete("users", id)
            .then(() => {
                printAPIManager.getAll("users")
                    .then((newUsers) => {
                        this.setState({
                            users: newUsers
                        })
                    })
            })
    }

    render() {
        return (
            <>
            <h1><u>Customers</u></h1>
                <div className="container-cards">
                    {/* map over users array in state and for each user renders a profile card */}
                    {this.state.users.map(user =>
                        <CustomerCard
                            key={user.id}
                            user={user}
                            delete={this.delete}
                            {...this.props}
                        />
                    )}
                </div>
            </>
        )
    }
}

export default CustomerList;