import React from 'react'
import ReactDOM from 'react-dom'
import KeysContainer from './KeysContainer'
import Display from './Display'

class DrumMachine extends React.Component {
  render() {
    return <div id="drum-machine"> 
      <KeysContainer /> 
      <Display text="hello pijush" />
    </div>
  }
}

const container = document.getElementById("app");
ReactDOM.render(<DrumMachine />, container);