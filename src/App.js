import logo from './logo.svg';
import React, { Component, useDeferredValue, useState } from 'react';

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
  


// ####################### props apps.js #########################

// function App()
// {
//   return(
//     <div className="App">
//       <h1>Hello</h1>
//       <Students name ={"Nikhil"} email={"abc@gmail.com"}/>
//       {/* <Students email ={"abc@gmail.com"}/> */}
//     </div>
//   )
// }
// export default App;


// ############# class props #################
// export default class App extends Component

// {


//   constructor()
//   {
//     super();
//     this.state={
//       name: "NIKHIL"
//     }
//   }
//   render()
//   {
//     return(
//          <div className="App">
//       <h1>Hello</h1>
//       <Students name ={this.state.name}/>
//       <button onClick={() => this.setState({name:"Kataria"})}>Update Name</button>
//       {/* <Students email ={"abc@gmail.com"}/> */}
//     </div>


//     )
//   }
// }


function App()

{
  const [data,setData] = useState(null)
  const [print,setPrint] =  useState(false)
  function getData(val)
  {
    console.log(val.target.value)
    setData(val.target.value)
    setPrint(false)
  }
  return(
    <div className="App">
      {
        print?
        <h1>Hello</h1>
        :
        null
      }
      
      <input type="text" onChange={getData} />
      <button onClick={() => setPrint(true)}>Print Data</button>
      {/* <Students email ={"abc@gmail.com"}/> */}
    </div>
  )
}
export default App;