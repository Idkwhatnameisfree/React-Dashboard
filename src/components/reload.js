import React, { Component } from 'react'
import icon from './icon.svg'
import './styles.css'

class Reload extends Component {



  render() {
    return(
      <img src={icon} alt="reload-icon" className="spin" />
    );
  }
}

export default Reload