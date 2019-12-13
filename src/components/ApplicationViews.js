import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import LoginForm from './Authentication/LoginForm';
import PrintsList from './Prints/PrintsList';
import UploadPrintForm from './Prints/UploadPrintForm';
import PrintDetails from './Prints/PrintDetails';
import CreateNewAccountForm from './Authentication/CreateNewAccountForm';
import ProfileCard from './CustomersAreUsersWithProfiles /ProfileCard';
import CreateNewUserProfileForm from './CustomersAreUsersWithProfiles /CreateNewUserProfileForm';

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
                    return <CreateNewAccountForm {...props} setUser={this.props.setUser} />
                }} />
                {/* PRINTS */}
                <Route exact path="/prints" render={(props) => {
                    return <PrintsList {...props} />
                }} />
                <Route path="/prints/new" render={(props) => {
                // if (this.props.user) {
                    return <UploadPrintForm {...props} />
                // } else {
                //     return <Redirect to="/" />
                // }
                }} />
                <Route exact path="/prints/:printId(\d+)" render={(props) => {
                    // passed from react-router-dom to print detail component
                    // kind of the same as event.target.value (Vanilla javaScript)
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
                    return <CreateNewUserProfileForm {...props}/>
                }} />
                <Route exact path="/profile" render={(props) => {
                    return <ProfileCard {...props} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews;