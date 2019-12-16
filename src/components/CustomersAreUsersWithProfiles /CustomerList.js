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

    // get all users and set that to state
    componentDidMount() {
        printAPIManager.getAll("users")
        .then((users) => {
            const listOfCustomers = users.filter(user => user.isAdmin === false)
            console.log(listOfCustomers)
            this.setState({
                users: listOfCustomers
            })
        })
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