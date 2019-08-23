import React from 'react'
import ReactDOM from 'react-dom'
import CustomButton from '../presentationals/CustomButton'
import BlankRC from '../containers/BlankRC'
import Dummy from '../presentationals/Dummy'

import imagetest from '../../assets/images/cat.png'

class CustomButtonsTest extends React.Component{

  constructor(props){
    super(props)
  }
  
  render() {

    return <div>

      <h1>Button Container Test</h1>

      <div>
        <CustomButton primaryColor='red' secondaryColor='#4c0000'>First button</CustomButton>
        <CustomButton primaryColor='green' secondaryColor='#adffad'>Second button</CustomButton>
        <CustomButton primaryColor='blue' secondaryColor='#8484ab'>Third button</CustomButton>
      </div>

      <div>
        <h2>Access granted: { true ? "YES" : "NO" }</h2>
      </div>

      <div>
        <h2>SUB-Container tests</h2>
        <div>
          <BlankRC style={{ border: '1px solid black' }}>
            <Dummy />
          </BlankRC>
        </div>
      </div>
    </div>
  }
}

export default CustomButtonsTest