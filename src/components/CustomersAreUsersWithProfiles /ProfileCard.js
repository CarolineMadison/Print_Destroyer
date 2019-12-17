// this component handles rendering jsx for a single user's profile
import React, { Component } from 'react'
import './profiles.css'
import printAPIManager from '../../modules/printAPIManager'

class ProfileCard extends Component {

    state = {
        user: {}
    }

    componentDidMount() {
        const userId = localStorage.getItem("credentials")
        // get all users from database
        printAPIManager.getAll("users")
            .then((users) => {
                // array method to find adminstrator in users array and store them into a variable
                const loggedInUser = users.find(user => user.id === Number(userId))
                // set user to administrator
                this.setState({
                    user: loggedInUser
                })
            })
    }

    clearUser = () =>  {
        localStorage.removeItem("credentials")
      }

    deleteAccount = () => {
        const userId = localStorage.getItem("credentials")
        printAPIManager.delete("users", userId)
            .then(() => { this.clearUser() })
            .then(() => this.props.history.push("/"))     
    }

    render() {
        console.log(this.state)
        console.log(this.state.user.id)
        const userId = localStorage.getItem("credentials")
        return (
            <div className="card">
                <div className="card-content">
                    <img className="profilePhoto" src={this.state.user.photo} alt="Screen Print" />
                    <h2 className="profileName"><b>"{this.state.user.name}"</b></h2>
                    <div>
                        <p className="profileFavoriteQuote">{this.state.user.favoriteQuote}</p>
                        <br />
                        <br />
                        <br />
                        <h2 className="profileAboutMeTitle">About Me: </h2><br />
                        <p className="profileBio">{this.state.user.bio}</p>
                        <br />
                        <br />
                        <br />
                        <h2 className="profileAboutMeTitle">Contact: </h2>
                        <p className="profileBusinessName">{this.state.user.businessName}</p>
                        <br />
                        <br />
                        <p className="profileAddress">{this.state.user.address}</p>
                        <br />
                        <p className="profilePhone">{this.state.user.phone}</p>
                        <br />
                        <p className="profileEmail">{this.state.user.email}</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        {Number(userId) !== 1 ?
                            <button type="button" className="profileDeleteButton" onClick={() => this.deleteAccount()}>Delete Account</button>
                            : null}
                        <br />
                        <br />
                        <button type="button" className="profileEditButton" onClick={() => { this.props.history.push(`/profile/users/${this.state.user.id}/edit`) }}>Edit Profile</button>
                    </div>
                </div>
            </div>
        )
    };
}




export default ProfileCard;