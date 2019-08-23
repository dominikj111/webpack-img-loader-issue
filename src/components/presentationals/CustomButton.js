import React from 'react'
import ReactDOM from 'react-dom'

class CustomButton extends React.Component {

  constructor(props){
    super(props)

    this.state = { color: props.primaryColor, backColor: props.secondaryColor }
    this.toggleColor = this.toggleColor.bind(this);
  }

  toggleColor() {
    this.setState({
      color: this.state.color === this.props.primaryColor ? this.props.secondaryColor : this.props.primaryColor,
      backColor: this.state.backColor === this.props.primaryColor ? this.props.secondaryColor : this.props.primaryColor,
    })
  }

  render() {

    return <div 
        style={{ 
          color: this.state.color, 
          backgroundColor: this.state.backColor, 
          userSelect: 'none' 
        }} 
        onClick={ this.toggleColor }>{ this.props.children }
    </div>
  }
}

export default CustomButton