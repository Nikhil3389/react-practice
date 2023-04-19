import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [data,setData] = useState("Nikhil")
  function updateData()
  {
    setData("Kataria")
  }
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={updateData}>Click Me</button>
     
    </div>
  );
}

export default App;
