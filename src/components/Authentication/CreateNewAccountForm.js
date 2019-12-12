import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import "./LoginForm.css"
import printAPIManager from '../../modules/printAPIManager';

class CreateNewAccountForm extends Component {
    // set initial state
    state = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAdmin: false,
        hasProfile: false,
        photo: null,
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        // below is the same as stateToChange.name
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };
  
    constructNewAccount = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.email === "" || this.state.password === "" || this.state.confirmPassword === "" || this.state.photo === "") {
            window.alert("Please complete all fields.");
        } else {
            this.setState({ loadingStatus: true });
            // step 1: save Image to Firebase
            const imagesRef = firebase.storage().ref('images');
            const childRef = imagesRef.child(`${this.state.name}-${Date.now()}`);
            childRef.put(this.state.photo)
                // step 2: get url from firebase
                .then(response => response.ref.getDownloadURL())
                // step 3: save everything to json server
                .then(url => {
                    const newAccount = {
                        name: this.state.name,
                        email: this.state.email,
                        password: this.state.password,
                        confirmPassword: this.state.confirmPassword,
                        isAdmin: this.state.isAdmin,
                        hasProfile: this.state.hasProfile,
                        photo: url
                    }
                    return printAPIManager.post("users", newAccount)
                    .then(() => this.props.history.push('/profile/new'));
                })
        }
    }

    render() {

        return (
            <>
                <h1><u>Create A New Account</u></h1>
                <form >
                    <fieldset className="uploadPrintForm">
                        <div className="formgrid">
                            <label htmlFor="title">Name: </label>
                            <br />
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="name"
                                placeholder="name"
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
                            />
                            <br />
                            <br />
                            <label htmlFor="password">Password: </label>
                            <br />
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="password"
                                placeholder="password"
                            />
                            <br />
                            <br />
                            <label htmlFor="confirmPassword">Confirm Password: </label>
                            <br />
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="confirmPassword"
                                placeholder="confirmPassword"
                            />
                            <br />
                            <br />
                            <div className="uploadImageField">
                                <label htmlFor="photo">Upload A Profile Picture: </label>
                                <input
                                    type="file"
                                    placeholder="photo"
                                    className="photoFileSearchButton"
                                    onChange={(e) => this.setState({ photo: e.target.files[0] })}
                                />
                            </div>
                        </div>
                        <br />
                        <br />
                        <div>
                            <button className="uploadNewPrintSubmitButton"
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewAccount}
                            >Enter</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default CreateNewAccountForm;