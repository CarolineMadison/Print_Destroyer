import React, { Component } from 'react'
import PrintCard from './PrintCard'
import printAPIManager from '../../modules/printAPIManager'
import './prints.css'

class PrintsList extends Component {
  //define what this component needs to render
  state = {
    prints: [],
  }

  componentDidMount() {
    // console.log("Print List: ComponentDidMount");
    //getAll from printAPIManager and hang on to that data; put it in state
    printAPIManager.getAll("prints")
      .then((prints) => {
          console.log(prints)
        this.setState({
          prints: prints
        })
      })
  }

//   deleteAnimal = id => {
//     AnimalManager.delete(id)
//       .then(() => {
//         AnimalManager.getAll()
//           .then((newAnimals) => {
//             this.setState({
//               animals: newAnimals
//             })
//           })
//       })
//   }

  render() {
    return (
      <>
        {/* <section className="section-content">
          <button type="button"
            className="btn"
            onClick={() => { this.props.history.push("/animals/new") }}>
            Admit Animal
          </button>
        </section> */}
        <div className="container-cards">
          {this.state.prints.map(print =>
            <PrintCard
              key={print.id}
              print={print}
            //   deleteAnimal={this.deleteAnimal}
              {...this.props}
            />
          )}
        </div>
      </>
    )
  }
}

export default PrintsList;