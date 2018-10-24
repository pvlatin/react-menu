import React, { Component, Fragment } from 'react'

class StorePicker extends Component {
  render() { 
    return (
      <Fragment>
        <form action="" className="store-selector">
          <h2>Please Enter a Store</h2>
          <input type="text" required placeholder="Store Name"/>
          <button type="submit">Visit Store -></button>
        </form>
      </Fragment>
    )
  }
}

export default StorePicker