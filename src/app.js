import React from 'react'
import ReactDOM from 'react-dom'

const KeysContainer = () => {
  return <div id="keys-container">
    <button className="drum-pads">Q</button>
    <button className="drum-pads">W</button>
    <button className="drum-pads">E</button>
    <button className="drum-pads">A</button>
    <button className="drum-pads">S</button>
    <button className="drum-pads">D</button>
    <button className="drum-pads">Z</button>
    <button className="drum-pads">X</button>
    <button className="drum-pads">C</button>
  </div>
};

const Display = (props) => {
  return <div id="display">{props.text}</div>
};

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