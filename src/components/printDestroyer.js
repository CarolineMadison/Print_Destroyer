import React, { Component } from "react"
import ApplicationViews from "./ApplicationViews"
import NavBar from "./Nav Bar/NavBar"
import "./PrintDestroyer.css"

class PrintDestroyer extends Component {

  state = {
    user: false
  }

  // Check if credentials are in local storage
  // Returns true/false
  // Want NavBar and App Views to be dependent on logged in user
  // isAuthenticated checks if credentials are in local storage
  // returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  setUser = (results) => {
    localStorage.setItem("credentials", results[0].id)
    this.setState({
      user: this.isAuthenticated()
    });
  }

  clearUser = () =>  {
    localStorage.removeItem("credentials")
    this.setState({user: this.isAuthenticated()})
  }

  componentDidMount() {
    this.setState({
      user: this.isAuthenticated()
    })
  }

  componentWillMount() {
    this.setState({
      user: this.isAuthenticated()
    })
  }

  render() {
    return (
      <>
        <NavBar user={this.state.user} clearUser={this.clearUser} />
        <ApplicationViews user={this.state.user} setUser={this.setUser} />
      </>
    )
  }
}

export default PrintDestroyer; 