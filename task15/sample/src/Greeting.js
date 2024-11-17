import React, { Component } from 'react'

export default class Greeting extends Component {
  render() {
    const {name} = this.props
    return (
      <div>
        Welcome to {name} Websites
      </div>
    )
  }
}
