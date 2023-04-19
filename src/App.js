import logo from './logo.svg';
import React, { Component } from 'react';

import './App.css';

class App extends Component
{
  constructor()
  {
    super();
    this.state={
      data :"Nikhil"
    }
  }
  apple()
  {
    this.setState({data:"Kataria"})

  }

render()
{
  return (
    <div className="App">
      <h1>{this.state.data}</h1>
      <button onClick={() => this.apple()}>Click Me</button>  
    </div>
  );

}
  
}
  


export default App;
