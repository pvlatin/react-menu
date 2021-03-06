import React, { Component } from 'react'
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import sampleFishes from '../sample-fishes'
import Fish from './Fish'
import base from '../base'

class App extends Component {
  state = {
    fishes: {},
    order: {},
  };

  componentDidMount() {
    const { params } = this.props.match
    const localStorageRef = localStorage.getItem(params.storeId)
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes',
    })
    if (localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef),
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    )
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  addFish = fish => {
    // copia del state existente
    const fishes = { ...this.state.fishes }
    // add fishes
    fishes[`fish${Date.now()}`] = fish
    // settear el nuevo fishes obj
    this.setState({ fishes })
  };

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes,
    })
  };

  addToOrder = key => {
    //copy state
    const order = { ...this.state.order }
    //add order or update
    order[key] = order[key] + 1 || 1
    //update state
    this.setState({
      order,
    })
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="fresh seafood market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                addToOrder={this.addToOrder}
                details={this.state.fishes[key]}
              >
                {key}
              </Fish>
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
          fish={this.state.fishes}
        />
      </div>
    )
  }
}

export default App
