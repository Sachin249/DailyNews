import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
      <>
      <div className='text-center my-3'>
        <img src='./images/loading.gif' height="30px"/>
      </div>
          
      </>
    )
  }
}

export default Spinner