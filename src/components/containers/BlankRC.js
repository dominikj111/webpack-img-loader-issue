import React from 'react'
import ReactDOM from 'react-dom'

class BlankRC extends React.Component {

  constructor(props){
    super(props)
  }
  
  render() {

    return <div { ...this.props }>

      { this.props.children }

    </div>
  }
}

export default BlankRC