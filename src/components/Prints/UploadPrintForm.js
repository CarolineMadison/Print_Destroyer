import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import printAPIManager from '../../modules/printAPIManager';

class UploadPrintForm extends Component {
    state = {
        title: "",
        cost: "",
        description: "",
        photo: null,
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        // below is the same as stateToChange.name
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewPoster = evt => {
        evt.preventDefault();
        if (this.state.title === "") {
            window.alert("Please enter information for all fields.");
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
                    const newPoster = {
                        title: this.state.title,
                        dimentions: this.state.dimentions,
                        cost: this.state.cost,
                        description: this.state.description,
                        sold: this.state.sold,
                        photo: url
                    }
                    return printAPIManager.post(newPoster)
                        .then(() => this.props.history.push('/prints'));
                })
        }
    }

    render() {

        return (
            <>
                <form >
                    <fieldset className="uploadPrintForm">
                        <div className="formgrid">
                            <label htmlFor="title">Title:</label>
                            <br />
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="title"
                                placeholder="title"
                            />
                            <br />
                            <br />
                            <label htmlFor="description">Description: </label>
                            <br />
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="description"
                                placeholder="description"
                            />
                            <br />
                            <br />
                            <label htmlFor="description">Cost: </label>
                            <br />
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="cost"
                                placeholder="cost"
                            />
                            <br />
                            <br />
                            <div className="uploadImageField">
                                <label htmlFor="photo">Print Image: </label>
                                <input
                                    type="file"
                                    placeholder="Photo"
                                    className="photoFileSearchButton"
                                    onChange={(e) => this.setState({ photo: e.target.files[0] })}
                                />
                            </div>
                            {/* <label>Print Photo</label> */}
                        </div>
                        <br />
                        <br />
                        <div>
                            <button className="uploadNewPrintSubmitButton"
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewPoster}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default UploadPrintForm;