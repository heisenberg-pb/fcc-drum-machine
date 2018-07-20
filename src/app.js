import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

const KeysContainer = (props) => {
  return <div id="keys-container">
    <button className="drum-pad" 
            id="Heater-1"
            onClick={props.onClick}>Q<audio id="Q" className="clip" src="https://github.com/heisenberg-pb/fcc-drum-machine/blob/master/audio_files/Heater-1.mp3?raw=true">
            </audio></button>
    <button className="drum-pad" 
            id="Heater-2"
            onClick={props.onClick}>W<audio id="W" className="clip" src="https://github.com/heisenberg-pb/fcc-drum-machine/blob/master/audio_files/Heater-2.mp3?raw=true">
            </audio></button>
    <button className="drum-pad" 
            id="Heater-3"
            onClick={props.onClick}>E<audio id="E" className="clip" src="https://github.com/heisenberg-pb/fcc-drum-machine/blob/master/audio_files/Heater-3.mp3?raw=true">
            </audio></button>
    <button className="drum-pad" 
            id="Heater-4"
            onClick={props.onClick}>A<audio id="A" className="clip" src="https://github.com/heisenberg-pb/fcc-drum-machine/blob/master/audio_files/Heater-4_1.mp3?raw=true">
            </audio></button>
    <button className="drum-pad" 
            id="Clap"
            onClick={props.onClick}>S<audio id="S" className="clip" src="https://github.com/heisenberg-pb/fcc-drum-machine/blob/master/audio_files/Heater-6.mp3?raw=true">
            </audio></button>
    <button className="drum-pad" 
            id="Open-HH"
            onClick={props.onClick}>D<audio id="D" className="clip" src="https://github.com/heisenberg-pb/fcc-drum-machine/blob/master/audio_files/Dsc_Oh.mp3?raw=true">
            </audio></button>
    <button className="drum-pad" 
            id="Kick-n-Hat"
            onClick={props.onClick}>Z<audio id="Z" className="clip" src="https://github.com/heisenberg-pb/fcc-drum-machine/blob/master/audio_files/Kick_n_Hat.mp3?raw=true">
            </audio></button>
    <button className="drum-pad" 
            id="Kick"
            onClick={props.onClick}>X<audio id="X" className="clip" src="https://github.com/heisenberg-pb/fcc-drum-machine/blob/master/audio_files/RP4_KICK_1.mp3?raw=true">
            </audio></button>
    <button className="drum-pad" 
            id="Closed-HH"
            onClick={props.onClick}>C<audio id="C" className="clip" src="https://github.com/heisenberg-pb/fcc-drum-machine/blob/master/audio_files/Cev_H2.mp3?raw=true">
            </audio></button>
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
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  handleClick(e) {
    var buttonID = e.target.id;
    var audioToBePlayed = e.target.childNodes[1];
    audioToBePlayed.play();
    this.setState({
      display: buttonID
    });
  }

  handleKeyPress(e) {
    var keyPressed = e.key;
    if(keyPressed != null) {
      keyPressed = keyPressed.toUpperCase();
    } else return;
    if('QWEASDZXC'.indexOf(keyPressed) >= 0) {
      var audioToBePlayed = document.getElementById(keyPressed);
      audioToBePlayed.play();
      var buttonContainsKeyPressed = $('button:contains('+keyPressed+')');
      this.setState({
        display: buttonContainsKeyPressed.attr('id')
      });
    }
  }

  render() {
    return <div id="drum-machine"
      onKeyPress={this.handleKeyPress}> 
      <KeysContainer onClick={this.handleClick}/> 
      <Display text={this.state.display} />
    </div>
  }
}

const container = document.getElementById("app");
ReactDOM.render(<DrumMachine />, container);