import store from "../store"
import DisplayNumberOrg from "../components/DisplayNumber"
import React, { Component } from "react"

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
    return <DisplayNumberOrg number={this.state.number}></DisplayNumberOrg>
  }
}
