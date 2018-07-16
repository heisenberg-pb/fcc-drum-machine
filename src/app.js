import React from 'react'
import ReactDOM from 'react-dom'

class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>
  }
}

var container = document.getElementById("app");
ReactDOM.render(<Hello name="pijush" />, container);