import React, { Component } from "react"
import "./App.css"
import DisplayNumberRoot from "./components/DisplayNumberRoot"
import AddNumberRoot from "./components/AddNumberRoot"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { number: 0 }
  }

  render() {
    return (
      <div className="App">
        <h1>ROOT</h1>
        <AddNumberRoot></AddNumberRoot>
        <DisplayNumberRoot></DisplayNumberRoot>
      </div>
    )
  }
}

export default App
