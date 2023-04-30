import React from "react";
import {Routes,Route} from "react-router-dom"
import About from "./About";
import Home from "./Home";
function Navigation(){
    return (
      <div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" exact={true} element={<Home/>} />
        </Routes>
      </div>
    );
}
export default Navigation