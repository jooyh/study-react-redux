import React, { Component } from "react"
import store from "../store"
export default class DisplayNumber extends Component {
  constructor(props) {
    super(props)
    this.state = { number: store.getState().number }
    store.subscribe(
      function () {
        this.setState({ ...this.state, number: store.getState().number })
      }.bind(this)
    )
  }
  render() {
    return (
      <div>
        <h1>Display Number</h1>
        <input type="text" value={this.state.number} readOnly></input>
      </div>
    )
  }
}
