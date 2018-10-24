import React, { Component, Fragment } from 'react'

class ChangeNumber extends Component {
    state = {
      Number: 10
    }

    changeNumber = () => {
      let randNum = Math.floor(Math.random() * 1000000)
      this.setState(state => ({
        Number: randNum
      }))
    }

    render() { 
      return (
        <Fragment>
          {/* <h2>hey</h2> */}
          <h1>Hello from a component storepicker</h1>
          <h2>your number is {this.state.Number}</h2>
          <button onClick={this.changeNumber}>change number</button>
        </Fragment>
      )
    }
}

export default ChangeNumber