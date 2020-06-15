import DisplayNumber from "../components/DisplayNumber"
import { connect } from "react-redux"
function mapReduxStateToReactProps(state) {
  return {
    number: state.number,
  }
}

export default connect(mapReduxStateToReactProps)(DisplayNumber)

// export default class DisplayNumber extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { number: store.getState().number }
//     store.subscribe(
//       function () {
//         this.setState({ ...this.state, number: store.getState().number })
//       }.bind(this)
//     )
//   }

//   render() {
//     return <DisplayNumberOrg number={this.state.number}></DisplayNumberOrg>
//   }
// }
