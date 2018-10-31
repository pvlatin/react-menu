import React, { Component } from 'react'
import AddFishForm from './AddFishForm'
import EditFishForm from './EditFishForm'

class Inventory extends Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fish).map(key => (
          <EditFishForm key={key} fish={this.props.fish[key]} />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load sample fishes
        </button>
      </div>
    )
  }
}

export default Inventory
