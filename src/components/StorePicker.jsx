import React, { Component, Fragment } from 'react'
import { getFunName } from '../helpers'

class StorePicker extends Component {
  myInput = React.createRef()

  goToStore = e => {
    e.preventDefault()
    console.log(e.myInput)
    console.log('hey')
  }
  render() { 
    return (
      <Fragment>
        <form action="" className="store-selector" onSubmit={this.goToStore}> 
          <h2>Please Enter a Store</h2>
          <input ref="this.myInput" type="text" required placeholder="Store Name" defaultValue={getFunName()}/>
          <button type="submit">Visit Store -></button>
        </form>
      </Fragment>
    )
  }
}

export default StorePicker