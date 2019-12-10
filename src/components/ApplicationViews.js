import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import LoginForm from './Authentication/LoginForm';
import PrintsList from './Prints/PrintsList';

class ApplicationViews extends Component {

    render() {
        return (
            <React.Fragment>
                {/* AUTHENTICATION */}
                <Route exact path="/" render={(props) => {
                if (this.props.user) {
                    return <Redirect to="/prints" {...props} {...this.props} />
                } else {
                    return <LoginForm setUser={this.props.setUser} {...props} />
                }
                }} />
                {/* PRINTS */}
                <Route exact path="/prints" render={(props) => {
                if (this.props.user) {
                    return <PrintsList {...props} />
                } else {
                    return <Redirect to="/" />
                }
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews;