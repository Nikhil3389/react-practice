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

// #################### TAKING INPUT AND HIDING ################  
// function App()

// {
//   const [data,setData] = useState(null)
//   const [print,setPrint] =  useState(false)
//   function getData(val)
//   {
//     console.log(val.target.value)
//     setData(val.target.value)
//     setPrint(false)
//   }
//   return(
//     <div className="App">
//       {
//         print?
//         <h1>Hello</h1>
//         :
//         null
//       }
      
//       <input type="text" onChange={getData} />
//       <button onClick={() => setPrint(true)}>Print Data</button>
//       {/* <Students email ={"abc@gmail.com"}/> */}
//     </div>
//   )
// }
// export default App;
// ##################  Toggle Button ###############
// function App()

// {
//   const [status,setStatus] = useState(false);
  
//   return(
//     <div className="App">
//       {
//         status ?
//         <h1>Helll0</h1>
//         :
//         null
//       }
//       <button onClick={() => setStatus(!status)}>Toggle</button>
//     </div>
//   )
// }
// export default App;


// ##################### CREATING FORMS ################
function App()

{
  const [name,setName] = useState("")
  const [tnc,setTnc] =useState(false)
  const [interest,setInterest] =useState("")
  function getformData(e)
  {
    e.preventDefault()
    console.log(name,tnc,interest)
  }
  return(
    <div className="App">
      <h1> Hello</h1>
<form className='' onSubmit={getformData}>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" onChange={(e) =>setName(e.target.value)}/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3"onChange={(e) =>setInterest(e.target.value)}/>
    </div>
  </div>
  <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"  onChange={(e) =>setTnc(e.target.checked)}/>
        <label class="form-check-label" for="gridRadios1">
          First radio
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" onChange={(e) =>setTnc(e.target.checked)}/>
        <label class="form-check-label" for="gridRadios2">
          Second radio
        </label>
      </div>
      <div class="form-check disabled">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" onChange={(e) =>setTnc(e.target.checked)}/>
        <label class="form-check-label" for="gridRadios3">
          Third disabled radio
        </label>
      </div>
    </div>
  </fieldset>
  <div class="row mb-3">
    <div class="col-sm-10 offset-sm-2">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1" onChange={(e) =>setTnc(e.target.checked)}/>
        <label class="form-check-label" for="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
    </div>
  )
}
export default App;