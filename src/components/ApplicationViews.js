import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import PrintWelcome from './App Welcome Page/PrintWelcome'
import UploadPrintForm from './Prints/UploadPrintForm'

class ApplicationViews extends Component {

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <PrintWelcome />
                }} />
                <Route path="/prints/new" render={(props) => {
                    return <UploadPrintForm {...props} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews;