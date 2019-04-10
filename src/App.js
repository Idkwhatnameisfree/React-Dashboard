import React, { Component } from 'react';

import Layout from './components/layout'
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="flex-row">
        <div>
        <p>here would be the time!</p>
        </div>
          <div>
            <p>here would be the reload icon</p>
          </div>
      </div>
    );
  }
}

export default App;
