import React, { Component } from "react"
export default class AddNumber extends Component {
  constructor(props) {
    super(props)
    this.state = { size: 1 }
  }
  render() {
    return (
      <div>
        <h1>Add Number</h1>
        <input
          type="button"
          value="+"
          onClick={function () {
            this.props.onClick(this.state.size)
          }.bind(this)}
        ></input>
        <input
          type="text"
          value={this.state.size}
          onChange={function (e) {
            this.setState({ ...this.state, size: e.target.value })
          }.bind(this)}
        ></input>
      </div>
    )
  }
}
