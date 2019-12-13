import React, { Component } from 'react';
import printAPIManager from '../../modules/printAPIManager';

class CreateNewUserProfileForm extends Component {
    // set initial state
    state = {
        businessName: "",
        address: "",
        phone: "",
        bio: "",
        favoriteQuote: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        // below is the same as stateToChange.name
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    createNewUserProfile = evt => {
        evt.preventDefault();
        if (this.state.businessName === "" || this.state.address === "" || this.state.phone === "" || this.state.bio === "" || this.state.favoriteQuote === "") {
            window.alert("Please complete all fields.");
        } else {
            // this.setState({ loadingStatus: true });
            const userId = localStorage.getItem("credentials")
            const objectToPatch = {
                businessName: this.state.businessName,
                address: this.state.address,
                phone: this.state.phone,
                bio: this.state.bio,
                favoriteQuote: this.state.favoriteQuote
            }
            // Create the user profile and redirect user to their profile
            printAPIManager.patch(userId, objectToPatch)
            
                .then(() => this.props.history.push("/profile"));
        }   
    }  

    render() {

        return (
            <>
                <h1><u>Create Your Profile</u></h1>
                <br />
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <label htmlFor="businessName">Business Name: </label>
                            <br />
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="businessName"
                                placeholder="business name"
                            />
                            <br />
                            <br />
                            <label htmlFor="address">Address: </label>
                            <br />
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="address"
                                placeholder="address"
                            />
                            <br />
                            <br />
                            <label htmlFor="phone">Phone: </label>
                            <br />
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="phone"
                                placeholder="phone"
                            />
                            <br />
                            <br />
                            <label htmlFor="bio">Bio: </label>
                            <br />
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="bio"
                                placeholder="bio"
                            />
                            <br />
                            <br />
                            <label htmlFor="favoriteQuote">Favorite Quote: </label>
                            <br />
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="favoriteQuote"
                                placeholder="favorite quote"
                            />

                        </div>
                        <div className="alignRight">
                            <br />
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.createNewUserProfile}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default CreateNewUserProfileForm;