import React from 'react';

const App = () => (<Counters></Counters>)

class Counters extends React.Component {
  constructor(props){
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    console.log("handlePlusButton")
    this.setState({count: this.state.count + 1})
  }
  handleMinusButton = () => {
    this.setState({count: this.state.count -1})
  }

  render(){
    return(
        <React.Fragment>
          <div>count: { this.state.count }</div>
          <button onClick={this.handlePlusButton}>+1</button>
          <button onClick={this.handleMinusButton}>-1</button>
        </React.Fragment>
    )
  }
}

export default App;
