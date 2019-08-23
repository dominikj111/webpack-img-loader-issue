import React from 'react'
import ReactDOM from 'react-dom'

const bckcolors = {
  allowed: '#b8ffb8',
  disallowed: '#ffd3d3'
}

const frontcolor = {
  allowed: '#000000',
  disallowed: '#c4c4c4'
}

class Dummy extends React.Component {

  constructor(props){
    super(props)

    let amiGranted = true

    this.state = { 
      allowed: amiGranted,
      disabled: !amiGranted,
      color: amiGranted ? frontcolor.allowed : frontcolor.disallowed, 
      backColor: amiGranted ? bckcolors.allowed : bckcolors.disallowed
    }

    this.toggleColor = this.toggleColor.bind(this)
    this.buttonClick = this.buttonClick.bind(this)
  }

  toggleColor() {
    this.setState({
      allowed: !this.state.allowed,
      backColor: this.state.allowed ? bckcolors.allowed : bckcolors.disallowed
    })
  }

  buttonClick(e) {

    this.setState({
      disabled: true,
      color: frontcolor.disallowed
    })

    e.stopPropagation()
  }

  render() {

    return <div 
        style={{ 
          color: this.state.color, 
          backgroundColor: this.state.backColor, 
          userSelect: 'none',
          padding: '10px 10px 10px 10px'
        }} 
        onClick={ this.toggleColor }>
          <div>This is dummy component</div>
          <button onClick={ this.buttonClick } disabled={ this.state.disabled }>Test button</button>
    </div>
  }
}

export default Dummy