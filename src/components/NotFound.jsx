import React from 'react'
import { getFunName } from '../helpers'

const NotFound = () => {
  return (
    <React.Fragment>
      <h1>not found</h1>
      <h1>{getFunName()}</h1>
    </React.Fragment>
  )
}
 
export default NotFound