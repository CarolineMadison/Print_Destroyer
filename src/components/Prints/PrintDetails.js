import React, { Component } from 'react';
import printAPIManager from '../../modules/printAPIManager';

class PrintDetails extends Component {

    state = {
        title: "",
        description: "",
        cost: "",
        photo: "",
        user: {
            isAdmin: false
        },
        // because the data isn't there and is still loading, set loadingStatus to true so the delete button is disabled
        loadingStatus: true
    }

    componentDidMount() {
        const userId = localStorage.getItem("credentials")
        console.log(userId)
        //get(id) from printAPIManager and hang on to the data; put it into state
        printAPIManager.get("prints", this.props.printId)
            .then((print) => {
                printAPIManager.getAll("users")
                    .then((users) => {
                        // use find to find the user who is currently logged in
                        // array method to find adminstrator in users array and store them into a variable
                        const loggedInUser = users.find(user => user.id === Number(userId))
                        console.log(loggedInUser)
                        console.log(print)
                        this.setState({
                            title: print.title,
                            description: print.description,
                            cost: print.cost,
                            photo: print.photo,
                            user: loggedInUser,
                            // because the data is there and no longer loading, the delete button is enabled
                            loadingStatus: false
                        });
                    })
            })
    }

    handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        this.setState({ loadingStatus: true })
        printAPIManager.delete("prints", this.props.printId)
            .then(() => this.props.history.push("/prints"))
    }

    render() {
        return (
            <div className="card" >
                <div className="card-content">
                    <img className="screenPrintDetailsPhoto" src={this.state.photo} alt="Screen Print" />
                    <h2 className="printTitle"><b>"{this.state.title}"</b></h2>
                    <br />
                    <br />
                    {this.state.user.isAdmin ?
                        <div className="deleteAndEditButtons">
                            <br />
                            <button type="button" onClick={() => this.props.delete(this.props.print.id)}>Delete</button>
                            <hr />
                            <button type="button" onClick={() => { this.props.history.push(`/prints/${this.props.print.id}/edit`) }}>Edit</button>
                            <br />
                        </div> :
                        <button type="button" class="button button-like" onClick={() => { this.props.history.push("/wishlist") }}><i class="fa fa-heart"></i><span>Like</span></button>
                    }
                    <br />
                    <br />
                    {/* conditional that shows button if admin is in state */}
                </div>
            </div>
        )
    };
}

export default PrintDetails;