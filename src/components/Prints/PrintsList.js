// THIS COMPONENT HANDLES RENDERING A LIST OF PRINT CARDS

import React, { Component } from 'react'
import PrintCard from './PrintCard'
import printAPIManager from '../../modules/printAPIManager'
import './prints.css'

// const userId = localStorage.getItem("credentials")
// console.log(userId)

class PrintsList extends Component {
    //define what this component needs to render
    state = {
        prints: [],
        user: {
            isAdmin: false
        }
    }

    componentDidMount() {
        // get all prints from database
        // get all users from database
        printAPIManager.getAll("prints")
            .then((prints) => {
                printAPIManager.getAll("users")
                    .then((users) => {
                        // array method to find adminstrator in users array and store them into a variable
                        const administrator = users.find(user => user.isAdmin === true)
                        console.log(administrator)
                        console.log(prints)
                        // set prints array in database to state
                        // set user to administrator
                        this.setState({
                            prints: prints,
                            user: administrator
                        })
                    })
            })
    }

    deletePrint = id => {
        printAPIManager.delete("prints", id)
            .then(() => {
                printAPIManager.getAll("prints")
                    .then((newPrints) => {
                        this.setState({
                            prints: newPrints
                        })
                    })
            })
    }

    render() {
        return (
            <>
                <section className="section-content">
                    {/* conditional that shows button if admin is in state */}
                    {this.state.user.isAdmin} ?
                        <button type="button"
                            className="addNewInventoryBTN"
                            onClick={() => { this.props.history.push("/prints/new") }}>
                            Add New Inventory
                        </button> : null}
                </section>
                <h1><u>Prints</u></h1>
                <div className="container-cards">
                    {/* map over prints array in state and for each print render a print card */}
                    {this.state.prints.map(print =>
                        <PrintCard
                            key={print.id}
                            print={print}
                            delete={this.delete}
                            {...this.props}
                        />
                    )}
                </div>
            </>
        )
    }
}

export default PrintsList;