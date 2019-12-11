import React, { Component } from 'react'
import PrintCard from './PrintCard'
import printAPIManager from '../../modules/printAPIManager'
import './prints.css'

const userId = localStorage.getItem("credentials")
console.log(userId)

class PrintsList extends Component {
    //define what this component needs to render
    state = {
        prints: [],
        user: {
            // isAdmin: false
        }
    }


    componentDidMount() {
        // console.log("Print List: ComponentDidMount");
        //getAll from printAPIManager and hang on to that data; put it in state
        printAPIManager.getAll("prints").then(printAPIManager.getAll("users"))
            .then((prints) => {
                console.log(prints)
                this.setState({
                    prints: prints
                })
            })
                
                // .then(printAPIManager.getAll("users"))
                // .then((users) => {
                //     console.log(users)
                //     const admin = users.find(user => user.isAdmin === true);
                //     console.log(admin)
                // })
    }


    //   deleteAnimal = id => {
    //     AnimalManager.delete(id)
    //       .then(() => {
    //         AnimalManager.getAll()
    //           .then((newAnimals) => {
    //             this.setState({
    //               animals: newAnimals
    //             })
    //           })
    //       })
    //   }
    
    render() {
        return (
            <>
                <section className="section-content">
                    {(Number(userId) === 1)} ?
                    {/* {(administrator.isAdmin === true)} ? */}
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/prints/new") }}>
                        Add New Inventory
                    </button> : null}
                </section>
                <div className="container-cards">
                    {this.state.prints.map(print =>
                        <PrintCard
                            key={print.id}
                            print={print}
                            //   deleteAnimal={this.deleteAnimal}
                            {...this.props}
                        />
                    )}
                </div>
            </>
        )
    }
}

export default PrintsList;