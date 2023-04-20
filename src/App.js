import logo from './logo.svg';
import React, { Component } from 'react';

import './App.css';
import Students from './components/Students';
// adding using state class


// class App extends Component
// {
//   constructor()
//   {
//     super();
//     this.state={
//       data :"Nikhil"
//     }
//   }
//   apple()
//   {
//     this.setState({data:"Kataria"})

//   }

// render()
// {
//   return (
//     <div className="App">
//       <h1>{this.state.data}</h1>
//       <button onClick={() => this.apple()}>Click Me</button>  
//     </div>
//   );

// }
  
// }
  

function App()
{
  return(
    <div className="App">
      <h1>Hello</h1>
      <Students name ={"Nikhil"} email={"abc@gmail.com"}/>
      {/* <Students email ={"abc@gmail.com"}/> */}
    </div>
  )
}
export default App;
