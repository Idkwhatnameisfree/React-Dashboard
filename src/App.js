import React, { Component } from 'react';
import Image from "./components/image";
import Clock from "./components/clock";
import Layout from './components/layout'
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="flex-row">
        <div>
             
        <Clock />
        </div>
          <div>
             <Image />
          </div>         
      </div>
    );
  }
}

export default App;
