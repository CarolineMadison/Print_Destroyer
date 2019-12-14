import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import printAPIManager from '../../modules/printAPIManager';

class PrintEditForm extends Component {
    state = {
        title: "",
        cost: "",
        description: "",
        loadingStatus: false,
        photo: null
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        // below is the same as stateToChange.name
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    updateExistingPrint = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedPrint = {
            id: this.props.match.params.printId,
            photo: this.state.photo,
            title: this.state.title,
            description: this.state.description,
            cost: this.state.cost,
        };
        printAPIManager.update("prints", editedPrint)
            .then(() => this.props.history.push("/prints/"))
    }

    componentDidMount() {
        printAPIManager.get("prints", this.props.match.params.printId)
            .then(print => {
                this.setState({
                    photo: print.photo,
                    title: print.title,
                    description: print.description,
                    cost: print.cost,
                    loadingStatus: false,
                });
            });
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
                                value={this.state.title}
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
                                value={this.state.description}
                            />
                            <br />
                            <br />
                            <label htmlFor="cost">Cost: </label>
                            <br />
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="cost"
                                placeholder="cost"
                                value={this.state.cost}
                            />
                            <br />
                            <br />
                        </div>
                        <br />
                        <br />
                        <div>
                            <button className="saveEditedPrintButton"
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.updateExistingPrint}
                            >SAVE EDITS</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default PrintEditForm;