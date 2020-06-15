import AddNumberOrg from "../components/AddNumber"
import React, { Component } from "react"
import store from "../store"

export default class AddNumber extends Component {
  render() {
    return (
      <AddNumberOrg
        onClick={function (_size) {
          store.dispatch({ type: "INCREMENT", size: _size })
        }.bind(this)}
      ></AddNumberOrg>
    )
  }
}
