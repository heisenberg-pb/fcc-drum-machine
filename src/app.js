import React from 'react'
import ReactDOM from 'react-dom'

const Audio = () => {
  return <div className="hidden">
    <audio id="Q" className="clip">
      <source src="https://github.com/heisenberg-pb/fcc-drum-machine/blob/master/audio_files/Heater-1.mp3?raw=true"></source>
    </audio>

    <audio id="W" className="clip">
      <source src="https://github.com/heisenberg-pb/fcc-drum-machine/blob/master/audio_files/Heater-2.mp3?raw=true"></source>
    </audio>

    <audio id="E" className="clip">
      <source src="https://github.com/heisenberg-pb/fcc-drum-machine/blob/master/audio_files/Heater-3.mp3?raw=true"></source>
    </audio>

    <audio id="A" className="clip">
      <source src="https://github.com/heisenberg-pb/fcc-drum-machine/blob/master/audio_files/Heater-4_1.mp3?raw=true"></source>
    </audio>

    <audio id="S" className="clip">
      <source src="https://github.com/heisenberg-pb/fcc-drum-machine/blob/master/audio_files/Heater-6.mp3?raw=true"></source>
    </audio>

    <audio id="D" className="clip">
      <source src="https://github.com/heisenberg-pb/fcc-drum-machine/blob/master/audio_files/Dsc_Oh.mp3?raw=true"></source>
    </audio>

    <audio id="Z" className="clip">
      <source src="https://github.com/heisenberg-pb/fcc-drum-machine/blob/master/audio_files/Kick_n_Hat.mp3?raw=true"></source>
    </audio>

    <audio id="X" className="clip">
      <source src="https://github.com/heisenberg-pb/fcc-drum-machine/blob/master/audio_files/RP4_KICK_1.mp3?raw=true"></source>
    </audio>

    <audio id="C" className="clip">
      <source src="https://github.com/heisenberg-pb/fcc-drum-machine/blob/master/audio_files/Cev_H2.mp3?raw=true"></source>
    </audio>
  </div>
};

const KeysContainer = (props) => {
  return <div id="keys-container">
    <button className="drum-pads" 
            id="Heater-1"
            onClick={props.keypresshandler}>Q</button>
    <button className="drum-pads" 
            id="Heater-2"
            onClick={props.keypresshandler}>W</button>
    <button className="drum-pads" 
            id="Heater-3"
            onClick={props.keypresshandler}>E</button>
    <button className="drum-pads" 
            id="Heater-4"
            onClick={props.keypresshandler}>A</button>
    <button className="drum-pads" 
            id="Clap"
            onClick={props.keypresshandler}>S</button>
    <button className="drum-pads" 
            id="Open-HH"
            onClick={props.keypresshandler}>D</button>
    <button className="drum-pads" 
            id="Kick-n-Hat"
            onClick={props.keypresshandler}>Z</button>
    <button className="drum-pads" 
            id="Kick"
            onClick={props.keypresshandler}>X</button>
    <button className="drum-pads" 
            id="Closed-HH"
            onClick={props.keypresshandler}>C</button>
  </div>
};

const Display = (props) => {
  return <div id="display">{props.text}</div>
};

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Welcome"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    var buttonClicked = document.getElementById(e.target.id);
    var audioToBePlayed = document.getElementById(buttonClicked.innerHTML);
    audioToBePlayed.play();
    this.setState({
      display: e.target.id
    });
  }

  render() {
    return <div id="drum-machine"> 
      <Audio />
      <KeysContainer keypresshandler={this.handleClick} /> 
      <Display text={this.state.display} />
    </div>
  }
}

const container = document.getElementById("app");
ReactDOM.render(<DrumMachine />, container);