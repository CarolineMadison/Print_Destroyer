import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import UploadPrintForm from './Prints/UploadPrintForm';
import LoginForm from './Authentication/LoginForm';

class ApplicationViews extends Component {

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                if (this.props.user) {
                    return <Redirect to="/prints/new" {...props} {...this.props} />
                } else {
                    return <LoginForm setUser={this.props.setUser} {...props} />
                }
                }} />
                <Route exact path="/prints" render={(props) => {
                if (this.props.user) {
                    return <Redirect to="/prints" {...props} {...this.props} />
                } else {
                    return <LoginForm setUser={this.props.setUser} {...props} />
                }
                }} />
                {/* <Route path="/prints/new" render={(props) => {
                    return <UploadPrintForm {...props} />
                }} /> */}
            </React.Fragment>
        )
    }
}

export default ApplicationViews;