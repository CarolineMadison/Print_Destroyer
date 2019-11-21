import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import PrintWelcome from './App Welcome Page/PrintWelcome'

class ApplicationViews extends Component {

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <PrintWelcome />
                }} />
            </React.Fragment>
              )
            }
          }
          
export default ApplicationViews;