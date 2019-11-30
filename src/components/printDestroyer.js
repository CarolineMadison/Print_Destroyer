import React, { Component } from "react"
import ApplicationViews from "./ApplicationViews"
import NavBar from "./Nav Bar/NavBar"
import "./PrintDestroyer.css"

class PrintDestroyer extends Component {
  render() {
    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>
    )
  }
}

export default PrintDestroyer; 