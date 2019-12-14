import React, { Component } from 'react';
import 'firebase/storage';
import printAPIManager from '../../modules/printAPIManager';

class ProfileEditForm extends Component {
    // set initial state
    state = {
        name: "",
        businessName: "",
        address: "",
        phone: "",
        bio: "",
        email: "",
        favoriteQuote: "",
        photo: null,
        isAdmin: false,
        password: "",
        confirmPassword: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        // below is the same as stateToChange.name
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    updateExistingProfile = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedProfile = {
            id: this.props.match.params.userId,
            name: this.state.name,
            photo: this.state.photo,
            businessName: this.state.businessName,
            bio: this.state.bio,
            phone: this.state.phone,
            favoriteQuote: this.state.favoriteQuote,
            address: this.state.address,
            email: this.state.email,
            isAdmin: this.state.isAdmin,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        };
        printAPIManager.updateProfile("users", editedProfile)
            .then(() => this.props.history.push("/profile"))
    }

    componentDidMount() {
        printAPIManager.get("users", this.props.match.params.userId)
            .then(user => {
                this.setState({
                    photo: user.photo,
                    name: user.name,
                    businessName: user.businessName,
                    address: user.address,
                    phone: user.phone,
                    email: user.email,
                    bio: user.bio,
                    favoriteQuote: user.favoriteQuote,
                    isAdmin: user.isAdmin,
                    password: user.password,
                    confirmPassword: user.confirmPassword,
                    loadingStatus: false,
                });
            });
    }

    render() {

        return (
            <>
                <br />
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <label htmlFor="name">Name: </label>
                            <br />
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="name"
                                placeholder="name"
                                value={this.state.name}
                            />
                            <br />
                            <br />
                            <label htmlFor="businessName">Business Name: </label>
                            <br />
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="businessName"
                                placeholder="business name"
                                value={this.state.businessName}
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
                                value={this.state.address}
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
                                value={this.state.phone}
                            />
                            <br />
                            <br />
                            <label htmlFor="email">Email: </label>
                            <br />
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="email"
                                placeholder="email"
                                value={this.state.email}
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
                                value={this.state.bio}
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
                                value={this.state.favoriteQuote}
                            />

                        </div>
                        <br />
                        <br />
                        <div>
                            <button className="saveEditedProfileButton"
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.updateExistingProfile}
                            >SAVE EDITS</button>
                        </div>
                        <br />
                        <br />
                        <br />
                    </fieldset>
                </form>
            </>
        )
    }
}

export default ProfileEditForm;