import React, { Component } from 'react';
import './main.css';
import {Jab} from './Jabber';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React, I'm Ron Swanson</h1>
        </header>
       <Jab />
      </div>
    );
  }
}

export default App;
