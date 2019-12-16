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
        //get(id) from printAPIManager and hang on to the data; put it into state
        printAPIManager.get("prints", this.props.printId)
            .then((print) => {
                printAPIManager.getAll("users")
                    .then((users) => {
                        // use find to find the user who is currently logged in
                        // array method to find adminstrator in users array and store them into a variable
                        const loggedInUser = users.find(user => user.id === Number(userId))
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

    render() {
        return (
            <div className="card" >
                <div className="card-content">
                    <img className="screenPrintDetailsPhoto" src={this.state.photo} alt="Screen Print" />
                    <h2 className="printTitle"><b>"{this.state.title}"</b></h2>
                    <p className="printDescription">{this.state.description}</p>
                    <br />
                    <br />
                    <p className="printCost">{this.state.cost}</p>
                    <br />
                    <br />
                    {/* conditional that shows button if admin is in state */}
                    {this.state.user.isAdmin ?
                        <div>
                            <br />
                            <br />
                            <button type="button" className="printEditButton" onClick={() => { this.props.history.push(`/prints/${this.props.print.id}/edit`) }}>Edit Print</button>
                            <br />
                        </div> :
                        <button type="button" className="button button-like" onClick={() => { this.props.history.push("/wishlist") }}><i className="fa fa-heart"></i><span>Like</span></button>
                    }
                </div>
            </div>
        )
    };
}

export default PrintDetails;