import React, { Component } from "react"
import "./LoginForm.css"
import printAPIManager from "../../modules/printAPIManager"

class LoginForm extends Component {

  // Set initial state

  state = {
    email: "",
    password: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleLogin = (e) => {
    e.preventDefault()
    printAPIManager.checkUser(this.state.email, this.state.password)
    .then(results => {
        if(results.length > 0) {
            this.props.setUser(results)
            this.props.history.push("/prints");
        } else {
            alert("Incorrect username, email, or password")
        } 
    })
}

    render() {
        return (
            <>
            <picture>
                <img className="logoImage" src={require('./logo.jpg')}        alt="Print Destroyer Logo" />
            </picture>
            <form onSubmit={this.handleLogin}>
                <fieldset>
                    <p>Jim Madison's</p>
                    <h3><u>Print Destroyer</u></h3>
                    <div className="formgrid">
                        <h5>Email:</h5>
                        <label htmlFor="inputEmail"></label>
                        <input onChange={this.handleFieldChange} type="email"
                            id="email"
                            placeholder="Email address"
                            required="" autoFocus="" />

                        <h5>Password:</h5>
                        <label htmlFor="inputPassword"></label>
                        <input
                            onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder="Password"
                            required="" />
                    </div>
                    <div className="welcomeScreenButtons">
                        <button id="enterButton" type="submit" onClick={this.handleLogin}>
                            Log In
                        </button>
                        <button type="submit" onClick={this.handleLogin}>
                            Create An Account 
                        </button>
                    </div>
                </fieldset>
            </form>
            </>
        )
    }

}

export default LoginForm;