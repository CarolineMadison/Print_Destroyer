import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import LoginForm from './Authentication/LoginForm';
import PrintsList from './Prints/PrintsList';
import UploadPrintForm from './Prints/UploadPrintForm';
import PrintDetails from './Prints/PrintDetails';
import CreateNewAccountForm from './Authentication/CreateNewAccountForm';
import CreateNewUserProfileForm from './Customers&Users /CreateNewUserProfileForm';
import ProfileCard from './CustomersAreUsersWithProfiles /ProfileCard';

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
                <Route path="/users/new" render={(props) => {
                    return <CreateNewAccountForm {...props} />
                }} />
                {/* PRINTS */}
                <Route exact path="/prints" render={(props) => {
                if (this.props.user) {
                    return <PrintsList {...props} />
                } else {
                    return <Redirect to="/" />
                }
                }} />
                <Route path="/prints/new" render={(props) => {
                if (this.props.user) {
                    return <UploadPrintForm {...props} />
                } else {
                    return <Redirect to="/" />
                }
                }} />
                <Route exact path="/prints/:printId(\d+)" render={(props) => {
                    // passed from react-router-dom to print detail component
                    // kind of the same as event.target.value (Vanilla javaScript)
                    console.log("Props from react-router-dom", props)
                    console.log("This component's props", this.props)
                    // Pass the printId to Print Details
                    return <PrintDetails
                        printId={parseInt(props.match.params.printId)}
                        // history={props.history}
                        // match={props.match}
                        // location={props.location}
                        // above is the same as key value pairs on props (below) from react-router-dom and passes it as props to print detail
                        {...props}
                    />
                }} />
                {/* CUSTOMERS AND USERS */}
                <Route path="/profile/new" render={(props) => {
                    return <CreateNewUserProfileForm {...props} {...this.props} />
                }} />
                <Route exact path="/profile" render={(props) => {
                if (this.props.user) {
                    return <ProfileCard {...props} />
                } else {
                    return <Redirect to="/" />
                }
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews;