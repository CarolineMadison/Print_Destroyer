import React, { Component } from 'react'
import './profiles.css'

class CustomerCard extends Component {

  render() {
    return (
        <div className="card">
            <div className="card-content">
                <img className="profilePhoto" src={this.props.user.photo} alt="Screen Print" />
                <h2 className="profileName"><b>"{this.props.user.name}"</b></h2>
                <div>
                    <p className="profileFavoriteQuote">{this.props.user.favoriteQuote}</p>
                    <br />
                    <br />
                    <br />
                    <h2 className="profileAboutMeTitle">About Me: </h2><br />
                    <p className="profileBio">{this.props.user.bio}</p>
                    <br />
                    <br />
                    <br />
                    <h2 className="profileAboutMeTitle">Contact: </h2>
                    <p className="profileBusinessName">{this.props.user.businessName}</p>
                    <br />
                    <br />
                    <p className="profileAddress">{this.props.user.address}</p>
                    <br />
                    <p className="profilePhone">{this.props.user.phone}</p>
                    <br />
                    <p className="profileEmail">{this.props.user.email}</p>
                    <br />
                    <br />
                    <br />
                    <br />
                        <button type="button" className="profileEditButton" onClick={() => { this.props.history.push(`/profile/users/${this.state.user.id}/edit`) }}>Edit Profile</button>
                        <button type="button" className="profileDeleteButton" onClick={() => this.props.delete(this.props.user.id)}>Delete Account</button>
                    </div>
                </div>
            </div>
        )
    };
}
export default CustomerCard;
