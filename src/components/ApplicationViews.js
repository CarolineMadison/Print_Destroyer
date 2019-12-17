import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import LoginForm from './Authentication/LoginForm';
import PrintsList from './Prints/PrintsList';
import UploadPrintForm from './Prints/UploadPrintForm';
import CreateNewAccountForm from './Authentication/CreateNewAccountForm';
import ProfileCard from './CustomersAreUsersWithProfiles /ProfileCard';
import CreateNewUserProfileForm from './CustomersAreUsersWithProfiles /CreateNewUserProfileForm';
import PrintEditForm from './Prints/PrintEditForm';
import ProfileEditForm from './CustomersAreUsersWithProfiles /ProfileEditForm';
import CustomerList from './CustomersAreUsersWithProfiles /CustomerList';
import WishListList from './WishList/WishListList';

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
                        clearUser={this.props.clearUser}
                        {...props}
                    />
                }} />
                <Route path="/profile/users/:userId(\d+)/edit" render={props => {
                    return <ProfileEditForm {...props} />
                }} />
                <Route exact path="/customers" render={(props) => {
                    return <CustomerList {...props} />
                }} />
                <Route exact path="/wishlist" render={(props) => {
                    return <WishListList {...props} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews;