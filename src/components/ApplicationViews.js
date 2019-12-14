import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import LoginForm from './Authentication/LoginForm';
import PrintsList from './Prints/PrintsList';
import UploadPrintForm from './Prints/UploadPrintForm';
import PrintDetails from './Prints/PrintDetails';
import CreateNewAccountForm from './Authentication/CreateNewAccountForm';
import ProfileCard from './CustomersAreUsersWithProfiles /ProfileCard';
import CreateNewUserProfileForm from './CustomersAreUsersWithProfiles /CreateNewUserProfileForm';
import PrintEditForm from './Prints/PrintEditForm';
import ProfileEditForm from './CustomersAreUsersWithProfiles /ProfileEditForm';


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
                    return <PrintDetails
                        printId={parseInt(props.match.params.printId)}
                        {...props}
                    />
                }} />
                <Route path="/prints/:printId(\d+)/edit" render={props => {
                        return <PrintEditForm {...props} />
                    }}
                />
                {/* CUSTOMERS AND USERS */}
                <Route path="/profile/new" render={(props) => {
                    return <CreateNewUserProfileForm {...props} />
                }} />
                <Route exact path="/profile" render={(props) => {
                    return <ProfileCard 
                    userId={parseInt(props.match.params.userId)}
                    {...this.props}
                    {...props}
                    />
                }} />
                <Route path="/profile/users/:userId(\d+)/edit" render={props => {
                    return <ProfileEditForm {...props}/>
                }}/>
            </React.Fragment>
        )
    }
}

export default ApplicationViews;