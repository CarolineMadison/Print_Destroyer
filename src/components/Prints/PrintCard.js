// this component handles rendering jsx for a single print

import React, { Component } from 'react'
import './prints.css'
// import { Link } from "react-router-dom";

class PrintCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h5><b>{this.props.print.title}</b></h5>
          <img src={this.props.print.photo} alt="Screen Print" />
          {/* <Link to={`/animals/${this.props.animal.id}`}><button>Details</button></Link> */}
          {/* <button type="button" onClick={() => this.props.deleteAnimal(this.props.animal.id)}>Discharge</button>
          <button type="button" onClick={() => { this.props.history.push(`/animals/${this.props.animal.id}/edit`) }}>Edit</button> */}
        </div>
      </div>
    );
  }
}

export default PrintCard;